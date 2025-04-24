import React from 'react';
import DoodleBorder from '../DoodleBorder/DoodleBorder';
import './AchievementCard.scss';

const AchievementCard = ({ title, issuer, date, description }) => {
  return (
    <div className="achievement-card">
      <DoodleBorder isAchievement={true}>
        <div className="achievement-header">
          <h3>{title}</h3>
          <span className="achievement-date">{date}</span>
        </div>
        <p className="achievement-issuer">{issuer}</p>
        <p className="achievement-description">{description}</p>
      </DoodleBorder>
    </div>
  );
};

export default AchievementCard;