function getSiteLanguage(): string {
  return (window.localStorage && window.localStorage.getItem("siteLanguage")) || "es-AR";
}

function setSiteLanguage(language: string): void {
  if (window.localStorage) {
    window.localStorage.setItem("siteLanguage", language);
  }
}

export default {
  getSiteLanguage,
  setSiteLanguage
};
