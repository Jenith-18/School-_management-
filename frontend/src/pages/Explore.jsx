import "./Explore.css";

function Explore() {
  const events = [
    {
      image: "/event-annual-day.png",
      title: "Annual Day Celebration",
      date: "January 25, 2026",
      description:
        "A memorable celebration showcasing the talents and achievements of our students.",
    },
    {
      image: "/event-sports-day.png",
      title: "Annual Sports Day",
      date: "February 10, 2026",
      description:
        "A day filled with sports, teamwork, enthusiasm and healthy competition.",
    },
    {
      image: "/event-cultural.png",
      title: "Cultural Festival",
      date: "March 15, 2026",
      description:
        "Students celebrate creativity, culture and diversity through performances and activities.",
    },
  ];

  const gallery = [
    {
      image: "/gallery-01.png",
      title: "School Campus",
    },
    {
      image: "/gallery-02.png",
      title: "Classroom",
    },
    {
      image: "/gallery-03.png",
      title: "Science Lab",
    },
    {
      image: "/gallery-04.png",
      title: "Sports",
    },
    {
      image: "/gallery-05.png",
      title: "Cultural Event",
    },
    {
      image: "/gallery-06.png",
      title: "Annual Day",
    },
    {
      image: "/gallery-07.png",
      title: "Student Activities",
    },
    {
      image: "/gallery-08.png",
      title: "School Celebration",
    },
    {
      image: "/gallery-09.png",
      title: "School Event",
    },
  ];

  const notices = [
    {
      date: "25",
      month: "SEP",
      title: "Parent-Teacher Meeting",
      description:
        "Parents are requested to attend the upcoming Parent-Teacher Meeting.",
    },
    {
      date: "30",
      month: "SEP",
      title: "School Holiday Notice",
      description:
        "The school will remain closed on the announced holiday.",
    },
    {
      date: "05",
      month: "OCT",
      title: "Examination Schedule",
      description:
        "The examination schedule has been published for all classes.",
    },
    {
      date: "10",
      month: "OCT",
      title: "Sports Practice Schedule",
      description:
        "Students participating in sports activities should follow the updated schedule.",
    },
  ];

  return (
    <main className="explore-page">

      {/* ================= HERO ================= */}

      <section className="explore-hero">

        <div className="explore-hero-content">

          <p className="explore-tag">
            EXPLORE OUR SCHOOL
          </p>

          <h1>
            Discover School Life
          </h1>

          <p>
            Explore our events, activities, memorable moments
            and the latest school updates.
          </p>

        </div>

      </section>


      {/* ================= EVENTS ================= */}

      <section className="events-section">

        <div className="explore-heading">

          <p className="section-tag">
            EVENTS
          </p>

          <h2>
            What's Happening
          </h2>

          <p>
            Discover the celebrations, activities and special
            events happening at Jenith International School.
          </p>

        </div>


        <div className="events-grid">

          {events.map((event, index) => (
            <article className="event-card" key={index}>

              <div className="event-image">

                <img
                  src={event.image}
                  alt={event.title}
                />

              </div>

              <div className="event-content">

                <span className="event-date">
                  {event.date}
                </span>

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.description}
                </p>

                <button className="event-button">
                  View Event →
                </button>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* ================= GALLERY ================= */}

      <section className="gallery-section">

        <div className="explore-heading center">

          <p className="section-tag">
            GALLERY
          </p>

          <h2>
            Moments to Remember
          </h2>

          <p>
            A glimpse into the learning, celebrations and
            experiences of our school community.
          </p>

        </div>


        <div className="gallery-grid">

          {gallery.map((item, index) => (
            <div className="gallery-item" key={index}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= NOTICES ================= */}

      <section className="notices-section">

        <div className="explore-heading">

          <p className="section-tag">
            NOTICES
          </p>

          <h2>
            Latest School Notices
          </h2>

          <p>
            Stay updated with important announcements,
            schedules and school information.
          </p>

        </div>


        <div className="notices-list">

          {notices.map((notice, index) => (
            <article className="notice-card" key={index}>

              <div className="notice-date">

                <strong>
                  {notice.date}
                </strong>

                <span>
                  {notice.month}
                </span>

              </div>


              <div className="notice-content">

                <h3>
                  {notice.title}
                </h3>

                <p>
                  {notice.description}
                </p>

              </div>


              <button className="notice-button">
                →
              </button>

            </article>
          ))}

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="explore-cta">

        <p>
          JENITH INTERNATIONAL SCHOOL
        </p>

        <h2>
          Every day brings a new
          opportunity to learn.
        </h2>

      </section>

    </main>
  );
}

export default Explore;