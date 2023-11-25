import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
        <label>Title</label>
          <input type="text" name="title" placeholder="iphone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="123" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder='123' />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder="color"
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder="size"
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="dssvsdfvdfv"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
