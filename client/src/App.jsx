import { Routes, Route } from "react-router-dom";

import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import MainBanner from "./components/home/MainBanner";
import AllListings from "./components/AllListings";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories/Categories";
import Register from "./components/register/Register";
import Recent from "./components/Recent";

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
          {/* <Route path="restaurants" element={<Categories />} />
          <Route path="nightlife" element={<Categories />} />
          <Route path="shops" element={<Categories />} />
          <Route path="museums" element={<Categories />} />
          <Route path="activities" element={<Categories />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all/*" element={<AllListings />}>
          <Route path="restaurants" element={<Recent />} />
        </Route>
      </Routes>

      {/* <Browse /> */}
      {/* TODO */}
      {/* <Recent /> */}

      <Footer />
    </>
  );
}

export default App;
