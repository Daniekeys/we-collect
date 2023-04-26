import React from 'react'
import useA from "../../assets/png/use1.png";
import useB from "../../assets/png/use2.png";
import useC from "../../assets/png/use3.png";
import useD from "../../assets/png/use4.png";
import useE from "../../assets/png/use5.png";
import ContainerLayout from '../../layouts/ContainerLayout';
import Image from 'next/image';
const data = [
  {
    image: useA,
    date: "April 09 . 08:52 AM",
    title: "Lorem ipsum dolor sit amet consec...",
    content:
      "Lorem ipsum dolor sit amet consectetur. Arcu massa sit ornare diam. Phasellus nisi auctor viverra pellentesque. In ut condimentum nisl eu. Ut viverra et mattis sem nibh ipsum...",
  },
  {
    image: useB,
    date: "April 09 . 08:52 AM",
    title: "Lorem ipsum dolor sit amet consec...",
    content:
      "Lorem ipsum dolor sit amet consectetur. Arcu massa sit ornare diam. Phasellus nisi auctor viverra pellentesque. In ut condimentum nisl eu. Ut viverra et mattis sem nibh ipsum...",
  },
  {
    image: useC,
    date: "April 09 . 08:52 AM",
    title: "Lorem ipsum dolor sit amet consec...",
    content:
      "Lorem ipsum dolor sit amet consectetur. Arcu massa sit ornare diam. Phasellus nisi auctor viverra pellentesque. In ut condimentum nisl eu. Ut viverra et mattis sem nibh ipsum...",
  },
  {
    image: useD,
    date: "April 09 . 08:52 AM",
    title: "Lorem ipsum dolor sit amet consec...",
    content:
      "Lorem ipsum dolor sit amet consectetur. Arcu massa sit ornare diam. Phasellus nisi auctor viverra pellentesque. In ut condimentum nisl eu. Ut viverra et mattis sem nibh ipsum...",
  },
  {
    image: useE,
    date: "April 09 . 08:52 AM",
    title: "Lorem ipsum dolor sit amet consec...",
    content:
      "Lorem ipsum dolor sit amet consectetur. Arcu massa sit ornare diam. Phasellus nisi auctor viverra pellentesque. In ut condimentum nisl eu. Ut viverra et mattis sem nibh ipsum...",
  },
  {
    image: useA,
    date: "April 09 . 08:52 AM",
    title: "Lorem ipsum dolor sit amet consec...",
    content:
      "Lorem ipsum dolor sit amet consectetur. Arcu massa sit ornare diam. Phasellus nisi auctor viverra pellentesque. In ut condimentum nisl eu. Ut viverra et mattis sem nibh ipsum...",
  },
  {
    image: useB,
    date: "April 09 . 08:52 AM",
    title: "Lorem ipsum dolor sit amet consec...",
    content:
      "Lorem ipsum dolor sit amet consectetur. Arcu massa sit ornare diam. Phasellus nisi auctor viverra pellentesque. In ut condimentum nisl eu. Ut viverra et mattis sem nibh ipsum...",
  },
  {
    image: useD,
    date: "April 09 . 08:52 AM",
    title: "Lorem ipsum dolor sit amet consec...",
    content:
      "Lorem ipsum dolor sit amet consectetur. Arcu massa sit ornare diam. Phasellus nisi auctor viverra pellentesque. In ut condimentum nisl eu. Ut viverra et mattis sem nibh ipsum...",
  },
  {
    image: useE,
    date: "April 09 . 08:52 AM",
    title: "Lorem ipsum dolor sit amet consec...",
    content:
      "Lorem ipsum dolor sit amet consectetur. Arcu massa sit ornare diam. Phasellus nisi auctor viverra pellentesque. In ut condimentum nisl eu. Ut viverra et mattis sem nibh ipsum...",
  },
];


const AllBlogs = () => {
  return (
    <ContainerLayout>
      <div className="w-full flex flex-col mt-20">
        <h1 className="mt-16 text-[#555] text-[40px] mb-8 ">Older posts</h1>
        <div className="w-full grid grid-cols-1 gap-x-8 gap-y-12  sm:grid-cols-2 lg:grid-cols-3 flow-hide">
          {data.map((item, index) => (
            <div
              className="w-full flex flex-col"
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                src={item.image}
                alt="image"
                className="w-8/12 h-auto rounded-[30px]"
              />
              <p className="text-base text-[#555] mt-4 ">{item.date}</p>
              <p className="text-[32px] text-[#555] leading-[40px] mt-4">
                {item.title}
              </p>
              <p className="text-xl text-[#555] mt-4">{item.content}</p>
              <p className="bg-mainBlue  text-base text-white  font-semibold mt-4 rounded-[30px] w-fit px-6 py-3 ">
                Blog
              </p>
            </div>
          ))}
        </div>
      </div>
    </ContainerLayout>
  );
}

export default AllBlogs