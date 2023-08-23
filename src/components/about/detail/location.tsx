function Location() {
  return (
    <div className="flex justify-center py-14 md:py-20 lg:py-28">
      <div className="w-screen  max-w-7xl mx-auto px-4 sm:px-6 ">
        <h1 className=" text-center  text-2xl md:text-3xl lg:text-4xl  font-semibold text-primary-dark">
          Lokasi kami saat ini
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center  lg:py-14 ">
          <div className="order-2 pt-7 lg:pt-0 lg:pl-10">
            <p className="py-4 text-secondary text-base ">
              Anda bisa datang disekertariat kami kapanpun anda mau, dan kami
              selalu ada dalam memprogress studi anda kedepan,
            </p>

            <button
              onClick={() =>
                window.open("https://goo.gl/maps/aXLoCkQfyiUWSHFd9")
              }
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-primary-blue focus:outline-none bg-transparant border border-primary-blue hover:bg-primary-blue hover:text-white focus:z-10 focus:ring-4 focus:ring-blue-300 rounded-full"
            >
              Cari sekarang
            </button>
          </div>

          <div className=" flex items-center justify-center  pt-10 sm:pt-10 md:pt-10 lg:pt-0 order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3947.984453446919!2d114.28932808237509!3d-8.304342970409458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTgnMTUuNiJTIDExNMKwMTcnMzkuMSJF!5e0!3m2!1sid!2sid!4v1692036825652!5m2!1sid!2sid"
              className=" rounded-lg"
              width="400"
              height="500"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
