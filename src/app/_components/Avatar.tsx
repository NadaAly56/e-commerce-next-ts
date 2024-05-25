import Link from "next/link";
export default async function Avatar({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <Link href="/profile">
        <p>{name}</p>
        <img src={image || ""} alt="user" width={50} height={50} />
      </Link>
    </div>
  );
}
