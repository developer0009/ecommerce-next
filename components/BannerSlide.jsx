import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import { slideOne, slideTwo, slideThree } from "@/public";
import Image from "next/image";
import Wrapper from "./Wrapper";
import ProductCard from "./ProductCard";
const BannerSlide = () => {
  return (
    <>
      <div className="max-w-[1360px] mx-auto text-[20px]">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <div
              onClick={clickHandler}
              className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-70 text-white"
            >
              <BiArrowBack className="text-sm md:text-lg" />
            </div>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <div
              onClick={clickHandler}
              className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-70 text-white"
            >
              <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
          )}
        >
          <div>
            <Image src={slideOne} alt="jordan shoes" />
            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div>
          </div>
          <div>
            <Image src={slideTwo} alt="jordan shoes" />
            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div>
          </div>
          <div>
            <Image src={slideThree} alt="jordan shoes" />
            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div>
          </div>
        </Carousel>
      </div>
      <Wrapper>
        {/* heading and paragaph start */}
        <div
          className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]"
          //   style={{ border: "2px solid black" }}
        >
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {/* {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}

 */}
          <ProductCard src={1} />
          <ProductCard src={2} />
          <ProductCard src={3} />
          <ProductCard src={4} />
          <ProductCard src={5} />
          <ProductCard src={6} />
          <ProductCard src={7} />
        </div>
      </Wrapper>
    </>
  );
};

export default BannerSlide;
