import SectionHeading from '../components/SectionHeading'
import assistGuide from '../assets/transferring-assist.png'

const tagCampuses = [
  {
    name: 'UC Davis',
    href: 'https://www.ucdavis.edu/admissions/undergraduate/transfer/transfer-admission-guarantee',
  },
  {
    name: 'UC Irvine',
    href: 'https://www.admissions.uci.edu/apply/transfer-students/guaranteed-admissions.php',
  },
  {
    name: 'UC Merced',
    href: 'https://admissions.ucmerced.edu/transfer/tag',
  },
  {
    name: 'UC Riverside',
    href: 'https://admissions.ucr.edu/transfer/transfer-admission-guarantee',
  },
  {
    name: 'UC Santa Barbara',
    href: 'https://admissions.sa.ucsb.edu/tag',
  },
  {
    name: 'UC Santa Cruz',
    href: 'https://admissions.ucsc.edu/transfer-admission-guarantee-tag',
  },
]

export default function Transferring() {
  return (
    <article className="transferring-page">
      <nav className="transferring-contents" aria-label="Transferring page contents">
        <a href="#assist">ASSIST</a>
        <a href="#tag">TAG</a>
        <a href="#honors">Honors Program</a>
      </nav>

      <section id="assist" className="transferring-section">
        <SectionHeading>ASSIST</SectionHeading>
        <a
          className="assist-welcome"
          href="https://assist.org/"
          target="_blank"
          rel="noreferrer"
        >
          Welcome to ASSIST
        </a>
        <p className="assist-introduction">
          ASSIST is an official website where students can check which courses they need to transfer
          from a California community college to a UC or CSU.
        </p>
        <a href="https://assist.org/" target="_blank" rel="noreferrer">
          ASSIST website
        </a>
        <img
          className="guide-image assist-guide"
          src={assistGuide}
          alt="ASSIST transfer course agreement walkthrough"
        />
      </section>

      <section id="tag" className="transferring-section">
        <SectionHeading>TAG</SectionHeading>
        <h3>
          <strong>TAG guarantees admission to a participating UC campus</strong> 
        </h3>
        <p>if students complete the required courses, maintain the required GPA, and submit their applications on time. Students must continue to meet all requirements even after applying.</p>
        <h3>The following six UC campuses currently offer TAG:</h3>
        <ul className="tag-campus-list">
          {tagCampuses.map(({ name, href }) => (
            <li key={name}>
              <a href={href} target="_blank" rel="noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
        <div className="registration-bullets">
          <p>UC Berkeley, UCLA, and UC San Diego do not offer TAG.</p>
        </div>
      </section>

      <section id="honors" className="transferring-section">
        <SectionHeading>Honors Program</SectionHeading>
        <p className="honors-recognition">Honors recognition on transcripts</p>
        <h3>Eligibility Requirements</h3>
        <div className="registration-bullets">
          <ul>
            <li>Eligible for or completed EWRT 1A</li>
            <li>Minimum 3.3 college GPA</li>
            <li>At least 15 UC-transferable quarter units</li>
            <li>Recent high school graduates: minimum 3.5 GPA</li>
          </ul>
        </div>
      </section>
    </article>
  )
}
