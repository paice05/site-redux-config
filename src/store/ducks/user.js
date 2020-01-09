const intialState = {
  data: [],
  status: ""
};

export const typesUser = {
  addUserInit: "addUserInit",
  addUserSuccess: "addUserSuccess",
  addUserError: "addUserError"
};

export const actionsUser = {
  addUserInit: () => ({
    type: typesUser.addUserInit
  }),
  addUserSuccess: (name, email, username, password) => ({
    type: typesUser.addUserSuccess,
    payload: {
      name,
      email,
      username,
      password
    }
  }),
  addUserError: () => ({
    type: typesUser.addUserError
  })
};

export const reducerUser = (state = intialState, action) => {
  switch (action.type) {
    case typesUser.addUserInit:
      return {
        ...state,
        status: typesUser.addUserInit
      };
    case typesUser.addUserSuccess:
      return {
        data: [...state.data, action.payload],
        status: typesUser.addUserSuccess
      };
    case typesUser.addUserError:
      return {
        ...state,
        status: typesUser.addUserError
      };
    default:
      return state;
  }
};
