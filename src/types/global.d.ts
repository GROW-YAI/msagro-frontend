declare module "boafo-accessibility-widget" {
  export function initializeBoafoWidget(apiKey: string): void;
}

interface Window {
  initializeBoafoWidget?: (apiKey: string) => void;
}