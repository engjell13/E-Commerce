import React, { useState, useEffect } from "react";
import { shoesData, shoesNav } from "../data/data";

const Store = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const productsPerPage = 6;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (selectedCategories.includes(value)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
      setCurrentPage(1); // Reset the current page when a category is unselected
    } else {
      setSelectedCategories([...selectedCategories, value]);
      setCurrentPage(1); // Reset the current page when a new category is selected
    }
  };

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    setCurrentPage(1); // Reset the current page whenever the selected categories change
  }, [selectedCategories]);

  let filteredProducts = [...shoesData];

  if (selectedCategories.length > 0) {
    filteredProducts = shoesData.filter((data) =>
      selectedCategories.includes(data.category)
    );
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const renderPagination = () => {
    const paginationButtons = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-4 py-2 rounded-full border-2 font-bold mb-20 shadow-md ${
            currentPage === i
              ? "border-[#FFD4D4] bg-[#ffd4d4] text-white"
              : "border-gray-300 bg-white"
          } `}
        >
          {i}
        </button>
      );
    }

    return paginationButtons;
  };

  return (
    <>
      <div className="container mx-auto py-20 px-40 grid grid-cols-3 mt-20">
        <div className="sidenav-container">
          <h2 className="font-bold text-2xl mb-10">Choose by brand</h2>
          <div className="sidenav">
            {shoesNav.map((data, index) => {
              return (
                <div key={index} className="mt-2">
                  <input
                    className="mr-5 mb-5"
                    type="checkbox"
                    id={data.category}
                    name={data.category}
                    value={data.category}
                    checked={selectedCategories.includes(data.category)}
                    onChange={handleCheckboxChange}
                  />
                  <label className="text-[#646464]" htmlFor={data.category}>
                    {data.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap col-span-2 gap-20">
          {isLoading ? (
            <div className="w-full text-center text-[#646464]">
              <p>Loading...</p>
            </div>
          ) : (
            currentProducts.map((data, index) => (
              <div className="" key={index}>
                <a href={data.slug}>
                  <img
                    className="h-96 mb-4 rounded-2xl"
                    src={data.image}
                    alt=""
                  />
                  <h2 className="text-lg mb-2">{data.title}</h2>
                  <h3 className="font-bold mb-4 text-xl">{data.price}</h3>
                </a>
                <div className="flex justify-between items-center ">
                  <button className="bg-white p-3 border-2 border-black shadow-lg hover:bg-[#ffd4d4] hover:border-[#ffd4d4] hover:text-white transition-all">
                    Add To Cart
                  </button>
                  <button className="px-2 py-2 border-2 border-black rounded-full flex items-center bg-white text-black shadow-lg hover:bg-[#ffd4d4] hover:border-[#ffd4d4] hover:text-white transition-all active:bg-[#ffd4d4] active:border-[#ffd4d4] active:text-white">
                    <i className="bx bxs-heart"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex justify-center mt-8">{renderPagination()}</div>
    </>
  );
};

export default Store;
