import { useEffect, useRef, useState } from 'react';
import { 
  MapPin, 
  Wrench, 
  Smartphone, 
  Building, 
  Home, 
  Utensils,
  Zap,
  Settings,
  BarChart3,
  Leaf
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mainServices = [
    {
      icon: MapPin,
      title: "Site Evaluation & Planning",
      description: "Comprehensive site assessment, feasibility studies, and strategic placement planning for optimal charging station locations.",
      features: ["Traffic Analysis", "Grid Connectivity", "Accessibility Study", "ROI Projections"]
    },
    {
      icon: Wrench,
      title: "Installation & Maintenance",
      description: "End-to-end installation services with ongoing maintenance and 24/7 technical support for all charging infrastructure.",
      features: ["Professional Installation", "Regular Maintenance", "Emergency Support", "Performance Monitoring"]
    },
    {
      icon: Smartphone,
      title: "Smart App Integration",
      description: "Advanced mobile applications for station management, real-time monitoring, and seamless user experience.",
      features: ["Real-time Status", "Remote Monitoring", "Payment Gateway", "Usage Analytics"]
    },
    {
      icon: Settings,
      title: "Load Management",
      description: "Intelligent power distribution and energy management systems powered by renewable energy sources.",
      features: ["Smart Grid Integration", "Energy Optimization", "Peak Load Management", "Green Energy Priority"]
    }
  ];

  const customSolutions = [
    {
      icon: Utensils,
      title: "Dhabas & Restaurants",
      description: "Custom charging solutions for roadside eateries and dining establishments."
    },
    {
      icon: Building,
      title: "Commercial Buildings",
      description: "Scalable charging infrastructure for office complexes and business centers."
    },
    {
      icon: Home,
      title: "Residential Societies",
      description: "Community charging solutions for apartments and housing complexes."
    },
    {
      icon: MapPin,
      title: "Public Spaces",
      description: "High-capacity charging stations for parks, malls, and public facilities."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-primary-soft/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive EV charging infrastructure solutions tailored to your specific needs
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`card-service group h-full transition-all duration-500 ${
                hoveredCard === index ? 'glow-primary' : ''
              }`}>
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    hoveredCard === index ? 'scale-110 animate-glow-pulse' : ''
                  }`}>
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions Section */}
        <div className={`transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Custom Solutions</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored charging infrastructure for every type of location and business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customSolutions.map((solution, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
              >
                <div className="card-service group text-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{solution.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className={`mt-20 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-soft">
            <div className="text-center mb-10">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">Why Choose Plug Trail?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">Scalable Solutions</h4>
                <p className="text-muted-foreground text-sm">Future-ready infrastructure that grows with your needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">Green Energy Focus</h4>
                <p className="text-muted-foreground text-sm">Powered by renewable energy sources for sustainability</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">24/7 Support</h4>
                <p className="text-muted-foreground text-sm">Round-the-clock monitoring and technical assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;