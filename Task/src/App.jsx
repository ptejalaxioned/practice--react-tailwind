import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageContent from './components/ImageContent';
import IconComponent from './components/IconComponent';
import Banner from './components/Banner';
import React, { useState, useEffect, useRef } from 'react';
import Explore from './components/Explore';
import DirectorsSection from './components/DirectorsSection';

function App() {
  const [objdata, setObjData] = useState({
    contentTypeArray: [],
    data: {},
  });

  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchContent = async () => {
      try {
        const SPACE_ID = 'kk0ys74g6iwn';
        const ACCESS_TOKEN = 'F2Ocss0XRR0w49PKHvJC1J1-hLxb62qEALF5J-vpeAc';
        const response = await fetch(
          `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}`
        );
        const data = await response.json();

        if (!data.items || data.items.length === 0) {
          console.error('No entries found!');
          return;
        }

        const structuredData = data.items.reduce((acc, item) => {
          const contentType = item.sys.contentType.sys.id;
          if (!acc[contentType]) {
            acc[contentType] = [];
          }
          acc[contentType].push(item.fields);
          return acc;
        }, {});

        console.log('structuredData', structuredData);

        function resolveReferences(data, items, key) {
          if (!Array.isArray(data)) {
            console.error('resolveReferences: Data is not an array', data);
            return [];
          }

          return data.map((entry, index) => {
            if (!Array.isArray(entry[key])) {
              console.warn(
                `resolveReferences: No ${key} array in entry at index ${index}`,
                entry
              );
              return entry; // Skip modification
            }

            entry[key] = entry[key].map((ref) => {
              const resolvedItem = items.find(
                (item) => item.sys.id === ref.sys.id
              );
              if (!resolvedItem) {
                console.warn(`resolveReferences: No match for reference`, ref);
              }
              return resolvedItem || ref;
            });

            return entry;
          });
        }

        const resolvedData = resolveReferences(
          structuredData.heading || [],
          data.items || [],
          'headingParaList'
        );

        const resolvedData2 = resolveReferences(
          structuredData.imageContentIcons,
          data.items,
          'iconList'
        );

        setObjData({
          contentTypeArray: structuredData || {},
          data: data || {},
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchContent();
  }, []);

  const getContentData = (contentType, index) => {
    return {
      dataObject: objdata?.contentTypeArray?.[contentType]?.[index] || {},
      data: objdata?.data || {},
    };
  };

  return (
    <>
      {/* <Header /> */}
      <main >
        <Banner getContentData={getContentData('banner', 0)} />
        <ImageContent
          getContentData={getContentData('heading', 0)}
          contentWidth={`bigger`}
          figureWidth={`smaller`}
          additionalClass={`gray-background`}
          additionalClassDiv={`margin-top`}
        />
         <ImageContent
          getContentData={getContentData('heading', 2)}
          contentWidth={`smaller`}
          figureWidth={`bigger`}
          alignment={`right`}
          additionalClass={`gray-background`}
          additionalClassDiv={`margin-top`}
        />
        <ImageContent
          getContentData={getContentData('heading', 1)}
          contentWidth={`smaller`}
          figureWidth={`bigger`}
          alignment={`left`}
          additionalClass={`gray-background`}
          additionalClassDiv={`margin-top`}
        />
      </main>
      <Explore getContentData={getContentData('imageContentIcons', 0)} />
      <DirectorsSection/>
      <Footer />
    </>
  );
}

export default App;
