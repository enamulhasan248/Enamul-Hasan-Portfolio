import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import cvFile from '../assets/Enamul_Hasan_CV.pdf'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <motion.h2
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    className="contact-intro"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    I am actively looking for Software Engineer and Full Stack Developer roles. Whether you have a role, a project, or just want to say hello, my inbox is open.
                </motion.p>

                <motion.div
                    className="contact-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <div className="contact-row">
                        <FaEnvelope />
                        <a href="mailto:enamulhasan248@gmail.com">enamulhasan248@gmail.com</a>
                    </div>
                    <div className="contact-row">
                        <FaPhone />
                        <span>+880 199 858 9166</span>
                    </div>
                    <div className="contact-row">
                        <FaMapMarkerAlt />
                        <span>Dhaka, Bangladesh</span>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-socials"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <motion.a
                        href="https://github.com/enamulhasan248"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn"
                        aria-label="GitHub"
                        whileHover={{ scale: 1.15, color: '#00d4ff' }}
                        transition={{ duration: 0.2 }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/enamulhasan248"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn"
                        aria-label="LinkedIn"
                        whileHover={{ scale: 1.15, color: '#00d4ff' }}
                        transition={{ duration: 0.2 }}
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        href="mailto:enamulhasan248@gmail.com"
                        className="social-btn"
                        aria-label="Email"
                        whileHover={{ scale: 1.15, color: '#fbbf24' }}
                        transition={{ duration: 0.2 }}
                    >
                        <FaEnvelope />
                    </motion.a>
                    <motion.a
                        href={cvFile}
                        download="Enamul_Hasan_CV.pdf"
                        className="social-btn"
                        aria-label="Download CV"
                        whileHover={{ scale: 1.15, color: '#00d4ff' }}
                        transition={{ duration: 0.2 }}
                    >
                        <FaDownload />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
