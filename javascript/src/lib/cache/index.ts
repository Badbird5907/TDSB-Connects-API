import {setupCache} from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 30 * 60 * 1000 // 15 minutes
})
export default cache
