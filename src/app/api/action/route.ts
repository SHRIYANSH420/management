"use server"
import { revalidatePath } from "next/cache";
import { Employee } from "@/models/Employee";
import { Product } from "@/models/Product";
import connect from "@/utils/db";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";


export const addUser = async (formData: any) => {
  const { username, email, workId, phone, address, isAdmin, isActive } = Object.fromEntries(formData);
  try {
    connect();

    const hashedWordID = await bcrypt.hash(workId,5);

    const newEmployee = new Employee({
      username,
      email,
      workId: hashedWordID,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newEmployee.save();
  } catch (err) {
    console.error(err);
    throw new Error("Failed to create Employee!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateEmp = async (formData: any) => {
  const { id, username, email, workId, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

  try {
    connect();

    const updateFields = {
      username,
      email,
      workId,
      phone,
      address,
      isAdmin,
      isActive,
    };

    // Remove empty or undefined fields
    Object.keys(updateFields).forEach(
      (key) => (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key]
    );

    await Employee.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData: any) => {
  
  const { title, desc, price, stock, color, size } =
  Object.fromEntries(formData);

  try {
    connect();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData: any) => {
  const { id, title, desc, price, stock, color, size } =
  Object.fromEntries(formData);

  try {
    connect();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData: any) => {
  const { id } = Object.fromEntries(formData);
console.log(id)
  try {
    connect();
    await Employee.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};

export const deleteProduct = async (formData: any) => {
  const { id } = Object.fromEntries(formData);
  try {
    connect();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};
