import hinsonCampusCenter from '../assets/vta-hinson-campus-center.png'
import officeOfCollegeLife from '../assets/vta-office-of-college-life.png'

export default function VtaCard() {
  return (
    <article className="page-container vta-page">
      <section className="transferring-section">
        <h1 className="heading-pill">VTA SmartPass</h1>
        <p>
          The VTA SmartPass Card allows De Anza students to travel by bus for free throughout the quarter.
        </p>

        <h2 className="heading-pill" style={{ marginTop: '2.5rem' }}>How to Apply (free)</h2>

        <ol className="timeline-list">
          <li className="timeline-item">
            <span className="timeline-badge">1</span>
            Bring a <strong>legal document</strong> with <strong>your photo</strong> (e.g. State ID, Passport)
          </li>

          <li className="timeline-item">
            <span className="timeline-badge">2</span>
            Go to <strong>Hinson Campus Center</strong> and <strong>walk down</strong> the stairs.
            <img
              className="framed-image"
              src={hinsonCampusCenter}
              alt="Hinson Campus Center"
            />
          </li>

          <li className="timeline-item">
            <span className="timeline-badge">3</span>
            Walk along the aisle - Find <strong>Office of College Life</strong> on <strong>your left</strong>.
            <br />
            <a
              className="vta-directions"
              href="https://maps.app.goo.gl/gGKmJ2WGnR2RyXq46?g_st=ic"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Google Maps</strong> directions to <strong>Office of College Life</strong> ➔
            </a>            
            <img
              className="framed-image"
              src={officeOfCollegeLife}
              alt="Office of College Life"
            />
          </li>

          <li className="timeline-item">
            <span className="timeline-badge">4</span>
              <strong>Apply for VTA SmartPass</strong>: the staff will take your photo and print your card in a few minutes.
          </li>
        </ol>

        <span style={{ display: 'none' }}>Passport or Driver License</span>

        <p className="vta-orientation-reminder">
          Note: You can also get your <strong>Student ID card</strong> here the same way.
        </p>
      </section>
    </article>
  )
}
