import './App.css'
import { JobName } from './homepage/JobName'
import { Name } from './homepage/Name'
import { Detail } from './homepage/headers/details/Detail'
import { DetailContainer } from './homepage/headers/details/DetailContainer'
import { SectionHeader } from './homepage/headers/SectionHeader'
import { HeadlineGrid } from './layout/HeadlineGrid'
import { MainContentGrid } from './layout/MainContentGrid'
import { BlackBar } from './ornamentation/BlackBar'
import { DiscreteSuccessSection } from './homepage/main/DiscreteSuccessSection/DiscreteSuccessSection'
import { SuccessSectionHeader } from './homepage/main/DiscreteSuccessSection/SuccessSectionHeader'
import { SuccessSectionEntry } from './homepage/main/DiscreteSuccessSection/SuccessSectionEntry'
import { WorkExperienceSection } from './homepage/main/WorkExperienceSection/WorkExperienceSection'
import { EducationHeader } from './homepage/main/DiscreteSuccessSection/EducationHeader'
import { EducationDescriptor } from './homepage/main/DiscreteSuccessSection/EducationDescriptor'
import { WorkExperienceHeader } from './homepage/main/WorkExperienceSection/WorkExperienceHeader'
import { WorkExperienceJobHeader } from './homepage/main/WorkExperienceSection/WorkExperienceJobHeader'
import { WorkExperienceDate } from './homepage/main/WorkExperienceSection/WorkExperienceDate'
import { WorkExperienceWorkplace } from './homepage/main/WorkExperienceSection/WorkExperienceWorkplace'
import { WorkExperienceDescriptor } from './homepage/main/WorkExperienceSection/WorkExperienceDescriptor'

function App() {
  return (
    <>
      <BlackBar />
      <HeadlineGrid>
        <Name>Jimmy MacGregor</Name>
        <DetailContainer>
          <Detail>07753615530</Detail>
          <Detail>jimmy.samuel.macgregor@gmail.com</Detail>
          <Detail><a href="https://cv.jimmymacgregor.com">cv.jimmymacgregor.com</a></Detail>
          <Detail><a href="https://github.com/MymmiJ">GitHub</a></Detail>
          <Detail>113 Summerhill Road, Bristol, BS5 8JT</Detail>
        </DetailContainer>
        <JobName>Senior Frontend Engineer</JobName>
      </HeadlineGrid>
      <section>
        <SectionHeader>Personal Profile</SectionHeader>
        <p>
          Senior Frontend Engineer with 6 years experience building React TypeScript front-ends, RESTful APIs, and containerised microservices on Kubernetes
        </p>
      </section>
      <hr />
      <MainContentGrid>
        <WorkExperienceSection>
          <WorkExperienceHeader>Work Experience</WorkExperienceHeader>
          <WorkExperienceJobHeader>SOFTWARE ENGINEER</WorkExperienceJobHeader>
          <WorkExperienceDescriptor>
            <WorkExperienceWorkplace>Pricing Monkey</WorkExperienceWorkplace><WorkExperienceDate datetime="2023-08-01">Aug. 2023</WorkExperienceDate> - <WorkExperienceDate datetime={(new Date()).toLocaleDateString()}>Present</WorkExperienceDate>
            <ul>
              <li>Moved complex Python Windows application build process to CI/CD</li>
              <li>Implemented Shared Worker to share context between tabs and improve React application performance</li>
              <li>Created CSS best practice guidelines</li>
              <li>Repaired and optimised company website, reducing download size by over 65%</li>
            </ul>
          </WorkExperienceDescriptor>
          <WorkExperienceJobHeader>SENIOR CONTENT ENGINEER</WorkExperienceJobHeader>
          <WorkExperienceDescriptor>
            <WorkExperienceWorkplace>Ably</WorkExperienceWorkplace><WorkExperienceDate datetime={"2021-12-01"}>Dec. 2021</WorkExperienceDate> - <WorkExperienceDate datetime="2023-08-01">Aug. 2023</WorkExperienceDate>
            <ul>
              <li>Owned the design, decision-making and deployment of the React/Gatsby code documentation website, processing a legacy markup language called textile into a custom data format</li>
              <li>Led a team of two developers, delivering redesigns to spec and on time</li>
              <li>Delivered new core product for the company, "Ably Spaces"</li>
              <li>Provided code reviews, mentoring and technical demonstrations</li>
              <li>Implemented a system of React component tests, accessibility tests and property tests</li>
            </ul>
          </WorkExperienceDescriptor>
          <WorkExperienceJobHeader>SENIOR DEVELOPER</WorkExperienceJobHeader>
          <WorkExperienceDescriptor>
            <WorkExperienceWorkplace>Future Plc.</WorkExperienceWorkplace><WorkExperienceDate datetime={"2018-01-01"}>Jan. 2018</WorkExperienceDate> - <WorkExperienceDate datetime="2021-12-01">Dec. 2021</WorkExperienceDate>
            <ul>
              <li>Led the move of the in-house CMS API from PHP 5 to PHP 8</li>
              <li>Modernised the FRP React frontend</li>
              <li>Introduced Cypress testing to the CI/CD processes</li>
              <li>Scaled and improved the Redis queue-based workflow system to cater for millions of daily users</li>
              <li>
                Created microservices to run on a kubernetes cluster
                  <ul>
                    <li>A company-wide configuration service for all applications</li>
                    <li>A Slackbot API for interacting with the CMS</li>
                    <li>An ML-driven autocomplete application</li>
                  </ul>
              </li>
            </ul>
          </WorkExperienceDescriptor>
          <WorkExperienceJobHeader>AUDIENCE DEVELOPMENT MANAGER</WorkExperienceJobHeader>
          <WorkExperienceDescriptor>
            <WorkExperienceWorkplace>Future Plc.</WorkExperienceWorkplace><WorkExperienceDate datetime={"2016-02-01"}>Feb. 2016</WorkExperienceDate> - <WorkExperienceDate datetime="2018-01-01">Jan. 2018</WorkExperienceDate>
            <ul>
              <li>Improved HTML and schema.org markup across websites</li>
              <li>Worked with platform & engineering teams on errors which posed a risk to SEO</li>
              <li>Wrote Racket scripts to check and verify integrity of XML exports (such as sitemaps) and port them to usable CSV formats</li>
              <li>Effectively communicated the importance of technical SEO improvements & other ongoing technical work.</li>
            </ul>
          </WorkExperienceDescriptor>
          <WorkExperienceJobHeader>TECHNICAL STRATEGY</WorkExperienceJobHeader>
          <WorkExperienceDescriptor>
            <WorkExperienceWorkplace>Digirank (now Loom)</WorkExperienceWorkplace><WorkExperienceDate datetime={"2014-02-01"}>Feb. 2014</WorkExperienceDate> - <WorkExperienceDate datetime="2016-02-01">Feb. 2016</WorkExperienceDate>
            <ul>
              <li>Improved HTML and schema.org markup across all clients</li>
              <li>Created internal tools to improve and streamline processes including AJAX tools with PHP backends, and Java applications which output highly customizable HTML5 quizzes.</li>
              <li>Created web applications and interactive content using JavaScript and JavaScript libraries</li>
              <li>Managed client websites and implemented page load optimizations such as caching high-traffic pages. Implemented responsive website redesigns with CSS and JavaScript. Wrote high quality technical content for niche audiences.</li>
            </ul>
          </WorkExperienceDescriptor>
        </WorkExperienceSection>
        <DiscreteSuccessSection>
          <SuccessSectionHeader>Areas of Expertise</SuccessSectionHeader>
          <ul>
            <SuccessSectionEntry>
              <strong>Languages</strong> - TypeScript, JavaScript, PHP, Java, Python 3, Ruby, Go, C#, SQL, Racket, Haskell
            </SuccessSectionEntry>
            <SuccessSectionEntry>
              <strong>Frameworks</strong> - React, Redux, Gatsby, Symfony, Tensorflow, sklearn, CalmmJS, Jest, Mocha, Cypress,
            </SuccessSectionEntry>
            <SuccessSectionEntry>
              <strong>Databases</strong> - Riak, ArangoDB, Redis, MySQL, SQLite
            </SuccessSectionEntry>
            <SuccessSectionEntry>
              <strong>Infrastructure</strong> - Solr, Kubernetes, Docker, Sentry, Prometheus
            </SuccessSectionEntry>
          </ul>
        </DiscreteSuccessSection>
        <DiscreteSuccessSection>
          <SuccessSectionHeader>Volunteer Experience</SuccessSectionHeader>
          <ul>
            <SuccessSectionEntry>
              <strong>Bristol Disability Equalities Forum</strong> (Apr. 2016 - Nov. 2016) Identified and fixed Wordpress breach with encoded payload, hardened site to avoid further breaches, worked to improve site efficiency and remove technical debt from site.
            </SuccessSectionEntry>
            <SuccessSectionEntry>
              <strong>Bristol Energy Network</strong>  (Nov. 2022 - Dec. 2022) Provided technical support and guidance for specifications for site redesign.
            </SuccessSectionEntry>
          </ul>
        </DiscreteSuccessSection>
        <DiscreteSuccessSection>
          <SuccessSectionHeader>Education History</SuccessSectionHeader>
          <EducationHeader>UNIVERSITY OF WASHINGTON</EducationHeader>
          <EducationDescriptor>Programming Languages, March 2013</EducationDescriptor>
          <EducationHeader>BATH SPA UNIVERSITY</EducationHeader>
          <EducationDescriptor>MA Creative Writing (Merit), 2011</EducationDescriptor>
          <EducationHeader>SUSSEX UNIVERSITY</EducationHeader>
          <EducationDescriptor>BA (Hons) English Literature (2:1), 2009</EducationDescriptor>
        </DiscreteSuccessSection>
      </MainContentGrid>
      <BlackBar />
    </>
  )
}

export default App
