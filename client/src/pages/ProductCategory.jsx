import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets.js";
import ProductCard from "../components/productCard";

function ProductCategory() {
  const { products } = useAppContext();
  const { category } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  );

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  );

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      {searchCategory && (
        <div className="flex flex-col items-start mb-6">
          <p className="text-2xl font-semibold">
            {searchCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full mt-1"></div>
        </div>
      )}

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-600 mb-6">
          Category not found. Showing all products.
        </p>
      )}
    </div>
  );
}

export default ProductCategory;
