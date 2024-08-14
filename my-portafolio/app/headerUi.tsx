"use client"; // Marca el componente como Cliente

import React, { useEffect, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Switch } from '@headlessui/react';
import { Bars3Icon, CheckIcon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About me', href: '#about' },
  { name: 'Skills', href: '#skill' },
  { name: 'Portafolio', href: '#portafolio' },
];

export default function HeaderUi() {
  const [hasShadow, setHasShadow] = useState(false);

  // Detectar el scroll y aplicar el shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Variable switch
  const [enabled, setEnabled] = useState(false);

  function toggleDarkMode() {
    const html = document.querySelector('html');
    const current = localStorage.getItem('theme');
    if (!current) {
      localStorage.setItem('theme', 'dark');
      html?.classList.add('dark');
      setEnabled(true);
    } else {
      localStorage.removeItem('theme');
      html?.classList.remove('dark');
      setEnabled(false);
    }
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="header"
      className={`bg-white dark:bg-blueDark fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        hasShadow ? 'shadow-md' : ''
      }`}
    >
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-16">
        <div className="flex lg:flex-1">
          <a href="#banner" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        {/* map items */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 hover:text-[#03249C] dark:text-blueText text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            {/* Dark mode switch */}
           
           <div className='flex gap-3 items-center'>
            <SunIcon className="h-5 w-5 text-[#3D9AF4] dark:text-gray-400" />
            <Switch
              checked={enabled}
              onChange={toggleDarkMode}
              className="group inline-flex h-6 w-11 items-center rounded-full dark:bg-slate-700 bg-gray-200 transition data-[checked]:bg-blue-600"
            >
              <span className="size-4 translate-x-1 rounded-full dark:bg-[#3D9AF4] bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
            <MoonIcon className="h-5 w-5 dark:text-[#3D9AF4] text-gray-400" />
           </div>
         
            
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-slate-700  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white dark:hover:bg-slate-600 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
