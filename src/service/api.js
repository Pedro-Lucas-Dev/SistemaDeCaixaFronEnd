import axios from "axios";

const BASE_URL = "https://backend-sistemacaixa.herokuapp.com";

const token = localStorage.getItem("@SuaAplicacao:JWT_TOKEN");
const requestAuthenticated = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${token}` },
});

const signUp = (data) => {
  const body = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    permissionLevel: 1,
  };
  return axios.post(`${BASE_URL}/users`, body);
};
const signIn = (userLogin) => {
  const user = {
    email: userLogin.email,
    password: userLogin.password,
  };

  return axios.post(`${BASE_URL}/auth`, user);
};

const loggedUser = () => {
  return requestAuthenticated.get(`${BASE_URL}/me`);
};

const getAllUsers = () => {
  return requestAuthenticated.get(`${BASE_URL}/users`);
};

const newCategoryService = (nameOfCategory) => {
  const dataCategory = {
    name: nameOfCategory,
  };
  return requestAuthenticated.post(`${BASE_URL}/category`, dataCategory);
};

const categories = () => {
  return requestAuthenticated.get(`${BASE_URL}/category`);
};

const deleteCategoryService = (id) => {
  return requestAuthenticated.delete(`${BASE_URL}/category/${id}`);
};

const updateCategoryService = (id, newDataCategory) => {
  const body = {
    name: newDataCategory,
  };
  return requestAuthenticated.patch(`${BASE_URL}/category/${id}`, body);
};

const getCategoryById = (id) => {
  return requestAuthenticated.get(`${BASE_URL}/category/${id}`);
};

const postNewProduct = (product, selectProduct) => {
  const body = {
    name: product.name,
    price: product.price,
    category_id: selectProduct.id,
    description: product.description,
    image_url: product.image,
  };
  return requestAuthenticated.post(`${BASE_URL}/products`, body);
};
const getAllProducts = () => {
  return requestAuthenticated.get(`${BASE_URL}/products`);
};

const deleteProductService = (id) => {
  return requestAuthenticated.delete(`${BASE_URL}/products/${id}`);
};
const getProductById = (id) => {
  return requestAuthenticated.get(`${BASE_URL}/products/${id}`);
};

const uptadeProductService = (id, product) => {
  const body = {
    name: product.name,
    description: product.description,
    price: product.price,
    image_url: product.image_url,
  };
  return requestAuthenticated.patch(`${BASE_URL}/products/${id}`, body);
};

const changeProductStatusService = (id, status) => {
  const body = {
    status: status === "ACTIVE" ? "inactive".toUpperCase() : "ACTIVE",
  };

  return requestAuthenticated.patch(`${BASE_URL}/products/${id}`, body);
};

const getUserById = () => {
  const userId = localStorage.getItem("id");
  return requestAuthenticated.get(`${BASE_URL}/users/${userId}`);
};

const uptadeUserDataService = (userData) => {
  const userId = localStorage.getItem("id");
  const body = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
  };
  return requestAuthenticated.patch(`${BASE_URL}/users/${userId}`, body);
};

const getAllSales = () => {
  return requestAuthenticated.get(`${BASE_URL}/sales/`);
};

const checkout = (products) => {
  const body = {
    products,
  };
  return requestAuthenticated.post(`${BASE_URL}/sales/`, body);
};

const getQuantites = async () => {
  const products = await getAllProducts();
  const category = await categories();
  const sales = await getAllSales();
  const users = await getAllUsers();

  return {
    products: products.data.length,
    categories: category.data.length,
    sales: sales.data.length,
    users: users.data.length,
  };
};
const getListSales = () => {
  return requestAuthenticated.get(`${BASE_URL}/sales/`);
};

const changeStatusSale = (id, status) => {
  const body = { status };
  return requestAuthenticated.patch(`${BASE_URL}/sales/${id}`, body);
};

export {
  signUp,
  signIn,
  loggedUser,
  newCategoryService,
  categories,
  deleteCategoryService,
  updateCategoryService,
  getCategoryById,
  postNewProduct,
  getAllProducts,
  deleteProductService,
  getProductById,
  uptadeProductService,
  changeProductStatusService,
  getUserById,
  uptadeUserDataService,
  checkout,
  getQuantites,
  getListSales,
  changeStatusSale,
};
