import React from 'react';
import { ExternalLink } from 'lucide-react';
import DoodleBorder from '../DoodleBorder/DoodleBorder';
import DoodleButton from '../DoodleButton/DoodleButton';
import './ProjectCard.scss';

const ProjectCard = ({ title, description, tags, image, link }) => {
  return (
    <div className="project-card">
      <DoodleBorder>
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <DoodleButton 
          className="view-project"
          onClick={() => window.open(link, '_blank')}
        >
          <span>View Project</span>
          <ExternalLink size={16} />
        </DoodleButton>
      </DoodleBorder>
    </div>
  );
};

export default ProjectCard;