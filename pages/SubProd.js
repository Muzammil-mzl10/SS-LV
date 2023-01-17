import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../public/sellallnowcom-website-favicon-color.png";
import fb from "../public/icons8-facebook-48.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Twitter from "../public/twitter.png";
import Test from "../public/test1.jpg";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "All Anouncements", href: "#" },
  { name: "Today - 504", href: "#" },
  { name: "For 2 days - 1699", href: "#" },
  { name: "For 5 days - 2391", href: "#" },
  { name: "For 7 days - 4500", href: "#" },
];
const filters = [
  {
    id: "Working_days",
    name: "Working Days",
    options: [
      { value: "Workers", label: "Workers", checked: false },
      { value: "Weekend", label: "Weekend", checked: false },
      { value: "Mixed", label: "Mixed", checked: true },
      { value: "Shifts", label: "Shifts", checked: false },
      { value: "Daily", label: "Daily", checked: false },
      { value: "Optional", label: "Optional", checked: false },
    ],
  },
  {
    id: "location",
    name: "Location",
    options: [
      { value: "Riga", label: "Riga", checked: false },
      { value: "Jurmala", label: "Jurmala", checked: false },
      { value: "Riga_Regan", label: "Riga Regan", checked: true },
      { value: "Valka_District", label: "Valka District", checked: false },
      { value: "Lithuania", label: "Lithuania", checked: false },
    ],
  },
  //   {
  //     id: "size",
  //     name: "Size",
  //     options: [
  //       { value: "2l", label: "2L", checked: false },
  //       { value: "6l", label: "6L", checked: false },
  //       { value: "12l", label: "12L", checked: false },
  //       { value: "18l", label: "18L", checked: false },
  //       { value: "20l", label: "20L", checked: false },
  //       { value: "40l", label: "40L", checked: true },
  //     ],
  //   },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const SubProd = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
   const router = useRouter();
  const MoveToProd = () => {
    router.push('/Product')
  }

  return (
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

      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="px-2 py-3 font-medium text-gray-900"
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
              <h1 className="text-4xl font-bold tracking-tight text-green-300">
                Consultant
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3 ">
                  <div className="h-auto rounded-lg p-2  w-full border-4 border-dashed border-gray-200 ">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <div className="flex items-center justify-end pb-4">
                        <label for="table-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="table-search"
                            className="block   p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg lg:w-80 md:w-80 w-48 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for items"
                          />
                        </div>
                      </div>
                      <table className="w-full text-sm text-left text-white ">
                        <thead className="text-md text-white uppercase bg-gray-50 dark:bg-green-300 dark:text-white ">
                          <tr>
                            <th scope="col" className="p-4">
                              {/* <div className="flex items-center">
                                <input
                                  id="checkbox-all-search"
                                  type="checkbox"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                              
                              </div> */}
                            </th>
                            <th scope="col" className="px-1 py-5">
                              Ads
                            </th>
                            <th scope="col" className="px-1 py-5">
                              Date of
                            </th>
                            <th scope="col" className="px-1 py-5">
                              Company
                            </th>
                            <th scope="col" className="px-1 py-5">
                              Working Hours
                            </th>
                            {/* <th scope="col" className="px-6 py-3">
                              Action
                            </th> */}
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            onClick={MoveToProd}
                            className="bg-white border-b cursor-pointer cursor-pointer dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td className="w-4 p-4">
                              <div className="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-1"
                                  className="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>

                            <th
                              scope="row"
                              className="px-6 py-4  w-[30rem] h-auto flex items-center space-x-2 font-medium text-gray-900 dark:text-white"
                            >
                              <Image src={Test} width={130} height={150} />
                              <span>
                                {" "}
                                Apple MacBook Pro 17 Lorem ipsum dolor sit amet
                                consectetur adipisicing elit
                              </span>
                            </th>
                            <td className="px-6 py-4">Sliver</td>
                            <td className="px-6 py-4">Apple Inc.</td>
                            <td className="px-6 py-4">Shifts</td>
                          </tr>
                          <tr
                            onClick={MoveToProd}
                            className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td className="w-4 p-4">
                              <div className="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-1"
                                  className="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>

                            <th
                              scope="row"
                              className="px-6 py-4  w-[30rem] h-auto flex items-center space-x-2 font-medium text-gray-900 dark:text-white"
                            >
                              <Image src={Test} width={130} height={150} />
                              <span>
                                {" "}
                                Apple MacBook Pro 17 Lorem ipsum dolor sit amet
                                consectetur adipisicing elit
                              </span>
                            </th>
                            <td className="px-6 py-4">Sliver</td>
                            <td className="px-6 py-4">Apple Inc.</td>
                            <td className="px-6 py-4">Shifts</td>
                          </tr>
                          <tr
                            onClick={MoveToProd}
                            className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td className="w-4 p-4">
                              <div className="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-1"
                                  className="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>

                            <th
                              scope="row"
                              className="px-6 py-4  w-[30rem] h-auto flex items-center space-x-2 font-medium text-gray-900 dark:text-white"
                            >
                              <Image src={Test} width={130} height={150} />
                              <span>
                                {" "}
                                Apple MacBook Pro 17 Lorem ipsum dolor sit amet
                                consectetur adipisicing elit
                              </span>
                            </th>
                            <td className="px-6 py-4">Sliver</td>
                            <td className="px-6 py-4">Apple Inc.</td>
                            <td className="px-6 py-4">Shifts</td>
                          </tr>
                          <tr
                            onClick={MoveToProd}
                            className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td className="w-4 p-4">
                              <div className="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-1"
                                  className="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>

                            <th
                              scope="row"
                              className="px-6 py-4  w-[30rem] h-auto flex items-center space-x-2 font-medium text-gray-900 dark:text-white"
                            >
                              <Image src={Test} width={130} height={150} />
                              <span>
                                {" "}
                                Apple MacBook Pro 17 Lorem ipsum dolor sit amet
                                consectetur adipisicing elit
                              </span>
                            </th>
                            <td className="px-6 py-4">Sliver</td>
                            <td className="px-6 py-4">Apple Inc.</td>
                            <td className="px-6 py-4">Shifts</td>
                          </tr>
                          <tr
                            onClick={MoveToProd}
                            className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td className="w-4 p-4">
                              <div className="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-1"
                                  className="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>

                            <th
                              scope="row"
                              className="px-6 py-4  w-[30rem] h-auto flex items-center space-x-2 font-medium text-gray-900 dark:text-white"
                            >
                              <Image src={Test} width={130} height={150} />
                              <span>
                                {" "}
                                Apple MacBook Pro 17 Lorem ipsum dolor sit amet
                                consectetur adipisicing elit
                              </span>
                            </th>
                            <td className="px-6 py-4">Sliver</td>
                            <td className="px-6 py-4">Apple Inc.</td>
                            <td className="px-6 py-4">Shifts</td>
                          </tr>
                          <tr
                            onClick={MoveToProd}
                            className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td className="w-4 p-4">
                              <div className="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-1"
                                  className="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>

                            <th
                              scope="row"
                              className="px-6 py-4  w-[30rem] h-auto flex items-center space-x-2 font-medium text-gray-900 dark:text-white"
                            >
                              <Image src={Test} width={130} height={150} />
                              <span>
                                {" "}
                                Apple MacBook Pro 17 Lorem ipsum dolor sit amet
                                consectetur adipisicing elit
                              </span>
                            </th>
                            <td className="px-6 py-4">Sliver</td>
                            <td className="px-6 py-4">Apple Inc.</td>
                            <td className="px-6 py-4">Shifts</td>
                          </tr>
                          <tr
                            onClick={MoveToProd}
                            className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td className="w-4 p-4">
                              <div className="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-1"
                                  className="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>

                            <th
                              scope="row"
                              className="px-6 py-4  w-[30rem] h-auto flex items-center space-x-2 font-medium text-gray-900 dark:text-white"
                            >
                              <Image src={Test} width={130} height={150} />
                              <span>
                                {" "}
                                Apple MacBook Pro 17 Lorem ipsum dolor sit amet
                                consectetur adipisicing elit
                              </span>
                            </th>
                            <td className="px-6 py-4">Sliver</td>
                            <td className="px-6 py-4">Apple Inc.</td>
                            <td className="px-6 py-4">Shifts</td>
                          </tr>
                          <tr
                            onClick={MoveToProd}
                            className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td className="w-4 p-4">
                              <div className="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-1"
                                  className="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>

                            <th
                              scope="row"
                              className="px-6 py-4  w-[30rem] h-auto flex items-center space-x-2 font-medium text-gray-900 dark:text-white"
                            >
                              <Image src={Test} width={130} height={150} />
                              <span>
                                {" "}
                                Apple MacBook Pro 17 Lorem ipsum dolor sit amet
                                consectetur adipisicing elit
                              </span>
                            </th>
                            <td className="px-6 py-4">Sliver</td>
                            <td className="px-6 py-4">Apple Inc.</td>
                            <td className="px-6 py-4">Shifts</td>
                          </tr>
                          <tr
                            onClick={MoveToProd}
                            className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td className="w-4 p-4">
                              <div className="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-1"
                                  className="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>

                            <th
                              scope="row"
                              className="px-6 py-4  w-[30rem] h-auto flex items-center space-x-2 font-medium text-gray-900 dark:text-white"
                            >
                              <Image src={Test} width={130} height={150} />
                              <span>
                                {" "}
                                Apple MacBook Pro 17 Lorem ipsum dolor sit amet
                                consectetur adipisicing elit
                              </span>
                            </th>
                            <td className="px-6 py-4">Sliver</td>
                            <td className="px-6 py-4">Apple Inc.</td>
                            <td className="px-6 py-4">Shifts</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* /End replace */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SubProd;
