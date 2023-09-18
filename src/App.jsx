import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import { Suspense } from "react";
import Loading from "./Shared/Loading/Loading";

function App() {
  return (
    <div className="font-jost">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </div>
  );
}

export default App;
