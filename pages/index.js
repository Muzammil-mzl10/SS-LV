import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import Business from "../public/work.png";
import Link from "next/link";
import Logo from "../public/sellallnowcom-website-favicon-color.png";
import fb from "../public/icons8-facebook-48.png";
import Twitter from "../public/twitter.png";
import Transport from "../public/transport.png";
import Real_Estate from "../public/real-estate.png";
import Building from "../public/construction.png";
import Electric from "../public/electronics.png";
import Clothes from "../public/clothes-footwear.png";
import For_Home from "../public/home-stuff.png";
import Production from "../public/production-work.png";
import Children from "../public/for-children.png";
import Animal from "../public/animals.png";
import Agriculture from "../public/agriculture.png";
import Hobbies from "../public/entertainment.png";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


export default function Home() {
  const [Open,setOpen] =useState(false)

  const Focused = () => {
    console.log("Focused")
    setOpen(true);
  }
  const Focusout = () => {
    console.log("focused out")
    setOpen(false)
  }
  useEffect(() => {
    // document.getElementsByClassName("focused").addEventListener("focusout", () => {
    //   setOpen(false)
    // })
  })

  return (
    <>
      <Head>
        <title>SellALLNow</title>
        <meta name="description" content="Sell All Now" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sellallnowcom-website-favicon-color.png" />
      </Head>
      {Open ? (
        <div
          onBlur={Focusout}
          className="w-[100vw] -mt-20 backdrop-blur-sm h-[100vh] z-[100]  fixed flex justify-center items-center align-middle"
        >
          <div className="bg-white w-[50%] lg:h-[60%] md:h-[55%] h-[45%] relative rounded-lg shadow-lg text-center lg:text-3xl md:text-xl text-lg">
            <div className="flex  justify-between mt-5 mx-5">
              <Image src={Business} className="h-20 w-24 lg:block hidden" />
              <h1 className="lg:text-3xl md:text-xl text-sm font-bold  text-green-600">
                Work and Business
              </h1>
              <div>
                <button
                  onClick={Focusout}
                  className="border lg:text-lg md:text-sm text-xs hover:bg-red-500 hover:text-white hover:border-white font-bold tracking-wider border-red-500 text-red-700 lg:py-2 md:py-2 py-2 lg:px-4 md:px-2 px-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="space-y-1 lg:text-lg md:text-lg text-sm mt-5 relative">
              <Link href="/Total_Prod">
                <p className=" cursor-pointer hover:underline hover:text-green-600">
                  Vacancies
                </p>
              </Link>
              <Link href="/Total_Prod">
                <p className=" cursor-pointer hover:underline hover:text-green-600">
                  Looking for a Job
                </p>
              </Link>
              <Link href="/Total_Prod">
              <p className=" cursor-pointer hover:underline hover:text-green-600">
                Courses, education
              </p>
              </Link>
              <Link href="/Total_Prod">
              <p className=" cursor-pointer hover:underline hover:text-green-600">
                Business contacts
              </p>
              </Link>
              <Link href="/Total_Prod">
              <p className=" cursor-pointer hover:underline hover:text-green-600">
                Legal services
              </p>
              </Link>
              <Link href="/Total_Prod">
              <p className=" cursor-pointer hover:underline hover:text-green-600">
                Financial services
              </p>
              </Link>
              <Link href="/Total_Prod">
              <p className=" cursor-pointer hover:underline hover:text-green-600">
                Translation of texts
              </p>
              </Link>
              <Link href="/Total_Prod">
              <p className=" cursor-pointer hover:underline hover:text-green-600">
                Internet services
              </p>
              </Link>
              <Link href="/Total_Prod">
              <p className=" cursor-pointer hover:underline hover:text-green-600">
                Miscellaneous
              </p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="lg:h-[100vh] md:h-[100vh] h-auto bg-[#EBF1F4]">
        <div className="bg-green-300">
          <div className="mx-auto max-w-7xl py-3 sm:px-6 lg:px-8 md:px-4 px-1">
            <div className="flex flex-wrap items-center justify-between">
              <Link href={'/'}>
              <div className="flex flex-col justify-center ml-4 align-middle items-center">
                <Image
                  className="rounded-lg bg-white hover:bg-green-300 shadow-green-600 shadow hover:animate-spin  border-2 border-green-800  hover:border-white cursor-pointer"
                  src={Logo}
                  width={60}
                  height={60}
                />
              </div>
              </Link>
              <div className="flex  justify-center items-center lg:space-x-10 md:space-x-3 space-x-1">
                <div className="flex space-x-2">
                  <Image
                    src={fb}
                    width={35}
                    height={40}
                    className="bg-[#0698EA]  rounded-lg cursor-pointer hover:border-white hover:border "
                  />
                  <Image
                    src={Twitter}
                    width={35}
                    height={40}
                    className="bg-white rounded-lg cursor-pointer hover:border-white hover:border "
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent p-2 rounded-lg border-2 border-white  lg:w-64 md:w-48 w-20"
                />
                <div className=" truncate font-medium text-white">
                  <div className=" lg:text-xl md:text-lg text-xs font-bold  #262626flex lg:px-5 md:px-2 px-1 rounded-lg justify-center bg-white text-green-600  hover:text-white hover:bg-green-400 cursor-pointer py-2">
                    SignUp
                  </div>
                </div>
                <div className=" truncate font-medium text-white">
                  <div className=" lg:text-xl md:text-lg text-xs font-bold  #262626flex lg:px-5 md:px-2 px-1 rounded-lg justify-center bg-white text-green-600  hover:text-white hover:bg-green-400 cursor-pointer py-2 ">
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 mb-20 bg-[#EBF1F4] mx-[12%]">
          <div className="lg:space-y-5 space-y-3 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:space-x-5 md:space-x-2 space-x-0">
            <div
              onClick={Focused}
              className="lg:mt-5 mt-3 bg-white lg:ml-5 md:ml-2 ml-0 p-5 rounded-lg justify-center border-green-300 border hover:animate-pulse cursor-pointer  flex text-green-500"
            >
              <Image src={Business} />
              <div className="flex align-middle ml-2 items-center  text-xl">
                Work and Business
              </div>
            </div>
            <div
              onClick={Focused}
              className=" bg-white p-5 rounded-lg justify-center border-green-300 border hover:animate-pulse cursor-pointer  flex text-green-500"
            >
              <Image src={Transport} />
              <div className="flex align-middle ml-2 items-center  text-xl">
                Transport
              </div>
            </div>
            <div
              onClick={Focused}
              className="bg-white p-5 rounded-lg justify-center border-green-300 border hover:animate-pulse cursor-pointer  flex text-green-500"
            >
              <Image src={Real_Estate} />
              <div className="flex align-middle ml-2 items-center  text-xl ">
                Real Estate
              </div>
            </div>
            <div
              onClick={Focused}
              className="bg-white p-5 rounded-lg justify-center border-green-300 border hover:animate-pulse cursor-pointer  flex text-green-500"
            >
              <Image src={Building} />
              <div className="flex align-middle ml-2 items-center  text-xl">
                Building
              </div>
            </div>
            <div
              onClick={Focused}
              className="bg-white p-5 rounded-lg justify-center border-green-300 border hover:animate-pulse cursor-pointer  flex text-green-500"
            >
              <Image src={Electric} />
              <div className="flex align-middle ml-2 items-center  text-xl">
                Electrical Engineering
              </div>
            </div>
            <div
              onClick={Focused}
              className="bg-white p-5 rounded-lg justify-center border-green-300 border hover:animate-pulse cursor-pointer  flex text-green-500"
            >
              <Image src={Clothes} />
              <div className="flex align-middle ml-2 items-center  text-xl">
                Clothes, Shoes
              </div>
            </div>
            <div
              onClick={Focused}
              className="bg-white p-5 rounded-lg justify-center border-green-300 border hover:animate-pulse cursor-pointer  flex text-green-500"
            >
              <Image src={For_Home} />
              <div className="flex align-middle ml-2 items-center  text-xl">
                For Home
              </div>
            </div>
            <div
              onClick={Focused}
              className="bg-white p-5 rounded-lg justify-center border-green-300 border hover:animate-pulse cursor-pointer  flex text-green-500"
            >
              <Image src={Production} />
              <div className="flex align-middle ml-2 items-center  text-xl">
                Production
              </div>
            </div>
            <div
              onClick={Focused}
              className="bg-white p-5 rounded-lg justify-center border-green-300 border hover:animate-pulse cursor-pointer  flex text-green-500"
            >
              <Image src={Children} />
              <div className="flex align-middle ml-2 items-center  text-xl">
                For Kids
              </div>
            </div>
            <div
              onClick={Focused}
              className="bg-white p-5 rounded-lg justify-center border-green-300 border hover:animate-pulse cursor-pointer  flex text-green-500"
            >
              <Image src={Animal} />
              <div className="flex align-middle ml-2 items-center  text-xl">
                Animals
              </div>
            </div>
            <div
              onClick={Focused}
              className="bg-white p-5 rounded-lg justify-center border-green-300 border hover:animate-pulse cursor-pointer  flex text-green-500"
            >
              <Image src={Agriculture} />
              <div className="flex align-middle ml-2 items-center  text-xl">
                Agriculture
              </div>
            </div>
            <div
              onClick={Focused}
              className="bg-white p-5 rounded-lg justify-center border-green-300 border hover:animate-pulse cursor-pointer  flex text-green-500"
            >
              <Image src={Hobbies} />
              <div className="flex align-middle ml-2 items-center  text-xl">
                Recreation, Hobbies
              </div>
            </div>
          </div>
        </div>
        <div className="fixed shadow-2xl space-x-20 bottom-0 w-[100vw] h-12 bg-green-300 text-white  text-center flex justify-center items-center align-middle">
          <div className="">Copyright ?? 2022 </div>
          <div className="text-xl font-bold cursor-pointer">
            SellALLNow Ltd.{" "}
          </div>
        </div>
      </div>
    </>
  );
}
