import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
          />
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-16 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-xl md:hidden z-50"
          >
            <div className="flex flex-col p-6 space-y-4">
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
