import { Link } from 'react-router-dom';
import './Admissions.css';

function Admissions() {
  return (
    <main className="admissions-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="admissions-hero">

        <div className="admissions-hero-content">

          <p className="hero-label">
            ADMISSIONS
          </p>

          <h1>
            Begin Your Journey
            <br />
            With Jenith International School
          </h1>

          <p>
            Discover our admission process, eligibility requirements
            and everything you need to know before applying.
          </p>

          <div className="hero-actions">

            <Link
              to="/admissions/apply"
              className="apply-button"
            >
              Apply for Admission →
            </Link>

            <Link
              to="/contact"
              className="admission-outline-button"
            >
              Contact Admission Team
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          ADMISSION OVERVIEW
      ===================================================== */}

      <section className="admission-overview">

        <div className="section-heading">

          <span className="section-label">
            ADMISSION OVERVIEW
          </span>

          <h2>
            A simple beginning to your child's journey
          </h2>

          <p>
            At Jenith International School, we aim to make the
            admission process clear, transparent and convenient
            for parents and students.
          </p>

          <p>
            Families can learn about our academic programmes,
            eligibility requirements, required documents and
            fee structure before submitting an application.
          </p>

        </div>

      </section>


      {/* =====================================================
          ADMISSION PROCESS
      ===================================================== */}

      <section className="process-section">

        <div className="section-heading center-heading">

          <span className="section-label">
            ADMISSION PROCESS
          </span>

          <h2>
            How to apply
          </h2>

          <p>
            Follow these simple steps to begin the admission process.
          </p>

        </div>


        <div className="process-grid">

          <div className="process-card">

            <span>
              01
            </span>

            <h3>
              Explore
            </h3>

            <p>
              Learn about our school, academic programmes and
              available classes.
            </p>

          </div>


          <div className="process-card">

            <span>
              02
            </span>

            <h3>
              Check Eligibility
            </h3>

            <p>
              Review the eligibility requirements for the
              desired class or programme.
            </p>

          </div>


          <div className="process-card">

            <span>
              03
            </span>

            <h3>
              Prepare Documents
            </h3>

            <p>
              Keep the required documents ready before submitting
              your application.
            </p>

          </div>


          <div className="process-card">

            <span>
              04
            </span>

            <h3>
              Apply
            </h3>

            <p>
              Complete the online admission form with accurate
              student and parent information.
            </p>

          </div>


          <div className="process-card">

            <span>
              05
            </span>

            <h3>
              Review & Follow-up
            </h3>

            <p>
              Our school team reviews the application and
              communicates the next steps.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          ELIGIBILITY
      ===================================================== */}

      <section className="eligibility-section">

        <div className="eligibility-content">

          <span className="section-label">
            ELIGIBILITY
          </span>

          <h2>
            Admission eligibility
          </h2>

          <p>
            Eligibility requirements may vary depending on the
            class or programme. Parents are encouraged to review
            the requirements applicable to the desired grade.
          </p>

        </div>


        <div className="eligibility-card">

          <div>

            <span>
              🎓
            </span>

            <strong>
              Age Requirement
            </strong>

            <p>
              Age criteria based on the selected grade.
            </p>

          </div>


          <div>

            <span>
              📚
            </span>

            <strong>
              Previous Education
            </strong>

            <p>
              Previous academic records where applicable.
            </p>

          </div>


          <div>

            <span>
              📝
            </span>

            <strong>
              Assessment
            </strong>

            <p>
              Assessment or interaction may apply depending
              on the grade.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          REQUIRED DOCUMENTS
      ===================================================== */}

      <section className="documents-section">

        <div className="section-heading">

          <span className="section-label">
            REQUIRED DOCUMENTS
          </span>

          <h2>
            Keep these documents ready
          </h2>

          <p>
            Parents may be required to provide the following
            documents during the admission process.
          </p>

        </div>


        <div className="documents-grid">

          <div className="document-card">

            <span>
              📄
            </span>

            <h3>
              Birth Certificate
            </h3>

            <p>
              Proof of the student's date of birth.
            </p>

          </div>


          <div className="document-card">

            <span>
              📋
            </span>

            <h3>
              Previous Academic Records
            </h3>

            <p>
              Previous school records or report cards,
              where applicable.
            </p>

          </div>


          <div className="document-card">

            <span>
              🪪
            </span>

            <h3>
              Identity Proof
            </h3>

            <p>
              Valid identification documents as required.
            </p>

          </div>


          <div className="document-card">

            <span>
              📷
            </span>

            <h3>
              Photographs
            </h3>

            <p>
              Recent photographs of the student as required.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          DETAILED FEE STRUCTURE
      ===================================================== */}

      <section className="fee-section">

        <div className="section-heading">

          <span className="section-label">
            FEE STRUCTURE
          </span>

          <h2>
            Understand the school fees
          </h2>

          <p>
            Our fee structure is designed to clearly explain
            the different charges involved during the admission
            and academic year.
          </p>

        </div>


        <div className="fee-table">

          {/* Table Header */}

          <div className="fee-row fee-header">

            <span>
              Fee Type
            </span>

            <span>
              Details
            </span>

            <span>
              Amount
            </span>

          </div>


          {/* Application Fee */}

          <div className="fee-row">

            <span>
              Application Fee
            </span>

            <span>
              Fee applicable for processing the admission
              application.
            </span>

            <strong>
              Contact School
            </strong>

          </div>


          {/* Admission Fee */}

          <div className="fee-row">

            <span>
              Admission Fee
            </span>

            <span>
              Applicable at the time of confirming admission.
            </span>

            <strong>
              Contact School
            </strong>

          </div>


          {/* Tuition Fee */}

          <div className="fee-row">

            <span>
              Tuition Fee
            </span>

            <span>
              Academic fee based on the selected grade and
              academic year.
            </span>

            <strong>
              Contact School
            </strong>

          </div>


          {/* Transport Fee */}

          <div className="fee-row">

            <span>
              Transport Fee
            </span>

            <span>
              Applicable depending on the selected transport
              route.
            </span>

            <strong>
              Contact School
            </strong>

          </div>


          {/* Activities */}

          <div className="fee-row">

            <span>
              Activities & Facilities
            </span>

            <span>
              Additional charges may apply for selected
              facilities or activities.
            </span>

            <strong>
              Where Applicable
            </strong>

          </div>

        </div>


        {/* Fee Note */}

        <div className="fee-note">

          <span>
            ℹ️
          </span>

          <p>
            Fee amounts may vary depending on the grade,
            academic year and applicable services. Please
            contact the school office for the latest fee
            structure and payment details.
          </p>

        </div>

      </section>


      {/* =====================================================
          PARENT SUPPORT
      ===================================================== */}

      <section className="parent-support">

        <div className="parent-support-content">

          <span className="section-label">
            NEED HELP?
          </span>

          <h2>
            Have questions about admission?
          </h2>

          <p>
            Our admission team is available to help parents
            understand the application process, eligibility,
            documents and fee information.
          </p>

        </div>


        <Link
          to="/contact"
          className="support-button"
        >
          Contact Us →
        </Link>

      </section>


      {/* =====================================================
          FINAL APPLY CTA
      ===================================================== */}

      <section className="apply-section">

        <div>

          <span>
            READY TO BEGIN?
          </span>

          <h2>
            Start your admission journey today.
          </h2>

          <p>
            Complete the admission form and submit your
            application to Jenith International School.
          </p>

        </div>


        <Link
          to="/admissions/apply"
          className="apply-cta-button"
        >
          Apply for Admission →
        </Link>

      </section>

    </main>
  );
}

export default Admissions;