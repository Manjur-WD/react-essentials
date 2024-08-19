import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState, useEffect } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500); // Delay of 500ms

    return () => {
      clearTimeout(handler); // Clear timeout if searchQuery changes before 500ms
    };
  }, [searchQuery]);

  const loadSearchResults = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${debouncedQuery}`
      );
      return response.data.products || [];
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const { data: searchResults, isLoading, isError } = useQuery({
    queryKey: ["searchedproducts", debouncedQuery],
    queryFn: loadSearchResults,
    enabled: !!debouncedQuery.trim(), // Only run the query if debouncedQuery is not empty
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const getProduct = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="search-input font-mont md:w-1/2 lg:w-1/2 ms-auto fixed top-3 right-3 z-10 bg-white p-5 shadow">
        <label
          htmlFor="search"
          className="block text-sm font-medium leading-6 text-black"
        >
          Search Here...
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            id="search"
            name="search"
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Type something you want to search..."
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {debouncedQuery.trim() && (
            <div
              className="search-result bg-white overflow-auto"
              style={{ maxHeight: "400px" }}
            >
              <div className="flow-root rounded-lg border border-gray-100 py-3">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                  {isLoading ? (
                    <div className="p-3 text-gray-500">Loading...</div>
                  ) : isError ? (
                    <div className="p-3 text-red-500">Error loading data</div>
                  ) : searchResults && searchResults.length ? (
                    searchResults.map((item) => (
                      <div
                        key={item.id}
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 cursor-pointer"
                        onClick={() => getProduct(item.id)}
                      >
                        <dt className="font-medium text-gray-900 bg-slate-300 h-[80px] w-[80px] rounded-full overflow-hidden">
                          <img src={item.thumbnail} alt={item.title} />
                        </dt>
                        <dd className="text-gray-700 sm:col-span-2 pt-5">
                          {item.title}
                        </dd>
                      </div>
                    ))
                  ) : (
                    <div className="p-3 text-gray-500">No results found</div>
                  )}
                </dl>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchInput;
