import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input placeholder="Name" name="name" type="name" id="name" />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
