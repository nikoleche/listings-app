import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import MainBanner from "./components/home/MainBanner";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories/Categories";
import Register from "./components/register/Register";
// import Recent from "./components/Recent";
import Listings from "./components/listings/Listings";
import ListingDetails from "./components/listings/all-listings/listing-details/ListingDetails";
import { AuthContext } from "./contexts/authContext";

function App() {
  const [authState, setAuthSTate] = useState({});

  function updateAuthState(state) {
    setAuthSTate(state);
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    updateAuthState,
  };
  return (
    <>
      <AuthContext.Provider value={contextData}>
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
          <Route path="/listings" element={<Listings />} />
          <Route
            path="/listings/details/:listingId"
            element={<ListingDetails />}
          />
        </Routes>

        {/* <Browse /> */}
        {/* TODO */}
        {/* <Recent /> */}

        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
