import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'

const educationData = [
    {
        degree: 'BSc in Computer Science and Engineering',
        institution: 'East West University, Dhaka',
        year: 'Feb 2022 - Dec 2025',
        details: 'CGPA: 3.77 / 4.00 • Major: Software Engineering',
        badge: 'Cum Laude',
    },
    {
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'Dhaka Imperial College',
        year: '2020',
        details: 'GPA: 5.00 • Group: Science',
        badge: null,
    },
    {
        degree: 'Secondary School Certificate (SSC)',
        institution: 'Willes Little Flower School & College',
        year: '2018',
        details: 'GPA: 5.00 • Group: Science',
        badge: null,
    },
]

const honors = [
    'Cum Laude Distinction',
    '100% Merit Scholarship (2025)',
    "Dean's Scholarship (2023-2024)",
]

const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.15, duration: 0.5 },
    }),
}

const Education = () => {
    return (
        <section className="education" id="education">
            <div className="container">
                <motion.h2
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Education
                </motion.h2>

                <div className="education-cards">
                    {educationData.map((edu, i) => (
                        <motion.article
                            className="edu-card"
                            key={i}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="edu-card-header">
                                <h3 className="edu-degree">{edu.degree}</h3>
                                <span className="edu-year">{edu.year}</span>
                            </div>
                            <p className="edu-institution">{edu.institution}</p>
                            <p className="edu-details">{edu.details}</p>
                            {edu.badge && <span className="edu-badge">{edu.badge}</span>}
                        </motion.article>
                    ))}
                </div>

                <div className="honors">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Honors &amp; Awards
                    </motion.h3>
                    <div className="honors-chips">
                        {honors.map((honor, i) => (
                            <motion.div
                                className="honor-chip"
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                            >
                                <FaTrophy />
                                {honor}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
