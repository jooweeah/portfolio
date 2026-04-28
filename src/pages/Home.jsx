import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import bgImage from '@/assets/background.jpg'

function Home() {
  return (
    <section
      style={{
        minHeight: 'calc(100vh - 60px)',
        position: 'relative',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.90) 65%, rgba(255,214,224,0.5) 100%)',
        }}
      />

      <div className="container position-relative text-center py-5">
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span
              className="d-inline-block mb-4 px-3 py-1 rounded-pill"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-primary)',
                fontSize: '0.85rem',
                fontWeight: '500',
              }}
            >
              ✿ &nbsp;hello, welcome!
            </span>

            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
                color: 'var(--color-dark)',
                lineHeight: 1.15,
              }}
            >
              I&apos;m{' '}
              <span
                style={{
                  color: 'var(--color-primary)',
                  borderBottom: '3px solid var(--color-accent)',
                  paddingBottom: '2px',
                }}
              >
                Julia Price
              </span>
            </h1>

            <p
              className="mb-5"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                color: 'var(--color-muted)',
                lineHeight: 1.7,
              }}
            >
              a student and an aspiring developer.
            </p>

            <Link
              to="/about"
              className="btn rounded-pill px-5 py-2"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '500',
                boxShadow: '0 4px 14px rgba(232, 160, 191, 0.45)',
              }}
            >
              more about me →
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Home
