import { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticleBackground = ({ theme }) => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine)
    }, [])

    const options = useMemo(() => ({
        fullScreen: false,
        background: {
            color: {
                value: 'transparent',
            },
        },
        fpsLimit: 60,
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: {
                value: theme === 'light' ? '#0052cc' : '#00d4ff',
            },
            links: {
                enable: true,
                distance: 150,
                color: theme === 'light' ? '#0052cc' : '#00d4ff',
                opacity: theme === 'light' ? 0.15 : 0.3,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                outModes: {
                    default: 'bounce',
                },
            },
            opacity: {
                value: theme === 'light' ? 0.3 : 0.5,
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
                onClick: {
                    enable: true,
                    mode: 'push',
                },
            },
            modes: {
                repulse: {
                    distance: 120,
                    duration: 0.4,
                },
                push: {
                    quantity: 3,
                },
            },
        },
        detectRetina: true,
    }), [theme])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}
        />
    )
}

export default ParticleBackground
