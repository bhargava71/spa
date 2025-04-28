
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SocialIcons from "../components/socialicons"

const HomePage = () => {
  const [showSocialMedia, setShowSocialMedia] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowSocialMedia(true)
      } else {
        setShowSocialMedia(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const services = [
    {
      title: "Wedding Makeup",
      description:
        "Creating the perfect bridal look is a true art, and making you feel radiant and confident on your wedding day is my top priority.",

      image: "/assets/homepage/wedding.svg",
    },
    {
      title: "Party Makeup",
      description:
        "Getting ready for a fancy party isn't just about the dress and hair -- your makeup is one of the key components to achieving your fancy look.",
      image: "/assets/homepage/drinks.svg",
    },
    {
      title: "Fashion Makeup",
      description:
        "Preparing for a glamorous event isn’t complete without flawless makeup — it’s the final touch that brings your entire look together.",
      image: "/assets/homepage/comb.svg",
    },
    {
      title: "Photo-Shoot",
      description:
        "Makeup products like lipstick and powder are used to enhance or transform your look, creating the perfect finish for a stunning photo shoot.",
      image: "/assets/homepage/photo.svg",
    },
  ]

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

 

  return (
    <div className="overflow-x-hidden ">
<SocialIcons />

      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            {/* Image Gallery */}
            <motion.div
              className="relative flex gap-3 w-full lg:w-1/2 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {[
                "/assets/homepage/w1.jpg",
                "/assets/homepage/w2.jpg",
                "/assets/homepage/w3.jpeg",
                "/assets/homepage/w4.jpg",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className={`relative ${index % 2 === 0 ? "mt-12" : "mb-12"}`}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Beauty look ${index + 1}`}
                    className="w-16 sm:w-24 md:w-32 h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg border-2 border-transparent hover:border-purple-600 transition-all"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Text Content */}
            <motion.div className="text-center lg:text-left lg:w-1/2 max-w-lg" variants={fadeIn}>
              <motion.p
                className="text-purple-600 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Welcome To
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-5xl font-bold text-purple-700 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                BK SPA
              </motion.h1>
              <motion.p
                className="mt-6 text-gray-700 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Our beauty professionals combine advanced technology, premium products, and exceptional expertise to deliver beauty services that truly stand out.
              </motion.p>
              <motion.button
                className="mt-8 px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                KNOW MORE
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-600">Perfect Services for Every Occasion</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Reveal your best self with personalized beauty and wellness services designed just for you.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-purple-50 rounded-full">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-12 h-12 text-purple-600"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Franchise Section */}
      <motion.section
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/background.webp')` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white max-w-xl">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Best Service
              </motion.h2>
              <motion.p
                className="text-lg opacity-90"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Experience the finest in beauty and wellness with our expertly crafted services, designed to deliver exceptional results and an unforgettable experience for every client.
              </motion.p>
            </div>
            <motion.button
              className="mt-6 md:mt-0 border-2 border-white px-8 py-3 rounded-lg text-white font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              CONTACT US
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Footer Banner */}
      <motion.section
        className="bg-white py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-purple-50 to-purple-100 shadow-xl rounded-2xl p-10 text-center"
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              BK SPA
            </motion.h2>
            <motion.p
              className="text-purple-600 text-lg max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Join the BK family and embark on a path to excellence. Redefine beauty and unlock unparalleled success.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default HomePage
