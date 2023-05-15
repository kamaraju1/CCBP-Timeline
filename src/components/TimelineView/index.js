import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderProjectTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} Details={item} />
    }
    return <CourseTimelineCard key={item.id} Details={item} />
  }

  return (
    <div className="time-line-card">
      <div className="responsive-card">
        <div className="header-card">
          <h1 className="heading">
            MY JOURNEY OF <br />
            <span className="CCBP-heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem =>
            renderProjectTimelineCard(eachItem),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
