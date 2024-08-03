import { useRef } from "react";
import { useScroll } from "../../hooks/useScroll";

export default function Login() {
  const scrollRef = useRef(null);
  useScroll(scrollRef);
  return (
    <div className="page-heading" ref={scrollRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-page">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="">
                      {/* removed class inner-content */}
                      <div className="row justify-content-center">
                        <div className="col-lg-12 align-self-center">
                          <form id="contact">
                            <div className="form-row">
                              <div className="form-group col-md-12">
                                <label htmlFor="email">Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  placeholder="user@gmail.com"
                                  autoFocus="true"
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label htmlFor="password">Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  placeholder="*********"
                                />
                              </div>
                            </div>
                            <button className="main-button" type="submit">
                              <i className="fa fa-solid fa-key"></i>
                              Log In
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
