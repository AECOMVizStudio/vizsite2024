import Layout from './layout';
import Header from '@/ui/header'
import Footer from'@/ui/footer'

// main content
import Title from '@/ui/components/home/title'
import HeroSection from '@/ui/components/home/HeroSection';
import BusinessLines from '@/ui/components/home/BusinessLines';
import Services from '@/ui/components/home/Services';



export default function Home() {
  return (
    <Layout>
      <Header />
      <Title />
      <HeroSection/>
      <BusinessLines/>
      <Services />
      <Footer />
    </Layout>
  );
}
