import { useRef, useCallback, useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaLayerGroup, FaMobileAlt } from 'react-icons/fa'
import profileImg from '../assets/profile.png'
import cvFile from '../assets/Enamul_Hasan_CV.pdf'

/* ===== Magnetic Effect Hook ===== */
const useMagneticEffect = (ref, strength = 0.4) => {
    const handleMouseMove = useCallback((e) => {
        const el = ref.current
        if (!el) return

        const rect = el.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distX = e.clientX - centerX
        const distY = e.clientY - centerY
        const distance = Math.sqrt(distX * distX + distY * distY)

        if (distance < 80) {
            el.style.transform = `translate(${distX * strength}px, ${distY * strength}px)`
            el.style.transition = 'transform 0.1s ease'
        }
    }, [ref, strength])

    const handleMouseLeave = useCallback(() => {
        const el = ref.current
        if (!el) return
        el.style.transform = 'translate(0, 0)'
        el.style.transition = 'transform 0.4s ease'
    }, [ref])

    return { handleMouseMove, handleMouseLeave }
}

/* ===== Role Cards Data ===== */
const roles = [
    {
        label: 'Software Engineer',
        icon: FaCode,
        accent: '#00d4ff',
        rgb: '0, 212, 255',
        delay: 0.2,
        pulseDelay: 0,
    },
    {
        label: 'MERN Stack Developer',
        icon: FaLayerGroup,
        accent: '#a78bfa',
        rgb: '167, 139, 250',
        delay: 0.4,
        pulseDelay: 1,
    },
    {
        label: 'Android Application Developer',
        icon: FaMobileAlt,
        accent: '#38bdf8',
        rgb: '56, 189, 248',
        delay: 0.6,
        pulseDelay: 2,
    },
]

/* ===== Role Card Component ===== */
const RoleCard = ({ role }) => {
    const cardRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isTouchDevice, setIsTouchDevice] = useState(false)

    const mouseX = useMotionValue(0.5)
    const mouseY = useMotionValue(0.5)

    const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 200, damping: 20 })
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 200, damping: 20 })

    useEffect(() => {
        setIsTouchDevice(window.matchMedia('(hover: none)').matches)
    }, [])

    const handleMouseMove = useCallback((e) => {
        const el = cardRef.current
        if (!el || isTouchDevice) return
        const rect = el.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width)
        mouseY.set((e.clientY - rect.top) / rect.height)
    }, [isTouchDevice, mouseX, mouseY])

    const handleMouseLeave = useCallback(() => {
        mouseX.set(0.5)
        mouseY.set(0.5)
    }, [mouseX, mouseY])

    const Icon = role.icon

    return (
        <motion.div
            className={`role-card ${isHovered ? 'hovered' : ''}`}
            ref={cardRef}
            style={{
                '--rc-accent': role.accent,
                '--rc-rgb': role.rgb,
                perspective: '600px',
                rotateX: isTouchDevice ? 0 : rotateX,
                rotateY: isTouchDevice ? 0 : rotateY,
            }}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: role.delay, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ x: window.innerWidth < 768 ? 5 : 10, scale: 1.03, transition: { duration: 0.25, ease: 'easeOut' } }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { handleMouseLeave(); setIsHovered(false) }}
            onMouseEnter={() => setIsHovered(true)}
        >
            {/* Idle pulse glow */}
            <motion.span
                className="role-card-pulse"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: role.pulseDelay }}
                style={{ background: role.accent }}
            />
            <motion.span
                className="role-card-icon"
                whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                style={{ color: role.accent }}
            >
                <Icon />
            </motion.span>
            <span className="role-card-text" style={{ color: role.accent }}>
                {role.label}
            </span>
        </motion.div>
    )
}

const Hero = () => {
    const sectionRef = useRef(null)
    const heroTextRef = useRef(null)
    const profileContainerRef = useRef(null)
    const orb1Ref = useRef(null)
    const orb2Ref = useRef(null)

    const btn1Ref = useRef(null)
    const btn2Ref = useRef(null)

    const mag1 = useMagneticEffect(btn1Ref, 0.4)
    const mag2 = useMagneticEffect(btn2Ref, 0.4)

    /* ===== Parallax Effect ===== */
    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const handleMouseMove = (e) => {
            const rect = section.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2

            if (profileContainerRef.current) {
                profileContainerRef.current.style.transform =
                    `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`
                profileContainerRef.current.style.transition = 'transform 0.1s ease'
            }

            if (heroTextRef.current) {
                heroTextRef.current.style.transform = `translate(${-x * 12}px, ${-y * 8}px)`
                heroTextRef.current.style.transition = 'transform 0.1s ease'
            }

            if (orb1Ref.current) {
                orb1Ref.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`
            }
            if (orb2Ref.current) {
                orb2Ref.current.style.transform = `translate(${x * 15}px, ${y * 15}px)`
            }
        }

        const handleMouseLeave = () => {
            if (profileContainerRef.current) {
                profileContainerRef.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)'
                profileContainerRef.current.style.transition = 'transform 0.6s ease'
            }
            if (heroTextRef.current) {
                heroTextRef.current.style.transform = 'translate(0, 0)'
                heroTextRef.current.style.transition = 'transform 0.6s ease'
            }
            if (orb1Ref.current) {
                orb1Ref.current.style.transform = 'translate(0, 0)'
                orb1Ref.current.style.transition = 'transform 0.6s ease'
            }
            if (orb2Ref.current) {
                orb2Ref.current.style.transform = 'translate(0, 0)'
                orb2Ref.current.style.transition = 'transform 0.6s ease'
            }
        }

        section.addEventListener('mousemove', handleMouseMove)
        section.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            section.removeEventListener('mousemove', handleMouseMove)
            section.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <section className="hero" id="hero" ref={sectionRef}>
            <div className="container">
                <div className="hero-text" ref={heroTextRef}>
                    <motion.p
                        className="hero-tagline"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Hello, I&apos;m
                    </motion.p>

                    <div className="role-stack">
                        {roles.map((role, i) => (
                            <RoleCard key={i} role={role} />
                        ))}
                    </div>

                    <motion.p
                        className="hero-sub"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Building scalable web and native Android applications. Proficient in the MERN stack and Java, committed to writing clean, maintainable code.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            offset={-70}
                            duration={600}
                        >
                            <button
                                className="btn-primary"
                                ref={btn1Ref}
                                onMouseMove={mag1.handleMouseMove}
                                onMouseLeave={mag1.handleMouseLeave}
                            >
                                View My Work
                            </button>
                        </Link>

                        <a
                            href={cvFile}
                            download="Enamul_Hasan_CV.pdf"
                            className="btn-secondary"
                            ref={btn2Ref}
                            onMouseMove={mag2.handleMouseMove}
                            onMouseLeave={mag2.handleMouseLeave}
                        >
                            <FaDownload /> Download CV
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <a href="https://github.com/enamulhasan248" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/enamulhasan248" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:enamulhasan248@gmail.com" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </motion.div>
                </div>

                <div className="hero-image">
                    <div className="profile-container" ref={profileContainerRef}>
                        <img src={profileImg} alt="Enamul Hasan - Software Engineer" className="profile-img" />
                        <div className="orb orb-1" ref={orb1Ref}></div>
                        <div className="orb orb-2" ref={orb2Ref}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
