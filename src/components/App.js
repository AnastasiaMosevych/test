import { Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Hearts } from "react-loader-spinner";
import HomePage from "../pages/HomePage/HomePage";
import TweetsPage from "../pages/TweetsPage/TweetsPage";
import NotFound from "../pages/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route
            index element={
                <HomePage />
            }>
          </Route>
          <Route
            path="/tweets"
            element={
              <Suspense fallback={<Hearts 
                height="80"
                width="80"
                color="#5736A3"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />}>
                  <TweetsPage/>
              </Suspense>}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
