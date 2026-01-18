import { fuzzyMatch, formatUrl } from "./helpers.js";

let createWebringList = (matchedSiteIndices) => {
  const webringList = document.getElementById("webring-list");
  webringList.innerHTML = "";

  let firstHighlightedItem = null;

  window.webringData.sites.forEach((site, index) => {
    const displayUrl = formatUrl(site.website);

    const listItem = document.createElement("div");
    listItem.className = "grid grid-cols-12 sm:grid-cols-6 gap-3 sm:gap-6";
    const isSearchItem =
      matchedSiteIndices.includes(index) &&
      matchedSiteIndices.length !== window.webringData.sites.length;
    if (isSearchItem) {
      listItem.className += " bg-mustard-500";
    }

    if (firstHighlightedItem === null && isSearchItem) {
      firstHighlightedItem = listItem;
    }

    const name = document.createElement("span");
    name.className = "col-span-5 sm:col-span-3 font-latinRomanCaps truncate";
    name.textContent = site.name;
    if (isSearchItem) {
      name.className += " text-mustard-100"
    }

    const year = document.createElement("span");
    year.className = "col-span-2 sm:col-span-1 text-right font-latinRoman";
    year.textContent = site.year;
    if (isSearchItem) {
      year.className += " text-mustard-100"
    }

    const link = document.createElement("a");
    link.href = site.website;
    link.className =
      "col-span-5 sm:col-span-2 font-latinMonoRegular underline truncate";
    link.textContent = displayUrl;
    if (isSearchItem) {
      link.className += " text-mustard-100"
    } else {
      link.className += " text-mustard-500"
    }

    listItem.appendChild(name);
    listItem.appendChild(year);
    listItem.appendChild(link);
    webringList.appendChild(listItem);
  });

  // Only scroll if there's a highlighted item
  if (firstHighlightedItem) {
    setTimeout(() => {
      firstHighlightedItem.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }
};
function handleUrlFragment(searchInput) {
  const fragment = window.location.hash.slice(1); // Remove the # symbol
  if (fragment) {
    searchInput.value = decodeURIComponent(fragment);
    filterWebring(fragment);
    const searchEvent = new Event("input");
    searchInput.dispatchEvent(searchEvent);
  }
}
function filterWebring(searchTerm) {
  const searchLower = searchTerm.toLowerCase();
  const matchedSiteIndices = [];
  window.webringData.sites.forEach((site, index) => {
    if (
      site.name.toLowerCase().includes(searchLower) ||
      fuzzyMatch(site.website.toLowerCase(), searchLower) ||
      site.year.toString().includes(searchLower)
    ) {
      matchedSiteIndices.push(index);
    }
  });
  createWebringList(matchedSiteIndices);
}
let navigateWebring = () => {
  const fragment = window.location.hash.slice(1); // #your-site-here?nav=
  if (!fragment.includes("?")) return;

  const [currentSite, query] = fragment.split("?");
  const params = new URLSearchParams(query);
  const nav = params.get("nav");
  const navTrimmed = nav ? nav.replace(/\/+$/, "").trim() : "";
  if (!nav || !["next", "prev"].includes(navTrimmed)) return;

  const match = window.webringData.sites.filter((site) =>
    fuzzyMatch(currentSite, site.website)
  );
  if (match.length === 0) return;
  if (match.length > 1) {
    throw new Error(
      `Cannot calculate navigation state because mutiple URLs matched ${currentSite}`
    );
  }

  const currIndex = window.webringData.sites.findIndex((site) =>
    fuzzyMatch(currentSite, site.website)
  );
  const increment = navTrimmed === "next" ? 1 : -1;
  let newIndex = (currIndex + increment) % window.webringData.sites.length;
  if (newIndex < 0) newIndex = window.webringData.sites.length - 1;
  if (!window.webringData.sites[newIndex]) return;

  document.body.innerHTML = `
  <main class="p-6 min-h-[100vh] w-[100vw] text-black-900">
    <p class="font-latinMonoCondOblique">redirecting...</p>
  </main>
  `;
  window.location.href = window.webringData.sites[newIndex].website;
};

function init() {
  if (window.location.hash.includes("?nav=")) {
    navigateWebring();
  }
  const desktopInput = document.getElementById("search");
  const mobileInput = document.getElementById("search-mobile");

  createWebringList(window.webringData.sites.map((_, i) => i));

  if (desktopInput) {
    handleUrlFragment(desktopInput);
    desktopInput.addEventListener("input", (e) => {
      filterWebring(e.target.value);
    });
  }

  if (mobileInput) {
    handleUrlFragment(mobileInput);
    mobileInput.addEventListener("input", (e) => {
      filterWebring(e.target.value);
    });
  }

  window.addEventListener("hashChange", () => {
    if (desktopInput) handleUrlFragment(desktopInput);
    if (mobileInput) handleUrlFragment(mobileInput);
  });
  window.addEventListener("hashchange", navigateWebring);
}

// Run immediately if DOM is ready, otherwise wait for it
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}