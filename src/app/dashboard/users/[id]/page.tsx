import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Shriyansh" />
          <label>Email</label>
          <input type="email" name="email" placeholder="Dead8184@gmail.com" />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Shriyansh Rauthan"
          />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+91342343245" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="Dehradun" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
