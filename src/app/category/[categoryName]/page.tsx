import Breadcrumb from "@/ui/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
export default function CategoryItems({
  params,
}: {
  params: { categoryName: string };
}) {
  const products = [
    {
      id: 1,
      name: "Earthen Bottle",
      href: `${params.categoryName}/productId`,
      price: "$48",
      imageSrc: "/access.jpeg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      href: "#",
      price: "$35",
      imageSrc: "/access.jpeg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      price: "$89",
      imageSrc: "/access.jpeg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc: "/access.jpeg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More products...
  ];

  const breadcrumbs = [
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
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={100}
                  height={5}
                  className="h-80 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
