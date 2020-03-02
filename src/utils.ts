import { siteService } from "./services";

function getAllCssVariablesInRoot(): string[] {
  let result: { [key: string]: string } = {};
  const styleSheets = Array.from(document.styleSheets)
    // Keep only the CSSStyleSheets with null href or using the site's URL as value
    .filter((styleSheet: StyleSheet) => styleSheet.href === null || styleSheet.href.startsWith(window.location.origin));

  // Now, only keep the CSSStyleSheet's CSSRuleLists with ":root" as selectorText
  styleSheets.forEach((styleSheet: StyleSheet) => {
    Array.from((styleSheet as any).cssRules).forEach((cssRule: any) => {
      // Only search variables in CSS rules with ":root" as selectorText
      if (cssRule.selectorText === ":root") {
        // Save only the items that start with "--" (i.e. CSS Variables);
        const cssVariables: string[] = Array.from(cssRule.style).filter((name: any) => name.startsWith("--")) as any;
        cssVariables.forEach(cssVariable => (result[cssVariable] = cssVariable));
      }
    });
  });

  return Object.keys(result);
}

function overrideCssVariablesValuesWithCountryValues() {
  const conferenceCountry = siteService.getConferenceCountry();

  if (!conferenceCountry || conferenceCountry === "global") {
    // Do nothing
    return;
  }

  const cssVariablesInRoot = getAllCssVariablesInRoot();

  // Pick all the country variables and use its value in the regular variables
  // e.g. If the country is "uy", set in "--background-color" the value of "--uy-background-color"
  cssVariablesInRoot
    .filter(item => item.startsWith(`--${conferenceCountry}`))
    .forEach(countryVariableName => {
      const countryVariableValue = getComputedStyle(document.documentElement).getPropertyValue(countryVariableName);
      const regularVariableName = countryVariableName.replace(`${conferenceCountry}-`, "");
      document.documentElement.style.setProperty(regularVariableName, countryVariableValue);
    });
}

export { overrideCssVariablesValuesWithCountryValues };
