import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';

interface PodcastCardProps {
  image: any;
  title: string;
  duration: string;
}

interface PodcasterCardProps {
  image: any;
  name: string;
  title: string;
}

interface SmallPodcastCardProps {
  image: any;
  title: string;
  duration: string;
}

const PodcastCard = ({ image, title, duration }: PodcastCardProps) => (
  <View style={styles.podcastCard}>
    <Image source={image} style={styles.podcastCardImage} />
    <View style={styles.podcastCardContent}>
      <Text style={styles.podcastCardTitle}>{title}</Text>
      <View style={styles.durationContainer}>
        <Image source={require('../assets/images/clock icon white.png')} style={styles.clockIcon} />
        <Text style={styles.durationText}>{duration}</Text>
      </View>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start Listening</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const PodcasterCard = ({ image, name, title }: PodcasterCardProps) => (
  <View style={styles.podcasterCard}>
    <Image source={image} style={styles.podcasterImage} />
    <TouchableOpacity style={styles.bookmarkButton}>
      <Image source={require('../assets/images/bookmark botton.png')} style={styles.bookmarkIcon} />
    </TouchableOpacity>
    <Text style={styles.podcasterTitle}>{title}</Text>
    <Text style={styles.podcasterName}>{name}</Text>
  </View>
);

const SmallPodcastCard = ({ image, title, duration }: SmallPodcastCardProps) => (
  <View style={styles.smallPodcastCard}>
    <Image source={image} style={styles.smallPodcastImage} />
    <View style={styles.smallPodcastContent}>
      <Text style={styles.smallPodcastTitle}>{title}</Text>
      <View style={styles.smallDurationContainer}>
        <Image source={require('../assets/images/clock icon.png')} style={styles.smallClockIcon} />
        <Text style={styles.smallDurationText}>{duration}</Text>
      </View>
    </View>
  </View>
);

export default function Home() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Hello, Maria!</Text>
              <Text style={styles.subtitle}>Stay Informed & Entertained</Text>
            </View>
            <TouchableOpacity>
              <Image source={require('../assets/images/Bell icon.png')} style={styles.bellIcon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Explore Thousands of Podcasts 🔥</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsScroll}>
            <PodcastCard
              image={require('../assets/images/Card - The Creative Mindset.png')}
              title="The Creative Mindset"
              duration="20 min"
            />
            <PodcastCard
              image={require('../assets/images/Card - Tech Talks  Daily.png')}
              title="Tech Talks Daily"
              duration="45 min"
            />
                        <PodcastCard
              image={require('../assets/images/Card - ProductRig.png')}
              title="ProductRig"
              duration="25 min"
            />
          </ScrollView>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Podcasters</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>View all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.podcastersScroll}>
            <PodcasterCard
              image={require('../assets/images/Card -Jews Williams.png')}
              name="Johne Williams"
              title="The Creative Mindset"
            />
            <PodcasterCard
              image={require('../assets/images/Card - Emily Turner.png')}
              name="Emily Turner"
              title="Health Matters"
            /> <PodcasterCard
            image={require('../assets/images/Card - Fourten K.png')}
            name="FourteenK"
            title="Creative Matters"
          />
          </ScrollView>

          <Text style={styles.sectionTitle}>All Podcasts</Text>
          
          <View style={styles.allPodcasts}>
            <SmallPodcastCard
              image={require('../assets/images/image - Mindful Moments.png')}
              title="Mindful Moments"
              duration="15min"
            />
            <SmallPodcastCard
              image={require('../assets/images/image - The Book Club Podcast.png')}
              title="The Book Club Podcast"
              duration="25min"
            />
            <SmallPodcastCard
              image={require('../assets/images/Card - Tech Talks  Daily.png')}
              title="Tech Talks Daily"
              duration="45min"
            />
            <SmallPodcastCard
              image={require('../assets/images/Card - The Creative Mindset.png')}
              title="The Creative Mindset"
              duration="20min"
            />
            <SmallPodcastCard
              image={require('../assets/images/Card - ProductRig.png')}
              title="ProductRig Weekly"
              duration="35min"
            />
          </View>
        </ScrollView>

        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../assets/images/Nav icon - home.png')} style={styles.navIcon} />
            <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../assets/images/Nav icon - search.png')} style={styles.navIcon} />
            <Text style={styles.navText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../assets/images/Nav icon -  library.png')} style={styles.navIcon} />
            <Text style={styles.navText}>Library</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../assets/images/Nav icon - profile.png')} style={styles.navIcon} />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 24,
        paddingBottom: 10,

  },
  greeting: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
  bellIcon: {
    width: 34,
    height: 34,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 16,
  },
  cardsScroll: {
    marginBottom: 32,
    overflow: 'visible',
  },
  podcastCard: {
    width: 308,
    height: 176,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  podcastCardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  podcastCardContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  podcastCardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  clockIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  durationText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  startButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  startButtonText: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    
  },
  viewAllButton: {
    color: '#5856D6',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  podcastersScroll: {
    marginBottom: 32,
    overflow: 'visible',
  },
  podcasterCard: {
    width: 176,
    marginRight: 16,
  },
  podcasterImage: {
    width: '100%',
    height: 176,
    borderRadius: 16,
    marginBottom: 12,
  },
  bookmarkButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
  },
  bookmarkIcon: {
    width: '100%',
    height: '100%',
  },
  podcasterTitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 4,
  },
  podcasterName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },
  allPodcasts: {
    gap: 8,
  },
  smallPodcastCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  smallPodcastImage: {
    width: 72,
    height: 72,
    borderRadius: 12,
    marginRight: 12,
  },
  smallPodcastContent: {
    flex: 1,
  },
  smallPodcastTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 4,
  },
  smallDurationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallClockIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  smallDurationText: {
    fontSize: 14,
    color: '#64748B',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#64748B',
  },
  activeNavText: {
    color: '#5856D6',
  },
}); 