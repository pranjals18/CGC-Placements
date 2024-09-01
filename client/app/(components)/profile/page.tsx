"use client";

import { useExpandContext } from "@/app/(Context)/ExpandContext";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const Dashboard = () => {
  const { expand } = useExpandContext();
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <div
      className={`p-7 bg-slate-200 transition-all duration-300 ${
        expand ? "ml-56" : "ml-20"
      }`}
    >
      <div className="mx-auto max-w-[1050px]">
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="relative z-20 h-35 md:h-65">
            <Image
              src={"/images/cover/cover-01.png"}
              alt="profile cover"
              className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
              width={970}
              height={260}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
            <div className="absolute bottom-3 right-3 z-10 xsm:bottom-4 xsm:right-4">
              <label
                htmlFor="cover"
                className="flex cursor-pointer w-20 items-center justify-center gap-2 rounded bg-primary px-2 py-1 text-sm font-medium text-white bg-[#392ff1] hover:bg-opacity-80" 
              >
                <input
                  type="file"
                  name="cover"
                  id="cover"
                  className="sr-only"
                />
                <span>
                  <svg
                    className="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span>Edit</span>
              </label>
            </div>
          </div>
          <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11">
            <div className="relative z-30 mx-auto -mt-16 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
              <div className="relative drop-shadow-2">
                <Image
                  src={"/images/user/user-06.png"}
                  width={160}
                  height={160}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  alt="profile"
                />
                <label
                  htmlFor="profile"
                  className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-white bg-[#392ff1] hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                >
                  <svg
                    className="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                      fill=""
                    />
                  </svg>
                  <input
                    type="file"
                    name="profile"
                    id="profile"
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                Jon Doe
              </h3>
              <p className="font-medium">
                Data Science and Artificial Intelligence
              </p>
            </div>
          </div>
        </div>

        {edit ? (
          <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex items-center justify-between border-b border-stroke px-6 py-4 dark:border-strokedark">
              <h3 className="text-xl font-medium text-black ">
                Edit Details
              </h3>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-center font-medium text-white bg-[#392ff1] hover:bg-opacity-90 w-28"
                onClick={() => setEdit(!edit)}
              >
                Save
              </button>
            </div>
            <div className="flex pb-6 flex-col px-10">

              <div className="flex mt-6 items-center gap-5">
                <label className="text-md w-[200px] font-medium text-black dark:text-white">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="flex mt-6 items-center gap-5">
                <label className="text-md  w-[200px] font-medium text-black">
                  Roll Number
                </label>

                <input
                  type="text"
                  placeholder="Roll Number"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="flex mt-6 items-center gap-5">
                <label className="text-md  w-[200px] font-medium text-black dark:text-white">
                  Email
                </label>

                <input
                  type="text"
                  placeholder="Email"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="flex mt-6 items-center gap-5">
                <label className="text-md  w-[200px] font-medium text-black dark:text-white">
                  Gender
                </label>

                <input
                  type="text"
                  placeholder="Gender"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="flex mt-6 items-center gap-5">
                <label className="text-md  w-[200px] font-medium text-black dark:text-white">
                  Branch
                </label>

                <input
                  type="text"
                  placeholder="Branch"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="flex mt-6 items-center gap-5">
                <label className="text-md  w-[200px] font-medium text-black dark:text-white">
                  CGPA
                </label>

                <input
                  type="text"
                  placeholder="CGPA"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="flex mt-6 items-center gap-5">
                <label className="text-md  w-[200px] font-medium text-black dark:text-white">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="flex mt-6 items-center gap-5">
                <label className="text-md  w-[200px] font-medium text-black dark:text-white">
                  Address
                </label>

                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="flex mt-6 items-center gap-5">
                <label className="text-md  w-[200px] font-medium text-black dark:text-white">
                  Graduation Year
                </label>

                <input
                  type="text"
                  placeholder="Graduation Year"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex items-center justify-between border-b border-stroke px-6 py-4 dark:border-strokedark">
              <h3 className="text-xl font-medium text-black dark:text-white">
                Details
              </h3>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-center font-medium text-white bg-[#392ff1] hover:bg-opacity-90 w-28"
                onClick={() => setEdit(!edit)}
              >
                Edit
              </button>
            </div>

            <div className="flex pb-6 flex-col px-10">
              <div className="flex mt-6 item-center gap-5">
                <label className="text-md  item-center pt-3 w-[200px] font-medium text-black dark:text-white">
                  Name
                </label>
                <p className="text-md px-5 py-3 w-full bg-transparent text-black outline-none transition  disabled:bg-whiter dark:border-form-strokedark dark:text-white dark:focus:border-primary">
                  Jon Doe
                </p>
              </div>

              <div className="flex mt-6 item-center gap-5">
                <label className="text-md  item-center pt-3 w-[200px] font-medium text-black dark:text-white">
                  Roll Number
                </label>
                <p className="text-md px-5 py-3 w-full bg-transparent text-black outline-none transition  disabled:bg-whiter dark:border-form-strokedark dark:text-white dark:focus:border-primary">
                  12345
                </p>
              </div>

              <div className="flex mt-6 item-center gap-5">
                <label className="text-md item-center pt-3 w-[200px] font-medium text-black dark:text-white">
                  Email
                </label>
                <p className="text-md px-5 py-3 w-full bg-transparent text-black outline-none transition  disabled:bg-whiter dark:border-form-strokedark dark:text-white dark:focus:border-primary">
                  12345@gmail.com
                </p>
              </div>

              <div className="flex mt-6 item-center gap-5">
                <label className="text-md item-center pt-3 w-[200px] font-medium text-black dark:text-white">
                  Gender
                </label>
                <p className="text-md px-5 py-3 w-full bg-transparent text-black outline-none transition  disabled:bg-whiter dark:border-form-strokedark dark:text-white dark:focus:border-primary">
                  Male
                </p>
              </div>

              <div className="flex mt-6 item-center gap-5">
                <label className="text-md item-center pt-3 w-[200px] font-medium text-black dark:text-white">
                  Branch
                </label>
                <p className="text-md px-5 py-3 w-full bg-transparent text-black outline-none transition  disabled:bg-whiter dark:border-form-strokedark dark:text-white dark:focus:border-primary">
                  Data Science and Artificial Intelligence
                </p>
              </div>

              <div className="flex mt-6 item-center gap-5">
                <label className="text-md item-center pt-3 w-[200px] font-medium text-black dark:text-white">
                  CGPA
                </label>
                <p className="text-md px-5 py-3 w-full bg-transparent text-black outline-none transition  disabled:bg-whiter dark:border-form-strokedark dark:text-white dark:focus:border-primary">
                  10.00
                </p>
              </div>

              <div className="flex mt-6 item-center gap-5">
                <label className="text-md item-center pt-3 w-[200px] font-medium text-black dark:text-white">
                  Phone Number
                </label>
                <p className="text-md px-5 py-3 w-full bg-transparent text-black outline-none transition  disabled:bg-whiter dark:border-form-strokedark dark:text-white dark:focus:border-primary">
                  9876543210
                </p>
              </div>

              <div className="flex mt-6 item-center gap-5">
                <label className="text-md item-center pt-3 w-[200px] font-medium text-black dark:text-white">
                  Address
                </label>
                <p className="text-md px-5 py-3 w-full bg-transparent text-black outline-none transition  disabled:bg-whiter dark:border-form-strokedark dark:text-white dark:focus:border-primary">
                  123 Main St, CA, San Francisco - 94105, USA
                </p>
              </div>

              <div className="flex mt-6 item-center gap-5">
                <label className="text-md item-center pt-3 w-[200px] font-medium text-black dark:text-white">
                  Graduation Year
                </label>
                <p className="text-md px-5 py-3 w-full bg-transparent text-black outline-none transition  disabled:bg-whiter dark:border-form-strokedark dark:text-white dark:focus:border-primary">
                  2025
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
