import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function NotFound() {
  return (
    <section
      className="p-0 bg-img cover-background"
      style={{
        backgroundImage: `url("http://localhost:5173/public/assets/images/banner-bg.jpg")`,
      }}
    >
      <div className="container-fluid d-flex flex-column">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-md-9 col-lg-6 my-5">
            <div className="text-center error-page">
              <h1 className="mb-0 text-secondary">404</h1>
              <h2 className="mb-4 text-white">Not Found</h2>
              <p className="w-sm-80 mx-auto mb-4 text-white">
                The page you are looking for doesn't exist.
              </p>
              <div>
                <Link to={"/"}>
                  <Button variant="primary">Home</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
