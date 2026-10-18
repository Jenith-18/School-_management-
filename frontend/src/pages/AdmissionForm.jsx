import { useState } from 'react';
import './AdmissionForm.css';

function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    applyingGrade: '',
    previousSchool: '',

    fatherName: '',
    motherName: '',
    guardianName: '',
    email: '',
    mobile: '',

    previousGrade: '',
    board: '',
    academicYear: '',

    address: '',
    city: '',
    state: '',
    pinCode: '',

    birthCertificate: null,
    academicReport: null,
    studentPhoto: null,
    identityProof: null,

    additionalInfo: '',
    declaration: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]:
        type === 'checkbox'
          ? checked
          : type === 'file'
          ? files[0]
          : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Admission Form Data:', formData);

    alert('Admission application submitted successfully!');
  };

  return (
    <main className="admission-form-page">

      {/* Header */}

      <section className="form-hero">

        <div className="form-hero-content">

          <p>ADMISSIONS</p>

          <h1>
            Admission Application
          </h1>

          <span>
            Begin your child's journey with
            Jenith International School.
          </span>

        </div>

      </section>


      {/* Form */}

      <section className="form-section">

        <form
          className="admission-form"
          onSubmit={handleSubmit}
        >

          {/* Student Information */}

          <div className="form-card">

            <div className="form-card-heading">

              <span>01</span>

              <div>
                <h2>Student Information</h2>
                <p>
                  Please provide the student's basic information.
                </p>
              </div>

            </div>


            <div className="form-grid">

              <div className="form-group full-width">

                <label>
                  Student Full Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter student's full name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Date of Birth <span>*</span>
                </label>

                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Gender <span>*</span>
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Applying for Grade <span>*</span>
                </label>

                <select
                  name="applyingGrade"
                  value={formData.applyingGrade}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select grade
                  </option>

                  <option value="Pre-Primary">
                    Pre-Primary
                  </option>

                  <option value="Kindergarten">
                    Kindergarten
                  </option>

                  <option value="Grade 1">
                    Grade 1
                  </option>

                  <option value="Grade 2">
                    Grade 2
                  </option>

                  <option value="Grade 3">
                    Grade 3
                  </option>

                  <option value="Grade 4">
                    Grade 4
                  </option>

                  <option value="Grade 5">
                    Grade 5
                  </option>

                  <option value="Grade 6">
                    Grade 6
                  </option>

                  <option value="Grade 7">
                    Grade 7
                  </option>

                  <option value="Grade 8">
                    Grade 8
                  </option>

                  <option value="Grade 9">
                    Grade 9
                  </option>

                  <option value="Grade 10">
                    Grade 10
                  </option>

                  <option value="Grade 11">
                    Grade 11
                  </option>

                  <option value="Grade 12">
                    Grade 12
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Previous School
                </label>

                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleChange}
                  placeholder="Enter previous school name"
                />

              </div>

            </div>

          </div>


          {/* Parent Information */}

          <div className="form-card">

            <div className="form-card-heading">

              <span>02</span>

              <div>
                <h2>Parent / Guardian Information</h2>

                <p>
                  Please provide parent or guardian details.
                </p>
              </div>

            </div>


            <div className="form-grid">

              <div className="form-group">

                <label>
                  Father's Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Enter father's name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Mother's Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  placeholder="Enter mother's name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Guardian Name
                </label>

                <input
                  type="text"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                  placeholder="Enter guardian name"
                />

              </div>


              <div className="form-group">

                <label>
                  Parent Email <span>*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Mobile Number <span>*</span>
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  required
                />

              </div>

            </div>

          </div>


          {/* Academic Information */}

          <div className="form-card">

            <div className="form-card-heading">

              <span>03</span>

              <div>
                <h2>Academic Information</h2>

                <p>
                  Tell us about the student's previous education.
                </p>
              </div>

            </div>


            <div className="form-grid">

              <div className="form-group">

                <label>
                  Previous Grade
                </label>

                <input
                  type="text"
                  name="previousGrade"
                  value={formData.previousGrade}
                  onChange={handleChange}
                  placeholder="Example: Grade 5"
                />

              </div>


              <div className="form-group">

                <label>
                  Board / Curriculum
                </label>

                <select
                  name="board"
                  value={formData.board}
                  onChange={handleChange}
                >

                  <option value="">
                    Select board
                  </option>

                  <option value="CBSE">
                    CBSE
                  </option>

                  <option value="ICSE">
                    ICSE
                  </option>

                  <option value="State Board">
                    State Board
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Academic Year
                </label>

                <input
                  type="text"
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleChange}
                  placeholder="Example: 2026-27"
                />

              </div>

            </div>

          </div>


          {/* Address */}

          <div className="form-card">

            <div className="form-card-heading">

              <span>04</span>

              <div>
                <h2>Address Information</h2>

                <p>
                  Provide the student's residential address.
                </p>
              </div>

            </div>


            <div className="form-grid">

              <div className="form-group full-width">

                <label>
                  Address <span>*</span>
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter complete address"
                  rows="4"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  City <span>*</span>
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  State <span>*</span>
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  PIN Code <span>*</span>
                </label>

                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="Enter PIN code"
                  required
                />

              </div>

            </div>

          </div>


          {/* Documents */}

          <div className="form-card">

            <div className="form-card-heading">

              <span>05</span>

              <div>
                <h2>Document Upload</h2>

                <p>
                  Upload the required admission documents.
                </p>
              </div>

            </div>


            <div className="upload-grid">

              <div className="upload-group">

                <label>
                  Birth Certificate <span>*</span>
                </label>

                <input
                  type="file"
                  name="birthCertificate"
                  onChange={handleChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                />

                <small>
                  PDF, JPG or PNG
                </small>

              </div>


              <div className="upload-group">

                <label>
                  Previous Academic Report
                </label>

                <input
                  type="file"
                  name="academicReport"
                  onChange={handleChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                />

                <small>
                  PDF, JPG or PNG
                </small>

              </div>


              <div className="upload-group">

                <label>
                  Student Photo <span>*</span>
                </label>

                <input
                  type="file"
                  name="studentPhoto"
                  onChange={handleChange}
                  accept=".jpg,.jpeg,.png"
                  required
                />

                <small>
                  JPG or PNG
                </small>

              </div>


              <div className="upload-group">

                <label>
                  Identity Proof
                </label>

                <input
                  type="file"
                  name="identityProof"
                  onChange={handleChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                />

                <small>
                  PDF, JPG or PNG
                </small>

              </div>

            </div>

          </div>


          {/* Additional Information */}

          <div className="form-card">

            <div className="form-card-heading">

              <span>06</span>

              <div>
                <h2>Additional Information</h2>

                <p>
                  Share any additional information with the school.
                </p>
              </div>

            </div>


            <div className="form-group">

              <label>
                Additional Information
              </label>

              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Enter any additional information..."
                rows="5"
              />

            </div>

          </div>


          {/* Declaration */}

          <div className="form-card declaration-card">

            <div className="form-card-heading">

              <span>07</span>

              <div>
                <h2>Declaration</h2>

                <p>
                  Please read the declaration before submitting.
                </p>
              </div>

            </div>


            <label className="checkbox-label">

              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
                required
              />

              <span>
                I confirm that the information provided in this
                application is accurate and complete to the best
                of my knowledge. I understand that the school
                may verify the information and documents submitted.
              </span>

            </label>

          </div>


          {/* Submit */}

          <div className="submit-area">

            <p>
              Please review all information before submitting
              your application.
            </p>

            <button
              type="submit"
              className="submit-button"
            >
              Submit Application →
            </button>

          </div>

        </form>

      </section>

    </main>
  );
}

export default AdmissionForm;