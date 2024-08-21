import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< HEAD
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
=======
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Preloader from "./components/Preloader.jsx";
>>>>>>> b6cb52791387454cc7924b70ad5ea3d9d3693751

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
<<<<<<< HEAD
    <Suspense>
=======
    <Suspense fallback={<Preloader/>}>
>>>>>>> b6cb52791387454cc7924b70ad5ea3d9d3693751
      <App />
    </Suspense>
  </QueryClientProvider>

  // <React.StrictMode>
  // </React.StrictMode>
);
