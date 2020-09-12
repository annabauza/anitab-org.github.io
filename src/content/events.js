const events = {
  sections: [
    {
      title: 'EVENTS',
      content: [
        {
          par:
            'We at AnitaB.org Open Source believe in Inspiration through Action. To facilitate our Open Source journey and continue the AnitaB.org legacy we conduct enthralling events all year long, with the purpose of bridging the gap between creative developers and our Open Source community. Keep scrolling to catch a glipse of few such events! ',
        },
      ],
      image: {
        source: require('../assets/events_and_highlights/events.png'),
      },
    },
  ],
};

export const getEvents = () => {
  return events.sections;
};
