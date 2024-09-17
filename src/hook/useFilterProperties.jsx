import Axios from "@/axios/axios";
import axios from "axios";
import { useState } from "react";

const useFilterProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const filterProperties = async ({ category, condition, priceSort }) => {
    try {
      setLoading(true);
      setError(null);

      const response = await Axios.post("/properties/filter", {
        category, // "Rumah", "Apartemen", "Tanah", "Ruko"
        condition, // "Baru", "Bekas"
        priceSort, // "termahal", "termurah"
      });

      console.log("response =", response);
      setProperties(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { properties, filterProperties, loading, error };
};

export default useFilterProperties;
