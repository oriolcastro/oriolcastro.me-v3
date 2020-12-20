/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import { Box, Button, Grid, Heading, jsx, Text } from 'theme-ui';

import timelineData from '../../content/timeline.json';

const NUM_YEARS_TO_SHOW = 2;

const TimelineItem = ({ title, content }) => (
  <Grid gap={2} columns="auto 1fr" sx={{ alignItems: 'center', paddingLeft: 2, mb: 3 }}>
    <FaCheckCircle color="#00A68B" />
    <Text sx={{ color: 'text' }}>{title}</Text>
    <Text sx={{ gridColumn: '2/2', color: 'lightText', textAlign: 'justify' }}>{content}</Text>
  </Grid>
);

const Timeline = () => {
  const [isOpen, setState] = useState(false);

  const formatedData = Object.entries(timelineData).sort((a, b) => (a[0] < b[0] ? 1 : -1));

  return (
    <Box>
      <Heading as="h2" sx={{ mb: 2 }}>
        Timeline
      </Heading>
      {formatedData.map(([year, entries], index) => (
        <>
          {index + 1 <= NUM_YEARS_TO_SHOW ? (
            <>
              {index !== 0 ? (
                <Box sx={{ border: '1px solid', borderColor: 'muted', marginY: 4 }} />
              ) : null}
              <Text sx={{ mb: 2, fontWeight: 700 }}>{year}</Text>
              {entries.map((entry) => (
                <TimelineItem key={entry.title} title={entry.title} content={entry.content} />
              ))}
            </>
          ) : (
            <Box sx={{ display: isOpen ? 'block' : 'none' }}>
              {index !== 0 ? (
                <Box sx={{ border: '1px solid', borderColor: 'muted', marginY: 4 }} />
              ) : null}
              <Text sx={{ mb: 2, fontWeight: 700 }}>{year}</Text>
              {entries.map((entry) => (
                <TimelineItem key={entry.title} title={entry.title} content={entry.content} />
              ))}
            </Box>
          )}
        </>
      ))}
      <Button variant="text" onClick={() => setState(!isOpen)}>
        {isOpen ? 'See less' : 'See more'}
      </Button>
    </Box>
  );
};

export default Timeline;
