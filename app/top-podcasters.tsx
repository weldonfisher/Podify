import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

interface PodcasterCardProps {
  image: any;
  name: string;
  title: string;
}

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

export default function TopPodcasters() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Link href="/home" asChild>
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>
          </Link>
          <Text style={styles.headerTitle}>Top Podcasters</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#64748B" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search podcasters"
            placeholderTextColor="#64748B"
            style={styles.searchInput}
          />
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.grid}>
            <PodcasterCard
              image={require('../assets/images/Card -Jews Williams.png')}
              name="Johne Williams"
              title="The Creative Mindset"
            />
            <PodcasterCard
              image={require('../assets/images/Card - Emily Turner.png')}
              name="Emily Turner"
              title="Health Matters"
            />
            <PodcasterCard
              image={require('../assets/images/Card - Fourten K.png')}
              name="FourteenK"
              title="Creative Matters"
            />
            <PodcasterCard
              image={require('../assets/images/Card - The Creative Mindset.png')}
              name="Alex Rivers"
              title="Tech Today"
            />
            <PodcasterCard
              image={require('../assets/images/Card - Tech Talks  Daily.png')}
              name="David Chen"
              title="Daily Tech Talks"
            />
            <PodcasterCard
              image={require('../assets/images/Card - ProductRig.png')}
              name="Sarah Miller"
              title="Product Stories"
            />
            <PodcasterCard
              image={require('../assets/images/Card -Jews Williams.png')}
              name="Mike Johnson"
              title="Business Insights"
            />
            <PodcasterCard
              image={require('../assets/images/Card - Emily Turner.png')}
              name="Lisa Parker"
              title="Life & Wellness"
            />
          </View>
        </ScrollView>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0F172A',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 12,
    padding: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#0F172A',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  podcasterCard: {
    width: '48%',
    marginBottom: 16,
  },
  podcasterImage: {
    width: '100%',
    height: 180,
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
}); 