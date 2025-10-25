import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ScheduleCall from '@/components/ScheduleCall';
import Photography from '@/components/Photography';
import Footer from '@/components/Footer';
import { useQuery } from '@tanstack/react-query';
import { portfolioFetchConstant } from '@/consts';
import { fetchPortfolio } from '@/requests/portfolioRequests';

const Index = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [portfolioFetchConstant],
    queryFn: fetchPortfolio,
    staleTime: 3 * 60 * 60 * 1000, // 3 hours
  });
  return (
    <div className='min-h-screen'>
      <Navigation
        first_name={data?.first_name || ''}
        last_name={data?.last_name || ''}
      />
      <Hero
        first_name={data?.first_name || ''}
        last_name={data?.last_name || ''}
      />
      <About />
      <Skills />
      <Experience experiences={data?.experiences || []} />
      <Education educations={data?.educations || []} />
      <Projects projects={data?.projects || []} />
      <Photography />
      <Contact
        country={data?.recidential_country || ''}
        email={data?.email || ''}
      />
      <ScheduleCall />
      <Footer />
    </div>
  );
};

export default Index;
