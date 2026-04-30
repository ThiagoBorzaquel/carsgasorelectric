/* carsgasorelectric.com — TCO simulator
   Pure JS, Chart.js via CDN. Mobile-first. */

(function () {
  "use strict";

  // -------- i18n --------
  const I18N = {
    en: {
      hero_title: "Is an electric car worth it for you?",
      hero_sub: "Compare the total cost of ownership of an electric car vs a gasoline car. Free, instant, and unbiased.",
      tab_sim: "Simulation", tab_res: "Results", tab_ch: "Charts",
      card_ev: "Electric car", card_ice: "Gasoline car", card_use: "Usage & taxes",
      ev_price: "Vehicle price", ice_price: "Vehicle price",
      kwh_per_100: "Energy use (kWh / 100 km)", l_per_100: "Consumption (L / 100 km)",
      energy_price: "Energy price (per kWh)", fuel_price: "Fuel price (per L)",
      km_year: "Kilometers per year", years: "Years of analysis",
      tax_ev: "Annual tax / maintenance EV", tax_ice: "Annual tax / maintenance gas",
      calc: "Calculate", reset: "Reset",
      k_savings: "Total savings", k_payback: "Payback", k_breakeven: "Break-even", k_roi: "ROI",
      verdict: "Verdict", verdict_empty: "Run the simulation to see the verdict.",
      chart1: "Cumulative cost over time", chart2: "Yearly difference (gas − electric)",
      seo_h1: "Electric car vs gasoline car: which one is worth it?",
      seo_p1: "The total cost of ownership (TCO) of an electric car includes the purchase price, energy, taxes and maintenance. Although EVs usually cost more upfront, lower energy and maintenance costs typically make them cheaper over time.",
      seo_h2: "How the simulator works",
      seo_p2: "We project annual costs for both vehicles based on your inputs and compute savings, payback, break-even year and ROI so you can make an informed decision.",
      seo_h3: "Keywords we cover",
      f_terms: "Terms", f_privacy: "Privacy", f_cookies: "Cookies",
      cookie_msg: "We use cookies to improve your experience and show ads. By continuing you agree.",
      cookie_accept: "Accept",
      v_ev_wins: "The electric car is the better choice. You save {savings} over {years} years with payback in {payback}.",
      v_ice_wins: "The gasoline car is cheaper in this scenario by {savings} over {years} years.",
      v_tie: "Both options have very similar total cost in this scenario.",
      never: "Never within period", year_unit: "years", months_unit: "months",
    },
    es: {
      hero_title: "¿Vale la pena un coche eléctrico para ti?",
      hero_sub: "Compara el coste total de propiedad de un coche eléctrico frente a uno de gasolina. Gratis e imparcial.",
      tab_sim: "Simulación", tab_res: "Resultados", tab_ch: "Gráficos",
      card_ev: "Coche eléctrico", card_ice: "Coche de gasolina", card_use: "Uso e impuestos",
      ev_price: "Precio del vehículo", ice_price: "Precio del vehículo",
      kwh_per_100: "Consumo (kWh / 100 km)", l_per_100: "Consumo (L / 100 km)",
      energy_price: "Precio energía (por kWh)", fuel_price: "Precio combustible (por L)",
      km_year: "Kilómetros por año", years: "Años de análisis",
      tax_ev: "Impuestos / mantenimiento anual EV", tax_ice: "Impuestos / mantenimiento anual gas",
      calc: "Calcular", reset: "Restablecer",
      k_savings: "Ahorro total", k_payback: "Retorno", k_breakeven: "Punto de equilibrio", k_roi: "ROI",
      verdict: "Veredicto", verdict_empty: "Ejecuta la simulación para ver el veredicto.",
      chart1: "Coste acumulado en el tiempo", chart2: "Diferencia anual (gas − eléctrico)",
      seo_h1: "Coche eléctrico vs gasolina: ¿cuál compensa?",
      seo_p1: "El coste total de propiedad (TCO) de un coche eléctrico incluye precio, energía, impuestos y mantenimiento.",
      seo_h2: "Cómo funciona el simulador",
      seo_p2: "Proyectamos los costes anuales y calculamos ahorro, retorno, punto de equilibrio y ROI.",
      seo_h3: "Palabras clave",
      f_terms: "Términos", f_privacy: "Privacidad", f_cookies: "Cookies",
      cookie_msg: "Usamos cookies para mejorar la experiencia y mostrar anuncios.",
      cookie_accept: "Aceptar",
      v_ev_wins: "El coche eléctrico es la mejor opción. Ahorras {savings} en {years} años con retorno en {payback}.",
      v_ice_wins: "El coche de gasolina es más barato por {savings} en {years} años.",
      v_tie: "Ambas opciones tienen un coste total muy similar.",
      never: "Nunca en el periodo", year_unit: "años", months_unit: "meses",
    },
    fr: {
      hero_title: "Une voiture électrique en vaut-elle la peine ?",
      hero_sub: "Comparez le coût total de possession d’une voiture électrique et d’une voiture essence. Gratuit et impartial.",
      tab_sim: "Simulation", tab_res: "Résultats", tab_ch: "Graphiques",
      card_ev: "Voiture électrique", card_ice: "Voiture essence", card_use: "Usage & taxes",
      ev_price: "Prix du véhicule", ice_price: "Prix du véhicule",
      kwh_per_100: "Consommation (kWh / 100 km)", l_per_100: "Consommation (L / 100 km)",
      energy_price: "Prix énergie (par kWh)", fuel_price: "Prix carburant (par L)",
      km_year: "Kilomètres par an", years: "Années d’analyse",
      tax_ev: "Taxe / entretien annuel VE", tax_ice: "Taxe / entretien annuel essence",
      calc: "Calculer", reset: "Réinitialiser",
      k_savings: "Économies totales", k_payback: "Retour", k_breakeven: "Seuil", k_roi: "ROI",
      verdict: "Verdict", verdict_empty: "Lancez la simulation pour voir le verdict.",
      chart1: "Coût cumulé dans le temps", chart2: "Différence annuelle (essence − électrique)",
      seo_h1: "Voiture électrique vs essence : laquelle choisir ?",
      seo_p1: "Le coût total de possession (TCO) inclut le prix, l’énergie, les taxes et l’entretien.",
      seo_h2: "Comment fonctionne le simulateur",
      seo_p2: "Nous projetons les coûts annuels et calculons économies, retour, seuil et ROI.",
      seo_h3: "Mots-clés",
      f_terms: "Conditions", f_privacy: "Confidentialité", f_cookies: "Cookies",
      cookie_msg: "Nous utilisons des cookies pour améliorer l’expérience et afficher des publicités.",
      cookie_accept: "Accepter",
      v_ev_wins: "La voiture électrique est le meilleur choix. Vous économisez {savings} sur {years} ans avec retour en {payback}.",
      v_ice_wins: "La voiture essence est moins chère de {savings} sur {years} ans.",
      v_tie: "Les deux options ont un coût total très similaire.",
      never: "Jamais sur la période", year_unit: "ans", months_unit: "mois",
    },
  };

  let currentLang = localStorage.getItem("lang") || "en";

  function applyI18n() {
    const dict = I18N[currentLang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if (dict[k]) el.textContent = dict[k];
    });
    document.documentElement.lang = currentLang;
  }

  // -------- Tabs --------
  function setupTabs() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected","false"); });
        document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
        tab.classList.add("active");
        tab.setAttribute("aria-selected","true");
        const id = "panel-" + tab.dataset.tab;
        document.getElementById(id).classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  // -------- Calculation --------
  function num(id) { return parseFloat(document.getElementById(id).value) || 0; }

  function fmtMoney(v) {
    const locale = currentLang === "fr" ? "fr-FR" : currentLang === "es" ? "es-ES" : "en-US";
    return new Intl.NumberFormat(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);
  }

  function fmtDuration(years) {
    const dict = I18N[currentLang];
    if (!isFinite(years) || years <= 0) return dict.never;
    const y = Math.floor(years);
    const m = Math.round((years - y) * 12);
    if (y === 0) return `${m} ${dict.months_unit}`;
    return `${y} ${dict.year_unit}${m ? ` ${m} ${dict.months_unit}` : ""}`;
  }

  let lineChart, barChart;

  function calculate() {
    const evPrice = num("evPrice");
    const icePrice = num("icePrice");
    const evKwh = num("evKwh");        // kWh / 100 km
    const iceL = num("iceL");          // L / 100 km
    const energyPrice = num("energyPrice");
    const fuelPrice = num("fuelPrice");
    const kmYear = num("kmYear");
    const years = Math.max(1, Math.min(20, num("years") || 1));
    const taxEv = num("taxEv");
    const taxIce = num("taxIce");

    // Annual operating cost
    const evAnnual = (kmYear / 100) * evKwh * energyPrice + taxEv;
    const iceAnnual = (kmYear / 100) * iceL * fuelPrice + taxIce;

    // Build cumulative cost arrays (year 0 = purchase)
    const labels = [];
    const evCum = [];
    const iceCum = [];
    const yearlyDiff = []; // gas - electric per year
    let breakEvenYear = Infinity;

    for (let y = 0; y <= years; y++) {
      labels.push("Y" + y);
      const ev = evPrice + evAnnual * y;
      const ice = icePrice + iceAnnual * y;
      evCum.push(Math.round(ev));
      iceCum.push(Math.round(ice));
      if (y > 0) yearlyDiff.push(Math.round(iceAnnual - evAnnual));
      if (y > 0 && ev <= ice && breakEvenYear === Infinity) {
        // fractional break-even: solve evPrice + evAnnual*t = icePrice + iceAnnual*t
        const denom = (iceAnnual - evAnnual);
        if (denom > 0) breakEvenYear = (evPrice - icePrice) / denom;
      }
    }

    const totalEv = evCum[evCum.length - 1];
    const totalIce = iceCum[iceCum.length - 1];
    const savings = totalIce - totalEv; // positive => EV cheaper

    // Payback (years for EV upfront premium to be recovered by annual savings)
    const upfrontPremium = evPrice - icePrice;
    const annualSaving = iceAnnual - evAnnual;
    let payback = Infinity;
    if (upfrontPremium <= 0 && annualSaving >= 0) payback = 0;
    else if (annualSaving > 0) payback = upfrontPremium / annualSaving;

    // ROI = savings / EV investment
    const roi = evPrice > 0 ? (savings / evPrice) * 100 : 0;

    // Update KPIs
    document.getElementById("kSavings").textContent = fmtMoney(Math.abs(savings));
    document.getElementById("kPayback").textContent = fmtDuration(payback);
    document.getElementById("kBreak").textContent = fmtDuration(breakEvenYear);
    document.getElementById("kRoi").textContent = (roi >= 0 ? "+" : "") + roi.toFixed(1) + "%";

    // Verdict
    const dict = I18N[currentLang];
    const verdictCard = document.getElementById("verdictCard");
    const verdictText = document.getElementById("verdictText");
    verdictCard.classList.remove("good","bad");
    const threshold = Math.max(500, totalIce * 0.02);
    if (Math.abs(savings) < threshold) {
      verdictText.textContent = dict.v_tie;
    } else if (savings > 0) {
      verdictCard.classList.add("good");
      verdictText.textContent = dict.v_ev_wins
        .replace("{savings}", fmtMoney(savings))
        .replace("{years}", years)
        .replace("{payback}", fmtDuration(payback));
    } else {
      verdictCard.classList.add("bad");
      verdictText.textContent = dict.v_ice_wins
        .replace("{savings}", fmtMoney(-savings))
        .replace("{years}", years);
    }

    drawCharts(labels, evCum, iceCum, yearlyDiff);

    // Switch to results tab
    document.querySelector('.tab[data-tab="res"]').click();
  }

  function drawCharts(labels, evCum, iceCum, yearlyDiff) {
    if (typeof Chart === "undefined") return;
    const grid = "#252b33", text = "#cfd6df";
    Chart.defaults.color = text;
    Chart.defaults.borderColor = grid;
    Chart.defaults.font.family = '-apple-system, "Segoe UI", Roboto, Inter, sans-serif';

    const lineCtx = document.getElementById("chartLine");
    const barCtx = document.getElementById("chartBar");

    if (lineChart) lineChart.destroy();
    if (barChart) barChart.destroy();

    lineChart = new Chart(lineCtx, {
      type: "line",
      data: {
        labels,
        datasets: [
          { label: "Electric", data: evCum, borderColor: "#36e2a4", backgroundColor: "rgba(54,226,164,.15)", tension: .3, fill: true, pointRadius: 2 },
          { label: "Gasoline", data: iceCum, borderColor: "#ffb84d", backgroundColor: "rgba(255,184,77,.12)", tension: .3, fill: true, pointRadius: 2 },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: "top" } },
        scales: { y: { ticks: { callback: v => "$" + v.toLocaleString() } } },
      },
    });

    const yearLabels = labels.slice(1);
    barChart = new Chart(barCtx, {
      type: "bar",
      data: {
        labels: yearLabels,
        datasets: [{
          label: "Gas − Electric",
          data: yearlyDiff,
          backgroundColor: yearlyDiff.map(v => v >= 0 ? "rgba(54,226,164,.7)" : "rgba(255,107,107,.7)"),
          borderColor: yearlyDiff.map(v => v >= 0 ? "#36e2a4" : "#ff6b6b"),
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { ticks: { callback: v => "$" + v.toLocaleString() } } },
      },
    });
  }

  // -------- Cookie banner --------
  function setupCookies() {
    const banner = document.getElementById("cookieBanner");
    if (!localStorage.getItem("cookieAccepted")) banner.hidden = false;
    document.getElementById("cookieAccept").addEventListener("click", () => {
      localStorage.setItem("cookieAccepted", "1");
      banner.hidden = true;
    });
  }

  // -------- Reset --------
  function reset() {
    const defaults = { evPrice:40000, evKwh:16, energyPrice:.20, icePrice:28000, iceL:7, fuelPrice:1.60, kmYear:15000, years:8, taxEv:400, taxIce:900 };
    Object.entries(defaults).forEach(([k,v]) => { const el = document.getElementById(k); if (el) el.value = v; });
  }

  // -------- Init --------
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    setupTabs();
    setupCookies();
    document.getElementById("calcBtn").addEventListener("click", calculate);
    document.getElementById("resetBtn").addEventListener("click", reset);

    const sel = document.getElementById("lang-select");
    sel.value = currentLang;
    sel.addEventListener("change", e => {
      currentLang = e.target.value;
      localStorage.setItem("lang", currentLang);
      applyI18n();
    });
    applyI18n();
  });
})();
