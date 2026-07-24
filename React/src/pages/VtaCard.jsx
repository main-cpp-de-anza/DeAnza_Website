import hinsonCampusCenter from '../assets/vta-hinson-campus-center.png'
import officeOfCollegeLife from '../assets/vta-office-of-college-life.png'

export default function VtaCard() {
  return (
    <article className="vta-page">
      <h1>VTA Card</h1>

      <p className="vta-introduction">
        The VTA SmartPass Card allows De Anza students to travel by bus for free throughout the
        quarter.
      </p>

      <div className="vta-location-grid">
        <img
          className="vta-location-image"
          src={hinsonCampusCenter}
          alt="Hinson Campus Center"
        />
        <img
          className="vta-location-image"
          src={officeOfCollegeLife}
          alt="Office of College Life"
        />
      </div>

      <a
        className="vta-directions"
        href="https://maps.app.goo.gl/gGKmJ2WGnR2RyXq46?g_st=ic"
        target="_blank"
        rel="noreferrer"
      >
        Google Maps directions to the pickup locations
      </a>

      <section className="vta-documents">
        <p>Bring a legal document with your face on it.</p>
        <p>Documents to bring: passport or driver license.</p>
        <p>We can also make your student ID card.</p>
      </section>

      <p className="vta-orientation-reminder">Please bring it with you on Orientation Day!</p>
    </article>
  )
}
