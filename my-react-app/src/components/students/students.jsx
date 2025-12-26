import './students.css';
import PropTypes from 'prop-types';


function Students({ name = "Guest", age = 0, isStudent = false }) {
  return (
    <div className="student-card">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Students;