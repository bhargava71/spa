// components/SocialIcons.js
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF,  FaInstagram } from 'react-icons/fa'

const SocialIcons = () => {
  const [showSocialMedia, setShowSocialMedia] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowSocialMedia(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const socialIconVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  }

  if (!showSocialMedia) return null

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-50"
    >
      {[FaFacebookF, FaInstagram].map((Icon, index) => (
        <motion.a
          key={index}
          href="#"
          variants={socialIconVariants}
          whileHover={{ scale: 1.1, backgroundColor: "#9333EA" }}
          className="bg-gray-900 p-3 rounded-full text-white shadow-lg transition-all"
        >
          <Icon />
        </motion.a>
      ))}
    </motion.div>
  )
}

export default SocialIcons
