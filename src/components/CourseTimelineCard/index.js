// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const Details = props
  const {courseTitle, description, duration, tagsList} = Details
  return (
    <>
      <div className="course-title-card">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-card">
          <AiFillClockCircle color="#171f46" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(eachTag => (
          <li key={eachTag.id}>
            <p className="name-tag">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
