export default function Login() {
  return (
    <div className="page-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner-content">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <form id="contact" action="" method="get">
                    <div className="row">
                      <div className="col-lg-4">
                        <fieldset>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            autoComplete="on"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            autoComplete="on"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button "
                          >
                            <i className="fa fa-solid fa-key"></i> Log In
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
