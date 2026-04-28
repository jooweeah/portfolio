import { motion } from 'framer-motion'
import portrait from '../assets/Portrait_Placeholder.png'

const skills = [
  'JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'Git', 'Figma',
]

const interests = [
  '🌸 Design & UI/UX',
  '🎨 Painting',
  '🎵 Music',
  '🎮 Video Games',
]

function About() {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container" style={{ maxWidth: '720px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <div className="d-flex flex-wrap align-items-center gap-4 mb-4">
            <img
              src={portrait}
              alt="Portrait"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid var(--color-accent)',
                flexShrink: 0,
              }}
            />
            <h2 className="mb-0" style={{ color: 'var(--color-primary)' }}>About Me</h2>
          </div>
          <p className="mb-5" style={{ color: 'var(--color-dark)', lineHeight: '1.8' }}>
            Hi, I&apos;m Julia, a front-end developer who loves building clean,
            thoughtful web experiences. I enjoy turning ideas into interfaces that
            feel both functional and beautiful.
          </p>

          <div className="mb-5">
            <h5 className="mb-3" style={{ color: 'var(--color-primary)' }}>Skills</h5>
            <div className="d-flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="badge"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-dark)',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    padding: '0.45em 0.9em',
                    borderRadius: '20px',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-3" style={{ color: 'var(--color-primary)' }}>Interests</h5>
            <div className="row g-2">
              {interests.map((item) => (
                <div key={item} className="col-6 col-sm-3">
                  <div
                    className="text-center py-3 px-2"
                    style={{
                      backgroundColor: 'var(--color-bg-soft)',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                    }}
                  >
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default About
