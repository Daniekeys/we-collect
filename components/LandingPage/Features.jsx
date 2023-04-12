import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import cases from "../../assets/svg/case.svg"
import gps from "../../assets/svg/gps.svg"
import offline from "../../assets/svg/offline.svg"
import Image from 'next/image'

const data = [
    {
        img: cases,
        title: "Case Management",
        story:"Wecollect helps you consolidate your data, allowing you to analyse them seamlessly."
    },
    {
        img: gps,
        title: "GPS Coordinates",
        story:"With the GPS feature, agents can easily navigate, locate, and track effortlessly, therefore increasing productivity."
    },
    {
        img: offline,
        title: "Offline Data Collection",
        story:"With the GPS feature, agents can easily navigate, locate, and track effortlessly, therefore increasing productivity."
    },
]
const Features = () => {
  return (
      <div className='w-full mt-32 mb-32 '>
          <ContainerLayout >
              <div className="flex flex-col">
                  
              
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-x-12 ">
                  
                  {
                      data?.map((item,index) => {
                          return (
                            <div
                              className="bg-fea w-full h-[684px] relative "
                              key={index}
                             
                            >
                              <div className="flex flex-col  items-center  rounded-[30px] bg-white  w-11/12 h-[620px] pt-28">
                                <Image
                                  src={item.img}
                                  alt={item.title}
                                  className="w-7/12 mx-auto mb-20"
                                />
                                <h2 className="text-[#333333] text-lg lg:text-2xl font-bold text-center">
                                  {item.title}
                                </h2>
                                <p className="text-[#333333] w-10/12 opacity-70 text-center text-base lg:text-xl">
                                  {item.story}
                                </p>
                              </div>
                              <div className="bg-one"></div>
                            </div>
                          );
                      })
                  }
                 
                                  </div>
              </div>
          </ContainerLayout>
    </div>
  )
}

export default Features