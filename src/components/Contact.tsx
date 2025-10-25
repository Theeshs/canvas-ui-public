import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

type Porps = {
  country: string;
  email: string;
};

const Contact = ({ country, email }: Porps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id='contact' className='py-20 px-4'>
      <div className='container mx-auto max-w-4xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          <span className='text-accent'>06.</span> Get In Touch
        </h2>
        <div className='grid md:grid-cols-2 gap-12'>
          <div className='space-y-6'>
            <div>
              <h3 className='text-2xl font-semibold mb-6 text-foreground'>
                Let's Connect
              </h3>
              <p className='text-muted-foreground mb-8'>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className='space-y-4'>
              <div className='flex items-center gap-3 text-muted-foreground'>
                <Mail className='h-5 w-5 text-accent' />
                <span>{email}</span>
              </div>
              <div className='flex items-center gap-3 text-muted-foreground'>
                <MapPin className='h-5 w-5 text-accent' />
                <span>{country}</span>
              </div>
            </div>

            <div className='flex gap-4 pt-4'>
              <Button variant='outline' size='icon' asChild>
                <a
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='h-5 w-5' />
                </a>
              </Button>
              <Button variant='outline' size='icon' asChild>
                <a
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='h-5 w-5' />
                </a>
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <Input
                placeholder='Your Name'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Input
                type='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Textarea
                placeholder='Your Message'
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>
            <Button type='submit' className='w-full'>
              <Send className='h-4 w-4 mr-2' />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
