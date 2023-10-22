import React from 'react';

function Section({ backgroundColor, children }) {
  const sectionStyle = {
    backgroundColor: backgroundColor,
  };

  return <section className="section" style={sectionStyle}>{children}</section>;
}

export default Section;