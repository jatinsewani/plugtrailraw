import { useEffect, useRef, useState } from 'react';
import { Star, Award, Users, Handshake } from 'lucide-react';

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  // Auto-slide effect
  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % partners.length);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  // Mock partner data
  const partners = [
    {
      name: "Chhattisgarh State Government",
      type: "Government Partner",
      description: "Official EV infrastructure development partner",
      logo: "🏛️",
      highlight: "Policy Support"
    },
    {
      name: "CSEB (Chhattisgarh State Electricity Board)",
      type: "Energy Partner",
      description: "Grid integration and power supply partner",
      logo: "⚡",
      highlight: "Grid Integration"
    },
    {
      name: "Bhilai Steel Plant",
      type: "Industrial Partner",
      description: "Large-scale charging infrastructure deployment",
      logo: "🏭",
      highlight: "Industrial Scale"
    },
    {
      name: "Local Business Network",
      type: "Community Partners",
      description: "Dhaba and restaurant charging point hosts",
      logo: "🤝",
      highlight: "Community Impact"
    },
    {
      name: "Tech Innovation Hub",
      type: "Technology Partner",
      description: "Smart charging solutions and app development",
      logo: "💻",
      highlight: "Smart Technology"
    },
    {
      name: "Green Energy Consortium",
      type: "Sustainability Partner",
      description: "Renewable energy integration and sourcing",
      logo: "🌱",
      highlight: "Clean Energy"
    }
  ];

  const achievements = [
    {
      icon: Star,
      title: "Excellence Award",
      description: "Best Women-Led Startup 2024",
      highlight: "Chhattisgarh Innovation Council"
    },
    {
      icon: Award,
      title: "Sustainability Leader",
      description: "Clean Energy Initiative Award",
      highlight: "Environmental Excellence"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Rural Development Recognition",
      highlight: "Social Innovation"
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
            Partners & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building the future together with trusted partners and recognized excellence
          </p>
        </div>

        {/* Partners Carousel */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-card rounded-3xl p-8 border border-border shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Our Strategic Partners</h3>
            
            {/* Auto-sliding Partner Cards */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {partners.map((partner, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-primary-soft/10 to-transparent rounded-2xl p-8 text-center">
                      <div className="text-6xl mb-4">{partner.logo}</div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{partner.name}</h4>
                      <div className="text-primary text-sm font-medium mb-3">{partner.type}</div>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{partner.description}</p>
                      <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-medium">
                        {partner.highlight}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {partners.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            {/* Partnership Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Active Partnerships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-sm text-muted-foreground">Government MOUs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Community Partners</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Achievements & Recognition</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <div className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-strong transition-all duration-300 group hover:-translate-y-2">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{achievement.description}</p>
                    <div className="text-primary text-xs font-medium bg-primary-soft px-3 py-1 rounded-full inline-block">
                      {achievement.highlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Partner With Us
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our mission to accelerate clean mobility. Whether you're a business, government entity, 
              or community organization, let's build a sustainable future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Become a Partner
              </button>
              <button className="btn-outline-hero">
                View Partnership Benefits
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;