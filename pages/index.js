import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import SideNavigation from '@/componentts/SideNavigation'
import Image from 'next/image'
import Header from '@/componentts/Header'
import Card from '@/componentts/Card'
import Footer from '@/componentts/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Assessment1</title>
        <meta name="description" content="This is for assessment 1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={`${styles.cardContainer}`}>
          <Card 
          title="Experiences" 
          borderColor="lightpink" 
          description="Junior Manager at YG Entertainment" 
          backgroundColor="var(--white)" />
          <Card 
          title="Education" 
          borderColor="lightblue" 
          description="BCIT / Bachelor's Degree at Hanyang University " 
          backgroundColor="var(--white)" />
          <Card 
          title="Projects" 
          borderColor="khaki" 
          description="Website created with CSS@HTML / Movie making production" 
          backgroundColor="var(--white)" />
          <Card 
          title="Volunteering" 
          borderColor="darksalmon" 
          description="I helped teaching disabled children at civil society association " 
          backgroundColor="var(--white)" />
          <Card 
          title="Skills" 
          borderColor="lavender" 
          description="Next.js, HTML, CSS, Javascript, Photoshop, Illustrator, After Effect, Story writing" 
          backgroundColor="var(--white)" />
          <Card 
          title="Interests" 
          borderColor="yellowgreen" 
          description="I like coding and outdoor activities" 
          backgroundColor="var(--white)" />
        </div>
        <SideNavigation />
      </main>
      <Footer />
    </>
  )
}
