import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

let navigation = [
  { name: 'Inicio', href: '/'},
  { name: 'Proyectos', href: '/proyectos'},
  { name: 'Nosotros', href: '/nosotros'},
  { name: 'Contacto', href: '/contacto'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue-rms">
      {({ open }) => (  
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-12 w-auto"
                    src="https://i.pinimg.com/originals/79/64/15/79641530f7ad9f4b5af0d2cf84370e71.png"
                    alt="RMS"
                  />
                  <img
                    className="hidden lg:block h-20 w-auto"
                    src="https://i.pinimg.com/originals/7b/0c/b3/7b0cb3eba0e187c55fef2d01caca18da.png"
                    alt="rmsTech"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6 mt-4">
                  <div className="flex space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        id={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-rms-secondary text-rms' : 'text-rms btn-animation',
                          'px-5 py-3 rounded-md text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-center w-56 m-auto">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-rms-secondary text-rms' : 'text-rms',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
