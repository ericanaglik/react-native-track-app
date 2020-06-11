import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native'

const TrackListScreen = () => {
  return <>
  <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
  <Button
    title="Go to Track Detail"
    onPress={() => NavigationPreloadManager.navigate('TrackDetail')}
  />
  </>
}

const styles = StyleSheet.create({})

export default TrackListScreen