import { apiFetch, BASE_URL } from "./api_fetch.js";

function HorasService() {
  if (!HorasService.instance) {
    HorasService.instance = this;
  }
  return HorasService.instance;
}

ProductsService.prototype.updateHoratoUtc = (date, zone) =>
  apiFetch(`${BASE_URL}/utc/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date, zone }),
  });

  export default HorasService;