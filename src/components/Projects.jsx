import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import VanillaTilt from 'vanilla-tilt'
import jatraImg from '../assets/Jatra.png'
import ledgerSyncImg from '../assets/LedgerSync.png'
import uniEventImg from '../assets/UniEvent.jpg'
import shopopImg from '../assets/Shopop.png'

const projectsData = [
    {
        title: 'Jatra',
        subtitle: 'Smart City Bus Tracking & Navigation System',
        description:
            'A native Android application solving the unpredictability of Dhaka\'s public transit with real-time GPS tracking. Features a custom location interpolation algorithm and Firebase-powered backend to minimize costs.',
        tags: ['Native Android', 'Java', 'Firebase', 'Cloud Functions'],
        image: jatraImg,
        github: 'https://github.com/enamulhasan248/Jatra-A-Smart-City-Bus-Tracking-Navigation-System',
        live: '#',
    },
    {
        title: 'LedgerSync',
        subtitle: 'Smart Crypto & Finance Dashboard',
        description:
            'A scalable financial platform unifying data from 3 market ecosystems into a single dashboard. Built with an asynchronous Celery/Redis pipeline that refreshes price data every 60 seconds.',
        tags: ['Django', 'PostgreSQL', 'Redis', 'Celery', 'JWT'],
        image: ledgerSyncImg,
        github: 'https://github.com/enamulhasan248/LedgerSync-A-Smart-Crypto-Finance-Dashboard',
        live: 'https://ledger-sync-a-smart-crypto-finance.vercel.app/',
    },
    {
        title: 'UniEvent',
        subtitle: 'Campus Event Management System',
        description:
            'A full-stack university event platform with real-time QR code attendance verification via webcam. Implements Role-Based Access Control for Admins, Organizers, and Students.',
        tags: ['FastAPI', 'Angular', 'PostgreSQL', 'Bootstrap 5', 'RBAC'],
        image: uniEventImg,
        github: 'https://github.com/enamulhasan248/UniEvent',
        live: '#',
    },
    {
        title: 'Shopop: MERN E-Commerce',
        subtitle: 'Scalable Full-Stack Shopping Engine',
        description:
            'A full-stack e-commerce platform with atomic MongoDB transactions preventing race conditions between orders and inventory. Features Redux Toolkit state management and Cloudinary media integration.',
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Cloudinary'],
        image: shopopImg,
        github: 'https://github.com/enamulhasan248/Shopop-An-ecommerce-platform-built-with-MERN-stack',
        live: 'https://shopop-an-ecommerce-platform-built.vercel.app/',
    },
]

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null)

    useEffect(() => {
        const el = cardRef.current
        if (!el) return

        VanillaTilt.init(el, {
            max: 12,
            speed: 400,
            glare: true,
            'max-glare': 0.15,
            scale: 1.02,
        })

        return () => {
            if (el.vanillaTilt) {
                el.vanillaTilt.destroy()
            }
        }
    }, [])

    return (
        <motion.article
            className="project-card"
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
        >
            <div className="project-preview">
                <img src={project.image} alt={`${project.title} preview`} className="project-preview-img" />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-description">{project.description}</p>

            <div className="project-tags">
                {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                ))}
            </div>

            <div className="project-actions">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                >
                    <FaGithub /> Code
                </a>
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                >
                    <FaExternalLinkAlt /> Preview
                </a>
            </div>
        </motion.article>
    )
}

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <motion.h2
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {projectsData.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
