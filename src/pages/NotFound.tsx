import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { fadeInUp } from '@/utils/animations';

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found • Sandeep S</title>
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center">
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <Button className="inline-flex items-center gap-2">
                <HomeIcon size={20} />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </Container>
      </div>
    </>
  );
}
