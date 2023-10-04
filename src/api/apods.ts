import { Apod } from "../types";

const API_KEY ='258218b41de5cbfd9b68beca39eb482a';
const BASE_URL = `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}`;

export const fetchApods = async (): Promise<Apod[]> => {
  try {
    const res = await fetch(
      `${BASE_URL}&base=USD&currencies=XAU`
    );
    return await res.json();
  } catch (e) {
    console.log("Error fetching pictures: ", e.message);
    return [];
  }
};

export const fetchApod = async (date: string): Promise<Apod> => {
  try {
    const res = await fetch(`${BASE_URL}&base=USD`);
    return await res.json();
  } catch (e) {
    console.log('Error fetching pictures: ', e.message);
    return null;
  }
};