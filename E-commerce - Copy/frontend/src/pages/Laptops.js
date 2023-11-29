import Footer from "../components/Footer";
import Search from "../components/Search";
function Laptops() {
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
      <h1 style={{ minHeight: "80vh" }}>laptops</h1>
      <Footer />
    </div>
  );
}

export default Laptops;
