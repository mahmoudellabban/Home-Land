import React from "react";
import Search from "./Search";
import image from "../assets/img/house-banner.png";
const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-[100px] xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8 ">
            At HomeLand, we believe in more than just providing a
            place to live - we offer a gateway to a lifestyle you've always
            envisioned. From cozy apartments to spacious villa. Let
            us be your trusted partner in finding the perfect abode that
            reflects your style and meets your needs.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={image} alt="homeBanner" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
