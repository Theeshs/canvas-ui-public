import { ExternalLink, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserProjects } from '@/types/projects';

type Props = {
  projects: UserProjects[];
};
const Projects = ({ projects }: Props) => {
  return (
    <section id='projects' className='py-20 px-4 bg-secondary/30'>
      <div className='container mx-auto max-w-6xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          <span className='text-accent'>05.</span> Featured Projects
        </h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {projects.map((project, index) => (
            <Card
              key={index}
              className='border-border hover:shadow-xl transition-all duration-300'
            >
              <CardHeader>
                <CardTitle className='text-xl font-semibold text-foreground'>
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.skill_set.map((tech) => (
                    <Badge key={tech} variant='secondary' className='text-xs'>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className='flex gap-2'>
                <Button variant='outline' size='sm' asChild>
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='h-4 w-4 mr-2' />
                    Code
                  </a>
                </Button>
                <Button variant='outline' size='sm' asChild>
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink className='h-4 w-4 mr-2' />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
