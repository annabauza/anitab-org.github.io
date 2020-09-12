import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageContent from './../ImageContent';
import { getEvents } from './../../content/events.js';

const Events = () => {
  const events = getEvents();
  const styles = createStyles();
  function renderContent(event) {
    return function RenderContent() {
      return (
        <View style={styles.subContainer}>
          <Text style={styles.header}>{event.title}</Text>
          {event.content.map((content, index) => (
            <Text key={index} style={styles.text}>
              {content.par}
            </Text>
          ))}
        </View>
      );
    };
  }

  return (
    <View style={styles.container}>
      {events.map((event, index) => {
        const content = renderContent(event);
        return (
          <ImageContent
            key={index}
            image={event.image.source}
            imageSide="right"
            imageProportion={0.7}
            Children={content}
            minImageWidth={900}
          />
        );
      })}
    </View>
  );
};

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: '80%',
      borderBottomWidth: 1,
      borderBottomColor: '#70707029',
      overflow: 'hidden',
      paddingBottom: 16,
      marginBottom: 16,
    },
    subContainer: {
      flex: 1,
      alignItems: 'left',
      flexDirection: 'columns',
      flexGrow: 1,
    },
    header: {
      flex: 0,
      color: '#103B81',
      alignItems: 'flex-start',
      fontWeight: '400',
      fontSize: 32,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 0,
      width: '100%',
    },
    text: {
      flex: 1,
      marginTop: 32,
      paddingLeft: 16,
      paddingRight: 16,
      fontSize: 18,
      flexGrow: 1,
      fontWeight: 200,
      color: '#103B81',
    },
  });

export default Events;
