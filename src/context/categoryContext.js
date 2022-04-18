import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";

const InitialSharedState = {
  error: null,
  loading: false,
  data: [],
};

const SharedReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, loading: false, data: payload };
    case "ERROR":
      return { ...state, loading: false, error: payload };
  }
};

const CategoryContext = createContext(InitialSharedState);

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SharedReducer, InitialSharedState);
  const {
    data: categoryData,
    loading: ischipLoading,
    error: chipError,
  } = state;

  const [selectedCategory, setSelectedCategory] = useState("All");

  const getCategories = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get("/api/categories");
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.categories });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
      console.error(error);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        getCategories,
        categoryData,
        ischipLoading,
        chipError,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
