import Image from "next/image";import Link from "next/link";

export default async function Category() {
  // const api = import.meta.env.VITE_API_BASE_URL
  const res = await fetch(
    "https://e-commerce-api-2-y17k.onrender.com/categories"
  );
  const categories = await res.json();

  return (
    <div className="category" id="shop">
      <Image
        src="/heart.webp"
        alt="heart"
        className="mx-auto"
        width="100"
        height="100"
      ></Image>
      <div className="flex items-center justify-center my-5">
        <Image
          src="/decor-leaf-yellow-left.webp"
          alt="decor-leaf-yellow-left"
          width={70}
          height={20}
        />
        <p className="text-2xl font-bold m-3">Discover Our Products</p>
        <Image
          src="/decor-leaf-yellow-right.webp"
          alt="decor-leaf-yellow-right"
          width={90}
          height={20}
        />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {categories.cats.map((cat: { title: string; categoryImg: string }) => (
          <div key={cat.title} className="col cat-hover">
            <Link href={`/category/${cat.title}`}>
              <div className="relative">
                {cat.categoryImg && (
                  <Image
                    className="cat-img h-80"
                    src={`https://e-commerce-api-2-y17k.onrender.com/uploads/${cat.categoryImg}`}
                    alt="access"
                    width={300}
                    height="100"
                  />
                )}
                <div className="border-cat"></div>
                <div className="category-label">{cat.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
