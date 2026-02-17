import React, { useEffect } from "react";
import { CATEGORIES } from "../assets/mockData";
import mockData from "../assets/mockData";
import HeroImage from "../assets/Images/hero image.jpg";
import InfoSection from "../Components/InfoSection";
import Category from "../Components/Category";
import { setProducts } from "../Redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard.jsx";

const Home = () => {
  const dispatch = useDispatch();

  // ✅ get products array properly
  const Products = useSelector((state) => state.product.products);

  // ✅ only run once
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row gap-4">
        {/* Categories Section */}
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-2 mt-2">
  {CATEGORIES.map((category) => (
  <li key={Category.id}>{category.name}</li>

))}

          </ul>
        </div>

        {/* Hero Section */}
        <div className="w-full md:w-9/12 relative h-96">
          <img
            src={HeroImage}
            alt="Hero Banner"
            className="h-full w-full object-cover rounded-lg"
          />

          <div className="absolute top-16 left-8 text-white">
            <p className="text-lg font-semibold">Code With Irfan</p>
            <h2 className="text-2xl md:text-3xl font-bold">
              WELCOME TO E-SHOPEE
            </h2>
            <p className="mt-2">MILLIONS+ PRODUCTS</p>
            <button className="bg-red-600 px-6 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <InfoSection />
      <Category />

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Products &&
            Array.isArray(Products) &&
            Products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
        </div>
      </div>
      <shop/>
    </div>
  );
};

export default Home;
 