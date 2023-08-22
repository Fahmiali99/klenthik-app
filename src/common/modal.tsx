import React from "react";
import { ModalType } from "../../types/modal";
import { modalData } from "@/utils/modal";

function ModalComponent({ handleModal, handleClose, open }: ModalType) {
  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={handleModal}
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Selengkapnya
        </button>
      </div>

      <div
        className={`flex justify-center items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-0rem)] max-h-full ${
          open ? "block fixed bg-black bg-opacity-30" : "hidden fixed"
        }`}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-primary-dark dark:text-white">
                Visi & Misi
              </h3>
              <button
                onClick={handleClose}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6 text-left">
              {modalData.map((item: any, idx: number) => (
                <div key={idx}>
                  <h2 className="text-lg font-semibold leading-relaxed text-primary-dark dark:text-gray-400">
                    {item.title}
                  </h2>
                  {item.description.map((descItem: any, descIdx: number) => (
                    <p
                      key={descIdx}
                      className="text-base py-1 leading-relaxed text-primary-dark dark:text-gray-400"
                    >
                      {`${descIdx + 1}. ${descItem.children}`}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
