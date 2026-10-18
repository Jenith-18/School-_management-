import { Link } from 'react-router-dom';
import './Academics.css';

function Academics() {
  return (
    <main className="academics-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="academics-hero">

        <div className="academics-hero-content">

          <p className="hero-label">
            ACADEMICS
          </p>

          <h1>
            Inspiring Curiosity.
            <br />
            Building Knowledge.
          </h1>

          <p>
            At Jenith International School, we create meaningful
            learning experiences that help students grow with
            knowledge, confidence and purpose.
          </p>

        </div>

      </section>


      {/* =====================================================
          ACADEMIC OVERVIEW
      ===================================================== */}

      <section className="academic-overview">

        <div className="section-heading">

          <span className="section-label">
            ACADEMIC OVERVIEW
          </span>

          <h2>
            Academic Excellence at Jenith International School
          </h2>

          <p>
            At Jenith International School, we believe that
            meaningful education goes beyond textbooks and
            examinations. Our academic programme is designed to
            help students develop strong knowledge, critical
            thinking, creativity and effective communication skills.
          </p>

          <p>
            We provide a structured and supportive learning
            environment where students are encouraged to ask
            questions, explore ideas and apply what they learn
            in real-life situations.
          </p>

        </div>


        <div className="academic-highlights">

          <div className="academic-highlight-card">

            <span>📚</span>

            <h3>
              Strong Academic Foundation
            </h3>

            <p>
              Building clear concepts and strong fundamentals
              for lifelong learning.
            </p>

          </div>


          <div className="academic-highlight-card">

            <span>🎯</span>

            <h3>
              Student-Centred Learning
            </h3>

            <p>
              Encouraging students to actively participate
              in their learning journey.
            </p>

          </div>


          <div className="academic-highlight-card">

            <span>💡</span>

            <h3>
              Critical Thinking
            </h3>

            <p>
              Helping students analyse ideas and develop
              practical problem-solving skills.
            </p>

          </div>


          <div className="academic-highlight-card">

            <span>🗣️</span>

            <h3>
              Communication Skills
            </h3>

            <p>
              Developing confidence in expressing ideas,
              thoughts and opinions.
            </p>

          </div>


          <div className="academic-highlight-card">

            <span>🌱</span>

            <h3>
              Holistic Development
            </h3>

            <p>
              Supporting academic, personal, social and
              creative growth.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CLASSES & SECTIONS
      ===================================================== */}

      <section className="classes-section">

        <div className="section-heading center-heading">

          <span className="section-label">
            CLASSES & SECTIONS
          </span>

          <h2>
            Learning stages designed for every student
          </h2>

          <p>
            Our academic structure is organised into different
            learning stages to support the age, learning needs
            and development of every student.
          </p>

        </div>


        <div className="class-groups">


          {/* EARLY YEARS */}

          <div className="class-group">

            <div className="class-group-header">

              <span>
                01
              </span>

              <div>

                <h3>
                  Early Years
                </h3>

                <p>
                  Building curiosity and foundational skills.
                </p>

              </div>

            </div>


            <div className="class-list">

              <div className="class-card">
                <strong>
                  Pre-Primary
                </strong>

                <span>
                  Foundational Learning
                </span>
              </div>


              <div className="class-card">
                <strong>
                  Kindergarten
                </strong>

                <span>
                  Early Learning
                </span>
              </div>


              <div className="class-card">
                <strong>
                  Preparatory
                </strong>

                <span>
                  School Readiness
                </span>
              </div>

            </div>

          </div>


          {/* PRIMARY */}

          <div className="class-group">

            <div className="class-group-header">

              <span>
                02
              </span>

              <div>

                <h3>
                  Primary School
                </h3>

                <p>
                  Developing strong academic foundations.
                </p>

              </div>

            </div>


            <div className="class-list">

              <div className="class-card">
                <strong>Grade 1</strong>
                <span>Primary</span>
              </div>

              <div className="class-card">
                <strong>Grade 2</strong>
                <span>Primary</span>
              </div>

              <div className="class-card">
                <strong>Grade 3</strong>
                <span>Primary</span>
              </div>

              <div className="class-card">
                <strong>Grade 4</strong>
                <span>Primary</span>
              </div>

              <div className="class-card">
                <strong>Grade 5</strong>
                <span>Primary</span>
              </div>

            </div>

          </div>


          {/* MIDDLE */}

          <div className="class-group">

            <div className="class-group-header">

              <span>
                03
              </span>

              <div>

                <h3>
                  Middle School
                </h3>

                <p>
                  Encouraging deeper understanding and exploration.
                </p>

              </div>

            </div>


            <div className="class-list">

              <div className="class-card">
                <strong>Grade 6</strong>
                <span>Middle School</span>
              </div>

              <div className="class-card">
                <strong>Grade 7</strong>
                <span>Middle School</span>
              </div>

              <div className="class-card">
                <strong>Grade 8</strong>
                <span>Middle School</span>
              </div>

              <div className="class-card">
                <strong>Grade 9</strong>
                <span>Middle School</span>
              </div>

            </div>

          </div>


          {/* SECONDARY */}

          <div className="class-group">

            <div className="class-group-header">

              <span>
                04
              </span>

              <div>

                <h3>
                  Secondary School
                </h3>

                <p>
                  Preparing students for higher education and
                  future goals.
                </p>

              </div>

            </div>


            <div className="class-list">

              <div className="class-card">
                <strong>Grade 10</strong>
                <span>Secondary</span>
              </div>

              <div className="class-card">
                <strong>Grade 11</strong>
                <span>Senior Secondary</span>
              </div>

              <div className="class-card">
                <strong>Grade 12</strong>
                <span>Senior Secondary</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SUBJECTS & CURRICULUM
      ===================================================== */}

      <section className="subjects-section">

        <div className="section-heading center-heading">

          <span className="section-label">
            SUBJECTS & CURRICULUM
          </span>

          <h2>
            Learning that connects knowledge with real life
          </h2>

          <p>
            Our curriculum combines academic knowledge with
            practical learning experiences. Students are encouraged
            to understand concepts, develop problem-solving skills
            and apply their knowledge beyond the classroom.
          </p>

        </div>


        <div className="subjects-grid">

          <div className="subject-card">

            <span>🗣️</span>

            <h3>
              Languages
            </h3>

            <p>
              English, Tamil and Hindi
            </p>

          </div>


          <div className="subject-card">

            <span>🔢</span>

            <h3>
              Mathematics
            </h3>

            <p>
              Logical thinking, numbers and problem solving
            </p>

          </div>


          <div className="subject-card">

            <span>🔬</span>

            <h3>
              Science
            </h3>

            <p>
              Physics, Chemistry and Biology
            </p>

          </div>


          <div className="subject-card">

            <span>🌍</span>

            <h3>
              Social Studies
            </h3>

            <p>
              History, Geography and Civics
            </p>

          </div>


          <div className="subject-card">

            <span>💻</span>

            <h3>
              Technology
            </h3>

            <p>
              Computer Science and digital learning
            </p>

          </div>


          <div className="subject-card">

            <span>🎨</span>

            <h3>
              Creative & Physical Development
            </h3>

            <p>
              Art, Music and Physical Education
            </p>

          </div>

        </div>


        {/* CURRICULUM FOCUS */}

        <div className="curriculum-focus">

          <h3>
            Our Curriculum Focus
          </h3>

          <div className="focus-list">

            <span>Conceptual Learning</span>

            <span>Critical Thinking</span>

            <span>Problem Solving</span>

            <span>Communication</span>

            <span>Creativity</span>

            <span>Practical Learning</span>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXAMINATION
      ===================================================== */}

      <section className="examination-section">

        <div className="section-heading center-heading">

          <span className="section-label">
            EXAMINATION
          </span>

          <h2>
            Assessment that supports continuous improvement
          </h2>

          <p>
            Assessments at Jenith International School are
            designed to understand student progress and support
            continuous improvement.
          </p>

        </div>


        <div className="assessment-grid">

          <div className="assessment-card">

            <span>📝</span>

            <h3>
              Periodic Assessments
            </h3>

            <p>
              Regular assessments to understand learning progress.
            </p>

          </div>


          <div className="assessment-card">

            <span>📚</span>

            <h3>
              Class Tests
            </h3>

            <p>
              Classroom assessments that reinforce understanding.
            </p>

          </div>


          <div className="assessment-card">

            <span>📖</span>

            <h3>
              Assignments & Projects
            </h3>

            <p>
              Practical tasks that encourage research and creativity.
            </p>

          </div>


          <div className="assessment-card">

            <span>🎯</span>

            <h3>
              Term Examinations
            </h3>

            <p>
              Structured examinations to evaluate overall learning.
            </p>

          </div>


          <div className="assessment-card">

            <span>🏆</span>

            <h3>
              Activity-Based Assessment
            </h3>

            <p>
              Learning activities that evaluate practical skills.
            </p>

          </div>

        </div>


        {/* ASSESSMENT FLOW */}

        <div className="assessment-flow">

          <div>
            Learning
          </div>

          <span>→</span>

          <div>
            Activities
          </div>

          <span>→</span>

          <div>
            Assessments
          </div>

          <span>→</span>

          <div>
            Examinations
          </div>

          <span>→</span>

          <div>
            Performance Review
          </div>

        </div>

      </section>


      {/* =====================================================
          RESULTS
      ===================================================== */}

      <section className="results-section">

        <div className="results-content">

          <span className="section-label">
            RESULTS
          </span>

          <h2>
            Understanding student progress
          </h2>

          <p>
            Student results provide an overview of academic
            progress and help students, teachers and parents
            understand areas of achievement and opportunities
            for improvement.
          </p>


          <div className="result-points">

            <div>
              <span>✓</span>
              Academic Performance
            </div>

            <div>
              <span>✓</span>
              Subject-wise Performance
            </div>

            <div>
              <span>✓</span>
              Overall Performance
            </div>

            <div>
              <span>✓</span>
              Progress Tracking
            </div>

          </div>

        </div>


        {/* RESULT CARD */}

        <div className="result-card">

          <div className="result-card-header">

            <span>
              ACADEMIC PERFORMANCE
            </span>

            <strong>
              Student Report
            </strong>

          </div>


          <div className="result-row">

            <span>
              Mathematics
            </span>

            <strong>
              —
            </strong>

          </div>


          <div className="result-row">

            <span>
              Science
            </span>

            <strong>
              —
            </strong>

          </div>


          <div className="result-row">

            <span>
              English
            </span>

            <strong>
              —
            </strong>

          </div>


          <div className="result-row">

            <span>
              Social Studies
            </span>

            <strong>
              —
            </strong>

          </div>


          <div className="result-total">

            <span>
              Overall Progress
            </span>

            <strong>
              —
            </strong>

          </div>


          <small>
            Student-specific results are available through the
            student login portal.
          </small>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="academic-cta">

        <div>

          <span>
            HAVE QUESTIONS ABOUT OUR ACADEMICS?
          </span>

          <h2>
            We are here to help you learn more.
          </h2>

        </div>


        <Link
          to="/about"
          className="cta-button"
        >
          Contact Our School →
        </Link>

      </section>


    </main>
  );
}

export default Academics;