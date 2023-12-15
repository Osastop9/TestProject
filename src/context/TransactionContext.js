import createDataContext from "./createDataContext";
import api from "../axios/api";

const transactionReducer = (state, action) => {
  switch (action.type) {
    case "add_money":
      return { ...state, amount: action.payload.amount };
    default:
      return state;
  }
};

const addMoney = (dispatch) => {
  return async ({ amount, navigation }) => {
    try {
      await api.post("/add-money", { amount });
      dispatch({ type: "add_money", payload: { amount } });
      if (navigation) {
        navigation.pop();
      }
    } catch (error) {
      console.error("API Request Error:", error);
    }
  };
};

export const { Context, Provider } = createDataContext(
  transactionReducer,
  { addMoney },
  { amount: 20000 }
);
