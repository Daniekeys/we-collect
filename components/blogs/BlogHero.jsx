import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import { Navlogo } from "../../assets/svg";
import logo from "../../assets/svg/log2.svg";
import Image from 'next/image';
import { BiSearch } from "react-icons/bi"
import Link from 'next/link';
import { RiArrowLeftSLine } from "react-icons/ri"
import heroImage from "../../assets/png/blog-hero.png";
import { useRouter } from 'next/router';
const BlogHero = () => {
    const router = useRouter();

  return (
    <ContainerLayout>
      <div className="w-full flex flex-col">
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-[172px] h-auto cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="w-full flex items-center mt-12 ">
          <h1 className="w-4/12 text-[64px] text-[#333]">Our Blog</h1>
          <div className="flex items-center justify-between flex-row-reverse md:flex-row w-8/12">
            <div className="flex items-center border-b pb-2  border-[#999] w-6/12 ">
              <input
                type="text"
                className="border-none outline-none focus:outline-none focus:border-none text-base placeholder:text-[#555] flex-grow  "
                placeholder="Search keyword..."
              />
              <BiSearch className="text-lg text-[#444]" />
            </div>
            {/* searc */}
            <div className="w-4/12 flex items-center space-x-8 ">
              <Link
                href="/"
                className="border border-[#999] text-lg text-[#999] rounded-[20px] px-6 w-fit h-[55px] flex items-center space-x-2 cursor-pointer"
                onClick={() => router.push("/")}
              >
                <RiArrowLeftSLine className="text-2xl" />
                <p>Go back</p>
              </Link>

              <p className="text-mainBlue border-l-2 pl-3 text-base border-[#555] font-semibold ">
                Blog
              </p>
            </div>

            {/* button */}
          </div>
        </div>
        <h1 className="mt-16 text-[#555] text-[40px] ">Latest</h1>
        <div className="w-full mt-8 flex justify-between items-center">
          <div className="w-6/12 items-center">
            <Image
              src={heroImage}
              alt="hero"
              className="w-full h-auto rounded-[30px]"
            />
          </div>
          <div className="w-5/12 flex flex-col">
            <p className="text-base text-[#555] ">April 12 . 10:52 PM</p>
            <h2 className="md:w-11/12 w-full text-[40px] font-[500] text-[#333] my-7">
              Collecting data smarter with WeCollect.
            </h2>
            <p className="text-[#555] text-xl">
              Lorem ipsum dolor sit amet consectetur. Arcu massa sit ornare
              diam. Phasellus nisi auctor viverra pellentesque. In ut
              condimentum nisl eu. Ut viverra et mattis sem nibh ipsum...
            </p>
            <button className="w-[143px] h-[65px] justify-center items-center flex text-mainBlue font-semibold text-base cursor-pointer rounded-[30px] border border-mainBlue mt-4">
              Blog
            </button>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default BlogHero