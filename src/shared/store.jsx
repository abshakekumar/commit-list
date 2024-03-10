import React, { useReducer, createContext, useContext } from "react";
import { getCurrDate, getDateOnlyISOformat, getLastMonthDate } from "./utils";
import { ACTIONS, ITEMS_PER_PAGE } from "./constants";

const CommitsContext = createContext();

const initialState = {
  startDate: getDateOnlyISOformat(getLastMonthDate()),
  endDate: getDateOnlyISOformat(getCurrDate()),
  pageNo: 1,
  perPageItemCount: ITEMS_PER_PAGE[0].value,
  loadingMain: false,
};

const commitsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET__START_DATE:
      return { ...state, startDate: action.payload, loadingMain: true };
    case ACTIONS.SET__END_DATE:
      return { ...state, endDate: action.payload, loadingMain: true };
    case ACTIONS.SET__PAGE_NO:
      return { ...state, pageNo: action.payload };
    case ACTIONS.SET__PER_PAGE:
      return { ...state, perPageItemCount: action.payload, loadingMain: true };
      case ACTIONS.SET__MAIN_LOADING:
      return { ...state, loadingMain: action.payload };
    default:
      throw new Error("Unsupported action type");
  }
};

export const CommitsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commitsReducer, initialState);

  return (
    <CommitsContext.Provider value={{ state, dispatch }}>
      {children}
    </CommitsContext.Provider>
  );
};

export const useCommitsState = () => {
  const context = useContext(CommitsContext);
  if (!context) {
    throw new Error("useCommitsState must be used within a CommitsProvider");
  }
  return context;
};
