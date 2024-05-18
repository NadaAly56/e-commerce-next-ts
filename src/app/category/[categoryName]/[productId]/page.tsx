"use client";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";
import Breadcrumb from "@/ui/Breadcrumb";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Product({
  params,
}: {
  params: { categoryName: string };
}) {
  const product = {
    name: "Basic Tee 6-Pack",
    price: "$192",
    href: "#",
    breadcrumbs: [
      {
        id: 1,
        name: "Home",
        href: `/`,
      },
      {
        id: 2,
        name: params.categoryName,
        href: `/category/${params.categoryName}`,
      },
      {
        id: 3,
        name: "Basic Tee 6-Pack",
        href: `#`,
      },
    ],
    images: [
      {
        src: "/access.jpeg",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "/bags.jpeg",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "/croshet.jpeg",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "/flowers.jpeg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  };
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <Breadcrumb breadcrumbs={product.breadcrumbs} />
        {/* Image gallery */}
        <div className="mx-auto my-10 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              width={100}
              height={100}
              className="h-96 w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <Image
                src={product.images[1].src}
                alt={product.images[1].alt}
                width={100}
                height={100}
                className="h-44 w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <Image
                src={product.images[2].src}
                alt={product.images[2].alt}
                width={100}
                height={100}
                className="h-44 w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-pink-600 hover:text-pink-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            {/* Price */}
            <p className="text-3xl my-5 tracking-tight text-gray-900">
              {product.price}
            </p>

            {/* Description */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
