import { Link } from "react-router-dom";
import "./Campus.css";

function Campus() {
  return (
    <main className="campus-page">

      {/* ================= HERO ================= */}

      <section className="campus-hero">
        <div className="campus-hero-overlay">

          <p className="campus-tag">OUR CAMPUS</p>

          <h1>
            A Place to Learn,
            <br />
            Explore & Grow
          </h1>

          <p className="campus-hero-text">
            Discover a safe, modern and inspiring campus designed
            to support every student's learning and development.
          </p>

          <div className="campus-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Campus</span>
          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}

      <section className="campus-intro">

        <div className="intro-content">

          <p className="section-tag">
            JENITH INTERNATIONAL SCHOOL
          </p>

          <h2>
            More Than Just
            <br />
            a School Campus
          </h2>

          <p>
            Our campus is thoughtfully designed to create a
            comfortable and engaging environment where students
            can learn, participate and discover their potential.
          </p>

          <p>
            From modern learning spaces to sports facilities and
            community areas, every part of the campus contributes
            to a complete educational experience.
          </p>

        </div>

      </section>


      {/* ================= FACILITIES ================= */}

      <section className="facilities-section">

        <div className="section-heading">

          <p className="section-tag">
            FACILITIES
          </p>

          <h2>
            Everything Students Need
          </h2>

          <p>
            Our campus provides spaces that support academic,
            creative, physical and social development.
          </p>

        </div>


        <div className="facility-grid">

          <div className="facility-card">
            <div className="facility-number">01</div>

            <h3>Modern Classrooms</h3>

            <p>
              Comfortable learning spaces designed to encourage
              interaction, collaboration and focused learning.
            </p>
          </div>


          <div className="facility-card">
            <div className="facility-number">02</div>

            <h3>Science & Computer Labs</h3>

            <p>
              Dedicated spaces where students can develop
              practical skills through experimentation and technology.
            </p>
          </div>


          <div className="facility-card">
            <div className="facility-number">03</div>

            <h3>Library</h3>

            <p>
              A peaceful learning environment with resources
              that encourage reading, research and independent study.
            </p>
          </div>


          <div className="facility-card">
            <div className="facility-number">04</div>

            <h3>Sports Facilities</h3>

            <p>
              Spacious sports areas that encourage fitness,
              teamwork, discipline and healthy competition.
            </p>
          </div>

        </div>

      </section>


      {/* ================= INFRASTRUCTURE ================= */}

      <section className="infrastructure-section">

        <div className="section-heading center">

          <p className="section-tag">
            INFRASTRUCTURE
          </p>

          <h2>
            Spaces Designed for Growth
          </h2>

          <p>
            Explore some of the key spaces that make the
            Jenith International School campus special.
          </p>

        </div>


        <div className="infrastructure-grid">

          {/* Campus Building */}

          <article className="infrastructure-card large-card">

            <div className="image-wrapper">

              <img
                src="/campus-building.png"
                alt="Jenith International School campus building"
              />

            </div>

            <div className="card-content">

              <span>01</span>

              <h3>
                School Campus
              </h3>

              <p>
                A thoughtfully planned campus that provides
                students with a welcoming and productive
                environment for learning.
              </p>

            </div>

          </article>


          {/* Auditorium */}

          <article className="infrastructure-card">

            <div className="image-wrapper">

              <img
                src="/school-auditorium.png"
                alt="Jenith International School auditorium"
              />

            </div>

            <div className="card-content">

              <span>02</span>

              <h3>
                Auditorium
              </h3>

              <p>
                A dedicated space for assemblies, performances,
                cultural programmes, celebrations and school events.
              </p>

            </div>

          </article>


          {/* Sports Ground */}

          <article className="infrastructure-card">

            <div className="image-wrapper">

              <img
                src="/school-ground.png"
                alt="Jenith International School sports ground"
              />

            </div>

            <div className="card-content">

              <span>03</span>

              <h3>
                Sports Ground
              </h3>

              <p>
                Spacious outdoor facilities where students can
                participate in sports, fitness activities and games.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* ================= TRANSPORT ================= */}

<section className="transport-section">

  <div className="transport-content">

    <div className="transport-text">

      <p className="section-tag">
        TRANSPORT
      </p>

      <h2>
        Safe & Comfortable
        <br />
        School Transport
      </h2>

      <p>
        Our school transport service is designed to provide
        students with a safe, comfortable and reliable journey
        between home and school.
      </p>

      <div className="transport-points">

        <div>
          <strong>01</strong>
          <span>Safety-focused transportation</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Planned routes and schedules</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Comfortable student travel</span>
        </div>

      </div>

    </div>


    <div className="transport-image">

      <img
        src="/school-bus.png"
        alt="Jenith International School bus"
      />

    </div>

  </div>

</section>


      {/* ================= CTA ================= */}

      <section className="campus-cta">

        <div>

          <p>EXPERIENCE OUR CAMPUS</p>

          <h2>
            A place where every student
            has room to grow.
          </h2>

        </div>

        <Link
          to="/about"
          className="cta-button"
        >
          Learn More →
        </Link>

      </section>

    </main>
  );
}

export default Campus;