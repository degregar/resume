import React, { useContext } from "react"
import DetailsContext, { DETAILS_MODES } from "../../../context/DetailsContext"

export const Summary = () => {
  const { mode: detailsMode } = useContext(DetailsContext)

  let summary = null

  const currentYear = new Date().getFullYear()
  const reactYears = currentYear - 2018
  const programmerYears = currentYear - 2002

  const programmerExperience = (
    <p key="programmerExperience">
      Michał has {programmerYears} years of programming experience, mostly as a PHP programmer, 6 years in marketing and travel industry, {reactYears}{" "}
      years as a JS/TS (React, Node.js) developer.
    </p>
  )

  const workExperience = <p key="workExperience">He has analytical and open mind, which lets him take a look from different perspectives.</p>

  switch (detailsMode) {
    case DETAILS_MODES.minimal:
      summary = <p>Michał is trying his best...</p>
      break

    case DETAILS_MODES.basic:
      summary = [programmerExperience, workExperience]
      break

    default:
      summary = null
  }

  const microskillsExperience = (
    <li>
      <strong>MicroSkills.pl</strong> - web application for professionals to answer questions like: what skills do I have, what skills should I learn right now to meet my professional goals quickly. App written in Next.js + Neo4j
    </li>
  )

  const waasExperience = (
    <li>
      <strong>WaaS</strong> - Website as a Service for restaurants, written in Gatsby / React, backend in WordPress - he was managing work of his two
      employees and coding himself
    </li>
  )

  const kuklaTechExperience = (
    <li>
      <strong>mKelner</strong>
      <span> - mobile menu for restaurants,</span> {detailsMode === DETAILS_MODES.full && <span>useful during pandemic,</span>}{" "}
      <span>written in Gatsby / React with Firestore as a backend</span>
    </li>
  )

  const meetforgeExperience = (
    <li>
      <strong>Kuźnia Spotkań</strong>
      {detailsMode === DETAILS_MODES.full ? (
        <span> - event venues listing with map filters and tools to manage reservations</span>
      ) : detailsMode === DETAILS_MODES.standard ? (
        <span> - event venues finder for event managers</span>
      ) : null}
      <span>, written in React + Redux and Symfony 4</span>
    </li>
  )

  const travelIndustryExperience = detailsMode === DETAILS_MODES.full && (
    <li>CRM and loyalty program improving campaigns, measuring hotel consumers’ interest</li>
  )

  return (
    <div>
      <h2 className="heading">Summary</h2>

      {summary || (
        <>
          {programmerExperience}

          {detailsMode === DETAILS_MODES.full && (
          <>
              <p>
                    His first experience with computers was when he were 8 years old. He got a computer as First Communion gift. He's started writing first
                    websites in the age of 17.
              </p>
              <p>
                  He always tells a story about how he was sitting in fear for two and a half hours, downloading his first, 12MB local PHP server, using
                  dial-up modem. He was afraid of two things: interrupting the connection and a look on his father's face, while he's reading the bill.
              </p>
          </>
          )}


          <p>In his work he’s created tools like:</p>
          <ul>
            {microskillsExperience}
            {waasExperience}
            {kuklaTechExperience}
            {meetforgeExperience}
            {travelIndustryExperience}
          </ul>

          {workExperience}

          <ol>
            <li>
              <p>
                <span>Team leader's perspective</span>
                {[DETAILS_MODES.full, DETAILS_MODES.standard].includes(detailsMode) && (
                  <span>
                    , because he has 6-years experience in managing work of 3-12 people team in technology, travel and marketing industries.
                  </span>
                )}
              </p>
            </li>

            <li>
              <p>
                <span>Client's perspective</span>
                {[DETAILS_MODES.full, DETAILS_MODES.standard].includes(detailsMode) && (
                  <span>
                    , because he's worked in marketing and learned UX/UI. He's used it in his own applications, while creating web projects in
                    WordPress for digital and creative agencies and for individuals.
                  </span>
                )}
              </p>
            </li>

            <li>
              <p>
                <span>Entrepreneur's perspective</span>
                {[DETAILS_MODES.full, DETAILS_MODES.standard].includes(detailsMode) && (
                  <span>
                    , as he's started several companies, he's run a 3-star hotel and diet catering for 2 years. He's been networking once a week for
                    almost a year with a group of dozens of entrepreneurs.
                  </span>
                )}
              </p>
            </li>
          </ol>
        </>
      )}

        <p>Continuously learns how to be a better person, programmer, entrepreneur, leader and trainer. How? By reading <a href={"https://michalkukla.pl/polecane-ksiazki/"} rel="noreferrer" target={"_blank"}>tons of books</a> and taking courses like DNA, Legacy Fighter, AnF (devstyle), MBLC (Mindfulness Association), online trainers (Grupa SET).</p>
    </div>
  )
}
