"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_cache_adapter_1 = require("axios-cache-adapter");
const cache = (0, axios_cache_adapter_1.setupCache)({
    maxAge: 30 * 60 * 1000 // 15 minutes
});
exports.default = cache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NhY2hlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQStDO0FBRS9DLE1BQU0sS0FBSyxHQUFHLElBQUEsZ0NBQVUsRUFBQztJQUN2QixNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYTtDQUNyQyxDQUFDLENBQUE7QUFDRixrQkFBZSxLQUFLLENBQUEifQ==