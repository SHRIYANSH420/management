import connect from "@/utils/db";
import { Employee } from "@/models/Employee";
import { Product } from "@/models/Product";

export const fetchEmpCount = async (q) => {
  const regex = new RegExp(q, "i");

  try {
    connect();
    const count = await Employee.find({ username: { $regex: regex } }).count();
    return count;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch employee count");
  }
};

export const fetchEmpData = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 6;

  try {
    connect();
    const emp = await Employee.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .exec();
    return emp;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch employee data");
  }
};


export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connect();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connect();
    const user = await Employee.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connect();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

