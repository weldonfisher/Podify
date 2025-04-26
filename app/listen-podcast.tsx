import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ListenPodcast() {
  const router = useRouter();
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/home')}>
            <Ionicons name="chevron-back" size={24} color="#000" />
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

          <View style={styles.playerSection}>
            <View style={styles.progressRow}>
              <Text style={styles.timeText}>01:34</Text>
              <Slider
                style={styles.progressBar}
                minimumValue={0}
                maximumValue={1}
                value={0.3}
                minimumTrackTintColor="#5856D6"
                maximumTrackTintColor="#E2E8F0"
                thumbTintColor="#5856D6"
              />
              <Text style={styles.timeText}>03:04</Text>
            </View>
            <View style={styles.controlsRow}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/Listen Podcast-Next.png')}
                  style={[styles.controlButton, styles.flipHorizontal]}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bigPlayPauseButton}>
                <Image
                  source={require('../assets/images/Pause.png')}
                  style={styles.bigPlayPauseIcon}
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
    marginTop: 40,

  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginBottom: 32,
    textAlign: 'center',
  },
  podcastImage: {
    width: '100%',
    height: 335,
    borderRadius: 16,
    marginBottom: 40,
  },
  playerSection: {
    marginTop: 32,
    alignItems: 'center',
    width: '100%',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 32,
  },
  progressBar: {
    flex: 1,
    height: 6,
    marginHorizontal: 12,
    borderRadius: 3,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 16,
    gap: 48,
  },
  controlButton: {
    width: 32,
    height: 32,
  },
  flipHorizontal: {
    transform: [{ scaleX: -1 }],
  },
  bigPlayPauseButton: {
    width: 100,
    height: 100,
    borderColor: '#181A20',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bigPlayPauseIcon: {
    width: 80,
    height: 80,
  },
  timeText: {
    fontSize: 12,
    color: '#64748B',
  },
}); 