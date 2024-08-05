import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useScroll } from "../../hooks/useScroll";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const scrollRef = useRef(null);
  useScroll(scrollRef);

  const [error, setError] = useState("");

  const login = useLogin();
  const navigate = useNavigate();

  async function loginHandler({ email, password }) {
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError("Error: Wrong email or password");
    }
  }

  const { formValues, updateHandler, submitHandler } = useForm(
    initialValues,
    loginHandler
  );

  return (
    <div className="page-heading" ref={scrollRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-page">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div>
                      {/* removed class inner-content */}
                      <div className="row justify-content-center">
                        <div className="col-lg-12 align-self-center">
                          <form id="contact" onSubmit={submitHandler}>
                            <div className="form-row">
                              <div className="form-group col-md-12">
                                <label htmlFor="email">Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  placeholder="user@gmail.com"
                                  autoFocus={true}
                                  value={formValues.email}
                                  onChange={updateHandler}
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label htmlFor="password">Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  name="password"
                                  placeholder="*********"
                                  value={formValues.password}
                                  onChange={updateHandler}
                                />
                              </div>
                            </div>
                            {error && (
                              <div className="alert alert-danger" role="alert">
                                {error}
                              </div>
                            )}
                            <div>
                              <p style={{ color: "white" }}>
                                Don't have an account?
                                <Link to={"http://localhost:5173/register"}>
                                  Register here.
                                </Link>
                                .
                              </p>
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
