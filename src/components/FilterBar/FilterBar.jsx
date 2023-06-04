import React from "react";
import { useForm } from "react-hook-form";
import "./FilterBar.css";

const FilterBar = ({ setSelectData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSelectData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="filter-bar">
      <div className="fieldset-container">
        <fieldset className="form-fildset">
          <legend>Location</legend>
          <div>
            <label>
              <input
                type="checkbox"
                id="location-forest"
                name="location"
                value="Forest"
                {...register("location", { required: true })}
              />
              Forest
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="location-Beach"
                name="location"
                value="Beach"
                {...register("location", { required: true })}
              />
              Beach
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="location-wedding-hall"
                name="location"
                value="Wedding Hall"
                {...register("location", { required: true })}
              />
              Wedding Hall
            </label>
          </div>
          {errors.location && <span className="error">Please select a location</span>}
        </fieldset>

        <fieldset className="form-fildset">
          <legend>Time in Day</legend>
          <div>
            <label>
              <input
                type="checkbox"
                id="timeInDay-afternoon"
                name="timeInDay"
                value="Afternoon"
                {...register("timeInDay", { required: true })}
              />
              Afternoon
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="timeInDay-evening"
                name="timeInDay"
                value="Evening"
                {...register("timeInDay", { required: true })}
              />
              Evening
            </label>
          </div>
          {errors.timeInDay && <span className="error">Please select a time in day</span>}
        </fieldset>

        <fieldset className="form-fildset">
          <legend>Most of the Guests</legend>
          <div>
            <label>
              <input
                type="checkbox"
                id="guests-young-people"
                name="guests"
                value="Young people"
                {...register("guests", { required: true })}
              />
              Young people
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="guests-adults"
                name="guests"
                value="Adults"
                {...register("guests", { required: true })}
              />
              Adults
            </label>
          </div>
          {errors.guests && <span className="error">Please select the type of guests</span>}
        </fieldset>

        <fieldset className="form-fildset">
          <legend>Food Service</legend>
          <div>
            <label>
              <input
                type="checkbox"
                id="foodService-meat-menu"
                name="foodService"
                value="Meat menu"
                {...register("foodService", { required: true })}
              />
              Meat menu
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="foodService-dairy-menu"
                name="foodService"
                value="Dairy menu"
                {...register("foodService", { required: true })}
              />
              Dairy menu
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                id="foodService-vegan-menu"
                name="foodService"
                value="Vegan menu"
                {...register("foodService", { required: true })}
              />
              Vegan menu
            </label>
          </div>
          {errors.foodService && <span className="error">Please select a food service option</span>}
        </fieldset>

        <input type="submit" value="Submit" className="submit-filter" />
      </div>
    </form>
  );
};

export default FilterBar;
