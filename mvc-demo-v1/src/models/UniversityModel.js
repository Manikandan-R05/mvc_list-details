class UniversityModel {
  async fetchUniversities() {
    try {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch universities");
      }

      const data = await response.json();
      localStorage.setItem("universities", JSON.stringify(data));
      return data;
    } catch (error) {
      console.error("Error fetching universities:", error);
      return "Error fetching universities";
    }
  }

  getUniversitiesFromStorage() {
    const universities = localStorage.getItem("universities");
    return universities ? JSON.parse(universities) : [];
  }
}

export default UniversityModel;
