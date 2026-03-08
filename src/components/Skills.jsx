import { motion } from 'framer-motion'
import {
    FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaPhp, FaHtml5, FaCss3Alt, FaDatabase,
} from 'react-icons/fa'
import {
    SiJavascript, SiTypescript, SiCplusplus, SiMongodb, SiPostgresql,
    SiFirebase, SiRedis, SiSqlite, SiDjango, SiAngular, SiRedux,
    SiAndroidstudio, SiExpress, SiGithub, SiCelery,
} from 'react-icons/si'
import { TbBrandVscode, TbApi, TbLock, TbLetterC } from 'react-icons/tb'

const skillCategories = [
    {
        title: 'Languages',
        skills: [
            { name: 'Java', icon: <FaJava /> },
            { name: 'Python', icon: <FaPython /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'C', icon: <TbLetterC /> },
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'SQL', icon: <FaDatabase /> },
            { name: 'PHP', icon: <FaPhp /> },
        ],
    },
    {
        title: 'Web Development',
        skills: [
            { name: 'React.js', icon: <FaReact /> },
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'Angular', icon: <SiAngular /> },
            { name: 'Django', icon: <SiDjango /> },
            { name: 'HTML5', icon: <FaHtml5 /> },
            { name: 'CSS3', icon: <FaCss3Alt /> },
        ],
    },
    {
        title: 'Mobile Development',
        skills: [
            { name: 'Android Studio', icon: <SiAndroidstudio /> },
            { name: 'Java (Android)', icon: <FaJava /> },
            { name: 'XML', icon: <TbApi /> },
        ],
    },
    {
        title: 'Databases',
        skills: [
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Firebase', icon: <SiFirebase /> },
            { name: 'Redis', icon: <SiRedis /> },
            { name: 'SQLite', icon: <SiSqlite /> },
        ],
    },
    {
        title: 'Tools & Practices',
        skills: [
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'GitHub', icon: <SiGithub /> },
            { name: 'REST API', icon: <TbApi /> },
            { name: 'JWT Auth', icon: <TbLock /> },
            { name: 'Redux Toolkit', icon: <SiRedux /> },
            { name: 'Celery', icon: <SiCelery /> },
            { name: 'VS Code', icon: <TbBrandVscode /> },
        ],
    },
]

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <motion.h2
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Technical Skills
                </motion.h2>

                <div className="skills-grid">
                    {skillCategories.map((category, catIdx) => (
                        <motion.div
                            className="skill-category"
                            key={catIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIdx * 0.1, duration: 0.5 }}
                        >
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-badges">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.span
                                        className="skill-badge"
                                        key={skillIdx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIdx * 0.1 + skillIdx * 0.05, duration: 0.3 }}
                                        whileHover={{
                                            scale: 1.08,
                                            boxShadow: '0 0 10px rgba(0, 212, 255, 0.4)',
                                            transition: { duration: 0.2 },
                                        }}
                                    >
                                        {skill.icon}
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
