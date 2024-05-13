import Image from "next/image";
export default function Logo({
  width = 100,
  height = 120,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <div>
      <Image
        src="/brand.png"
        alt="brand"
        width={width}
        height={height}
        className="mx-auto"
      ></Image>
    </div>
  );
}
