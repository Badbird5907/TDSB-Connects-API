import TDSBConnectsAPI from 'tdsb-connects-api/src/lib/index';
const username = process.env.TDSB_USERNAME;
const password = process.env.TDSB_PASSWORD;

if (username == null || password == null) {
  console.error("Please set TDSB_USERNAME and TDSB_PASSWORD environment variables");
  process.exit(1);
}

const tdsbConnects = new TDSBConnectsAPI(username, password);
console.log('TDSB Connects: ',tdsbConnects);
