import React from 'react';
import ReactWordcloud from 'react-wordcloud';

interface KeywordWordCloudProps {
  words: { text: string; value: number }[];
}

const options = {
  rotations: 2,
  rotationAngles: [-90, 0] as [number, number],
  fontSizes: [20, 60] as [number, number],
  enableTooltip: false,
  deterministic: true,
  fontFamily: 'impact',
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 1000,
};

export function KeywordWordCloud({ words }: KeywordWordCloudProps) {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <ReactWordcloud words={words} options={options} />
    </div>
  );
}
