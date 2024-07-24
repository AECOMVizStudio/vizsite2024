import Layout from './layout';
import Header from '@/ui/header'

// main content
import Title from '@/ui/components/home/title'
import HeroSection from '@/ui/components/home/HeroSection';
import BusinessLines from '@/ui/components/home/BusinessLines';



export default function Home() {
  return (
    <Layout>
      <Header />
      <Title />
      <HeroSection/>
      <BusinessLines/>
    </Layout>
  );
}
