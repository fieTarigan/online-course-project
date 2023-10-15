import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isHover, setIsHover] = useState(false);

  const toggleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <>
      {/* banner */}
      <div style={{textAlign:"right"}}>
        <div style={{display:"inline-flex",paddingLeft:"0",justifyContent:"flex-end",alignItems:"center",gap:"4.5rem"}}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"2.5rem",maxWidth:"648px",textAlign:"left"}}>
            <div style={{color:"var(--gray-900, #1D2026)",fontFamily:"Inter",fontSize:"4.5rem",fontStyle:"normal",fontWeight:600,lineHeight:"4.625rem",letterSpacing:"-0.09rem"}}>
              Learn with expert anytime anywhere
            </div>
            <div style={{color:"var(--gray-700, #4E5566)",fontFamily:"Inter",fontSize:"1.5rem",fontStyle:"normal",fontWeight:400,lineHeight:"2rem"}}>
              Our mision is to help people to find the best course online and learn with expert anytime, anywhere.
            </div>
            <div>
              <Link to='/register' style={{borderWidth:"0",borderRadius:"1rem",padding:"1rem 2rem",backgroundColor:"var(--primary-500, #FF6636)",color:"var(--gray-white, #FFF)",fontFamily:"Inter",fontSize:"1.125rem",fontStyle:"normal",fontWeight:600,textDecoration:"none"}}>
                Create Account
              </Link>
            </div>
          </div>
          <div>
            <img src='images.png' alt='' style={{maxHeight: "57.2vh"}}/>
          </div>
        </div>
      </div>
      {/* top categories */}
      <div className='homepage-category'>
        <div className='homepage-category-title'>
          Top Categories
        </div>
        <div className='homepage-category-body'>
          {/* item I */}
          <div className='homepage-category-item'>
            <div>
              <img src='Cpu.png' alt='' style={{maxHeight:"32px"}} />
            </div>
            <div className='homepage-category-item-label'>
              <div className='homepage-category-item-label-title'>
                Label
              </div>
              <div className='homepage-category-item-label-content'>
                53478 Courses
              </div>
            </div>
          </div>
          {/* item II */}
          <div className='homepage-category-item'>
            <div>
              <img src='Cpu.png' alt='' style={{maxHeight:"32px"}} />
            </div>
            <div className='homepage-category-item-label'>
              <div className='homepage-category-item-label-title'>
                Label
              </div>
              <div className='homepage-category-item-label-content'>
                53478 Courses
              </div>
            </div>
          </div>
        </div>
        <div className='homepage-category-browse'>
          <div className='homepage-category-browse-text'>
            We have more category.
          </div>
          <button className='homepage-category-browse-button'>
            Browse All
          </button>
        </div>
      </div>
      {/* top courses */}
      <div className='homepage-course'>
        <div className='homepage-course-title'>
          Top Courses
        </div>
        <div className='homepage-course-body'>
          {/* Item I */}
          <div className='homepage-course-item'>
            <img className='homepage-course-item-image' src='CourseImages.png' alt='' />
            <div className='homepage-course-item-body'>
              <div className='homepage-course-item-body-top'>
                <div className='homepage-course-item-body-top-left'>
                  DESIGN
                </div>
                <div className='homepage-course-item-body-top-right'>
                  $57
                </div>
              </div>
              <div className='homepage-course-item-body-bottom'>
                Machine Learning A-Z™: Hands-On Python & R In Data...
              </div>
            </div>
            <div className='homepage-course-item-footer'>
              <div className='homepage-course-item-footer-left'>
                <img src='Photo.png' alt='' width='25px' style={{borderRadius:"50%"}} />
                <div className='homepage-course-item-footer-left-text'>
                  Kevin Gilbert
                </div>
              </div>
              <div className='homepage-course-item-footer-right'>
                <img src='User.svg' alt='' width='20px'/>
                <div className='homepage-course-item-footer-right-text'>
                  265.7K
                </div>
              </div>
            </div>
          </div>
          {/* Item II */}
          <div className='homepage-course-item'>
            <img className='homepage-course-item-image' src='CourseImages.png' alt='' />
            <div className='homepage-course-item-body'>
              <div className='homepage-course-item-body-top'>
                <div className='homepage-course-item-body-top-left'>
                  DESIGN
                </div>
                <div className='homepage-course-item-body-top-right'>
                  $57
                </div>
              </div>
              <div className='homepage-course-item-body-bottom'>
                Machine Learning A-Z™: Hands-On Python & R In Data...
              </div>
            </div>
            <div className='homepage-course-item-footer'>
              <div className='homepage-course-item-footer-left'>
                <img src='Photo.png' alt='' width='25px' style={{borderRadius:"50%"}} />
                <div className='homepage-course-item-footer-left-text'>
                  Kevin Gilbert
                </div>
              </div>
              <div className='homepage-course-item-footer-right'>
                <img src='User.svg' alt='' width='20px'/>
                <div className='homepage-course-item-footer-right-text'>
                  265.7K
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='homepage-course-browse'>
          <button className='homepage-course-browse-button'>
            Browse All Courses
          </button>
        </div>
      </div>
      {/* top instructor */}
      <div className='homepage-instructor'>
        <div className='homepage-instructor-title'>
          Top Instructors
        </div>
        <div className='homepage-instructor-body'>
          {/* Item I */}
          <div className='homepage-instructor-item'>
            <img className='homepage-instructor-item-image' src='ImageInstruc.png' alt='' />
            <div className='homepage-instructor-item-body'>
              <div className='homepage-instructor-item-body-top'>
                Devon Lane
              </div>
              <div className='homepage-instructor-item-body-bottom'>
                Senior Developer
              </div>
            </div>
            <div className='homepage-instructor-item-footer'>
              <div className='homepage-instructor-item-footer-left'>
                <img src='online-learning.png' alt='' width='25px' style={{borderRadius:"50%"}} />
                <div className='homepage-instructor-item-footer-left-text'>
                  10 courses
                </div>
              </div>
              <div className='homepage-instructor-item-footer-right'>
                <img src='User.svg' alt='' width='20px'/>
                <div className='homepage-instructor-item-footer-right-text'>
                  265.7K
                </div>
              </div>
            </div>
          </div>
          {/* Item II */}
          <div className='homepage-instructor-item'>
            <img className='homepage-instructor-item-image' src='ImageInstruc.png' alt='' />
            <div className='homepage-instructor-item-body'>
              <div className='homepage-instructor-item-body-top'>
                Devon Lane
              </div>
              <div className='homepage-instructor-item-body-bottom'>
                Senior Developer
              </div>
            </div>
            <div className='homepage-instructor-item-footer'>
              <div className='homepage-instructor-item-footer-left'>
                <img src='online-learning.png' alt='' width='25px' style={{borderRadius:"50%"}} />
                <div className='homepage-instructor-item-footer-left-text'>
                  10 courses
                </div>
              </div>
              <div className='homepage-instructor-item-footer-right'>
                <img src='User.svg' alt='' width='20px'/>
                <div className='homepage-instructor-item-footer-right-text'>
                  265.7K
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage