import React, { createContext, useState, useEffect } from "react";
import UniversityModel from "../models/UniversityModel";

const UniversityContext = createContext();

const UniversityProvider = ({ children }) => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const model = new UniversityModel();
        const data = await model.fetchUniversities();
        setUniversities(data);
        localStorage.setItem("universities", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching universities:", error);
        const storedData = localStorage.getItem("universities");
        if (storedData) {
          setUniversities(JSON.parse(storedData));
        }
      }
    };

    fetchData();
  }, []);

  return (
    <UniversityContext.Provider value={{ universities }}>
      {children}
    </UniversityContext.Provider>
  );
};

export { UniversityContext, UniversityProvider };
