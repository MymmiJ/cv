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
import { WorkExperienceSection } from './homepage/main/WorkExperienceSection'
import { EducationHeader } from './homepage/main/DiscreteSuccessSection/EducationHeader'
import { EducationDescriptor } from './homepage/main/DiscreteSuccessSection/EducationDescriptor'

function App() {
  return (
    <>
      <BlackBar />
      <HeadlineGrid>
        <Name>Jimmy MacGregor</Name>
        <DetailContainer>
          <Detail>07753615530</Detail>
          <Detail>jimmy.samuel.macgregor@gmail.com</Detail>
          <Detail><a href="https://www.jimmymacgregor.com">www.jimmymacgregor.com</a></Detail>
          <Detail><a href="https://github.com/MymmiJ">GitHub</a></Detail>
          <Detail>113 Summerhill Road, Bristol, BS5 8JT</Detail>
        </DetailContainer>
        <JobName>Senior Frontend Engineer</JobName>
      </HeadlineGrid>
      <section>
        <SectionHeader>Personal Profile</SectionHeader>
        <p>
          Senior Frontend Engineer with 6 years experience building React TypeScript front-ends, RESTful APIs, and containerised
microservices on Kubernetes
        </p>
      </section>
      <hr />
      <MainContentGrid>
        <DiscreteSuccessSection>
          <SuccessSectionHeader>Areas of Expertise</SuccessSectionHeader>
          <ul>
            <SuccessSectionEntry>
              <strong>Languages</strong> - TypeScript, JavaScript, PHP, Java, Python 3, Ruby, Go, C#, SQL, Racket, Haskell
            </SuccessSectionEntry>
            <SuccessSectionEntry>
              <strong>Frameworks</strong> - React, Redux, Sentry, Gatsby, Jest, Cypress, Symfony, Tensorflow, sklearn, CalmmJS
            </SuccessSectionEntry>
            <SuccessSectionEntry>
              <strong>Databases</strong> - Riak, ArangoDB, Redis, MySQL, SQLite
            </SuccessSectionEntry>
            <SuccessSectionEntry>
              <strong>Infrastructure</strong> - Solr, Kubernetes, Docker, Prometheus
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
          <EducationDescriptor>Programming Languages, March 2023</EducationDescriptor>
          <EducationHeader>BATH SPA UNIVERSITY</EducationHeader>
          <EducationDescriptor>MA Creative Writing (Merit), 2011</EducationDescriptor>
          <EducationHeader>SUSSEX UNIVERSITY</EducationHeader>
          <EducationDescriptor>BA (Hons) English Literature (2:1), 2009</EducationDescriptor>
        </DiscreteSuccessSection>
        <WorkExperienceSection>
          hello world
        </WorkExperienceSection>
      </MainContentGrid>
      <BlackBar />
    </>
  )
}

export default App
