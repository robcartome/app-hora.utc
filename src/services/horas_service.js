import { apiFetch, BASE_URL } from "./api_fetch.js";

function HorasService() {
  if (!HorasService.instance) {
    HorasService.instance = this;
  }
  return HorasService.instance;
}

HorasService.prototype.updateHoratoUtc = (date, zone) =>{
  const response = apiFetch(`${BASE_URL}/api/utc`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ "fecha": date, "zona": zone }),
  });
  return response
}
  export default HorasService;