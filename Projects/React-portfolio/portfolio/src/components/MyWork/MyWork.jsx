import React from 'react'
import "./MyWork.css"
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.png'

const MyWork = () => {
  return (
    <div className='mywork' id='work'>
          <div className="mywork-title">
              <h1>My latest work</h1>
          </div>
          <div className="mywork-container">
              {mywork_data.map((work, index) => {
                  return <img key={index} src={work.w_img} alt="" height="200px" />
              })}
          </div>
          <div className="mywork-showmore">
              <p>Show More</p>
              <img src={arrow_icon} alt="" height="20px" />
          </div>
    </div>
  )
}

export default MyWork
