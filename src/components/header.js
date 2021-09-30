import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { globalHistory } from "@reach/router"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const [openW, setOpenW] = useState(false)
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") setOpen(false)
    })
  }, [setOpen])
  return (
    <>
      <header className="full-width bg-black header-padding px-6">
        {/* <div className=" mx-auto container flex items-center justify-between uppercase text-sm text-white relative">
          <div
            className="flex flex-col items-center w-8 cursor-pointer lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <span className="text-menu uppercase leading-none">Menu</span>
            <div className="w-full bg-orange-500 h-2px" />
            <div className="w-full bg-white h-2px" />
            <div className="w-full bg-white h-2px" />
          </div>
          <Link
            to="/"
            className="cursor-pointer absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:static lg:translate-y-0 lg:translate-x-0"
          >
            <img src={`/cinemalogo.png`} className="h-8 lg:h-12" />
          </Link>
          <div className="hidden lg:flex flex-col items-end">
            <div className="flex items-center">
              <a
                href="tel:2075952960"
                className="cursor-pointer flex items-center"
              >
                <img src={`/cell.png`} className="h-5" />
                <span className="ml-2">(207) 647-8759</span>
              </a>
              <div className="mx-6 bg-orange-500 w-px h-5"></div>
              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/The-Wireless-Outdoor-Cinema-Company-112773330512496"
                  target="_blank"
                  className="cursor-pointer hover:text-orange-500"
                >
                  <img src={`/facebook.svg`} className="h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/todd-morton-7851b1b"
                  target="_blank"
                  className="cursor-pointer hover:text-orange-500"
                >
                  <img
                    src={`/linkedinwhite.png`}
                    className="ml-6 h-5 text-white"
                  />
                </a>
              </div>
            </div>

            <div className="flex items-center mt-3">
              <Link
                to="/about"
                className="cursor-pointer hover:text-orange-500"
              >
                About
              </Link>
              <span
                to="#"
                className="cursor-pointer ml-12 flex items-center relative group"
              >
                <Link to="#" className="hover:text-orange-500">
                  OUTDOOR CINEMAS
                </Link>{" "}
                <img
                  src="/downarrow.png"
                  className="ml-2 h-2 transition-transform transform group-hover:rotate-180 duration-300"
                />
                <div className="bg-black absolute inset-x-0 bottom-0 transform translate-y-full z-10 flex-col w-64 pt-6 pb-2 hidden group-hover:flex px-4">
                  <span>Timberline Series</span>
                  <Link
                    to="/timberline-cinema-packages/96-jedi-bobcat-cinema"
                    className="py-2 px-4 hover:text-orange-500"
                  >
                    96" Jedi Bobcat
                  </Link>
                  <Link
                    to="/timberline-cinema-packages/120-bella-bear-cinema"
                    className="py-2 px-4 hover:text-orange-500"
                  >
                    120" Bella Bear
                  </Link>
                  <Link
                    to="/timberline-cinema-packages/150-big-moose-cinema"
                    className="py-2 px-4 hover:text-orange-500"
                  >
                    150" Big Moose
                  </Link>
                  <Link
                    to="/accessory"
                    className="cursor-pointer hover:text-orange-500"
                  >
                    Outdoor Cinema Accessories
                  </Link>
                </div>
              </span>
              <span
                to="#"
                className="cursor-pointer ml-12 flex items-center relative group"
              >
                <Link to="/in-the-news" className="hover:text-orange-500">
                  In The News
                </Link>{" "}
                <img
                  src="/downarrow.png"
                  className="ml-2 h-2 transition-transform transform group-hover:rotate-180 duration-300"
                />
                <div className="bg-black absolute inset-x-0 bottom-0 transform translate-y-full z-10 flex-col w-64 pt-6 pb-2 hidden group-hover:flex">
                  <Link
                    to="/june-08-press-release"
                    className="py-2 px-4 hover:text-orange-500"
                  >
                    June 8 Press Release
                  </Link>
                  <Link
                    to="/june-25-bridgton-news-article"
                    className="py-2 px-4 hover:text-orange-500"
                  >
                    June 25 Bridgton News
                  </Link>
                </div>
              </span>
              <Link
                to="/faq"
                className="cursor-pointer ml-12 hover:text-orange-500"
              >
                FAQ
              </Link>
              <Link
                to="/connect"
                className="cursor-pointer ml-12 hover:text-orange-500"
              >
                Connect
              </Link>
            </div>
          </div>
        </div> */}

        <div className="">
          <div className="">
            <div className=" mx-auto lg:container flex items-center justify-between uppercase text-sm text-white relative">
              <Link
                to="/"
                className="cursor-pointer"
              >
                <img src={`/cinemalogo.png`} className="h-8 lg:h-12" />
              </Link>
              <div
                className="flex flex-col items-center w-8 cursor-pointer lg:hidden"
                onClick={() => setOpen(!open)}
              >
                <span className="text-menu uppercase leading-none">Menu</span>
                <div className="w-full bg-orange-500 h-2px" />
                <div className="w-full bg-white h-2px" />
                <div className="w-full bg-white h-2px" />
              </div>
              <div className="hidden lg:flex flex-col items-end">
                <div className="flex items-center">
                  <a
                    href="tel:2075952960"
                    className="cursor-pointer flex items-center"
                  >
                    <img src={`/cell.png`} className="h-5" />
                    <span className="ml-2">(207) 647-8759</span>
                  </a>
                  <div className="mx-6 bg-orange-500 w-px h-5"></div>
                  <div className="flex items-center">
                    <a
                      href="https://www.facebook.com/The-Wireless-Outdoor-Cinema-Company-112773330512496"
                      target="_blank"
                      className="cursor-pointer hover:text-orange-500"
                    >
                      <img src={`/facebook.svg`} className="h-4 text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/todd-morton-7851b1b"
                      target="_blank"
                      className="cursor-pointer hover:text-orange-500"
                    >
                      <img
                        src={`/linkedinwhite.png`}
                        className="ml-6 h-4 text-white"
                      />
                    </a>
                  </div>
                </div>

                <div className="flex items-center mt-3">
                  <Link
                    to="/about"
                    className="cursor-pointer hover:text-orange-500"
                  >
                    About
                  </Link>
                  <span
                    to="#"
                    className="cursor-pointer ml-12 flex items-center relative group"
                  >
                    <Link to="/comparison" className="hover:text-orange-500">
                      OUTDOOR CINEMAS
                    </Link>{" "}
                    <img
                      src="/downarrow.png"
                      className="ml-2 h-2 transition-transform transform group-hover:rotate-180 duration-300"
                    />
                    <div className="bg-black absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full z-10 flex-col pt-6 pb-2 hidden group-hover:flex whitespace-no-wrap">
                      <Link
                        to="/comparison"
                        className="py-2 px-4 hover:text-orange-500"
                      >
                        Cinema Comparison
                      </Link>
                      <Link
                        to="/comparison"
                        className="pt-2 px-4 hover:text-orange-500"
                      >
                        Timberline Series
                      </Link>
                      <Link
                        to="/timberline-cinema-packages/96-jedi-bobcat-cinema"
                        className="py-2 px-6 text-xs hover:text-orange-500"
                      >
                        96" Jedi Bobcat
                      </Link>
                      <Link
                        to="/timberline-cinema-packages/120-bella-bear-cinema"
                        className="py-2 px-6 text-xs hover:text-orange-500"
                      >
                        120" Bella Bear
                      </Link>
                      <Link
                        to="/timberline-cinema-packages/150-big-moose-cinema"
                        className="py-2 px-6 text-xs hover:text-orange-500"
                      >
                        150" Big Moose
                      </Link>
                      <Link
                        to="/accessory"
                        className="py-2 px-4 cursor-pointer hover:text-orange-500"
                      >
                        Outdoor Cinema Accessories
                      </Link>
                    </div>
                  </span>
                  <span
                    to="#"
                    className="cursor-pointer ml-12 flex items-center relative group"
                  >
                    <Link to="/in-the-news" className="hover:text-orange-500">
                      In The News
                    </Link>{" "}
                    <img
                      src="/downarrow.png"
                      className="ml-2 h-2 transition-transform transform group-hover:rotate-180 duration-300"
                    />
                    <div className="bg-black absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full z-10 flex-col pt-6 pb-2 hidden group-hover:flex whitespace-no-wrap">
                      <Link
                        to="/august-28-press-release"
                        className="py-2 px-4 hover:text-orange-500"
                      >
                        Aug 28 2021 Press Release
                      </Link>
                      <Link
                        to="/june-30-press-release"
                        className="py-2 px-4 hover:text-orange-500"
                      >
                        June 30 2021 Press Release
                      </Link>
                      <Link
                        to="/january-04-press-release"
                        className="py-2 px-4 hover:text-orange-500"
                      >
                        Jan 04 2021 Press Release
                      </Link>
                      <Link
                        to="/september-10-press-release"
                        className="py-2 px-4 hover:text-orange-500"
                      >
                        Sept 10 2020 Press Release
                      </Link>
                      <Link
                        to="/june-25-bridgton-news-article"
                        className="py-2 px-4 hover:text-orange-500"
                      >
                        June 25 2020 Press Release
                      </Link>
                      <Link
                        to="/june-08-press-release"
                        className="py-2 px-4 hover:text-orange-500"
                      >
                        June 08 2020 Press Release
                      </Link>
                    </div>
                  </span>
                  <Link
                    to="/faq"
                    className="cursor-pointer ml-12 hover:text-orange-500"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/connect"
                    className="cursor-pointer ml-12 hover:text-orange-500"
                  >
                    Connect
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <>
          <div
            className="w-full bg-cover absolute z-30 lg:hidden"
            style={{ backgroundImage: "url(/blackfade.jpg)" }}
          >
            <div className="text-white text-xl flex flex-col">
              <Link to="/about">
                <span className="block py-3 px-6">About</span>
              </Link>
              <div class="w-full border border-b border-gray-600"></div>
              <span
                onClick={() => setOpenW(!openW)}
                className="cursor-pointer"
              >
                <span className="block py-3 px-6 flex items-center justify-between">
                  <span>Outdoor Cinemas</span>
                  <span>&#9660;</span>
                </span>
                {openW && (
                  <div className="flex flex-col text-orange-500 py-3 px-6">
                    <Link to="/comparison" className="block py-3">
                      Cinema Comparison
                    </Link>
                    <div class="w-full border border-b border-gray-600"></div>
                    <span className="py-3">Timberline Series</span>
                    <Link
                      to="/timberline-cinema-packages/96-jedi-bobcat-cinema"
                      className="block py-1 px-6"
                    >
                      96" Jedi Bobcat
                    </Link>
                    <Link
                      to="/timberline-cinema-packages/120-bella-bear-cinema"
                      className="block py-1 px-6"
                    >
                      120" Bella Bear
                    </Link>
                    <Link
                      to="/timberline-cinema-packages/150-big-moose-cinema"
                      className="block py-1 px-6"
                    >
                      150" Big Moose
                    </Link>
                    <div class="w-full border border-b border-gray-600 mt-3"></div>
                    <Link to="/accessory" className="block py-3">
                      Outdoor Cinema Accessories
                    </Link>
                  </div>
                )}
              </span>
              <div class="w-full border border-b border-gray-600"></div>
              <Link to="/in-the-news">
                <span className="block py-3 px-6">In the News</span>
              </Link>
              <div class="w-full border border-b border-gray-600"></div>
              <Link to="/faq">
                <span className="block py-3 px-6">
                  Frequently Asked Questions
                </span>
              </Link>
              <div class="w-full border border-b border-gray-600"></div>
              <Link to="/connect">
                <span className="block py-3 px-6">Connect</span>
              </Link>
              <div class="w-full border border-b border-gray-600"></div>
              <Link to="/terms">
                <span className="block py-3 px-6">Terms Of Use</span>
              </Link>
              <div class="w-full border border-b border-gray-600"></div>
              <Link to="/privacy">
                <span className="block py-3 px-6">Privacy Policy</span>
              </Link>
              <div class="w-full border border-b border-gray-600"></div>
              <Link to="/sitemap" className="">
                <span className="block py-3 px-6">Sitemap</span>
              </Link>
              <div class="w-full border border-b border-gray-600"></div>
              <div className="py-3 px-6 flex items-center justify-between">
                <a
                  href="tel:2075952960"
                  className="cursor-pointer flex items-center w-8/12"
                >
                  <img src={`/cellOrange.png`} className="h-6" />
                  <span className="ml-2">(207) 595-2960</span>
                </a>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/The-Wireless-Outdoor-Cinema-Company-112773330512496"
                    target="_blank"
                    className="cursor-pointer hover:text-orange-500"
                  >
                    <img src={`/facebookOrange.png`} className="h-4 sm:h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/todd-morton-7851b1b"
                    target="_blank"
                    className="cursor-pointer hover:text-orange-500"
                  >
                    <img src={`/linkedinOrange.png`} className="h-4 sm:h-6 ml-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
