import React from 'react';

const HeadingPara = ({ headingParagraphList }) => {
  const { headingObject, data } = headingParagraphList || [];
  return (
    <div className="heading-para">
      {headingParagraphList.length > 0 ? (
        headingParagraphList.map((item, index) => {
          const { fields } = item || {};
          return (
            <div key={index} className="single-heading-para">
              {fields?.heading && <h4>{fields.heading}</h4>}
              {fields?.paragraph && <p>{fields.paragraph}</p>}
            </div>
          );
        })
      ) : (
        <p>No content available</p>
      )}
    </div>
  );
};

export default HeadingPara;
