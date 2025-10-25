import { Camera, ExternalLink, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Photography = () => {
  return (
    <section
      id='photography'
      className='py-20 px-4 bg-gradient-to-br from-secondary/30 via-background to-secondary/20'
    >
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              <span className='text-accent'>06.</span> Photography Portfolio
            </h2>
            <Badge
              variant='secondary'
              className='text-sm px-3 py-1 flex items-center gap-1'
            >
              <Clock className='h-3 w-3' />
              Coming Soon
            </Badge>
          </div>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Capturing moments through the lens - explore my creative journey in
            photography
          </p>
        </div>

        <Card className='overflow-hidden border-border shadow-2xl group hover:shadow-accent/20 transition-all duration-500'>
          <div className='grid md:grid-cols-2 gap-0'>
            {/* Visual Side */}
            <div className='relative bg-gradient-to-br from-accent/20 to-primary/10 p-12 flex items-center justify-center min-h-[300px] md:min-h-[400px]'>
              <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
              <div className='relative z-10 text-center'>
                <div className='bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-border'>
                  <Camera
                    className='h-24 w-24 text-accent mx-auto mb-4 animate-fade-in'
                    strokeWidth={1.5}
                  />
                  <p className='text-2xl font-bold text-foreground'>
                    Visual Stories
                  </p>
                  <p className='text-muted-foreground mt-2'>Through My Lens</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className='p-8 md:p-12 flex flex-col justify-center bg-card'>
              <h3 className='text-2xl md:text-3xl font-bold mb-4 text-foreground'>
                Photography Portfolio Coming Soon
              </h3>
              <p className='text-muted-foreground mb-6 leading-relaxed'>
                Beyond code and development, I capture the world through
                photography. Each image tells a story, frozen in time. My
                photography portfolio is currently being curated and will be
                available soon to showcase my creative perspective and visual
                storytelling.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-start gap-3'>
                  <span className='text-accent mt-1'>▹</span>
                  <div>
                    <p className='font-semibold text-foreground'>
                      Diverse Subjects
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Landscapes, portraits, urban scenes and more
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <span className='text-accent mt-1'>▹</span>
                  <div>
                    <p className='font-semibold text-foreground'>
                      Creative Vision
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Unique perspectives and artistic compositions
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <span className='text-accent mt-1'>▹</span>
                  <div>
                    <p className='font-semibold text-foreground'>
                      Professional Quality
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      High-resolution captures with attention to detail
                    </p>
                  </div>
                </div>
              </div>

              <Button size='lg' className='w-full md:w-auto' disabled>
                <Clock className='h-5 w-5 mr-2' />
                Portfolio Coming Soon
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Photography;
