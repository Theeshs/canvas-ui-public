import { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserExperience } from '@/types/experience';
import { formatDate } from '../lib/utils';

type Props = {
  experiences: UserExperience[];
};

const Experience = ({ experiences }: Props) => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id='experience' className='py-20 px-5 bg-secondary/30'>
      <div className='container mx-auto max-w-4xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          <span className='text-accent'>03.</span> Work Experience
        </h2>
        <div className='relative'>
          {/* Timeline Line */}
          <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2'></div>

          {/* Timeline Items */}
          <div className='space-y-12'>
            {experiences.map((exp, index) => {
              const descriptionItems = exp.description
                .split('.')
                .map((item) => item.trim())
                .filter((item) => item.length > 0);

              const showSeeMore = descriptionItems.length > 2;
              const displayedItems = expandedCards.includes(index)
                ? descriptionItems
                : descriptionItems.slice(0, 2);

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className='absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10'></div>

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-6/12 ${
                      index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className='bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300 flex flex-col'>
                      <div className='flex items-start gap-3 mb-3'>
                        <Briefcase className='h-5 w-5 text-accent flex-shrink-0 mt-1' />
                        <div className='flex-1'>
                          <h3 className='text-xl font-semibold text-foreground'>
                            {exp.position}
                          </h3>
                          <p className='text-primary font-medium'>
                            {exp.company_name}
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            {formatDate(exp.start_date)} -{' '}
                            {formatDate(exp.end_date)}
                          </p>
                        </div>
                      </div>
                      <ul className='space-y-2 text-sm text-muted-foreground flex-1'>
                        {displayedItems.map((item, i) => (
                          <li key={i} className='flex items-start'>
                            <span className='text-accent mr-2'>▹</span>
                            <span>{item}.</span>
                          </li>
                        ))}
                      </ul>
                      {showSeeMore && (
                        <Button
                          variant='ghost'
                          size='sm'
                          onClick={() => toggleCard(index)}
                          className='mt-4 text-accent hover:text-accent/80 w-full'
                        >
                          {expandedCards.includes(index) ? (
                            <>
                              See Less <ChevronUp className='ml-2 h-4 w-4' />
                            </>
                          ) : (
                            <>
                              See More <ChevronDown className='ml-2 h-4 w-4' />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
