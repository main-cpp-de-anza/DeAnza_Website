import SectionHeading from '../components/SectionHeading'

export default function VtaCard() {
  return (
    <article className="page-shell article">
      <h1>VTA Card</h1>
      <p className="lead">
        The VTA SmartPass Card allows De Anza students to travel on the bus for free throughout the
        quarter.
      </p>

      <SectionHeading>Where to get your card</SectionHeading>
      <p>
        Visit the Hinson Campus Center or the Office of College Life to pick up your SmartPass and
        student ID card.
      </p>

      <SectionHeading>Documents to Bring</SectionHeading>
      <p>Documents to bring: passport or driver license.</p>

      <SectionHeading>Orientation reminder</SectionHeading>
      <p>Please bring it with you on Orientation Day!</p>
    </article>
  )
}
