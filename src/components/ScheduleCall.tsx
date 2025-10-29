import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

const ScheduleCall = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const timeSlots = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
  ];

  const handleSchedule = () => {
    if (!date || !selectedTime) {
      toast({
        title: 'Missing Information',
        description: 'Please select both a date and time for your call.',
        variant: 'destructive',
      });
      return;
    }

    const [hours, minutes] = selectedTime.split(':');
    const scheduleDate = new Date(date);
    scheduleDate.setHours(parseInt(hours), parseInt(minutes));

    const endDate = new Date(scheduleDate);
    endDate.setMinutes(endDate.getMinutes() + 30);

    const formatGoogleDate = (d: Date) => {
      return d.toISOString().replace(/-|:|\.\d{3}/g, '');
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation%20Call%20with%20Theekshana%20Sandaru&dates=${formatGoogleDate(
      scheduleDate
    )}/${formatGoogleDate(
      endDate
    )}&details=30-minute%20consultation%20to%20discuss%20project%20requirements%20and%20collaboration&add=theekshana.sandaru@gmail.com`;

    window.open(googleCalendarUrl, '_blank');

    toast({
      title: 'Calendar Event Created',
      description: 'Opening Google Calendar to save your appointment.',
    });
  };

  return (
    <section id='schedule' className='py-20 px-4 bg-secondary/30'>
      <div className='container mx-auto max-w-2xl'>
        <Card className='border-border shadow-xl'>
          <CardHeader className='text-center'>
            <div className='flex justify-center mb-4'>
              <div className='bg-accent/10 p-4 rounded-full'>
                <Calendar className='h-8 w-8 text-accent' />
              </div>
            </div>
            <CardTitle className='text-3xl font-bold mb-2'>
              Schedule a Call
            </CardTitle>
            <CardDescription className='text-base'>
              Let's discuss how we can work together on your next project
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            <p className='text-center text-muted-foreground'>
              Book a 30-minute consultation call to discuss your project
              requirements, timeline, and how I can help bring your ideas to
              life.
            </p>

            <div className='grid gap-4'>
              <div className='bg-secondary/50 p-4 rounded-lg'>
                <h4 className='font-semibold text-foreground mb-2'>
                  What we'll discuss:
                </h4>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>▹</span>
                    <span>Your project goals and requirements</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>▹</span>
                    <span>Technical approach and best practices</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>▹</span>
                    <span>Timeline and deliverables</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>▹</span>
                    <span>Next steps and collaboration process</span>
                  </li>
                </ul>
              </div>

              <div className='space-y-4'>
                <div>
                  <label className='text-sm font-medium text-foreground mb-2 block'>
                    Select Date
                  </label>
                  <Popover
                    open={datePickerOpen}
                    onOpenChange={setDatePickerOpen}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant='outline'
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        <Calendar className='mr-2 h-4 w-4' />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <CalendarComponent
                        mode='single'
                        selected={date}
                        onSelect={(newDate) => {
                          setDate(newDate);
                          setDatePickerOpen(false);
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className='pointer-events-auto'
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className='text-sm font-medium text-foreground mb-2 block'>
                    Select Time
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant='outline'
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !selectedTime && 'text-muted-foreground'
                        )}
                      >
                        <Clock className='mr-2 h-4 w-4' />
                        {selectedTime || <span>Pick a time</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-full p-2' align='start'>
                      <div className='grid grid-cols-3 gap-2 max-h-64 overflow-y-auto'>
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={
                              selectedTime === time ? 'default' : 'outline'
                            }
                            size='sm'
                            onClick={() => setSelectedTime(time)}
                            className='w-full'
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <Button
              className='w-full'
              size='lg'
              onClick={handleSchedule}
              disabled={!date || !selectedTime}
            >
              <Calendar className='h-5 w-5 mr-2' />
              Create Calendar Event
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ScheduleCall;
