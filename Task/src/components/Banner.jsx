import React, { useState, useEffect } from 'react';
import WhiteBlueText from './WhiteBlueText';

const Banner = ({ getContentData }) => {
  const { dataObject, data } = getContentData || {};

  const [content, setContent] = useState({
    title: '',
    description: '',
    smallTitle: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (!dataObject || !data) return;

    const imageId = dataObject.bannerImage?.sys?.id;
    const imageAsset = data.includes?.Asset
      ? data.includes.Asset.find((asset) => asset.sys.id === imageId)
      : null;

    setContent({
      title: dataObject.bannerHeading ?? '',
      description: dataObject.description ?? '',
      smallTitle: dataObject.smallTitle ?? '',
      imageUrl: imageAsset?.fields?.file?.url ?? '',
    });
  }, [dataObject, data]);

  const { title, description, smallTitle, imageUrl } = content;

  return (
    <section className="about-banner">
      {(smallTitle || title || description || imageUrl) && (
        <div className="wrapper">
          {imageUrl && (
            <figure className="about-banner-img">
              <img src={imageUrl} alt="Background Image" />
            </figure>
          )}
          <div className="about-content">
            {smallTitle && <h3 className="blue-text">{smallTitle}</h3>}
            <WhiteBlueText text={title} />
            {description && <p>{description}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
