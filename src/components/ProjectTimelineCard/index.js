// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {Details} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = Details

  return (
    <div className="projectCard">
      <img className="projectImage" src={imageUrl} alt="project" />
      <div className="title-duration-card">
        <p className="title">{projectTitle}</p>
        <div className="duration-card">
          <AiFillCalendar color="#171f46" />
          <p className="para">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
