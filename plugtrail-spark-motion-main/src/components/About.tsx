import { useEffect, useRef, useState } from 'react';
import { Users, Leaf, Zap, Target } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Users,
      title: "Women-Led Innovation",
      description: "Breaking barriers in the EV infrastructure space with inclusive leadership and diverse perspectives."
    },
    {
      icon: Leaf,
      title: "Sustainable Future",
      description: "Building a smart, accessible EV charging network powered by green energy across Chhattisgarh."
    },
    {
      icon: Zap,
      title: "Smart Technology",
      description: "Advanced app-integrated charging stations with efficient load management and real-time monitoring."
    },
    {
      icon: Target,
      title: "Community Impact",
      description: "Empowering local communities and businesses through clean energy solutions and economic opportunities."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-primary-soft/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Plug Trail
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're pioneering the future of sustainable transportation through innovative EV infrastructure 
            solutions that benefit communities, businesses, and the environment.
          </p>
        </div>

        {/* Mission Statement */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-soft">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                To accelerate India's transition to clean mobility by building inclusive, 
                technologically advanced EV charging infrastructure that empowers communities 
                and promotes sustainable development across Chhattisgarh and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div className="card-service group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-hover">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              A future where every journey is powered by clean energy, every community benefits 
              from sustainable infrastructure, and every woman entrepreneur can lead the charge 
              towards a greener tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;