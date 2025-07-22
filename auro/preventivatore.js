let isOpen = false;
const countries = [
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "Brazil", code: "BR", flag: "🇧🇷" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "China", code: "CN", flag: "🇨🇳" },
  { name: "France", code: "FR", flag: "🇫🇷" },
  { name: "Germany", code: "DE", flag: "🇩🇪" },
  { name: "Japan", code: "JP", flag: "🇯🇵" },
  { name: "Spain", code: "ES", flag: "🇪🇸" },
  { name: "United Kingdom", code: "UK", flag: "🇬🇧" },
  { name: "United States", code: "US", flag: "🇺🇸" },
];

function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  isOpen = !isOpen;

  if (isOpen) {
    dropdown.classList.add("open");
  } else {
    dropdown.classList.remove("open");
  }
}

function selectCountry(name, code) {
  const triggerBtn = document.querySelector(".trigger-btn");
  triggerBtn.innerHTML = `${getFlag(code)} ${name}`;
  toggleDropdown();
}

function getFlag(code) {
  const country = countries.find((c) => c.code === code);
  return country ? country.flag : "🏳️";
}

function filterCountries(searchTerm) {
  const countryList = document.getElementById("countryList");
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  countryList.innerHTML = "";
  filteredCountries.forEach((country) => {
    const item = document.createElement("div");
    item.className = "country-item";
    item.onclick = () => selectCountry(country.name, country.code);
    item.innerHTML = `
            <div class="flag">${country.flag}</div>
            <div class="country-name">${country.name}</div>
            <div class="country-code">${country.code}</div>
        `;
    countryList.appendChild(item);
  });
}

// Chiudi il dropdown cliccando fuori
document.addEventListener("click", function (event) {
  const container = document.querySelector(".dropdown-container");
  if (!container.contains(event.target) && isOpen) {
    toggleDropdown();
  }
});

// Animazione di entrata al caricamento
window.addEventListener("load", function () {
  setTimeout(() => {
    toggleDropdown();
  }, 500);
});
