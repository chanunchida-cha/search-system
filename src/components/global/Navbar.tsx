
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="bg-gray-800   bg-gradient-to-r  from-blue-900  via-blue-400  to-blue-600  shadow-xl  mb-[2rem]"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <h1 className="text-3xl font-bold tracking-tight text-white">
                        Research
                      </h1>
                    </div>

                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button  กรณีหน้าจอโมบาย */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Navbar;
