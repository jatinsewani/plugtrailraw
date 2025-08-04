import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Zap, Leaf } from 'lucide-react';

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    stations: 0,
    communities: 0,
    co2Saved: 0,
    energyDelivered: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  const targetValues = {
    stations: 50,
    communities: 25,
    co2Saved: 1200,
    energyDelivered: 500
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3); // Ease-out cubic

      setCounters({
        stations: Math.floor(targetValues.stations * easeOut),
        communities: Math.floor(targetValues.communities * easeOut),
        co2Saved: Math.floor(targetValues.co2Saved * easeOut),
        energyDelivered: Math.floor(targetValues.energyDelivered * easeOut)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, interval);
  };

  const stats = [
    {
      icon: Zap,
      value: counters.stations,
      suffix: '+',
      label: 'Charging Stations',
      description: 'Across Chhattisgarh',
      color: 'from-primary to-primary-glow'
    },
    {
      icon: Users,
      value: counters.communities,
      suffix: '+',
      label: 'Communities Served',
      description: 'Local partnerships',
      color: 'from-primary-glow to-primary'
    },
    {
      icon: Leaf,
      value: counters.co2Saved,
      suffix: ' tons',
      label: 'CO₂ Saved',
      description: 'Environmental impact',
      color: 'from-primary to-primary-glow'
    },
    {
      icon: TrendingUp,
      value: counters.energyDelivered,
      suffix: ' MWh',
      label: 'Clean Energy',
      description: 'Delivered to date',
      color: 'from-primary-glow to-primary'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-primary-soft/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Driving change through measurable impact across communities and environment
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="bg-card rounded-3xl p-8 border border-border shadow-soft hover:shadow-strong transition-all duration-300 group hover:-translate-y-2">
                <div className="text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Counter */}
                  <div className="mb-4">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.value.toLocaleString()}{stat.suffix}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out`}
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${500 + index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Milestones Achieved
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-xl font-bold text-primary mb-2">First</div>
                  <div className="text-muted-foreground">Women-led EV infrastructure company in Chhattisgarh</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Uptime achieved across our charging network</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Local jobs created through our initiatives</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed italic">
            "Every charging station we install is a step towards a cleaner future, every partnership we build 
            strengthens our communities, and every kilowatt of clean energy we deliver brings us closer to 
            our vision of sustainable mobility for all."
          </p>
          <div className="mt-6 text-primary font-semibold">— Plug Trail Team</div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;