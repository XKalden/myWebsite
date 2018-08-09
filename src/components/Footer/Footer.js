import React, { Component } from 'react'
import Logo from '../../img/eagle.png';

import './Footer.css';


class Footer extends Component {

    state = {
        clientId: '7565099cc2d8baf11d94',
        clientSecret: '2fee8d36e34d06628ffa9bce91ee760f5f48e7a9',
        count: 5,
        sort: 'created: asc',
        repos: [],
        username: 'XKalden',
        data: null

    };

    componentDidMount() {
        const { username, count, sort, clientId, clientSecret } = this.state;
    
        fetch(
          `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
        )
          .then(res => res.json())
          .then(data => {
              this.setState({ repos: data });
          })
          .catch(err => console.log(err));

      }

    render() {
  
        const github_projects = ( 

                this.state.repos.map(repo => {

                    return (
                        <div key={repo.id} className="repo__container">
               
                            <div className="first__container-repo">
                                <h4>
                                <a href={repo.html_url} className="text-info" target="_blank">
                                    {repo.name}
                                </a>
                                </h4>
                                <p>{repo.description}</p>
                            </div>


                            <div className="second__container-repo">
                                <span className="repo__star">
                                Stars: {repo.stargazers_count}
                                </span>
                                <span className="repo__watch">
                                Watchers: {repo.watchers_count}
                                </span>
                                <span className="repo__fork">
                                Forks: {repo.forks_count}
                                </span>
                            </div>
                       
                      </div>
                    )
                })
        )






        return (
            <footer className="footer">    
                <div className="first__footer-flex">

                    <div className="copy__right">
                        <h3>Tsering Kalden</h3>
                        <p className="copy__p"> 
                        My services are specialized in Web Development and Digital Marketing.
                        Please do not hesitate to contact me at​ 647-573-9056 or email me at kaldendeveloper@gmail.com
                        </p>

                        <img className="footer__logo" src={Logo} alt="logo"/>
                    
                    </div>
                    <div className="github__project">
                        <h3>My Github Latest Repo</h3>


                        <div className="github__project-flex">
                            {github_projects}
                        </div>
                    </div>
                
                </div>

                <div className="second__footer-flex">   
                    <ul className="first__Nav-2"> 
                        <ul className="first__ul">
                            <li>© Tsering Kalden 2018 | All Rights Reserved | Disclaimer</li>
                        </ul>
                        <ul className="second__ul">
                            <li><a className="linkedin" href="https://www.linkedin.com/in/tkalden/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                            <li><a className="facebook" href="https://www.facebook.com/Real.Kalden" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                            <li><a className="instagram" href="https://www.instagram.com/tsering.kalden/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram"></i></a></li>
                            <li><a className="github" href="https://github.com/XKalden" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a></li>
                            <li><a className="youtube" href="https://www.youtube.com/user/kalden619/featured" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </ul>

                </div>
                




            
            
            </footer>
        )
    }
}


export default Footer;
