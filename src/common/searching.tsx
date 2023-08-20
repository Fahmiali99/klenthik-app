import { useRouter } from "next/router";
import React from "react";

interface SearchingProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void; // Corrected prop type
  filter: string;
  handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterData: any;
  title: string;
  about: string;
}

function Searching({
  handleSubmit,
  filter,
  handleFilter,
  title,
  about,
}: SearchingProps) {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
        className="container mx-auto flex items-center py-10 lg:py-20 justify-center  md:py-20 px-4  lg:px-0"
      >
        <div>
          <div className="flex justify-center text-center">
            <div>
              <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-dark">
                {title}
              </h1>
              <p className="pt-4 pb-8 text-secondary text-base ">{about}</p>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div className="w-full lg:w-2/4 ">
              <input
                value={filter}
                onChange={handleFilter}
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-primary-blue focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search branch name..."
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 px-5 lg:px-10 ml-2 text-sm font-medium text-white rounded-full border bg-primary-blue hover:bg-blue-500 transition duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Searching;
