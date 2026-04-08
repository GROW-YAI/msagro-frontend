import { useEffect } from 'react'

// Type declaration for the Boafo widget
// If using TypeScript, this would be in a .d.ts file
// declare module "boafo-accessibility-widget" {
//   export function initializeBoafoWidget(apiKey: string): void;
// }

function BoafoWidgetInitializer() {
  useEffect(() => {
    // Get API key from environment variable
    const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY || 'boafo_5678'

    // Check if the Boafo widget is loaded
    if (typeof window.initializeBoafoWidget === 'function') {
      window.initializeBoafoWidget(BOAFO_API_KEY)
    } else {
      // If the widget is loaded via script tag, it may already be initialized
      console.log('Boafo widget loaded via script tag')
    }
  }, [])

  return null // nothing to render
}

export default BoafoWidgetInitializer