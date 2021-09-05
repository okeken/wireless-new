import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/responsive.css"
import "../css/index.css"

import pressImage from "../images/press-release.png"

function InTheNews() {
  return (
    <Layout>
      <SEO
        className="change"
        title="In the News"
        description="Stay up to date or just take a nap"
      />
      <div className="gray-back pb-20">
        <div className="container mx-auto">
          <div className="md:px-8">
            <div className="flex flex-wrap items-center text-sm change pt-5">
              <Link
                to="/"
                className="text-blue-600 sm:text-black cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span to="#">In the News</span>
            </div>
            <div
              className="about-image full-bleed-mobile w-full relative bg-cover bg-bottom mobile bg-center first-image mb-6"
              style={{ backgroundImage: `url(${pressImage})` }}
            />
            <div className="mt-8 text-center md:text-left">
              <h1 className="text-orange-500 text-3xl md:text-5xl leading-none font-medium relative">
                <span className="text-black">Latest</span> News
              </h1>
              <h2 className="inline-block md:hidden text-2xl font-thin leading-tight news-subtitle mt-1">
                The latest
              </h2>
            </div>
            <div className="mt-8 hidden md:flex">
              <div className="w-7/12 pr-12 block">
                <div
                  className="cursor-pointer"
                  onClick={() => navigate("/august-28-press-release")}
                  aria-hidden="true"
                >
                  <img
                    src="/in-the-news-frame-system-main.png"
                    alt=""
                    width="540px"
                  />
                  <div className="bg-white pt-5 px-5 frame-width cursor-pointer rounded-b-lg">
                    <p className="text-gray-600">Press Release</p>
                    <p className="text-xl leading-tight pt-5">
                      Wireless Outdoor Cinema Company Unveils New Timberline
                      Outdoor Cinema Series Frame System
                    </p>
                    <p className="text-gray-600 pt-5 pb-5">August 28, 2021</p>
                  </div>
                </div>
                <div
                  className="pt-10 cursor-pointer"
                  onClick={() => navigate("/june-30-press-release")}
                  aria-hidden="true"
                >
                  <img
                    src="/in-the-news-projector-stand-main.png"
                    alt=""
                    width="540px"
                  />
                  <div className="bg-white pt-5 px-5 frame-width cursor-pointer rounded-b-lg">
                    <p className="text-gray-600">Press Release</p>
                    <p className="text-xl leading-tight pt-5">
                      Wireless Outdoor Cinema Company Brings to Market the 1st
                      Outdoor Cinema Projector Stand
                    </p>
                    <p className="text-gray-600 pt-5 pb-5">June 30, 2021</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 md:pl-12 md:border-l border-gray-400">
                <h1 className="news-archive-heading leading-none font-medium">
                  News Archive
                </h1>
                <div className="mt-1">
                  {/* <Link
                    to="/september-02-eriks-church-press-release"
                    className="flex items-stretch py-6 border-b border-gray-400"
                  >
                    <div className="w-24 h-full">
                      <img
                        src="/n1.png"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-6 flex flex-col justify-between text-lg">
                      <h4 className="text-gray-600">Press Release</h4>
                      <h3 className="text-gray-800 font-bold">
                        Wireless Outdoor Cinema Donation ...
                      </h3>
                      <h4 className="text-gray-600 font-thin">
                        September 2, 2020
                      </h4>
                    </div>
                  </Link> */}
                  <Link
                    className="flex items-stretch py-6 border-b border-gray-400 cursor-pointer"
                    to="/august-28-press-release"
                  >
                    <div className="news-archive2 h-full">
                      <img
                        src="/in-the-news-frame.png"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-6 flex flex-col justify-between text-lg">
                      <h4 className="text-gray-600">Press Release</h4>
                      <h3 className="text-gray-800 font-bold press-release-lineHeight">
                        Introducing the Timberline Outdoor Cinema Series ...
                      </h3>
                      <h4 className="text-gray-600 font-thin">
                        August 28, 2021
                      </h4>
                    </div>
                  </Link>
                  <Link
                    className="flex items-stretch py-6 border-b border-gray-400 cursor-pointer"
                    to="/june-30-press-release"
                  >
                    <div className="news-archive1 h-full">
                      <img
                        src="/in-the-news-projector-stand.png"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-6 flex flex-col justify-between text-lg">
                      <h4 className="text-gray-600">Press Release</h4>
                      <h3 className="text-gray-800 font-bold press-release-lineHeight">
                        Wireless Outdoor Cinema Company Brings to Market ...
                      </h3>
                      <h4 className="text-gray-600 font-thin">June 30, 2021</h4>
                    </div>
                  </Link>
                  <Link
                    className="flex items-stretch py-6 border-b border-gray-400"
                    to="/january-04-press-release"
                  >
                    <div className="news-archive h-full">
                      <img
                        src="/in-the-news-jan4-winner.png"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-6 flex flex-col justify-between text-lg">
                      <h4 className="text-gray-600">Press Release</h4>
                      <h3 className="text-gray-800 font-bold press-release-lineHeight">
                        Winner Announcement for Fastasy Pro Football ...
                      </h3>
                      <h4 className="text-gray-600 font-thin">
                        January 4, 2021
                      </h4>
                    </div>
                  </Link>
                  <Link
                    className="flex items-stretch py-6 border-b border-gray-400"
                    to="/september-10-press-release"
                  >
                    <div className="news-archive h-full">
                      <img
                        src="/in-the-news-binnie-media.png"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-6 flex flex-col justify-between text-lg">
                      <h4 className="text-gray-600">Press Release</h4>
                      <h3 className="text-gray-800 font-bold press-release-lineHeight">
                        107.5 Frank FM Fantasy Pro Football Challenge ...
                      </h3>
                      <h4 className="text-gray-600 font-thin">
                        September 10, 2020
                      </h4>
                    </div>
                  </Link>
                  <Link
                    to="/june-25-bridgton-news-article"
                    className="flex items-stretch py-6 border-b border-gray-400"
                  >
                    <div className="news-archive3 h-full">
                      <img
                        src="/in-the-news-todd.png"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-6 flex flex-col justify-between text-lg">
                      <h4 className="text-gray-600">Bridgton News</h4>
                      <h3 className="text-gray-800 font-bold press-release-lineHeight">
                        Bring Movies and Gaming Outdoors ...
                      </h3>
                      <h4 className="text-gray-600 font-thin">June 25, 2020</h4>
                    </div>
                  </Link>
                  <Link
                    className="flex items-stretch py-6 border-b border-gray-400"
                    to="/june-08-press-release"
                  >
                    <div className="news-archive4 h-full">
                      <img
                        src="/in-the-news-june8-image.png"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-6 flex flex-col justify-between text-lg">
                      <h4 className="text-gray-600">Press Release</h4>
                      <h3 className="text-gray-800 font-bold press-release-lineHeight">
                        Introducing the Wireless Outdoor Cinema ...
                      </h3>
                      <h4 className="text-gray-600 font-thin">June 8, 2020</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center md:hidden">
              <Link to="/june-25-bridgton-news-article" className="mb-8">
                <img src="bridm.png" className="max-w-full" />
              </Link>
              <Link to="/june-08-press-release">
                <img src="jun8m.png" className="max-w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default InTheNews
