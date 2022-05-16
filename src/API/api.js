import axios from "axios";

export const fetchCasesForAll = async () => {
  try {
    const { data } = await axios.get("https://api.covid19api.com/summary");
    return data;
  } catch (error) {
    console.log(error);
  }
};
