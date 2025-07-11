import { currentLanguage, toggleLanguage, t } from '../utils/translationStore'

// Create a composable to easily access translation functions in any component
export const useTranslation = () => {
  return {
    currentLanguage,
    toggleLanguage,
    t
  }
}

// Export the functions individually to allow for destructuring
export { currentLanguage, toggleLanguage, t }
