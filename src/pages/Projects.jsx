import { motion } from 'framer-motion'
import project1Img from '../assets/project1.png'
import project2Img from '../assets/project2.png'
import project3Img from '../assets/project3.png'

const projects = [
  {
    id: 1,
    title: 'Recipe Box',
    description: 'A personal recipe manager to save, organize, and rate your favorite recipes. Each account has its own private collection that syncs across devices.',
    techStack: ['React (Vite)', 'Firebase', 'Firestore', 'Claude'],
    retrospective: 'Building this project was a great learning experience in full-stack development. I got to work with user authentication, database management, and responsive design. In retrospect, I would have added increased contrast earlier in the design process and fixed the low-quality image headers.',
    demo: 'https://julias-recipe-box.netlify.app/',
    repo: 'https://github.com/jooweeah/Recipe-Box',
    image: project1Img,
  },
  {
    id: 2,
    title: 'Habit Tracker',
    description: 'A minimal web app for building and maintaining daily habits. Track your streaks, visualize completion history on a calendar grid, and stay consistent.',
    techStack: ['React (Vite)', 'Claude'],
    retrospective: 'This was my first time building a website with a calendar component. In retrospect, I would have been more specific with planning my initial design to avoid creating a generic layout.',
    demo: 'https://julias-habit-tracker.netlify.app/',
    repo: 'https://github.com/jooweeah/habit-tracker',
    image: project2Img,
  },
  {
    id: 3,
    title: 'Luxe Locks',
    description: 'A static site representing a premium hair salon and wig boutique.',
    techStack: ['HTML', 'CSS', 'Claude'],
    retrospective: 'This was my first website working with Claude. I learned a lot about how to give better prompts to get more polished results. In retrospect, I would have spent more time on the design phase to make it more usable and removed excessive placeholder images.',
    demo: 'https://luxelocksstaticsite.netlify.app/',
    repo: 'https://github.com/jooweeah/luxe-locks',
    image: project3Img,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
}

function Projects() {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <h2 className="mb-5 text-center" style={{ color: 'var(--color-primary)' }}>Projects</h2>
        <div className="row g-4 justify-content-center">
          {projects.map((project, i) => (
            <div className="col-12 col-sm-6 col-lg-4" key={project.id}>
              <motion.div
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="h-100 d-flex flex-column rounded-3 overflow-hidden"
                style={{
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div
                    style={{
                      height: '180px',
                      backgroundColor: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-muted)',
                      fontSize: '0.85rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    preview image
                  </div>
                )}

                <div
                  className="d-flex flex-column flex-grow-1 p-4"
                  style={{ backgroundColor: 'var(--color-bg-soft)' }}
                >
                  <h5 className="fw-semibold mb-2">{project.title}</h5>
                  <p
                    className="mb-3"
                    style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}
                  >
                    {project.description}
                  </p>

                  {project.techStack && (
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="badge"
                          style={{
                            backgroundColor: 'var(--color-accent)',
                            color: 'var(--color-primary)',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            padding: '0.3em 0.65em',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.retrospective && (
                    <div
                      className="flex-grow-1 mb-4 p-3 rounded-2"
                      style={{ backgroundColor: 'var(--color-bg)', borderLeft: '3px solid var(--color-primary)' }}
                    >
                      <p
                        className="mb-1"
                        style={{ color: 'var(--color-primary)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                      >
                        Retrospective
                      </p>
                      <p
                        className="mb-0"
                        style={{ color: 'var(--color-muted)', fontSize: '0.85rem', lineHeight: '1.55', fontStyle: 'italic' }}
                      >
                        {project.retrospective}
                      </p>
                    </div>
                  )}

                  <div className="d-flex gap-2">
                    <a
                      href={project.demo}
                      className="btn btn-primary btn-sm flex-grow-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.repo}
                      className="btn btn-outline-primary btn-sm flex-grow-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
