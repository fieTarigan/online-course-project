import React from 'react'

const Courses = (props) => {
  const { allCourses } = props;
  return (
    <>
      <div className='studentdb-body-top'>
            Courses ({allCourses.length})
          </div>
          <div className='studentdb-body2-bottom'>
            {allCourses.map((course) => (
              <div className='homepage-course-item'>
                <img className='homepage-course-item-image' src={course.image} alt='' />
                <div className='homepage-course-item-body'>
                  <div className='homepage-course-item-body-top'>
                    <div className='homepage-course-item-footer-left'>
                      <img src={course.teacherimage} alt='' width='25px' style={{borderRadius:"50%"}} />
                      <div className='homepage-course-item-footer-left-text'>
                        {course.teachername}
                      </div>
                    </div>
                    <div className='homepage-course-item-body-top-left'>
                      {course.label}
                    </div>
                  </div>
                  <div className='homepage-course-item-body-bottom'>
                    {course.name}
                  </div>
                </div>
              </div>
            ))}
            
          </div>
    </>
  )
}

export default Courses