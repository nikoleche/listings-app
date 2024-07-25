export default function Register() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                <h2>Register to start adding listings and more</h2>
                <div className="contact-page">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="inner-content">
                          <div className="row justify-content-center">
                            <div className="col-lg-12 align-self-center">
                              <form>
                                <div className="form-row">
                                  <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="inputEmail4"
                                      placeholder="user@gmail.com"
                                    />
                                  </div>
                                  <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">
                                      Password
                                    </label>
                                    <input
                                      type="password"
                                      className="form-control"
                                      id="inputPassword4"
                                      placeholder="*********"
                                    />
                                  </div>
                                  <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">
                                      Repeat password
                                    </label>
                                    <input
                                      type="password"
                                      className="form-control"
                                      id="repeatPw"
                                      placeholder="*********"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
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
                                </div>
                                <button
                                  className="main-white-button"
                                  type="submit"
                                >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
