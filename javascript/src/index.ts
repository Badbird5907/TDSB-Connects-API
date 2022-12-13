import TDSBConnectsAPI from "./lib";

export const CLIENT_ID = "TDSBConnectsAPI||||0.0.0||2147483647|";
export const API_BASE = "https://zappsmaprd.tdsb.on.ca/";


const username = process.env.TDSB_USERNAME;
const password = process.env.TDSB_PASSWORD;

if (username == null || password == null) {
  console.error("Please set TDSB_USERNAME and TDSB_PASSWORD environment variables");
  process.exit(1);
}

const tdsbConnects = new TDSBConnectsAPI(username, password);
console.log('TDSB Connects: ',tdsbConnects);
