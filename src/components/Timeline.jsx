import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import timelineData from '../../content/timeline.json';

const NUM_YEARS_TO_SHOW = 2;

const TimelineItem = ({ title, content }) => (
  <div className="grid gap-2 grid-cols-timelineItem items-center pl-2 mb-4">
    <FaCheckCircle color="#00A68B" />
    <p className="text-text">{title}</p>
    <p className="text-lightText text-justify grid col-start-2 row-start-2">{content}</p>
  </div>
);

const Timeline = () => {
  const [isOpen, setState] = useState(false);

  const formatedData = Object.entries(timelineData).sort((a, b) => (a[0] < b[0] ? 1 : -1));

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold">Timeline</h2>
      {formatedData.map(([year, entries], index) => (
        <>
          {index + 1 <= NUM_YEARS_TO_SHOW ? (
            <>
              {index !== 0 ? <div className="border-solid border border-muted my-6" /> : null}
              <p className="mb-2 font-bold">{year}</p>
              {entries.map((entry) => (
                <TimelineItem key={entry.title} title={entry.title} content={entry.content} />
              ))}
            </>
          ) : (
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
              {index !== 0 ? <div className="border-solid border border-muted my-6" /> : null}
              <p className="mb-2 font-bold">{year}</p>
              {entries.map((entry) => (
                <TimelineItem key={entry.title} title={entry.title} content={entry.content} />
              ))}
            </div>
          )}
        </>
      ))}
      <button
        type="button"
        className="px-4 py-2 text-primary cursor-pointer bg-transparent focus:text-text focus:outline-none focus:border-none"
        onClick={() => setState(!isOpen)}
      >
        {isOpen ? 'See less' : 'See more'}
      </button>
    </div>
  );
};

export default Timeline;
