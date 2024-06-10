import './App.css'
import { JobName } from './homepage/JobName'
import { Name } from './homepage/Name'
import { Detail } from './homepage/details/Detail'
import { DetailContainer } from './homepage/details/DetailContainer'
import { HeadlineGrid } from './layout/HeadlineGrid'

function App() {
  return (
    <>
      <HeadlineGrid>
        <Name>Jimmy MacGregor</Name>
        <DetailContainer>
          <Detail>07753615530</Detail>
          <Detail>jimmy.samuel.macgregor@gmail.com</Detail>
          <Detail>www.jimmymacgregor.com</Detail>
          <Detail><a href="https://github.com/MymmiJ">GitHub</a></Detail>
          <Detail>113 Summerhill Road, Bristol, BS5 8JT</Detail>
        </DetailContainer>
        <JobName>Senior Frontend Developer</JobName>
      </HeadlineGrid>
      <section>
        <h2>Personal Profile</h2>
        <p>
          Senior Frontend Engineer with 6 years experience building React TypeScript front-ends, RESTful APIs, and containerised
microservices on Kubernetes
        </p>
      </section>
    </>
  )
}

export default App
