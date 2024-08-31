import Link from "next/link";
export default function Avatar({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <Link href="/profile">
        <div className="flex flex-col items-center justify-center">
          <img src={image || ""} alt="user" width={50} height={50} />
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
}
