import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [activeButton, setActiveButton] = useState('admission');

  return (
    <main className="home">

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-label">
            WELCOME TO
          </p>

          <h1>
            Jenith International School
          </h1>

          <p className="hero-tagline">
            Learn Today. Lead Tomorrow.
          </p>

          <p className="hero-description">
            We provide a supportive and engaging learning environment
            where every student is encouraged to learn, grow, discover
            their talents, and build confidence for a successful future.
          </p>

          <div className="hero-buttons">

            <Link
              to="/admissions"
              className={
                activeButton === 'admission'
                  ? 'primary-btn'
                  : 'secondary-btn'
              }
              onClick={() => setActiveButton('admission')}
            >
              Explore Admissions
            </Link>

            <Link
              to="/about"
              className={
                activeButton === 'school'
                  ? 'primary-btn'
                  : 'secondary-btn'
              }
              onClick={() => setActiveButton('school')}
            >
              Discover Our School
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          ABOUT PREVIEW
      ========================= */}

      {/* About Preview */}
{/* About Preview */}
<section className="about-section">

  <div className="about-container">

    {/* LEFT - IMAGE */}
    <div className="about-visual">

      <div className="about-image-wrapper">

        <img
          src="/campus-hero.png"
          alt="Jenith International School campus"
          className="about-main-image"
        />

      </div>

      <div className="about-experience">
        <strong>10+</strong>
        <span>Years of<br />Educational Excellence</span>
      </div>

      <div className="about-dot-pattern"></div>

    </div>


    {/* RIGHT - CONTENT */}
    <div className="about-content">

      <div className="about-heading">

        <span className="about-line"></span>

        <p className="section-label">
          ABOUT OUR SCHOOL
        </p>

      </div>

      <h2>
        Inspiring young minds.
        <span> Building brighter futures.</span>
      </h2>

      <p className="about-intro">
        At Jenith International School, we believe that every
        student has the potential to achieve something meaningful.
        Our learning environment encourages curiosity, confidence,
        creativity and a lifelong love for learning.
      </p>

      <div className="about-features">

        <div className="about-feature">

          <div className="feature-icon">
            ✓
          </div>

          <div>
            <h3>
              Student-Centered Learning
            </h3>

            <p>
              Helping every student discover their strengths
              and reach their full potential.
            </p>
          </div>

        </div>


        <div className="about-feature">

          <div className="feature-icon">
            ✓
          </div>

          <div>
            <h3>
              Experienced Educators
            </h3>

            <p>
              Dedicated teachers who guide students with
              knowledge, care and encouragement.
            </p>
          </div>

        </div>


        <div className="about-feature">

          <div className="feature-icon">
            ✓
          </div>

          <div>
            <h3>
              Safe &amp; Supportive Environment
            </h3>

            <p>
              A welcoming campus where students feel
              respected, confident and ready to learn.
            </p>
          </div>

        </div>

      </div>

      <Link
        to="/about"
        className="about-learn-btn"
      >
        Discover Our School
        <span>→</span>
      </Link>

    </div>

  </div>

</section>
      {/* =========================
          HIGHLIGHTS
      ========================= */}

      {/* =========================
    SCHOOL HIGHLIGHTS
========================= */}

<section className="highlights">

  <div className="highlights-container">

    {/* Heading */}
    <div className="highlights-heading">

      <div className="highlights-label">
        <span></span>
        <p>SCHOOL HIGHLIGHTS</p>
      </div>

      <h2>
        Learning that goes
        <span> beyond the classroom.</span>
      </h2>

      <p className="highlights-intro">
        We focus on developing the whole student through
        meaningful education, creativity, leadership and
        experiences that prepare them for tomorrow.
      </p>

    </div>


    {/* Cards */}
    <div className="highlight-grid">


      {/* Card 01 */}
      <div className="highlight-card">

        <div className="highlight-top">

          <span className="highlight-number">
            01
          </span>

          <div className="highlight-icon">
            📚
          </div>

        </div>

        <div className="highlight-content">

          <h3>
            Quality Education
          </h3>

          <p>
            Building strong academic foundations through
            meaningful learning experiences and thoughtful
            teaching.
          </p>

        </div>

        <div className="highlight-arrow">
          →
        </div>

      </div>


      {/* Card 02 */}
      <div className="highlight-card">

        <div className="highlight-top">

          <span className="highlight-number">
            02
          </span>

          <div className="highlight-icon">
            🎯
          </div>

        </div>

        <div className="highlight-content">

          <h3>
            Student Development
          </h3>

          <p>
            Encouraging confidence, creativity, leadership
            and essential life skills beyond academics.
          </p>

        </div>

        <div className="highlight-arrow">
          →
        </div>

      </div>


      {/* Card 03 */}
      <div className="highlight-card">

        <div className="highlight-top">

          <span className="highlight-number">
            03
          </span>

          <div className="highlight-icon">
            🏆
          </div>

        </div>

        <div className="highlight-content">

          <h3>
            Achievements
          </h3>

          <p>
            Celebrating student achievements across
            academics, sports and extracurricular activities.
          </p>

        </div>

        <div className="highlight-arrow">
          →
        </div>

      </div>


      {/* Card 04 */}
      <div className="highlight-card">

        <div className="highlight-top">

          <span className="highlight-number">
            04
          </span>

          <div className="highlight-icon">
            🏫
          </div>

        </div>

        <div className="highlight-content">

          <h3>
            Modern Campus
          </h3>

          <p>
            Providing a safe, welcoming and inspiring
            environment designed for learning and growth.
          </p>

        </div>

        <div className="highlight-arrow">
          →
        </div>

      </div>

    </div>

  </div>

</section>

      {/* =========================
          LATEST UPDATES
      ========================= */}

      {/* =========================
    LATEST UPDATES
========================= */}

<section className="updates">

  <div className="updates-container">

    {/* Heading */}
    <div className="updates-heading">

      <div className="updates-label">
        <span></span>

        <p>
          STAY UPDATED
        </p>
      </div>

      <div className="updates-title-row">

        <h2>
          What's happening
          <span> at Jenith.</span>
        </h2>

        <p>
          Stay connected with the latest events, announcements
          and memorable moments from our school community.
        </p>

      </div>

    </div>


    {/* Update Cards */}
    <div className="updates-grid">


      {/* EVENTS */}
      <Link
        to="/explore"
        className="update-card"
      >

        <div className="update-card-top">

          <span className="update-number">
            01
          </span>

          <div className="update-icon">
            📅
          </div>

        </div>

        <div className="update-content">

          <span className="update-category">
            EVENTS
          </span>

          <h3>
            School Events
          </h3>

          <p>
            Discover upcoming celebrations, activities and
            special events happening across our school community.
          </p>

        </div>

        <div className="update-link">
          Explore Events
          <span>→</span>
        </div>

      </Link>


      {/* NOTICES */}
      <Link
        to="/explore"
        className="update-card"
      >

        <div className="update-card-top">

          <span className="update-number">
            02
          </span>

          <div className="update-icon">
            📢
          </div>

        </div>

        <div className="update-content">

          <span className="update-category">
            NOTICES
          </span>

          <h3>
            Latest Notices
          </h3>

          <p>
            Keep up with important announcements, school
            information and updates for students and parents.
          </p>

        </div>

        <div className="update-link">
          View Notices
          <span>→</span>
        </div>

      </Link>


      {/* GALLERY */}
      <Link
        to="/explore"
        className="update-card"
      >

        <div className="update-card-top">

          <span className="update-number">
            03
          </span>

          <div className="update-icon">
            📸
          </div>

        </div>

        <div className="update-content">

          <span className="update-category">
            GALLERY
          </span>

          <h3>
            School Gallery
          </h3>

          <p>
            Explore memorable moments, student activities
            and special experiences from our school life.
          </p>

        </div>

        <div className="update-link">
          View Gallery
          <span>→</span>
        </div>

      </Link>

    </div>

  </div>

</section>
      {/* =========================
          ADMISSION CTA
      ========================= */}

      {/* =========================
    ADMISSION CTA
========================= */}

<section className="admission-cta">

  <div className="admission-cta-inner">

    <div className="admission-content">

      <div className="admission-label">
        <span></span>
        <p>ADMISSIONS</p>
      </div>

      <h2>
        Give your child a
        <span> strong foundation</span>
        for a brighter future.
      </h2>

      <p className="admission-description">
        Discover an inspiring learning environment where students
        are encouraged to learn, grow, lead and prepare for the
        opportunities ahead.
      </p>

      <Link
        to="/admissions"
        className="admission-button"
      >
        Explore Admissions
        <span>→</span>
      </Link>

    </div>


    <div className="admission-visual">

      <div className="admission-circle circle-one"></div>

      <div className="admission-circle circle-two"></div>

      <div className="admission-icon">
        🎓
      </div>

      <div className="admission-stat">
        <strong>Start</strong>
        <span>Your Journey</span>
      </div>

    </div>

  </div>

</section>

    </main>
  );
}

export default Home;