// components/PyramidCategory.jsx

import React from 'react';
import styles from "@/app/gallery/Gallery.module.scss";

interface PyramidCategoryProps {
  category: string;
  niches: string[];
}

export default function PyramidCategory({ category, niches }: PyramidCategoryProps) {
  const columns: string[][] = [];
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
            {column.map((niche: string, nicheIndex: number) => (
              <a key={nicheIndex} href="#" className={styles.nicheItem}>{niche}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
