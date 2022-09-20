import React from "react";

const Carousel = ({info, startIndex, setStartIndex, style}) => {

  return (
    <div className={`${style} relative`}>
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-64 overflow-hidden rounded-lg">
        {info.map((item, index) => {
          return (
            <div
              className={`duration-700 ease-in-out absolute inset-0 transition-all transform z-20`}
              data-carousel-item=""
              style={{
                transform: `translateX(${100 * (index - startIndex)}%)`,
              }}
            >
              <img src={item.image} alt="..." />
            </div>
          );
        })}
      </div>

      {/* <!-- Slider indicators --> */}
      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {info.map((item, index) => (
          <button
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === startIndex
                ? "bg-white dark:bg-gray-800"
                : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            }`}
            onClick={() => setStartIndex(index)}
          ></button>
        ))}
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
        onClick={() =>
          setStartIndex((prev) => (prev !== 0 ? prev - 1 : info.length - 1))
        }
      >
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary/60 dark:bg-gray-800/30 group-hover:bg-primary/40 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-primary dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next=""
        onClick={() =>
          setStartIndex((prev) => (prev !== info.length - 1 ? prev + 1 : 0))
        }
      >
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary/60 dark:bg-gray-800/30 group-hover:bg-primary/40 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-primary dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
