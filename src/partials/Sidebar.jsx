import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ cat, tag, product, setProduct }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search !== "") {
      axios.get(`http://localhost:5050/product?q=${search}`).then((res) => {
        setProduct(res.data);
      });
    }
  });
  useEffect(() => {
    if (search !== "") {
      axios.get(`http://localhost:5050/product?q=${search}`).then((res) => {
        setProduct(res.data);
      });
    }
  });

  // Serch By Category
  const hadlerCategory = (e, id) => {
    e.preventDefault();
    setSearch("");
    axios.get(`http://localhost:5050/category/${id}/product`).then((res) => {
      setProduct(res.data);
    });
  };
  // Serch By Category
  const hadlerTag = (e, id) => {
    e.preventDefault();
    setSearch("");
    axios.get(`http://localhost:5050/tag/${id}/product`).then((res) => {
      setProduct(res.data);
    });
  };
  return (
    <div>
      <div class="sidebar ">
        <div class="widget widget-categories">
          <div class="widget-title mb-4">
            <h3>
              Search Peoduct<span></span>
            </h3>
            <div class="form-box">
              <input
                type="text"
                id="item"
                name="item"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div class="widget widget-price">
          <div class="widget-title">
            <h3>
              Price<span></span>
            </h3>
          </div>
          <div class="widget-content">
            <p>Price</p>
            <div class="price search-filter-input">
              <div
                id="slider-range"
                class="price-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
              >
                <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                <span
                  tabindex="0"
                  class="ui-slider-handle ui-corner-all ui-state-default"
                ></span>
                <span
                  tabindex="0"
                  class="ui-slider-handle ui-corner-all ui-state-default"
                ></span>
              </div>
              <p class="amount">
                <input type="text" id="amount" disabled="" />
              </p>
            </div>
          </div>
        </div>
        <div class="widget widget-categories">
          <div class="widget-title">
            <h3>
              Categories<span></span>
            </h3>
          </div>
          <ul class="cat-list style1 widget-content">
            {cat[0] &&
              cat.map((data) => (
                <li>
                  <span>
                    <a
                      onClick={(e) => hadlerCategory(e, data.id)}
                      href={data.id}
                    >
                      {" "}
                      {data.name}
                    </a>
                    <i></i>
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div class="widget widget-brands">
          <div class="widget-title">
            <h3>
              Popular Tags<span></span>
            </h3>
          </div>
          <div class="widget-content">
            <ul class="box-checkbox scroll">
              {tag[0] &&
                tag.map((data) => (
                  <li class="check-box">
                    <a onClick={(e) => hadlerTag(e, data.id)} href={data.id}>
                      {data.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
