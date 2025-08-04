import { useEffect, useRef, useState } from 'react';
import { MapPin, Zap, Navigation, Clock } from 'lucide-react';
const InteractiveMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedStation, setSelectedStation] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Mock charging station data for Chhattisgarh
  const chargingStations = [{
    id: 1,
    name: "Raipur Central",
    location: "Raipur",
    status: "Active",
    type: "Fast",
    x: 45,
    y: 35
  }, {
    id: 2,
    name: "Bhilai Steel Plant",
    location: "Bhilai",
    status: "Active",
    type: "Super Fast",
    x: 50,
    y: 40
  }, {
    id: 3,
    name: "Durg Junction",
    location: "Durg",
    status: "Active",
    type: "Fast",
    x: 48,
    y: 42
  }, {
    id: 4,
    name: "Bilaspur Highway",
    location: "Bilaspur",
    status: "Active",
    type: "Fast",
    x: 55,
    y: 25
  }, {
    id: 5,
    name: "Korba Industrial",
    location: "Korba",
    status: "Maintenance",
    type: "Fast",
    x: 60,
    y: 20
  }, {
    id: 6,
    name: "Jagdalpur Mall",
    location: "Jagdalpur",
    status: "Active",
    type: "Standard",
    x: 35,
    y: 65
  }, {
    id: 7,
    name: "Ambikapur Plaza",
    location: "Ambikapur",
    status: "Active",
    type: "Fast",
    x: 40,
    y: 15
  }, {
    id: 8,
    name: "Rajnandgaon Hub",
    location: "Rajnandgaon",
    status: "Active",
    type: "Fast",
    x: 42,
    y: 45
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-500';
      case 'Maintenance':
        return 'text-yellow-500';
      case 'Offline':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };
  const getStationIcon = (type: string) => {
    switch (type) {
      case 'Super Fast':
        return '⚡⚡';
      case 'Fast':
        return '⚡';
      default:
        return '🔌';
    }
  };
  return <section ref={sectionRef} className="py-20 bg-gradient-to-b from-primary-soft/10 to-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Network Coverage
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our growing network of EV charging stations across Chhattisgarh
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Visualization */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-card rounded-3xl p-8 border border-border shadow-soft">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">Chhattisgarh Network</h3>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Active</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Maintenance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Offline</span>
                  </div>
                </div>
              </div>

              {/* Simplified Map */}
              <div className="relative bg-gradient-to-br from-primary-soft/20 to-primary-soft/10 rounded-2xl h-96 overflow-hidden">
                {/* Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="absolute top-4 left-4 text-sm font-semibold text-primary">CHHATTISGARH</div>
                </div>

                {/* Charging Stations */}
                {chargingStations.map((station, index) => <div key={station.id} className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${selectedStation === station.id ? 'scale-125 z-10' : 'hover:scale-110'}`} style={{
                left: `${station.x}%`,
                top: `${station.y}%`,
                animationDelay: `${index * 200}ms`
              }} onClick={() => setSelectedStation(selectedStation === station.id ? null : station.id)}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${station.status === 'Active' ? 'bg-green-500 glow-primary' : station.status === 'Maintenance' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    
                    {selectedStation === station.id && <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg p-3 shadow-strong min-w-48 z-20">
                        <div className="text-sm font-semibold text-foreground mb-1">{station.name}</div>
                        <div className="text-xs text-muted-foreground mb-2">{station.location}</div>
                        <div className="flex items-center justify-between text-xs">
                          <span className={`font-semibold ${getStatusColor(station.status)}`}>
                            {station.status}
                          </span>
                          <span className="text-primary">{getStationIcon(station.type)} {station.type}</span>
                        </div>
                      </div>}
                  </div>)}

                {/* Network Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {chargingStations.map((station, index) => {
                  if (index === 0) return null;
                  const prevStation = chargingStations[index - 1];
                  return <line key={`line-${station.id}`} x1={`${prevStation.x}%`} y1={`${prevStation.y}%`} x2={`${station.x}%`} y2={`${station.y}%`} stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4,4" className="animate-pulse" />;
                })}
                </svg>
              </div>
            </div>
          </div>

          {/* Station Info Panel */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
                <h4 className="text-lg font-semibold text-foreground mb-4">Network Stats</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Total Stations</span>
                    </div>
                    <span className="font-semibold text-foreground">{chargingStations.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Navigation className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">Active</span>
                    </div>
                    <span className="font-semibold text-green-600">
                      {chargingStations.filter(s => s.status === 'Active').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-muted-foreground">Maintenance</span>
                    </div>
                    <span className="font-semibold text-yellow-600">
                      {chargingStations.filter(s => s.status === 'Maintenance').length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Station List */}
              

              {/* Expansion Notice */}
              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-6 border border-primary/20">
                <h4 className="text-lg font-semibold text-foreground mb-2">Coming Soon</h4>
                <p className="text-sm text-muted-foreground">
                  15 new charging stations planned across rural areas and highway corridors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default InteractiveMap;