import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-brand-orange">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <Image src="/maachao-logo.png" alt="Maachao logo" width={120} height={40} className="mb-2" />
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Making your special occasions memorable with our premium services and products.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cakes" className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Cakes
                </Link>
              </li>
              <li>
                <Link href="/decorations" className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Decorations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gifts" className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Gifts
                </Link>
              </li>
              <li>
                <Link href="/hire-mua" className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Hire MUA
                </Link>
              </li>
              <li>
                <Link href="/photographer" className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  Photographer
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              <p>Email: info@maachao.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Celebration St, Party City</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-4">&copy; {new Date().getFullYear()} MaaChao. All rights reserved.</p>
          <div className="flex justify-center mt-6">
            <Image src="/party-logo.png" alt="Party logo" width={70} height={70} />
          </div>
        </div>
      </div>
    </footer>
  );
}