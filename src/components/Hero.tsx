import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
type Props = {
  first_name: string;
  last_name: string;
};

const Hero = ({ first_name, last_name }: Props) => {
  return (
    <section className='min-h-screen flex items-center justify-center pt-20 px-4'>
      <div className='container mx-auto text-center fade-in'>
        <p className='text-lg text-muted-foreground mb-4'>Hello fren 👋, I'm</p>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 text-foreground'>
          {first_name} {last_name}
        </h1>
        <h2 className='text-2xl md:text-4xl font-semibold mb-8 text-primary'>
          I create beautiful, full-stack experiences for the web.
        </h2>
        <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12'>
          Full-stack developer building scalable Python, Go, and modern JS
          applications with clean code and great user experiences.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button size='lg' asChild>
            <a href='#contact'>
              Get In Touch
              <ArrowRight className='ml-2 h-5 w-5' />
            </a>
          </Button>
          <Button size='lg' variant='outline' asChild>
            <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
              View Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
