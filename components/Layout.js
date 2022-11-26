import React from 'react'
import Link from 'next/link'
import Darkmodebutton from './dark-mode'
export default function Layout({ children }) {
  return (
    <>
      <div>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              href="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>

              <span className="ml-3 text-xl">Milkis portfolio</span>
            </Link>

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link href="/" className="mr-5 hover:text-gray-900">
                홈
              </Link>
              <Link href="/projects" className="mr-5 hover:text-gray-900">
                프로젝트
              </Link>
              <Link
                href="https://www.instagram.com/jchan_.ha/"
                className="mr-5 hover:text-gray-900"
              >
                연락하기
              </Link>
            </nav>
            <Darkmodebutton></Darkmodebutton>
          </div>
        </header>
        <main>{children}</main>

        <footer className="text-gray-600 body-font">
          <div className="border-t border-gray-200"></div>
          <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <Link
                href="/"
                className="flex title-font font-medium items-center md:justify-start"
              >
                <span className="ml-3 mr-3 text-xl">밀키스포트폴리오 </span>
              </Link>
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © 2022 Milkis —
                <a
                  className="text-gray-600 ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @todaudcksgk
                </a>
              </p>
              <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                <Link
                  href="https://www.instagram.com/jchan_.ha/"
                  className="ml-3 text-gray-500"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </Link>

                <a className="ml-3 text-gray-500"></a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
