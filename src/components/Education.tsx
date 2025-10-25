import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { UserEducation } from '@/types/education';
import { formatDate } from '../lib/utils';

type Props = {
  educations: UserEducation[];
};

const Education = ({ educations }: Props) => {
  return (
    <section id='education' className='py-20 px-4'>
      <div className='container mx-auto max-w-4xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          <span className='text-accent'>04.</span> Education
        </h2>
        <div className='grid gap-6'>
          {educations.map((edu, index) => (
            <Card
              key={index}
              className='border-border hover:shadow-lg transition-shadow duration-300'
            >
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='bg-accent/10 p-3 rounded-lg'>
                    <GraduationCap className='h-6 w-6 text-accent' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-semibold text-foreground mb-1'>
                      {edu.degree_type} {edu.area_of_study}
                    </h3>
                    <p className='text-primary font-medium mb-1'>
                      {edu.institue_name}
                    </p>
                    <p className='text-sm text-muted-foreground mb-3'>
                      {formatDate(edu.start_date)} - {formatDate(edu.end_date)}
                    </p>
                    <p className='text-muted-foreground'>{edu.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
