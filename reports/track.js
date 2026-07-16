/* First-party visit logger for the Dr. ColorChip proposal hub.
   Records timestamp, IP + geolocation (city/region/country), page, and referrer
   to a private Google Sheet (via an Apps Script Web App).
   To ACTIVATE: paste your Apps Script /exec URL into LOG_ENDPOINT below. */
(function () {
  var LOG_ENDPOINT = ""; // <-- paste the Apps Script Web App URL here to turn it on

  if (!LOG_ENDPOINT) return;                                  // inert until endpoint is set
  var h = location.hostname;
  if (h === "localhost" || h === "127.0.0.1" || h === "") return; // ignore local previews

  var visit = {
    ts: new Date().toISOString(),
    page: location.pathname + location.search,
    title: document.title,
    ref: document.referrer || "",
    ua: navigator.userAgent || "",
    lang: navigator.language || "",
    screen: (screen.width + "x" + screen.height)
  };

  function send(data) {
    var body = JSON.stringify(data);
    try {
      fetch(LOG_ENDPOINT, { method: "POST", mode: "no-cors", keepalive: true,
        headers: { "Content-Type": "text/plain;charset=utf-8" }, body: body });
    } catch (e) {
      try { if (navigator.sendBeacon) navigator.sendBeacon(LOG_ENDPOINT, body); } catch (e2) {}
    }
  }

  // Enrich with IP + geo, then log. If geo lookup fails, log the visit anyway.
  fetch("https://ipapi.co/json/")
    .then(function (r) { return r.json(); })
    .then(function (g) {
      visit.ip = g.ip || "";
      visit.city = g.city || "";
      visit.region = g.region || "";
      visit.country = g.country_name || g.country || "";
      visit.org = g.org || "";
      send(visit);
    })
    .catch(function () { send(visit); });
})();
