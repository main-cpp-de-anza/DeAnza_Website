import SectionHeading from '../components/SectionHeading'

export default function AboutUs() {
  return (
    <article className="page-shell article about">
      <h1>Main.cpp</h1>

      <SectionHeading>Goal</SectionHeading>
      <p>
        Helping people through our ideas and projects, while students can experience practical
        coding and build a portfolio.
      </p>

      <SectionHeading>Activity</SectionHeading>
      <p>
        Our club provides opportunities to work on long-term programming projects and participate
        in short activities such as competitions.
      </p>
      <p>
        We are looking for passionate students who love coding or helping other people and are
        excited to work with us. Do not hesitate to join us.
      </p>

      <SectionHeading>Our Contact Information</SectionHeading>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/deanza_main.cpp/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram @deanza_main.cpp
          </a>
        </li>
        <li>
          <a href="mailto:main.cppDeanza@gmail.com">main.cppDeanza@gmail.com</a>
        </li>
        <li>
          <a href="https://discord.gg/h8Mb568H4a" target="_blank" rel="noreferrer">
            Join our Discord
          </a>
        </li>
      </ul>

      <SectionHeading>Project Contributors</SectionHeading>
      <p>Esther, Chaewon, Phong, Tristan, Nichelle, Caleb, and Angel.</p>
    </article>
  )
}
