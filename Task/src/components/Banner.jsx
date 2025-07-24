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
          <div className="about-content w-11/12 xl:w-6/12 p-0 absolute z-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {smallTitle && <h3 className="text-[#3498db]">{smallTitle}</h3>}
            <WhiteBlueText text={title} />
            {description && <p>{description}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
