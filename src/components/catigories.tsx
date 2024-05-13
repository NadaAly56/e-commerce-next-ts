"use client";
import { useEffect, useState } from "react"; // import { Link } from "react-router-dom";
export default function Category() {
  const [categories, setCategories] = useState([]);
  // const api = import.meta.env.VITE_API_BASE_URL
  useEffect(() => {
    fetch("http://localhost:6060/categories")
      .then((data) => data.json())
      .then((data) => setCategories(data.cats));
  }, []);
  return (
    <div className="category" id="shop">
      <img src="heart.webp" alt="heart" className="mx-auto"></img>
      <div className="flex items-center justify-center my-5">
        <img
          src="decor-leaf-yellow-left.webp"
          alt="decor-leaf-yellow-left"
          width={70}
          height={20}
        />
        <p className="text-2xl font-bold m-3">Discover Our Products</p>
        <img
          src="decor-leaf-yellow-right.webp"
          alt="decor-leaf-yellow-right"
          width={90}
          height={20}
        />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {categories.map((cat: { title: string; categoryImg: string }) => (
          <div key={cat.title} className="col cat-hover">
            <a href={`/category/${cat.title}`}>
              <div className="relative">
                {cat.categoryImg && (
                  <img
                    className="cat-img h-80"
                    src={`http://localhost:6060/uploads/${cat.categoryImg}`}
                    alt="access"
                    width="100%"
                    height="100%"
                  />
                )}
                <div className="border-cat"></div>
                <div className="category-label">{cat.title}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
