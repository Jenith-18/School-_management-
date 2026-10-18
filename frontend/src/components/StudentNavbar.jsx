import { Link } from 'react-router-dom';

function StudentNavbar() {
  return (
    <nav>
      <Link to="/students">Student Life</Link>

      <Link to="/students/activities-clubs">
        Activities & Clubs
      </Link>

      <Link to="/students/sports">
        Sports
      </Link>

      <Link to="/students/leadership">
        Student Leadership
      </Link>

      <Link to="/students/achievements">
        Student Achievements
      </Link>

      <Link to="/students/support">
        Student Support
      </Link>

      <Link to="/students/code-of-conduct">
        Code of Conduct
      </Link>

      <Link to="/students/resources">
        Student Resources
      </Link>
    </nav>
  );
}

export default StudentNavbar;