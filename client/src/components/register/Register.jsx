import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScroll } from "../../hooks/useScroll";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = {
  email: "",
  password: "",
  repeatpw: "",
};

export default function Register() {
  const scrollRef = useRef(null);
  useScroll(scrollRef);

  const [error, setError] = useState("");
  const register = useRegister();
  const navigate = useNavigate();

  async function registerHandler({ email, password, repeatpw }) {
    // Error handling
    if (password !== repeatpw) {
      return setError("Error: Passwords don't match");
    }

    if (!email || !password || !repeatpw) {
      return setError("Error: All fields are required");
    }

    try {
      await register(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.status);
      if (error.status === 409) {
        setError("Error: Username already exists");
      }
    }
  }

  const { formValues, updateHandler, submitHandler } = useForm(
    initialValues,
    registerHandler
  );

  return (
    <>
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
                                <div className="form-group col-md-12">
                                  <label htmlFor="repeatpw">
                                    Repeat password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="repeatpw"
                                    name="repeatpw"
                                    placeholder="*********"
                                    value={formValues.repeatpw}
                                    onChange={updateHandler}
                                  />
                                </div>
                              </div>
                              {error && (
                                <div
                                  className="alert alert-danger"
                                  role="alert"
                                >
                                  {error}
                                </div>
                              )}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
