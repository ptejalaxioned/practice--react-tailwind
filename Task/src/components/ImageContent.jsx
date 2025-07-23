import React, { useState, useEffect } from 'react';
import ReadMoreButton from './ReadMoreButton';
import HeadingPara from './HeadingPara';

const ImageContent = ({
  getContentData,
  contentWidth,
  figureWidth,
  alignment,
  additionalClass,
  additionalClassDiv,
}) => {
  const { dataObject, data } = getContentData || {};

  const [content, setContent] = useState({
    h1Field: '',
    headingPara: [],
    buttonText: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (!dataObject || !data) return;

    const imageId = dataObject.image?.sys?.id;
    const imageAsset = data.includes?.Asset
      ? data.includes.Asset.find((asset) => asset.sys.id === imageId)
      : null;

    setContent({
      h1Field: dataObject.h1?.content?.[0]?.content?.[0]?.value ?? '',
      headingPara: dataObject.headingParaList ?? [],
      buttonText: dataObject.buttonText ?? '',
      imageUrl: imageAsset?.fields?.file?.url ?? '',
    });
  }, [dataObject, data]);

  const { h1Field, headingPara, buttonText, imageUrl } = content;

  return (
    <section className="image-content">
      {(h1Field || headingPara || imageUrl || buttonText) && (
        <div
          className={`wrapper image-content-div ${alignment}-align ${additionalClassDiv}`}>
          {imageUrl && (
            <figure className={`${figureWidth}-width`}>
              <img src={imageUrl} alt="Image" />
            </figure>
          )}
          <div
            className={`content-side ${contentWidth}-width ${additionalClass}`}>
            {h1Field && <h3>{h1Field}</h3>}
            <HeadingPara headingParagraphList={headingPara} />
            <ReadMoreButton />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageContent;
