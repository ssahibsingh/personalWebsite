import React from 'react'
import { images } from '../../constants'
import './Project.scss'
const Project = () => {
  return (
    <>
      <section id="project" className="project">
        <div className="container">
          <h2 className="section__heading">Projects</h2>
          <div className="project__display">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
                <div className="project__item comp">
                  <div className="project__item-img">
                    <img className="img-fluid" src={images.youtube} alt="YouTube Playlist Length" />
                  </div>
                  <div className="project__item-about">
                    <div className="project__name">
                      <h3 >YouTube Playlist Length</h3>
                      {/* <p>Duration: 03/2022 - 03/2022</p> */}
                    </div>
                    <div className="project__item-about-content">
                      <p>YouTube Playlist Length Calculator calculates the length of any YouTube playlist. It is capable of calculating length over a custom range as well. We just need to give the playlist link and custom range (optional) and we will get the playlist length  </p>
                      <div className="project__item-about-tech">
                        <h5>Tech Stack</h5>
                      </div>
                      <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>EJS</li>
                        <li>YouTube Data API</li>
                        <li>Heroku</li>
                      </ul>
                    </div>
                    <div className="project__item-links">
                      <div className="project__item-links-item live">
                        <a href="https://yt-playlist-leng.herokuapp.com/" target="_blank" rel="noreferrer">Live Deployment <i className="fas fa-external-link-alt"></i></a>
                      </div>
                      <div className="project__item-links-item code">
                        <a href="https://github.com/ssahibsingh/yt-playlist-length" target="_blank" rel="noreferrer">Source Code <i className="fa-brands fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
                <div className="project__item comp">
                  <div className="project__item-img">
                    <img className="img-fluid" src={images.urlShortner} alt="YouTube Playlist Length" />
                  </div>
                  <div className="project__item-about">
                    <div className="project__name">
                      <h3 >URL Shortener</h3>
                      {/* <p>Duration: 03/2022 - 03/2022</p> */}
                    </div>
                    <div className="project__item-about-content">
                      <p>A URL shortener capable of shortening every valid URL. URL validation is done with the help of 'Valid-URL' (NPM package) and URL alias string is generated with help of 'NanoId' (NPM Package). It can also generate URLs with custom aliases.</p>
                      <div className="project__item-about-tech">
                        <h5>Tech Stack</h5>
                      </div>
                      <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>EJS</li>
                        <li>Heroku</li>
                      </ul>
                    </div>
                    <div className="project__item-links">
                      <div className="project__item-links-item live">
                        <a href="https://exn.herokuapp.com/" target="_blank" rel="noreferrer">Live Deployment <i className="fas fa-external-link-alt"></i></a>
                      </div>
                      <div className="project__item-links-item code">
                        <a href="https://github.com/ssahibsingh/url-shortener" target="_blank" rel="noreferrer">Source Code <i className="fa-brands fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
                <div className="project__item comp">
                  <div className="project__item-img">
                    <img className="img-fluid" src={images.socialmedia} alt="YouTube Playlist Length" />
                  </div>
                  <div className="project__item-about">
                    <div className="project__name">
                      <h3 >Social Media DBMS</h3>
                      {/* <p>Duration: 03/2022 - 03/2022</p> */}
                    </div>
                    <div className="project__item-about-content">
                      <p>A Social Media Database Management system flexible for any Frontend Interface Integration. This involves managing the data of multiple users, their followers, interests and public activity on the Social Media.</p>
                      <div className="project__item-about-tech">
                        <h5>Tech Stack</h5>
                      </div>
                      <ul>
                        <li>MySQL</li>
                      </ul>
                      <div className="project__item-about-tech py-1">
                        <h5>Components</h5>
                      </div>
                      <ul>
                        <li>Schema</li>
                        <li>Database</li>
                        <li>ER Diagram</li>
                        <li>Sample Queries</li>
                      </ul>
                    </div>
                    <div className="project__item-links">
                      {/* <div className="project__item-links-item live">
                        <a href="https://google.com" target="_blank" rel="noreferrer">Live Deployment <i className="fas fa-external-link-alt"></i></a>
                      </div> */}
                      <div className="project__item-links-item code">
                        <a href="https://github.com/ssahibsingh/Social-Media-Database-Project" target="_blank" rel="noreferrer">Source Code <i className="fa-brands fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
                <div className="project__item comp">
                  <div className="project__item-img">
                    <img className="img-fluid" src={images.googleForms} alt="YouTube Playlist Length" />
                  </div>
                  <div className="project__item-about">
                    <div className="project__name">
                      <h3 >Google Form Automation</h3>
                      {/* <p>Duration: 03/2022 - 03/2022</p> */}
                    </div>
                    <div className="project__item-about-content">
                      <p>A Google Form Automation script capable of automating any Google Form having Short Answer Type, Long Answer
                        Type, Multiple Choice and Checkbox Questions.</p>
                      <div className="project__item-about-tech">
                        <h5>Tech Stack</h5>
                      </div>
                      <ul>
                        <li>Python</li>
                        <li>Selenium</li>
                        <li>Chrome Web Driver</li>
                      </ul>
                    </div>
                    <div className="project__item-links">
                      {/* <div className="project__item-links-item live">
                        <a href="https://google.com" target="_blank" rel="noreferrer">Live Deployment <i className="fas fa-external-link-alt"></i></a>
                      </div> */}
                      <div className="project__item-links-item code">
                        <a href="https://github.com/ssahibsingh/GoogleFormsAutomation" target="_blank" rel="noreferrer">Source Code <i className="fa-brands fa-github"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
                <div className="project__item comp">
                  <div className="project__item-img">
                    <img className='blur img-fluid' src={images.soormeLogo} alt="YouTube Playlist Length" />
                  </div>
                  <div className="project__item-about">
                    <div className="project__name">
                      <h3 >Soorme.com</h3>
                    </div>
                    <div className="project__item-about-content">
                      <p>Soorme.com is an Online T-Shirt Store. T-Shirt Designs are based on Culture, History and Demography of Panjab.</p>
                      <div className="project__item-about-tech">
                        <h5>Tech Stack</h5>
                      </div>
                      <ul>
                        <li>Nodejs</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>MongoDB</li>
                        <li>Heroku</li>
                        <li>Vercel</li>
                      </ul>
                    </div>
                    <div className="project__item-links">
                      {/* <div className="project__item-links-item live">
                        <a href="https://soorme.com">Website <i className="fas fa-external-link-alt"></i></a>
                      </div> */}
                      <div className="project__item-links-item code">
                        In Development <i className="fa-solid fa-code"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
                <div className="project__item comp">
                  <div className="project__item-img">
                    <img className="img-fluid" src={images.portfolioGen} alt="YouTube Playlist Length" />
                  </div>
                  <div className="project__item-about">
                    <div className="project__name">
                      <h3 >Portfolio Generator</h3>
                    </div>
                    <div className="project__item-about-content">
                      <p>It Generates Portfolio Website, for which user have to enter their details and they will get their Portfolio Website. User have choice to choose a portfolio website from the sample
                        websites listed </p>
                      <div className="project__item-about-tech">
                        <h5>Tech Stack</h5>
                      </div>
                      <ul>
                        <li>Nodejs</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>MongoDB</li>
                        <li>Heroku</li>
                        <li>Vercel</li>
                      </ul>
                    </div>
                    <div className="project__item-links">
                      {/* <div className="project__item-links-item live">
                        <a href="https://google.com">Live Deployment <i className="fas fa-external-link-alt"></i></a>
                      </div> */}
                      <div className="project__item-links-item code">
                        In Development <i className="fa-solid fa-code"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project__other">
              <div className="project__other-heading">
                <h3>Other Projects</h3>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ggeeks/ggeeks.github.io">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ggeeks&repo=ggeeks.github.io&show_owner=true&border_color=fafafa&bg_color=fafafa&border_radius=10" alt="ggeeks.github.io" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center  ">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ssahibsingh/blog-website-pub">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=blog-website-pub&bg_color=fafafa&border_color=fafafa&border_radius=10" alt="blog-website-pub" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center  ">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ssahibsingh/qrcode-generator">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=qrcode-generator&bg_color=fafafa&border_color=fafafa&border_radius=10" alt="qrcode-generator" />
                  </a>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center  ">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ggeeks/GamerDays2-Website">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ggeeks&repo=GamerDays2-Website&show_owner=true&bg_color=fafafa&border_color=fafafa&border_radius=10" alt="GamerDays2-Website" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center  ">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ssahibsingh/Project-GamingGeeks">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=Project-GamingGeeks&bg_color=fafafa&border_color=fafafa&border_radius=10" alt="Project-GamingGeeks" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center  ">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ssahibsingh/Project-TiwanaPowerSol">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=Project-TiwanaPowerSol&bg_color=fafafa&border_color=fafafa&border_radius=10" alt="Project-TiwanaPowerSol" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center  ">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ssahibsingh/todolist-pub">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=todolist-pub&bg_color=fafafa&border_color=fafafa&border_radius=10" alt="todolist-pub" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center  ">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ssahibsingh/newsletter-signup-pub">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=newsletter-signup-pub&bg_color=fafafa&border_color=fafafa&border_radius=10" alt="newsletter-signup-pub" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center  ">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ssahibsingh/TossTheDice">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=TossTheDice&bg_color=fafafa&border_color=fafafa&border_radius=10" alt="TossTheDice" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center  ">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ssahibsingh/simongame">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=simongame&bg_color=fafafa&border_color=fafafa&border_radius=10" alt="simongame" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center  ">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ssahibsingh/drumkit">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=drumkit&bg_color=fafafa&border_color=fafafa&border_radius=10" alt="drumkit" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center  ">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ssahibsingh/flipkartclone">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=flipkartclone&bg_color=fafafa&border_color=fafafa&border_radius=10" alt="flipkartclone" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center  ">
                  <a target="_blank" rel="noreferrer" href="https://github.com/ssahibsingh/chaining-the-EVMs">
                    <img className="img-fluid" src="https://github-readme-stats.vercel.app/api/pin/?username=ssahibsingh&repo=chaining-the-EVMs&bg_color=fafafa&border_color=fafafa&border_radius=10" alt="chaining-the-EVMs" />
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

export default Project