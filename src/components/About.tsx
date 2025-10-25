import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-accent">01.</span> About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hello! My name is Theekshana, and I'm a Full Stack Developer with over 7 years 
              of experience who loves solving problems through code. My journey into software 
              development started out of pure curiosity — experimenting with small projects 
              that eventually grew into a deep passion for building reliable, scalable systems.
            </p>
            <p>
              While I enjoy working across the stack, I'm most drawn to backend development — 
              where logic, data, and performance come together to power great user experiences.
            </p>
            <p>
              Outside of coding, I'm also passionate about travel and photography. Capturing 
              moments from different places helps me see the world from new perspectives — 
              something I try to bring into my approach as a developer, too: creative, 
              thoughtful, and always exploring.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-4 translate-y-4"></div>
              <img
                src={profileImage}
                alt="Theekshana Sandaru"
                className="relative w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
