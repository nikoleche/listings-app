import { Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import Browse from "./components/Browse";
import Recent from "./components/Recent";
import Footer from "./components/Footer";

import Categories from "./components/Categories";
import Login from "./components/Login";
import AllListings from "./components/AllListings";

function App() {
  return (
    <>
      <Preloader />

      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBanner />
              {/* <Browse /> */}
            </>
          }
        />
        <Route path="/category/*" element={<Categories />}>
          <Route path="restaurants" element={<Categories />} />
          <Route path="nightlife" element={<Categories />} />
          <Route path="shops" element={<Categories />} />
          <Route path="museums" element={<Categories />} />
          <Route path="activities" element={<Categories />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/all" element={<AllListings />} />
      </Routes>

      {/* <Browse /> */}
      {/* TODO */}
      {/* <Recent /> */}

      <Footer />
    </>
  );
}

export default App;
