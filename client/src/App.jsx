import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import MainBanner from "./components/home/MainBanner";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories/Categories";
import Register from "./components/register/Register";
import Listings from "./components/listings/Listings";
import ListingDetails from "./components/listings/all-listings/listing-details/ListingDetails";
import ListingsByCategory from "./components/categories/category/ListingsByCategory";
import Logout from "./components/logout/Logout";
import AddListing from "./components/add-listing/AddListing";
import EditListing from "./components/edit-listing/EditListing";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Preloader />

        <Header />
        <Routes>
          <Route path="/" element={<MainBanner />} />
          <Route path="/category/*" element={<Categories />}>
            <Route path=":categoryId" element={<ListingsByCategory />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/listings" element={<Listings />} />
          <Route
            path="/listings/details/:listingId"
            element={<ListingDetails />}
          />
          <Route path="/listings/edit/:listingId" element={<EditListing />} />
          <Route path="/add-listing" element={<AddListing />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
