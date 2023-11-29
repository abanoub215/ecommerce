import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "./mobile.css";
import { useNavigate, Link } from "react-router-dom";

function Mobiles() {
  const navigate = useNavigate();
  const [mobiles, setMobiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Get products
  const getAllMobiles = async () => {
    try {
      const response = await fetch("http://localhost:8080/mobiles");
      const json = await response.json();
      setMobiles(json);
    } catch (error) {
      console.error("Cannot fetch data", error);
    }
  };

  useEffect(() => {
    getAllMobiles();
  }, []);

  const toggleDetails = (mobileId) => {
    setMobiles((prevMobiles) =>
      prevMobiles.map((mobile) =>
        mobile.id === mobileId
          ? { ...mobile, toggledetails: !mobile.toggledetails }
          : mobile
      )
    );
  };

  // Filter mobiles based on search query
  const filteredMobiles = mobiles.filter((mobile) =>
    mobile.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="searchhhh">
        <div className="container">
          <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="search">
                <i className="fa fa-search" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="SEARCH PRODUCTS"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* search */}
      <div
        className="container-fluid bg-trasparent my-4 p-3 cc"
        style={({ position: "relative" }, { minHeight: "150vh" })}
      >
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          {filteredMobiles.map((mobile) => (
            <div key={mobile.id} className="col hp">
              <div className="card h-100 shadow-sm">
                <Link to={`/mobiles/mobiledetails/${mobile.id}`}>
                  <img
                    src={mobile.phoneImagePath}
                    className="card-img-top"
                    alt={mobile.title}
                  />
                </Link>

                <div className="card-body">
                  <div className="clearfix mb-3">
                    <span className="float-start badge rounded-pill bg-success">
                      {mobile.price}
                    </span>
                  </div>
                  <h5 className="card-title">{mobile.title}</h5>
                  {mobile.toggledetails && <p>{mobile.details}</p>}
                  <div className="d-grid gap-2 my-4">
                    <button
                      className="btn btn-warning bold-btn"
                      onClick={() => toggleDetails(mobile.id)}
                    >
                      {mobile.toggledetails ? "Hide" : "See"} Details
                    </button>
                    <button
                      className="btn btn-warning bold-btn"
                      onClick={() =>
                        navigate(`/mobiles/mobiledetails/${mobile.id}`)
                      }
                    >
                      Buy
                    </button>
                  </div>
                  <div className="clearfix mb-1">
                    <span className="float-start">
                      <a href="#">
                        <i className="fas fa-question-circle"></i>
                      </a>
                    </span>
                    <span className="float-end">
                      <i
                        className="far fa-heart"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mobiles;
