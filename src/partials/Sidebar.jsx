import React from "react";
import './Sidebar.css';


const Sidebar = ({cat, tag}) => {
  return (
    <div>
      <div class="sidebar ">
        <div class="widget widget-categories">
          <div class="widget-title">
            <h3>
              Categories<span></span>
            </h3>
          </div>
          <ul class="cat-list style1 widget-content">
            {
              cat.map( data => 
                
                    <li>
                  <span>
                    {data.name}<i></i>
                  </span>
                </li>
              
                )
            }
            
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

              {
                tag.map( data => 
                  <li class="check-box">
                      <a href="">{data.name}</a>
                  </li>
                  
                  )
              }


            </ul>
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

      </div>
    </div>
  );
};

export default Sidebar;
