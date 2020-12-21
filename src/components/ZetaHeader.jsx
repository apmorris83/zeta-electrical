import React, { useState, useEffect } from "react"
import ZetaLogo from "../images/zeta-logo.svg"

const ZetaHeader = () => {
  const [top, setTop] = useState(true)
  const [burgerActive, setBurgerActive] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [top])

  const scrollToSection = selector => {
    document.querySelector(selector).scrollIntoView({ behavior: "smooth" })
    if (selector === ".contact") {
      document.querySelector(".contact-input").focus({ preventScroll: true })
    }
  }

  return (
    <header
      className={`fixed w-full z-30 bg-white transition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto md:flex md:justify-between">
        <div className="flex items-center justify-between px-4 py-6">
          <ZetaLogo className="w-24 fill-current text-yellow-800" />
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setBurgerActive(!burgerActive)}
              className="text-yellow-800 focus:outline-none focus:ring-2 p-4"
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
          } px-4 pt-2 pb-4 max-w-6xl md:flex md:items-center md:pt-4 md:space-x-6`}
        >
          {[
            { title: "About", href: "#", selector: ".about" },
            { title: "Services", href: "#", selector: ".services" },
            { title: "Recent Work", href: "#", selector: ".recent-work" },
            { title: "Contact Us", href: "#", selector: ".contact" },
          ].map((nav, i) => (
            <button
              onClick={() => scrollToSection(nav.selector)}
              key={i}
              className={`w-full md:w-auto text-left block rounded mt-2 md:mt-0 font-sans font-normal text-lg focus:outline-none focus:ring-2 px-4 py-2 ${
                nav.title === "Contact Us"
                  ? "bg-yellow-800 text-white hover:bg-yellow-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {nav.title}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default ZetaHeader
