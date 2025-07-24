import React, { useState, useEffect } from 'react';
import WhiteBlueText from './WhiteBlueText';
import HeadingPara from './HeadingPara';
import IconComponent from './IconComponent';

const Explore = ({ getContentData }) => {
  const { dataObject, data } = getContentData || {};

  const [content, setContent] = useState({
    heading: '',
    paragraph: '',
    iconList: [],
    imageUrl: '',
  });

  useEffect(() => {
    if (!dataObject || !data) return;

    const imageId = dataObject.image?.sys?.id;
    const imageAsset = data.includes?.Asset
      ? data.includes.Asset.find((asset) => asset.sys.id === imageId)
      : null;

    setContent({
      heading: dataObject.heading ?? '',
      paragraph: dataObject.paragraph ?? '',
      iconList: dataObject.iconList ?? [],
      imageUrl: imageAsset?.fields?.file?.url ?? '',
    });
  }, [dataObject, data]);

  const { heading, paragraph, iconList, imageUrl } = content;

  return (
    <section className="explore margin-top">
      {(heading || paragraph || imageUrl || iconList) && (
        <div className="wrapper left-align image-content-div">
          <div
            className="content-side bigger-width"
            style={{ flexBasis: '50%', gap: '20px' }}>
            {heading && (
              <WhiteBlueText text={heading} colorClass={'blackColor'} />
            )}
            {paragraph && (
              <div className="heading-para">
                <p>{paragraph}</p>
              </div>
            )}
            {iconList && <IconComponent iconList={iconList} data={data} />}
          </div>

          {imageUrl && (
            <figure className="smaller-width" style={{ flexBasis: '45%' }}>
              <img src={imageUrl} alt="Image" />
            </figure>
          )}
        </div>
      )}
    </section>
  );
};

export default Explore;

