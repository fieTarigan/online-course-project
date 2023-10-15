import React from 'react'

const courses = () => {
  return (
    <>
      <div className='studentdb-body-top'>
            Courses (957)
          </div>
          <div className='studentdb-body2-bottom'>
            <div className='homepage-course-item'>
              <img className='homepage-course-item-image' src='CourseImages.png' alt='' />
              <div className='homepage-course-item-body'>
                <div className='homepage-course-item-body-top'>
                  <div className='homepage-course-item-footer-left'>
                    <img src='Photo.png' alt='' width='25px' style={{borderRadius:"50%"}} />
                    <div className='homepage-course-item-footer-left-text'>
                      Kevin Gilbert
                    </div>
                  </div>
                  <div className='homepage-course-item-body-top-left'>
                    DESIGN
                  </div>
                </div>
                <div className='homepage-course-item-body-bottom'>
                  Machine Learning A-Z™: Hands-On Python & R In Data...
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default courses