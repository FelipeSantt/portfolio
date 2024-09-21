import { SOCIAL_MEDIA_LINKS } from "../constants"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
        <div className="flex items-center justify-center">
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-lg my-5">
                    Felipe Santos
                </motion.h3>
        </div>
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <motion.a
                    initial={{ opacity: 0 , x: -20 }}
                    whileInView={{ opacity: 1 , x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.5}} 
                    key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                </motion.a>
            ))}
        </div>
        <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
            &copy;Copyright. Todos os direitos reservados.
        </p>
    </div>
  )
}

export default Footer
