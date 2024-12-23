import requests
import json
import os
import re
from urllib.parse import urlencode


def build_url(base_url, params):
    url_with_params = f"{base_url}?{urlencode(params)}"
    return url_with_params


def get_headers():
    """
    Function to get the headers for the request
    - Eventually, you may need to update the headers to match the request headers of the website
    - You can get the headers by inspecting the network requests in the browser developer tools
    - The headers may include User-Agent, Accept-Language, Referer, Accept, Connection, etc.
    - The headers are important to avoid being [BLOCKED] by the website

    - good luck.
    """

    return {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
        "Accept-Language": "en-US,en;q=0.5",
        "Referer": "https://www.fiverr.com",
        "Accept": "application/json, text/plain, */*",
        "Connection": "keep-alive",
    }


# function to fetch reviews from the API
def fetch_reviews(user_id, as_seller, sort_by, page_size):
    base_url = "https://www.fiverr.com/seller_page/api/reviews"

    params = {
        "user_id": user_id,
        "as_seller": as_seller,
        "sort_by": sort_by,
        "page_size": page_size,
    }

    url = build_url(base_url, params)

    response = requests.get(url, headers=get_headers())

    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Error to access the API. Status code: {response.status_code}")


# Proccess the reviews to save them in a JSON file
def save_reviews_to_json(reviews, filename="reviewers_info.json"):
    extracted_data = []
    for review in reviews:
        username = review.get("username")
        user_image_url = review.get("user_image_url")
        user_image = (
            f"{username}_user_image.jpg" if (username and user_image_url) else None
        )

        extracted_data.append(
            {
                "username": username,
                "reviewer_country": review.get("reviewer_country"),
                "comment": review.get("comment"),
                "order_duration": review.get("order_duration"),
                "order_price_range": review.get("order_price_range"),
                "created_at": review.get("created_at"),
                "value": review.get("value"),
                "work_sample": review.get("work_sample"),
                "user_image_url": user_image_url,
                "user_image": user_image,
            }
        )

    with open(filename, "w") as json_file:
        json.dump(extracted_data, json_file, indent=4)

    print(f"Data saved in '{filename}'")


def clean_filename(filename):
    return re.sub(r'[<>:"/\\|?*]', "_", filename)


def download_image(image_url, save_directory, filename: str):
    try:
        response = requests.get(image_url)
        response.raise_for_status()

        # Verificar el tipo de contenido y ajustar la extensión si es necesario
        content_type = response.headers.get("Content-Type")
        if content_type == "image/jpeg":
            filename = filename.replace(
                ".png", ".jpg"
            )  # Cambiar a .jpg si es necesario
        elif content_type == "image/png":
            filename = filename.replace(
                ".png", ".jpg"
            )  # Cambiar a .png si es necesario
        else:
            print(f"Unknown content type {content_type}. Skipping {image_url}")
            return

        # Limpiar el nombre del archivo
        filename = clean_filename(filename)

        with open(os.path.join(save_directory, filename), "wb") as img_file:
            img_file.write(response.content)
        print(f"Image saved as: {filename}")
    except requests.exceptions.RequestException as e:
        print(f"Error downloading {image_url}: {e}")


def download_work_samples(reviews, save_directory="work_samples"):
    if not os.path.exists(save_directory):
        os.makedirs(save_directory)

    for review in reviews:
        work_sample_url = review.get("work_sample")
        if work_sample_url:
            username = review.get("username", "unknown_user")
            file_extension = work_sample_url.split(".")[-1]
            filename = f"{username}_work_sample.{file_extension}".replace(":", "-")
            download_image(work_sample_url, save_directory, filename)

        user_image_url = review.get("user_image_url")
        if user_image_url:
            print("user_image_url " + user_image_url)
            username = review.get("username", "unknown_user")
            file_extension = user_image_url.split(".")[-1]

            if file_extension != "jpg":
                file_extension = "jpg"

            filename = f"{username}_user_image.{file_extension}".replace(":", "-")
            download_image(user_image_url, save_directory, filename)


def get_sort_by():
    while True:
        print("Choose the sorting option: ")
        print("1. Relevant")
        print("2. Recent")
        print("Default: Relevant")
        choice = input("Enter the number of your choice: ")

        if choice == "1":
            return "relevant"
        elif choice == "2":
            return "recent"
        else:
            return "relevant"


if __name__ == "__main__":
    user_id = 76218477  # -> fiveer user id
    as_seller = "true"  # [No Change]
    page_size = 5  # -> Size of the data to be fetched (recommended: 5)

    sort_by = get_sort_by()

    try:
        response_data = fetch_reviews(user_id, as_seller, sort_by, page_size)

        if "reviews" in response_data:
            reviews = response_data["reviews"]
            save_reviews_to_json(reviews)
            download_work_samples(reviews)
        else:
            print("No reviews found in the API response.")

    except Exception as e:
        print(e)
