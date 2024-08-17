import React, { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa6";
import ReactPaginate from "react-paginate";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const ProductsDebug = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page , setPage] = useState(0);

  const prodsPerPage = 8;
  const numberOfPages = Math.ceil(total / prodsPerPage) ;
  console.log(total, numberOfPages,page);

  const loadProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://dummyjson.com/products?skip=${page*prodsPerPage}&limit=${prodsPerPage}`
      );
      const data = await response.json();
      setProducts(data.products);
      setTotal(data.total);
    } catch (error) {
      console.error("Failed to load products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [page]);

  const handlePageClick = (e) => {
    setPage(e.selected);
  };

  return (
    <>
      {isLoading ? (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-gilroy">
              Products List :
            </h2>
            <div className="p-5 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {Array.from({ length: prodsPerPage }, (_, i) => (
                <div
                  className="border shadow rounded-md p-4 max-w-sm w-full mx-auto"
                  key={i}
                >
                  <div className="animate-pulse">
                    <div className="rounded-md bg-slate-200 h-[250px] w-full flex items-center justify-center">
                      <FaImage className="text-slate-300 text-4xl" />
                    </div>
                    <div className="flex-1 space-y-6 py-1">
                      <div className="h-2 bg-slate-200 rounded"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white font-mont">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-gilroy">
              Products List :
            </h2>
            <div className="p-5 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group shadow relative bg-white border rounded-md"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80 p-3">
                    <img
                      alt="product-image"
                      src={product.thumbnail}
                      className="bg-slate-200 rounded-md h-[250px] w-full object-contain object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 p-3">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <ReactPaginate
        previousLabel={<FaAnglesLeft />}
        nextLabel={<FaAnglesRight />}
        pageCount={numberOfPages}
        marginPagesDisplayed={4}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="bg-white flex items-center justify-center gap-5 text-black font-mont border p-5"
        pageClassName={"text-center rounded-md border shadow"}
        pageLinkClassName={"min-w-[40px] block py-1"}
        activeClassName={"bg-black text-white"}
      />
    </>
  );
};

export default ProductsDebug;
