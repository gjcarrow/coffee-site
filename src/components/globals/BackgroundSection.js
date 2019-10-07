import React from 'react';
import BackgroundImage from "gatsby-background-image";

export default function BackgroundSection ({
  img,
  styleClass,
  title,
  children
}) {
  return (
    <BackgroundImage 
      className={ styleClass } 
      fluid={ img }
      >
        <h1>
          {title}
        </h1>
        {children}
      </BackgroundImage>);
};

BackgroundSection.defaultProps = {
  title: "defalut title",
  styleClass: "default-background"
}
