"use client";

import Link from 'next/link';
import Logo from '../assets/Logo';
import { footerSections, companyInfo } from '../data';

const Footer = () => {
  return (
    <footer className="bg-white py-20 border-t border-gray-200">
      <div className="container max-w-[1100px] mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-8">
              <Logo width={26} height={34} />
              <span className="text-2xl font-bold text-primary">{companyInfo.name}</span>
            </Link>
            <p className="text-gray-600 mb-8 max-w-xs">
              {companyInfo.description}
            </p>
            <p className="text-gray-600">{companyInfo.copyright}</p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-lg mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-gray-600 hover:text-primary flex items-center gap-2"
                      >
                        {link.name}
                        {link.badge && (
                          <span className={`px-2 py-1 text-xs bg-${link.badge.color}-100 text-${link.badge.color}-600 rounded-full font-medium`}>
                            {link.badge.text}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
