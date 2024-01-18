import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from "./routes/MainRouter";

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto z-[99999999999999]"
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;