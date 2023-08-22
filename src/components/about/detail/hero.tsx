import ModalComponent from "@/common/modal";
import React, { useState } from "react";

function Hero() {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <div className=" container mx-auto  relative">
      <div className="pt-36 md:pt-36 lg:pt-24  h-full flex justify-center text-center items-center py-14 md:py-20 lg:py-40 lg:min-h-[calc(100vh-3rem)] px-4">
        <div>
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-dark">
            We’re on
          </h1>
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-dark">
            a Mission
          </h1>
          <p className="py-4 pt-6 text-secondary text-base ">
            Mengefisiensi proses distribusi dan akomodasi limbah minyak
            jelantah.
          </p>
          <ModalComponent
            handleModal={handleModal}
            handleClose={handleClose}
            open={open}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
