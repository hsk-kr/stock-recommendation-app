import axios from "axios";
import env from "../env";

const API_URL = `http://${env.API_HOST}`;
const STOCK_API = `${API_URL}/api/v1/stock`;

//http://3.34.136.18:10000/api/v1/stock/analyzed-stocks/2020/7/11

/**
 * It returns analyzed stocks by the date params.
 * If there is an error, returns null.
 * @param {number} year
 * @param {number} month
 * @param {number} date
 */
export const fetchAnalyzedStocks = async (year, month, date) => {
  try {
    const res = await axios.get(
      `${STOCK_API}/analyzed-stocks/${year}/${month}/${date}`
    );

    if (res.status !== 200) {
      throw new Error(res.status);
    }

    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
