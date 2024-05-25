import Avatar from "./Avatar";
export default function Hero() {
  return (
    <>
      <div className="hero bg-pink-100">
        <div className="text-center">
          <p className="text text-rose-700">New Arrivals</p>
          {/* <img className="m-auto" src="flower.avif" alt="flower"></img> */}
          <div className="flex items-center justify-center my-5">
            <img
              src="left-arrow.webp"
              alt="left-arrow"
              width={70}
              height={20}
            />
            <p className="mx-5 text-4xl">Find The</p>
            <img
              src="right-arrow.webp"
              alt="right-arrow"
              width={90}
              height={20}
            />
          </div>
          <h1>PERFECT BAG</h1>
          <p className="text text-rose-700">for you</p>
          <button className="bg-black py-2 px-5 rounded-full mt-6 text-white hover:bg-rose-700">
            Shop now
          </button>
        </div>
        <div>
          <img src="hero.png" alt="hero" width={500} height={500} />
        </div>
      </div>
    </>
  );
}
