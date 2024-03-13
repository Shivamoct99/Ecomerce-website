const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curelm) => curelm.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          price: maxPrice,
          maxPrice,
        },
      };
    case "SET_GRID_VIEW":
      return { ...state, grid_view: true };

    case "SET_LIST_VIEW":
      return { ...state, grid_view: false };

    case "SORTING_VIEW":
      return { ...state, sorting_value: action.payload };

    case "SORTING_PRODUCTS":
      const { filter_products, sorting_value } = state;
      let newSortData;
      let tempSortProduct = [...filter_products];
      let sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortData = tempSortProduct.sort(sortingProducts);
      return { ...state, filter_products: newSortData };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCTS":
      const { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curelmt) => {
          return curelmt.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curelmt) => {
          return curelmt.category === category;
        });
      }
      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curelmt) => {
          return curelmt.company === company;
        });
      }
      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curelmt) => {
          return curelmt.colors.includes(color);
        });
      }
      if (price) {
        tempFilterProduct = tempFilterProduct.filter((curelmt) => {
          return curelmt.price <= price;
        });
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: state.filters.maxPrice,
          maxPrice: state.filters.maxPrice,
          minPrice: 0,
        },
      };

    default:
      return state;
  }
};

export default FilterReducer;
