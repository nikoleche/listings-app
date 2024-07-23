import Preloader from "./components/Preloader";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import Browse from "./components/Browse";
import Recent from "./components/Recent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Preloader />

      <Header />

      <MainBanner />

      <Browse />
      {/* TODO */}
      <Recent />

      <Footer />
    </>
  );
}

export default App;
