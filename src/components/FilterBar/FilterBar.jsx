import React from "react";
import "./FilterBar.css";
const FilterBar = ({setFilterData}) => {
  return (
    <form action="" className="filter-bar">
      <div className="fieldset-container">
        <fieldset className="form-fildset" >
          <legend>loction</legend>
          <div>
            <label>
              <input
                type="checkbox"
                id="loction"
                name="interest"
                value="Forest"
              />
              Forest
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" id="sea" name="interest" value="sea" />
              sea
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="wedding hall"
                name="interest"
                value="wedding hall"
              />
              wedding hall
            </label>
          </div>
        </fieldset>

        <fieldset className="form-fildset" >
          <legend>Time in day</legend>
          <div>
            <label>
              <input
                type="checkbox"
                id="Afternoon"
                name="interest"
                value="Afternoon"
              />
              Afternoon
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="evening"
                name="interest"
                value="evening"
              />
              evening
            </label>
          </div>
        </fieldset>
        <fieldset className="form-fildset" >
          <legend>Most of the guests?</legend>
          <div>
            <label>
              <input
                type="checkbox"
                id="Young people"
                name="interest"
                value="Young people"
              />
              Young people
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="adults"
                name="interest"
                value="adults"
              />
              adults
            </label>
          </div>
        </fieldset>
        <fieldset className="form-fildset" >
          <legend>food service</legend>
          <div>
            <label>
              <input
                type="checkbox"
                id="Meat menu"
                name="interest"
                value="Meat menu"
              />
              Meat menu
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="Dairy menu"
                name="interest"
                value="Dairy menu"
              />
              Dairy menu
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="Vegan menu"
                name="interest"
                value="Vegan menu"
              />
              Vegan menu
            </label>
          </div>
        </fieldset>
        <input type="submit" value="submit" className="submite-filter" />
      </div>
    </form>
  );
};

export default FilterBar;
