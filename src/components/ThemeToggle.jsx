import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                    <motion.span
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <FaSun color="#fbbf24" />
                    </motion.span>
                ) : (
                    <motion.span
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <FaMoon color="#1e3a5f" />
                    </motion.span>
                )}
            </AnimatePresence>
        </button>
    )
}

export default ThemeToggle
