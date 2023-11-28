import React from "react";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import { addUser } from "@/app/api/action/route";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="text" placeholder="Work ID" name="workId" required />
        <input type="phone" placeholder="Phone" name="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={false} selected>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          cols="30"
          rows="10"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
