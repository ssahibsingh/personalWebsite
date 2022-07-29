import React from 'react'
import './Work.scss'
const Work = () => {
  return (
    <>
      <section id="project" className="work">
        <div className="container">
          <div className="row">
            <div className="col-6">
              {/* <div className="work__"> */}
              <h2 className="work__heading">Projects</h2>
              {/* </div> */}
            </div>
          </div>
          <div className="work__display">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 work__details">
                <div className="work__detail">
                  <a href="https://github.com/ssahibsingh/yt-playlist-length">
                    <img src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=yt-playlist-length" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 work__details">
                <div className="work__detail">
                  <a href="https://github.com/ssahibsingh/yt-playlist-length">
                    <img src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=yt-playlist-length" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 work__details">
                <div className="work__detail">
                  <a href="https://github.com/ssahibsingh/yt-playlist-length">
                    <img src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=yt-playlist-length" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 work__details">
                <div className="work__detail">
                  <a href="https://github.com/ssahibsingh/yt-playlist-length">
                    <img src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=yt-playlist-length" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Work