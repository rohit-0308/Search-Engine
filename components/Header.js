import Image from "next/image";
import { SearchIcon, XIcon, ViewGridIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "../components/Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="/assets/Google.svg"
          height={35}
          width={110}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center ">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />

          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => {
              searchInputRef.current.value = "";
            }}
          />

          <img
            src="/assets/Google_Mic.svg"
            className="mr-3 h-5 hidden sm:inline-flex pl-4 border-l-2 border-gray-300 cursor-pointer"
            alt=""
          />

          <SearchIcon className="h-6 text-blue-500  hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <div className=" flex ml-auto">
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer mr-3" />

          <Avatar url="/assets/avatar.jpg"  />
        </div>
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
