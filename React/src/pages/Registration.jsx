import myPortal from '../assets/registration-myportal.png'
import dashboard from '../assets/registration-dashboard.png'
import steps from '../assets/registration-steps.png'
import student_registration from '../assets/student-registration.png'
import preparation from '../assets/registration-preparation.png'
import degreeWorks from '../assets/registration-degreeworks.png'
import whatif from '../assets/registration-whatif.png'

function Topic({ title, children }) {
  return (
    <section className="registration-topic">
      <h2 className="heading-pill">{title}</h2>
      {children}
    </section>
  )
}

export default function Registration() {
  return (
    <article className="page-container registration-page">

      <Topic title="Priority Registration (Steps)">
        <div id="priority" className="registration-bullets">
          <p>When you {' '} 
            <a
              href = "https://www.deanza.edu/apply-and-register/"
              target = "_blank"
              rel = "noreferer"
            >
              apply to De Anza
            </a> 
            , be sure to do these two things:</p>
          <ul>
            <li>Declare a major, not “undecided,” on the application.</li>
            <li>Select a goal of transfer, degree, or certificate.</li>
            <li>Complete {' '}
              <a
                href = "https://deanza.edu/assessment/"
                target = "_blank"
                rel = "noreferer"
              >
                assessment 
              </a>
              {''} and {' '}
              <a
                href = "https://www.deanza.edu/apply-and-register/orientation.html"
                target = "_blank"
                rel = "noreferer"
              >
                orientation.
              </a></li>
            <li>Create an {' '} 
              <a
                href = "https://www.deanza.edu/apply-and-register/ed-plan.html"
                target = "_blank"
                rel = "noreferer"
              >
                educational plan.
              </a></li>
          </ul>
        </div>
      </Topic>

      <Topic title="How to Pick a Good Professor">
        <div className="registration-bullets">
          <ol id="professors">
            <li>Check {' '} 
              <a
                href = "https://www.ratemyprofessors.com/"
                target = "_blank"
                rel = "noreferer"
              >
                Rate My Professor.
              </a></li>
            <li >Check {' '} 
              <a
                href = "https://www.reddit.com/search/?q=%2Fdeanza&"
                target='_blank'
                rel = "noreferer"
              >
                Reddit
              </a>
                {' '} for extra information</li>
            <li>Check {' '} 
              <a
                href = "https://www.deanzagrades.com/courses?page=1"
                target = '_blank'
                rel = 'noreferer'
              >
                DaGrades.
              </a></li>
          </ol>
        </div>
      </Topic>

      <Topic title="How to check Registration Time and Where to Register">
        <div className="registration-bullets">
          <ol id="time">
            <li>Go to MyPortal</li>
            <li>Click on “Student Registration.”</li>
            <li>Choose “Registration Dashboard.”</li>
            <li>Check registration time and complete registration.</li>
          </ol>
        </div>

        <h3>Go to {' '} 
          <a
            href = "https://www.deanza.edu/"
            target = '_blank'
            rel = 'noreferer'
          >
            MyPortal.
          </a></h3>
        <img className="guide-image guide-banner" src={myPortal} alt="MyPortal registration screen" />

        <h3>Go to Student Registration</h3>
        <img className="guide-image guide-card" src={student_registration} alt="Student Registration workflow" />

        <h3>Registration Dashboard</h3>
        <img className="guide-image guide-banner" src={dashboard} alt="Student Registration Dashboard" />

        <h3>Prepare for Registration</h3>
        <div className="registration-bullets">
          Fill out information
        </div>
        <img className="guide-image guide-banner" src={preparation} alt = "Student Registration Card"></img>

        <h3>Where to register</h3>
        <img className="guide-image guide-banner" src={steps} alt="Classes Registration Card"></img>
      </Topic>

      <Topic title="General Education (GE) Requirements">
        <ol id="ge">
          <li>Go to MyPortal.</li>
          <li>Go to Degree Works.</li>
          <li>Click on “What-if” and choose your program.</li>
        </ol>

        <h3>Degree Works</h3>
        <img 
          className="guide-image guide-card" 
          src={degreeWorks} alt="Degree Works Degree Worksguidance"
        ></img>

        <h3>Click on What if</h3>
        <img 
          className="guide-image guide-banner" 
          src={whatif} 
          alt="Degree Works What-if guidance"
        ></img>
      </Topic>
    </article>
  )
}
