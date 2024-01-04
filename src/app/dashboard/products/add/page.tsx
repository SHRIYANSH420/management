
import React from "react";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import { addProduct } from "@/app/api/action/route";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form} >
        <input type="text" placeholder="Product Name" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="Basket">Basket</option>
          <option value="Art & Sculpture">Art & Sculpture</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Home Decor">Home Decor</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Christmas">Christmas</option>
          <option value="Accessories">Accessories</option>
          <option value="Kids">Kids</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
