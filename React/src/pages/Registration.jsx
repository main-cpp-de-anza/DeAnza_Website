import myPortal from '../assets/registration-myportal.png'
import dashboard from '../assets/registration-dashboard.png'
import steps from '../assets/registration-steps.png'
import degreeWorks from '../assets/registration-degreeworks.png'

function Topic({ title, children }) {
  return (
    <section className="registration-topic">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default function Registration() {
  return (
    <article className="registration-page">
      <nav className="registration-contents" aria-label="Registration page contents">
        <a href="#priority">Priority Registration</a>
        <a href="#professors">How to Pick a Good Professor</a>
        <a href="#time">How to Check Registration Time</a>
        <a href="#where">Where to Register</a>
        <a href="#ge">General Education (GE) Requirements</a>
      </nav>

      <Topic title="Priority Registration (Steps)">
        <div id="priority" className="registration-copy">
          <p>When you apply to De Anza, be sure to do these two things:</p>
          <ul>
            <li>Declare a major, not “undecided,” on the application.</li>
            <li>Select a goal of transfer, degree, or certificate.</li>
            <li>Complete assessment and orientation.</li>
            <li>Create an educational plan.</li>
          </ul>
        </div>
      </Topic>

      <Topic title="How to Pick a Good Professor">
        <ol id="professors">
          <li>Check Rate My Professor.</li>
          <li>Check Reddit for extra information.</li>
          <li>Check DaGrades.</li>
        </ol>
      </Topic>

      <Topic title="How to check Registration Time and Where to Register">
        <ol id="time">
          <li>Go to MyPortal.</li>
          <li>Click on “Student Registration.”</li>
          <li>Choose “Registration Dashboard.”</li>
          <li>Check registration time and complete registration.</li>
        </ol>

        <h3>Go to MyPortal</h3>
        <img className="guide-image guide-banner" src={myPortal} alt="MyPortal registration screen" />

        <h3>Go to Student Registration</h3>
        <img className="guide-image guide-card" src={steps} alt="Student Registration workflow" />

        <h3>Registration Dashboard</h3>
        <img className="guide-image guide-card" src={dashboard} alt="Student Registration Dashboard" />

        <h3 id="where">Where to register</h3>
        <p>Use MyPortal’s Register for Classes page to search, add, drop, and manage classes.</p>
      </Topic>

      <Topic title="General Education (GE) Requirements">
        <ol id="ge">
          <li>Go to MyPortal.</li>
          <li>Go to Degree Works.</li>
          <li>Click on “What-if” and choose your program.</li>
        </ol>

        <h3>Degree Works</h3>
        <img className="guide-image guide-card" src={degreeWorks} alt="Degree Works What-if guidance" />
      </Topic>
    </article>
  )
}
