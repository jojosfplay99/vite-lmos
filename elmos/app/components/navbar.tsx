import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames'; // Import classNames

const NavbarMain = () => {
  return (
    <nav className="fixed w-full h-20 shadow-xl bg-slate-900">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href='/' className="ml-10 text-md">eLmos</Link>
        <div>
          <ul className="hidden sm:flex">
            <li className="ml-10 uppercase hover:border-b text-md">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 uppercase hover:border-b text-md">
              <Link href="/records">Records</Link>
            </li>
          </ul>                   
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
