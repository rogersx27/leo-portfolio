// components/PyramidCategory.jsx

import React from 'react';
import styles from "@/app/gallery/Gallery.module.scss";

export default function PyramidCategory({ category, niches }) {
  const columns = [];
  let index = 0;
  let columnLength = niches.length;

  while (columnLength > 0) {
    const columnItems = niches.slice(index, index + columnLength);
    columns.push(columnItems);
    index += columnLength;
    columnLength -= 1;
  }

  return (
    <div className={styles.pyramidCategory}>
      <h3 className={styles.categoryTitle}>{category}</h3>
      <div className={styles.pyramidContainerHorizontal}>
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className={`${styles.pyramidColumn} ${styles[`columnLevel${columnIndex}`]}`}>
            {column.map((niche, nicheIndex) => (
              <a href="#" className={styles.nicheItem}>{niche}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
