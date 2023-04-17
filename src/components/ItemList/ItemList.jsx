import React from "react";
import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={styles.itemList}>
      {items.map(item => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;
