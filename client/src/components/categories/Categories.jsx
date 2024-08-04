import { useRef } from "react";
import { useScroll } from "../../hooks/useScroll";
import { Outlet } from "react-router-dom";
import Browse from "./browse/Browse";

export default function Categories() {
  const scrollRef = useRef(null);
  useScroll(scrollRef);

  return (
    <>
      <div className="page-heading" ref={scrollRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                {/* top-text header-text */}
                <h2>Discover listings by categories</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Browse />

      <Outlet />
    </>
  );
}
