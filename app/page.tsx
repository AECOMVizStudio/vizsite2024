import Layout from './layout';
import Header from '@/ui/header'

// main content
import Title from '@/ui/components/home/title'
import HeroSection from '@/ui/components/home/HeroSection';



export default function Home() {
  return (
    <Layout>
      <Header />
      <Title />
      <HeroSection/>
      
    </Layout>
  );
}
