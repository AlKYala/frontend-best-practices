import axios from "axios";

export async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

export async function fetchDataAxios() {
  const response = await axios.get('https://example.com/api/data');
  return response.data;
}