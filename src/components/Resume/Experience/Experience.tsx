import React, { useContext } from "react"
import styled from "styled-components"
import DetailsContext, { DETAILS_MODES } from "../../../context/DetailsContext"

const ExperienceWrapper = ({ children }: { children: React.ReactNode }) => (
  <div>
    <h2 className="heading">Experience</h2>
    {children}
  </div>
)

const Experience = () => {
  const { mode: detailsMode } = useContext(DetailsContext)

  if (detailsMode === DETAILS_MODES.minimal) {
    return (
      <ExperienceWrapper>
        <p>
          He was working on his own projects since 2002, since 2005 for others. Mostly as a programmer, but also as a hotel and marketing manager.
          Tried to run his own company two times already.
        </p>
      </ExperienceWrapper>
    )
  }

  return (
    <ExperienceWrapper>
      <Job project="Kukla Tech" period="07/2019 - now">
        <p>
          His own company creating web applications, websites and custom WordPress plugins in PHP (WordPress) and Website as a Service technology in
          Gatsby / React.
        </p>
        {detailsMode === DETAILS_MODES.full && (
          <>
            <p>Lessons learned:</p>
            <ul>
              <li>Agile (Scrum) - used for 5 months working with two programmers at first, then one programmer, weekly sprints</li>
              <li>Storybook</li>
              <li>React Unit Testing</li>
              <li>Atomic Design System</li>
              <li>Automating work with Jira, Bitbucket and Buddy Works</li>
              <li>Patience with employees </li>
              <li>
                Tough lesson: building reusable, simple for customers to build and edit websites in Gatsby is reinventing the wheel with almost every
                functionality
              </li>
              <li>Designing</li>
              <li>Service Workers</li>
            </ul>
          </>
        )}
      </Job>

      <Job project="mKelner" period="03/2020 - 07/2020">
        <p>
          His own startup. Web application, mobile menu for restaurants for pandemic, so consumers don’t have to use paper menu to read the menu. He's
          created the whole thing from scratch in Gatsby and React.
        </p>
        {detailsMode === DETAILS_MODES.full && (
          <>
            <p>Lessons learned:</p>
            <ul>
              <li>Gatsby</li>
              <li>Firebase</li>
            </ul>
          </>
        )}
      </Job>

      <Job project="Kuźnia Spotkań" period="09/2018 - 10/2019">
        <p>
          Hist own startup. Web application for event managers for finding venue for their events. He's created the whole thing from scratch in
          Symfony and React.
        </p>
        {detailsMode === DETAILS_MODES.full && (
          <>
            <p>Lessons learned:</p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>
                Customer Discovery process, based on the book <i>4 steps to epiphany</i>
              </li>
              <li>Designing</li>
              <li>GDPR basics</li>
            </ul>
          </>
        )}
      </Job>

      <Job project="Jama-Tur / Hotel Jawor / Hotel Wiosna" period="12/2012 - 04/2018">
        <p>Using PHP to build CRM tools, loyalty program, integrate with Property Management System. Managing a marketing team and a hotel staff.</p>

        {detailsMode === DETAILS_MODES.full && (
          <>
            <p>Lessons learned:</p>
            <ul>
              <li>How to communicate, solve tough situations with employees and negotiate with people from all levels of hierarchy in company</li>
              <li>How to recruit</li>
              <li>How to work with women as employees</li>
              <li>
                How to manage the team, based on the books of Peter Drucker, Steven Covey, Patrick Lencioni, like{" "}
                <i>The Five Dysfunctions of a Team</i> and many others
              </li>
              <li>How to work in a company run by a family and work with a family</li>
              <li>Marketing skills, like: copywriting, photography, movie making, SEM tools, social media, branding</li>
            </ul>
          </>
        )}
      </Job>

      <Job project="Adfinem" period="04/2011 - 08/2011">
        <p>Building tools for brand sentiment monitoring systems in PHP.</p>

        {detailsMode === DETAILS_MODES.full && (
          <>
            <p>Lessons learned:</p>
            <ul>
              <li>Marketing basics</li>
              <li>Good management experience</li>
            </ul>
          </>
        )}
      </Job>

      <Job project="Authalia" period="10/2008 - 05/2010">
        <p>
          Leading dev team (programmer, designer, sysops), closely working with product owner and marketing specialist, to build web application that
          allows individuals to register their copyrights over the internet.
        </p>

        {detailsMode === DETAILS_MODES.full && (
          <>
            <p>Lessons learned:</p>
            <ul>
              <li>First experience leading dev team and negotiating work load</li>
              <li>Marketing is very important for a new startup</li>
              <li>Never create MVP for 13 months!</li>
            </ul>
          </>
        )}
      </Job>

      <Job project="Mobile Dream Studio" period="04/2007 - 07/2008">
        <p>Creating first microblogging platform for French company in PHP and Flash.</p>

        {detailsMode === DETAILS_MODES.full && (
          <>
            <p>Lessons learned:</p>
            <ul>
              <li>Flash</li>
              <li>Working with clients in English</li>
              <li>How to deliver</li>
            </ul>
          </>
        )}
      </Job>

      <Job project="Versita" period="11/2005 - 11/2006">
        <p>Maintaining PHP application for managing articles flow for publisher.</p>

        {detailsMode === DETAILS_MODES.full && (
          <>
            <p>Lessons learned:</p>
            <ul>
              <li>Backups!</li>
              <li>Debugging</li>
            </ul>
          </>
        )}
      </Job>
    </ExperienceWrapper>
  )
}

const Job = (props: { project: string; period: string; children: React.ReactNode }) => (
  <JobWrapper>
    <div className="project-header">
      <h3>{props.project}</h3>
      <span>{props.period}</span>
    </div>

    {props.children}
  </JobWrapper>
)

const JobWrapper = styled.div`
  /* padding: 0 0 0 1rem; */
  padding-left: 1rem;
  margin-top: 2rem;
  position: relative;

  .project-header {
    h3 {
      margin: 0;
    }

    span {
      color: var(--color-muted);
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--color-primary-muted);
  }
`

export default Experience
