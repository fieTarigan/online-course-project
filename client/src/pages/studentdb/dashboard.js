import React from 'react'

const dashboard = () => {
  return (
    <>
      <div className='studentdb-body-top'>
            Dashboard
          </div>
          <div className='studentdb-body-bottom'>
            <div className='studentdb-body-bottom-item'>
              <div className='studentdb-body-bottom-item-left'>
                <img src='EnrolledCourse.png' alt='' width='32px' />
              </div>
              <div className='studentdb-body-bottom-item-right'>
                <div className='studentdb-body-bottom-item-right-title'>
                  957
                </div>
                <div className='studentdb-body-bottom-item-right-desc'>
                  Enrolled Courses
                </div>
              </div>
            </div>
            <div className='studentdb-body-bottom-item'>
              <div className='studentdb-body-bottom-item-left'>
                <img src='CheckSquareOffset.png' alt='' width='32px' />
              </div>
              <div className='studentdb-body-bottom-item-right'>
                <div className='studentdb-body-bottom-item-right-title'>
                  957
                </div>
                <div className='studentdb-body-bottom-item-right-desc'>
                  Active Courses
                </div>
              </div>
            </div>
            <div className='studentdb-body-bottom-item'>
              <div className='studentdb-body-bottom-item-left'>
                <img src='Trophy.png' alt='' width='32px' />
              </div>
              <div className='studentdb-body-bottom-item-right'>
                <div className='studentdb-body-bottom-item-right-title'>
                  957
                </div>
                <div className='studentdb-body-bottom-item-right-desc'>
                  Completed Courses
                </div>
              </div>
            </div>
            <div className='studentdb-body-bottom-item'>
              <div className='studentdb-body-bottom-item-left'>
                <img src='Users.png' alt='' width='32px' />
              </div>
              <div className='studentdb-body-bottom-item-right'>
                <div className='studentdb-body-bottom-item-right-title'>
                  957
                </div>
                <div className='studentdb-body-bottom-item-right-desc'>
                  Course Teachers
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default dashboard