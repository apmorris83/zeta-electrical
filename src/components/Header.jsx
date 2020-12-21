import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"

const Header = () => {
  const [top, setTop] = useState(true)
  const [burgerActive, setBurgerActive] = useState(false)
  const [resourcesActive, setResourcesActive] = useState(false)
  const navRef = useRef([])

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    const escHandler = e => {
      if (e.keyCode === 27) setResourcesActive(false)
    }
    const focusHandler = () => {
      if (navRef.current.includes(document.activeElement))
        setResourcesActive(false)
    }
    window.addEventListener("scroll", scrollHandler)
    window.addEventListener("keydown", escHandler)
    window.addEventListener("focusin", focusHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
      window.removeEventListener("keydown", escHandler)
      window.removeEventListener("focusin", focusHandler)
    }
  }, [top])

  return (
    <header
      className={`fixed w-full z-30 bg-white transition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto sm:flex sm:justify-between">
        <div className="flex items-center justify-between px-4 py-6">
          <div>
            <Link
              to="/"
              className="p-2 block rounded focus:outline-none focus:ring-2"
            >
              <svg
                className="fill-current text-yellow-800 h-8"
                viewBox="0 0 100 46"
              >
                <path d="M34.03,45.414C33.559,45.414 33.136,45.335 32.76,45.178C32.385,45.02 32.066,44.795 31.803,44.502C31.541,44.208 31.34,43.85 31.199,43.428C31.058,43.005 30.988,42.531 30.988,42.003C30.988,41.476 31.058,41.002 31.199,40.581C31.34,40.161 31.541,39.803 31.803,39.51C32.066,39.216 32.385,38.991 32.76,38.834C33.136,38.676 33.559,38.598 34.03,38.598C34.413,38.598 34.771,38.658 35.104,38.78C35.436,38.901 35.727,39.069 35.975,39.285C36.224,39.501 36.425,39.757 36.577,40.053C36.73,40.35 36.818,40.675 36.842,41.028L35.521,41.028C35.488,40.843 35.429,40.673 35.342,40.521C35.255,40.368 35.146,40.238 35.016,40.13C34.886,40.022 34.737,39.939 34.569,39.88C34.401,39.822 34.221,39.793 34.03,39.793C33.775,39.793 33.546,39.844 33.342,39.946C33.139,40.047 32.965,40.194 32.821,40.386C32.677,40.578 32.567,40.81 32.491,41.082C32.415,41.355 32.376,41.662 32.376,42.003C32.376,42.345 32.415,42.653 32.491,42.927C32.567,43.201 32.677,43.433 32.821,43.623C32.965,43.813 33.139,43.96 33.342,44.063C33.546,44.167 33.777,44.218 34.034,44.218C34.229,44.218 34.41,44.191 34.578,44.135C34.746,44.08 34.894,44.001 35.023,43.899C35.152,43.798 35.259,43.675 35.346,43.531C35.433,43.387 35.493,43.226 35.526,43.046L36.847,43.046C36.82,43.396 36.731,43.717 36.58,44.007C36.428,44.298 36.229,44.547 35.982,44.755C35.735,44.964 35.445,45.125 35.113,45.241C34.78,45.356 34.419,45.414 34.03,45.414ZM75.383,45.414C74.913,45.414 74.49,45.335 74.114,45.178C73.738,45.02 73.419,44.795 73.157,44.502C72.895,44.208 72.693,43.85 72.552,43.428C72.412,43.005 72.341,42.531 72.341,42.003C72.341,41.476 72.412,41.002 72.552,40.581C72.693,40.161 72.895,39.803 73.157,39.51C73.419,39.216 73.738,38.991 74.114,38.834C74.49,38.676 74.913,38.598 75.383,38.598C75.766,38.598 76.124,38.658 76.457,38.78C76.789,38.901 77.08,39.069 77.328,39.285C77.577,39.501 77.778,39.757 77.931,40.053C78.083,40.35 78.172,40.675 78.196,41.028L76.875,41.028C76.842,40.843 76.782,40.673 76.695,40.521C76.608,40.368 76.5,40.238 76.369,40.13C76.239,40.022 76.09,39.939 75.922,39.88C75.754,39.822 75.575,39.793 75.383,39.793C75.128,39.793 74.899,39.844 74.696,39.946C74.492,40.047 74.318,40.194 74.174,40.386C74.031,40.578 73.921,40.81 73.844,41.082C73.768,41.355 73.73,41.662 73.73,42.003C73.73,42.345 73.768,42.653 73.844,42.927C73.921,43.201 74.031,43.433 74.174,43.623C74.318,43.813 74.492,43.96 74.696,44.063C74.899,44.167 75.13,44.218 75.387,44.218C75.582,44.218 75.763,44.191 75.931,44.135C76.099,44.08 76.247,44.001 76.376,43.899C76.505,43.798 76.613,43.675 76.699,43.531C76.786,43.387 76.846,43.226 76.879,43.046L78.2,43.046C78.173,43.396 78.084,43.717 77.933,44.007C77.782,44.298 77.582,44.547 77.335,44.755C77.088,44.964 76.798,45.125 76.466,45.241C76.133,45.356 75.772,45.414 75.383,45.414ZM4.295,45.247L0,45.247L0,38.764L4.295,38.764L4.295,39.923L1.357,39.923L1.357,41.437L4.129,41.437L4.129,42.511L1.357,42.511L1.357,44.088L4.295,44.088L4.295,45.247ZM64.914,45.247L64.914,38.764L66.271,38.764L66.271,45.247L64.914,45.247ZM14.75,45.247L10.509,45.247L10.509,38.764L11.866,38.764L11.866,44.066L14.75,44.066L14.75,45.247ZM100,45.247L95.759,45.247L95.759,38.764L97.115,38.764L97.115,44.066L100,44.066L100,45.247ZM25.062,45.247L20.766,45.247L20.766,38.764L25.062,38.764L25.062,39.923L22.123,39.923L22.123,41.437L24.896,41.437L24.896,42.511L22.123,42.511L22.123,44.088L25.062,44.088L25.062,45.247ZM55.097,45.247L53.74,45.247L53.74,38.764L56.463,38.764C56.82,38.764 57.14,38.812 57.425,38.908C57.709,39.004 57.95,39.141 58.148,39.321C58.346,39.501 58.498,39.719 58.604,39.975C58.71,40.231 58.764,40.521 58.764,40.844C58.764,41.051 58.737,41.249 58.685,41.44C58.633,41.63 58.556,41.805 58.456,41.965C58.355,42.125 58.232,42.267 58.085,42.39C57.938,42.513 57.772,42.611 57.586,42.686L58.952,45.247L57.416,45.247L56.207,42.898L55.097,42.898L55.097,45.247ZM44.453,45.247L44.453,39.923L42.508,39.923L42.508,38.764L47.756,38.764L47.756,39.923L45.81,39.923L45.81,45.247L44.453,45.247ZM87.909,43.702L85.631,43.702L85.133,45.247L83.771,45.247L86.022,38.764L87.617,38.764L89.868,45.247L88.399,45.247L87.909,43.702ZM85.923,42.655L87.622,42.655L86.818,40.112L86.737,40.112L85.923,42.655ZM55.097,41.855L56.288,41.855C56.632,41.855 56.899,41.768 57.088,41.595C57.276,41.421 57.371,41.177 57.371,40.862C57.371,40.709 57.345,40.571 57.294,40.447C57.243,40.322 57.171,40.217 57.076,40.13C56.982,40.043 56.867,39.976 56.73,39.93C56.594,39.883 56.442,39.86 56.274,39.86L55.097,39.86L55.097,41.855ZM47.895,27.456L47.895,30.724L29.63,30.724L29.63,-0.014L47.895,-0.014L47.895,3.255L33.25,3.255L33.25,13.369L47.067,13.369L47.067,16.638L33.25,16.638L33.25,27.456L47.895,27.456ZM64.994,30.724L61.416,30.724L61.416,3.213L51.983,3.213L51.983,-0.014L75.682,-0.014L74.406,3.213L64.994,3.213L64.994,30.724ZM77.082,30.724L73.379,30.724L84.446,-0.014L87.941,-0.014L98.966,30.724L95.078,30.724L91.892,21.25L80.267,21.25L77.082,30.724ZM14.314,13.984L21.981,14.051L4.379,27.502L24.691,27.502L24.691,30.724L0.162,30.724L10.599,16.635L2.885,16.626L20.468,3.209L0.162,3.209L0.162,-0.014L24.691,-0.014L14.314,13.984ZM86.163,4.413L86.038,4.413L81.302,18.334L90.899,18.334L86.163,4.413Z" />
              </svg>
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setBurgerActive(!burgerActive)}
              className="text-yellow-800 hover:text-yellow-600 focus:text-black focus:outline-none focus:shadow-outline focus:border-blue-300"
            >
              <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
                {burgerActive ? (
                  <path d="M10,8.485L18.171,0.314C18.589,-0.105 19.268,-0.105 19.686,0.314C20.105,0.732 20.105,1.411 19.686,1.829L11.515,10L19.686,18.171C20.104,18.589 20.105,19.268 19.686,19.686C19.268,20.105 18.589,20.105 18.171,19.686L10,11.515L1.829,19.686C1.411,20.104 0.732,20.105 0.314,19.686C-0.105,19.268 -0.105,18.589 0.314,18.171L8.485,10L0.314,1.829C-0.105,1.411 -0.105,0.732 0.314,0.314C0.732,-0.105 1.411,-0.105 1.829,0.314L10,8.485Z" />
                ) : (
                  <path d="M1.072,20C0.48,20 0,19.52 0,18.928C0,18.337 0.48,17.857 1.072,17.857L18.928,17.857C19.52,17.857 20,18.337 20,18.928C20,19.52 19.52,20 18.928,20L1.072,20ZM1.072,11.071C0.48,11.071 0,10.592 0,10C0,9.408 0.48,8.929 1.072,8.929L18.928,8.929C19.52,8.929 20,9.408 20,10C20,10.592 19.52,11.071 18.928,11.071L1.072,11.071ZM1.072,2.143C0.48,2.143 0,1.663 0,1.071C0,0.48 0.48,0 1.072,0L18.928,0C19.52,0 20,0.48 20,1.071C20,1.663 19.52,2.143 18.928,2.143L1.072,2.143Z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={`${
            burgerActive ? "block" : "hidden"
          } px-4 pt-2 pb-4 max-w-6xl sm:flex sm:items-center sm:pt-4 sm:space-x-6`}
        >
          <Link
            to="/about"
            className="block rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:border-blue-300 px-2 py-2"
          >
            About
          </Link>
          <a
            href="#"
            ref={el => navRef.current.push(el)}
            className="block rounded mt-2 sm:mt-0 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:border-blue-300 px-2 py-2"
          >
            Contact
          </a>
          <div className="relative block mt-2 sm:mt-0">
            <button
              onClick={() => setResourcesActive(!resourcesActive)}
              onFocus={() => setResourcesActive(true)}
              className="group flex items-center justify-between relative z-10 w-full block rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:border-blue-300 px-2 py-2"
            >
              Resources
              <svg
                className={`ml-2 fill-current h-3 w-3 sm:h-2 sm:w-2 transform transition duration-300 ease-in-out ${
                  resourcesActive ? "rotate-180" : ""
                } group-hover:rotate-180`}
                viewBox="0 0 20 20"
              >
                <path d="M0.322,5.439C-0.097,5.021 -0.097,4.342 0.322,3.924C0.74,3.505 1.419,3.505 1.837,3.924L10,12.087L18.163,3.924C18.581,3.505 19.26,3.506 19.678,3.924C20.097,4.342 20.097,5.021 19.678,5.439L10.852,14.265C10.825,14.3 10.796,14.333 10.764,14.365C10.558,14.571 10.29,14.675 10.02,14.679C9.737,14.686 9.452,14.581 9.237,14.366C9.205,14.334 9.175,14.3 9.148,14.265L0.322,5.439Z" />
              </svg>
            </button>
            {resourcesActive ? (
              <button
                onClick={() => setResourcesActive(false)}
                tabIndex="-1"
                className="hidden sm:fixed sm:block inset-0 h-full w-full cursor-default"
              ></button>
            ) : null}
            {resourcesActive ? (
              <div className="mt-2 sm:bg-white border-black-1 rounded-lg sm:p-2 sm:shadow-xl static sm:w-48 sm:absolute sm:right-0">
                <a
                  href="#"
                  className="block rounded px-2 sm:px-4 py-2 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:border-blue-300"
                >
                  Help
                </a>
                <a
                  href="#"
                  className="block rounded px-2 sm:px-4 py-2 mt-2 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:border-blue-300"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block rounded px-2 sm:px-4 py-2 mt-2 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:border-blue-300"
                >
                  Contact
                </a>
              </div>
            ) : null}
          </div>
          <a
            href="#"
            ref={el => navRef.current.push(el)}
            className="block rounded mt-2 sm:mt-0 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:border-blue-300 px-2 py-2"
          >
            Help
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
