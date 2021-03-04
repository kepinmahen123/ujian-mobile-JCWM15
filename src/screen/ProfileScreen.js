import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const ProfileScreen = ({navigation}) => {
  const {username} = useSelector((state) => state.auth);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.infoContainer}>
          <Text>{username}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    flex: 0.25,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  bottomContainer: {
    flex: 0.75,
    backgroundColor: 'blue',
  },
  infoContainer: {
    flex: 0.75,
    justifyContent: 'center',
  },
});

export default ProfileScreen;