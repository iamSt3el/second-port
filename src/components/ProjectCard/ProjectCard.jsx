import React from 'react';
import { ExternalLink, Code, Database, Layers } from 'lucide-react';
import DoodleBorder from '../DoodleBorder/DoodleBorder';
import DoodleButton from '../DoodleButton/DoodleButton';
import './ProjectCard.scss';

const ProjectCard = ({ title, description, tags, image, link }) => {
  // Choose icon based on project tags
  const getProjectIcon = () => {
    const tagString = tags.join(' ').toLowerCase();
    if (tagString.includes('react') || tagString.includes('front') || tagString.includes('ui')) {
      return <Layers size={24} />;
    } else if (tagString.includes('data') || tagString.includes('mongo') || tagString.includes('sql')) {
      return <Database size={24} />;
    } else {
      return <Code size={24} />;
    }
  };

  return (
    <div className="project-card">
      <DoodleBorder>
        <div className="project-image">
          <img src={image} alt={title} />
          <div className="project-icon">
            {getProjectIcon()}
          </div>
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