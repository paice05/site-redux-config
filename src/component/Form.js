import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { actionsUser } from "../store/ducks/user";

const Form = () => {
  const dispatch = useDispatch();

  const userState = useSelector(state => state.user);

  console.log(userState);

  const handleAddUser = () => {
    dispatch(actionsUser.addUserInit());
    dispatch(
      actionsUser.addUserSuccess(
        "Matheus",
        "matheus@gmail.com",
        "paice",
        "1234567"
      )
    );
  };

  return (
    <div>
      <button onClick={handleAddUser}> Add user </button>
    </div>
  );
};

Form.propTypes = {};

export default Form;
