const locations = [
  ['De Anza location', 'https://www.google.com/maps/place/De+Anza+College'],
  ['Flint Center Parking Structure', 'https://maps.app.goo.gl/RzvPFVJiEi3btyXdA'],
  ['Registration & Student Services', 'https://maps.app.goo.gl/ohuxoV8d51iN2Y3z5'],
  ['S Quad Building', 'https://maps.app.goo.gl/PoSAxyVELiUc8mja9'],
  ['De Anza Parking Lot E', 'https://maps.app.goo.gl/3KncBRJAdW6KTKe8'],
  ['De Anza College Library', 'https://maps.app.goo.gl/Cf9hZWBzmzc1DUnU8'],
  ['Building G', 'https://maps.app.goo.gl/2EYn78NTJcdLWqVNA'],
  ['Baseball Field', 'https://maps.app.goo.gl/irsWJUBviFrtDhfm7'],
  ['Tennis Court', 'https://maps.app.goo.gl/DhHkRStSGSjnJjvm6'],
  ['Soccer Field', 'https://maps.app.goo.gl/s3zuCcKLBQHNKqVNA'],
  ['College Soccer Field Parking Lot C', 'https://maps.app.goo.gl/Fjo5wB8THDSRk9DD8'],
]

export default function CampusMap() {
  return (
    <article className="campus-map-page">
      <div className="campus-map-layout">
        <img
          className="campus-map-image"
          src={campusMapGuide}
          alt="De Anza College campus map"
        />

        <ul className="campus-map-links">
          {locations.map(([name, url]) => (
            <li key={name}>
              <a href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
import campusMapGuide from '../assets/campus-map-guide.png'
