import React from 'react'
import Logo from "../public/sellallnowcom-website-favicon-color.png";
import fb from "../public/icons8-facebook-48.png";
import Image from "next/image";
import Twitter from "../public/twitter.png";
import Test from "../public/test1.jpg";
import { PaperClipIcon } from "@heroicons/react/20/solid";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};




const Product = () => {
  return (
    <div className="lg:h-[100vh] md:h-[100vh] h-auto bg-[#EBF1F4]">
      <div className="bg-green-300">
        <div className="mx-auto max-w-7xl py-3 sm:px-6 lg:px-8 md:px-4 px-1">
          <div className="flex flex-wrap items-center justify-around">
            <div className="flex flex-col justify-center ml-4 align-middle items-center">
              <Image
                className="rounded-lg bg-white hover:bg-green-300 shadow-green-600 shadow hover:animate-spin  border-2 border-green-800  hover:border-white cursor-pointer"
                src={Logo}
                width={60}
                height={60}
              />
            </div>
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
                  Jobs
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
      <div className="bg-white py-5">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-xl font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:mx-[12%] md:mx-[5%] mx-[2%] mt-5">
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{product.details}</p>
            </div>

            <div className="overflow-hidden mx-auto bg-white shadow sm:rounded-lg">
              <div className="px-4 flex justify-between py-5 sm:px-6">
                <div>
                  <h3 className="lg:text-lg md:text-lg text-sm font-medium leading-6 text-gray-900">
                    Product Name
                  </h3>
                  <p className="mt-1 max-w-2xl lg:text-sm md:text-sm text-xs text-gray-500">
                    Product details
                  </p>
                </div>
                <div>
                  <p>
                    Date:{" "}
                    <span className="font-bold lg:ml-4 md:ml-4 ml-1">
                      {" "}
                      12-5-2022
                    </span>
                  </p>
                  <p>
                    Views: <span className="font-bold ml-2"> 17 </span>
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Product Type
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      Jeans
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">State</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      New
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Manufacturer
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      Levis
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      Riga, Dreylini
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Size</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      44
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm   font-medium text-gray-500">
                      Price
                    </dt>
                    <dd className="mt-1 text-lg animate-pulse font-bold text-gray-900 sm:col-span-2 sm:mt-0">
                      34$
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      Test123@gmail.com
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Telephone
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 cursor-pointer hover:text-blue-500  sm:col-span-2 sm:mt-0">
                      1234567
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product
