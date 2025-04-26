import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Slider from '@react-native-community/slider';

export default function ListenPodcast() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image 
              source={require('../assets/images/Listen Podcast-Back.png')} 
              style={styles.backButton} 
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Episode 1</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Tech Talks Daily</Text>
          <Text style={styles.description}>
            Stay up to date with the latest in tech. From AI breakthroughs to startup stories, get the scoop on everything in the tech world.
          </Text>

          <Image 
            source={require('../assets/images/Listen Podcast - picture.png')} 
            style={styles.podcastImage} 
          />

          <View style={styles.progressContainer}>
            <Slider
              style={styles.progressBar}
              minimumValue={0}
              maximumValue={1}
              value={0.3}
              minimumTrackTintColor="#5856D6"
              maximumTrackTintColor="#E2E8F0"
              thumbTintColor="#5856D6"
            />
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>01:34</Text>
              <Text style={styles.timeText}>03:04</Text>
            </View>
          </View>

          <View style={styles.controls}>
            <TouchableOpacity>
              <Image 
                source={require('../assets/images/Listen Podcast-Next.png')} 
                style={[styles.controlButton, styles.flipHorizontal]} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.playPauseButton}>
              <Image 
                source={require('../assets/images/Pause.png')} 
                style={styles.playPauseIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image 
                source={require('../assets/images/Listen Podcast-Next.png')} 
                style={styles.controlButton} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    marginBottom: 24,
  },
  backButton: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginBottom: 32,
  },
  podcastImage: {
    width: '100%',
    height: 240,
    borderRadius: 16,
    marginBottom: 40,
  },
  progressContainer: {
    marginBottom: 40,
  },
  progressBar: {
    width: '100%',
    height: 40,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -8,
  },
  timeText: {
    fontSize: 12,
    color: '#64748B',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 48,
  },
  controlButton: {
    width: 24,
    height: 24,
  },
  flipHorizontal: {
    transform: [{ scaleX: -1 }],
  },
  playPauseButton: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  playPauseIcon: {
    width: 64,
    height: 64,
  },
}); 