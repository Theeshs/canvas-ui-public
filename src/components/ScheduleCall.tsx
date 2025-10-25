import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ScheduleCall = () => {
  return (
    <section id="schedule" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <Card className="border-border shadow-xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-full">
                <Calendar className="h-8 w-8 text-accent" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold mb-2">
              Schedule a Call
            </CardTitle>
            <CardDescription className="text-base">
              Let's discuss how we can work together on your next project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-muted-foreground">
              Book a 30-minute consultation call to discuss your project requirements, 
              timeline, and how I can help bring your ideas to life.
            </p>
            <div className="grid gap-4">
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">What we'll discuss:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▹</span>
                    <span>Your project goals and requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▹</span>
                    <span>Technical approach and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▹</span>
                    <span>Timeline and deliverables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▹</span>
                    <span>Next steps and collaboration process</span>
                  </li>
                </ul>
              </div>
            </div>
            <Button className="w-full" size="lg" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Calendar className="h-5 w-5 mr-2" />
                Book a Call
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ScheduleCall;
