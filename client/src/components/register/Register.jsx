export default function Register() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <div className="top-text header-text"> */}
              {/* <h2>Register to start adding listings and more</h2> */}
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
                                <div className="form-group col-md-12">
                                  <label htmlFor="repeatpw">
                                    Repeat password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="repeatpw"
                                    placeholder="*********"
                                  />
                                </div>
                              </div>
                              {/* <div className="form-group">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="gridCheck"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="gridCheck"
                                    >
                                      I'm not a robot
                                    </label>
                                  </div>
                                </div> */}
                              <button className="main-button" type="submit">
                                <i className="fa fa-solid fa-pencil"></i>
                                Register
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
