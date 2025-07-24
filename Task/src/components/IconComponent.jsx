import React, { useState, useEffect } from 'react';

const IconComponent = ({ iconList = [], data }) => {
  const [imageUrls, setImageUrls] = useState([]); // Store an array of objects

  useEffect(() => {
    if (!iconList.length || !data) return;

    const imageIds = iconList
      .map((item) => item.fields.iconImg.sys.id)
      .filter(Boolean);

    const matchedImages = data.includes?.Asset?.filter((asset) =>
      imageIds.includes(asset.sys.id)
    ).map((asset) => ({
      id: asset.sys.id,
      url: asset.fields.file.url ?? '',
    }));

    setImageUrls(matchedImages);
  }, [iconList, data]);

  return (
    <>
      {iconList && (
        <ul className="icon-list">
          {iconList.map((item, index) => {
            const image = imageUrls.find(
              (img) => img.id === item.fields.iconImg.sys.id
            );
            return (
              <li className="icons w-[29.67%] md:w-2/12" key={index}>
                <img
                  src={image ? image.url : ''}
                  alt={item.fields.iconName}
                  className="icon-img"
                />
                <span className="icon-name">{item.fields.iconName}</span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default IconComponent;
