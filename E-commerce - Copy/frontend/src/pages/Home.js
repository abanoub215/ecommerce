// import { json } from "react-router-dom";
import Footer from "../components/Footer";
import Search from "../components/Search";
import { useAuth } from "../context/auth";
function Home() {
  const [auth, setAuth] = useAuth();
  return (
    <div>
      <div className="searchhhh">
        <div>
          <div className="container">
            <div className="row height d-flex justify-content-center align-items-center">
              <div className="col-md-8">
                <div className="search">
                  <i className="fa fa-search" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="SEARCH PRODUCTS"
                  />
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ minHeight: "80vh" }}>home</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
