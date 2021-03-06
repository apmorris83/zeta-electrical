import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout.jsx"
import SEO from "../components/Seo.jsx"
import Section from "../components/Section.jsx"
import ContactForm from "../components/ContactForm.jsx"
import FreeQuote from "../images/free-quote.svg"
import GreaterManchester from "../images/greater-manchester.svg"
import FlexibleWorking from "../images/flexible-working.svg"
import FullyCompliant from "../images/fully-compliant.svg"
import ChangeFittings from "../images/change-fittings.svg"
import FaultFinding from "../images/fault-finding.svg"
import ExistingCircuits from "../images/existing-circuits.svg"
import WiringOvens from "../images/wiring-ovens.svg"
import SecurityLighting from "../images/security-lighting.svg"
import ConsumerUnit from "../images/consumer-unit.svg"
import Rewires from "../images/rewires.svg"
import CctvInstall from "../images/cctv-install.svg"

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Quality service for your domestic electrical needs" />
      <Section section="contact" width="4xl">
        <h1 className="mb-8 text-center text-3xl lg:text-5xl font-sans font-light text-gray-600">
          For all your domestic electrical needs
        </h1>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-lg font-sans font-light text-gray-600">
            Zeta Electrical are providers of a quality service for your domestic
            electrical needs, to contact us please fill in the form.
          </p>
          <div className="max-w-sm mx-auto mt-16">
            <ContactForm />
          </div>
        </div>
      </Section>
      <Section section="about" width="4xl" color>
        <h1 className="mb-8 text-center text-3xl lg:text-5xl font-sans font-light text-gray-600">
          About Zeta Electrical
        </h1>
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-center text-lg font-sans font-light text-gray-600">
            Zeta Electrical are providers of a quality service for your domestic
            electrical needs. As a registered member of NAPIT, you can be
            confident that we have been vetted and hold the relevant
            qualifications, insurances and competencies to carry out works
            within your property.
            <br />
            <br />
            Whether you simply require a change of light fitting, an outside
            light, additional socket or a full change of fuse board/consumer
            unit, Zeta Electrical can help.
          </p>
          <Img
            fixed={data.napitLogo.childImageSharp.fixed}
            className="mt-10"
            alt="Napit UKAS logo"
          />
          <h2 className="mb-16 mt-16 sm:mt-32 text-center text-2xl lg:text-3xl font-sans font-light text-gray-600">
            Zeta Electrical provides:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-32 sm:gap-y-44 max-w-xs sm:w-auto sm:max-w-lg mx-auto">
            {[
              {
                icon: <FreeQuote />,
                text: "Free, transparent, no obligation quotes",
              },
              {
                icon: <GreaterManchester />,
                text:
                  "Serving Tameside and surrounding areas in Greater Manchester",
              },
              {
                icon: <FlexibleWorking />,
                text:
                  "Flexible working - evening and weekend visits can be arranged",
              },
              {
                icon: <FullyCompliant />,
                text:
                  "Work that is fully compliant, tested and certified in line with the latest regulations",
              },
            ].map((feature, i) => (
              <div className="flex flex-col" key={i}>
                <div className="h-40 mb-8 mx-auto">{feature.icon}</div>
                <p className="text-center text-lg font-sans font-light text-gray-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section section="services" width="6xl">
        <h1 className="mb-8 text-center text-3xl lg:text-5xl font-sans font-light text-gray-600">
          Services
        </h1>
        <p className="text-center text-lg font-sans font-light text-gray-600">
          All work meets current BS7671 standards and relevant certification
          will be provided as necessary.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mt-32">
          {[
            {
              icon: <ChangeFittings />,
              text: "Change of fittings e.g. sockets, switches and lights",
            },
            {
              icon: <FaultFinding />,
              text: "Fault finding and repairs",
            },
            {
              icon: <ExistingCircuits />,
              text: "Additions to existing circuits e.g. extra socket outlets",
            },
            {
              icon: <WiringOvens />,
              text: "Wiring of ovens, hobs, hoods",
            },
            {
              icon: <SecurityLighting />,
              text: "Outdoor and security lighting",
            },
            {
              icon: <ConsumerUnit />,
              text: "Consumer unit / fuse board upgrades and replacements",
            },
            {
              icon: <Rewires />,
              text: "Partial or full rewires",
            },
            {
              icon: <CctvInstall />,
              text: "CCTV installation",
            },
          ].map((service, i) => (
            <div className="flex flex-col items-center" key={i}>
              <div className="flex items-center border border-gray-900 rounded-full h-24 w-24 mb-8">
                <div className="h-14">{service.icon}</div>
              </div>
              <p className="text-center text-md md:text-lg font-sans font-light text-gray-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section section="recent-work" width="6xl" color>
        <h1 className="mb-8 text-center text-3xl lg:text-5xl font-sans font-light text-gray-600">
          Recent work
        </h1>
        <p className="text-center text-lg font-sans font-light text-gray-600">
          Here's some of our latest work.
        </p>
        <div className="gallery mt-32">
          {[
            {
              name: "securityLight",
              alt: "Security light fitted on an external brick wall",
            },
            {
              name: "beforeAfterOne",
              alt: "Before and after photo of an electrical board",
              beforeAfter: true,
            },
            {
              name: "beforeAfterTwo",
              alt: "Before and after photo of an electrical board",
              beforeAfter: true,
            },
            {
              name: "newBoard",
              alt: "New electrical board",
            },
            {
              name: "kitchenLightFitting",
              alt: "Kitchen light fitting",
            },
          ].map(image => (
            <div className={`${image.name} relative`} key={image.name}>
              <Img
                fixed={data[image.name].childImageSharp.fluid}
                className="h-full w-full"
                alt={image.alt}
              />
              {image.beforeAfter ? (
                <>
                  <p className="absolute top-0 left-0 py-2 px-4 text-md font-sans font-light text-white bg-gray-900">
                    Before
                  </p>
                  <p className="absolute bottom-0 right-0 py-2 px-4 text-md font-sans font-light text-white bg-gray-900">
                    After
                  </p>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query {
    napitLogo: file(relativePath: { eq: "napit-logo.png" }) {
      childImageSharp {
        fixed(width: 200, height: 116) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    securityLight: file(relativePath: { eq: "security-lighting.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beforeAfterOne: file(relativePath: { eq: "before-after-one.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beforeAfterTwo: file(relativePath: { eq: "before-after-two.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newBoard: file(relativePath: { eq: "new-board.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kitchenLightFitting: file(
      relativePath: { eq: "kitchen-light-fitting.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index
