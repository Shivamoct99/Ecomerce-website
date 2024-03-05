import { createContext, useContext, useReducer, useEffect } from "react";
import { UseProductContext } from "./Productcontext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
};
const FilterContextProvider = ({ children }) => {
  const { products } = UseProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);
  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  const sorting = (e) => {
    let userValue = e.target.value;
    return dispatch({ type: "SORTING_VIEW", payload: userValue });
  };

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value]);
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};
const useFilterContext = () => {
  return useContext(FilterContext);
};
export { FilterContextProvider, useFilterContext };
