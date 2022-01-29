import React from 'react';
import "./project-card.css";

function ProjectCard({project}) {
  return <div className='project-card'>
      <div className='project-info'>
          <label className='project-title'>{project.title}</label>
          <div className='project-links'>
            <a className='project-links' href={project.Github}>
            <div className='link-button' >
            
            <i class="devicon-github-original-wordmark colored">GitHub</i>

            
            </div>
            </a>
          
          </div>

          <p>{project.about}</p>
          <div className='project-tags'>
            {project.tags.map((tag)=>{
              return(
                <label className='tag'>{tag}</label>
              )
            })}
          </div>
      </div>
        <img src={project.image} className='project-photo'/>
      


  </div>;
}

export default ProjectCard;
