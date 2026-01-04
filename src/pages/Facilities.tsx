import { motion } from 'motion/react';
import { Card3DWrapper } from '../components/Card3DWrapper';
import { Scene3D } from '../components/3d/Scene3D';
import { LabEquipment } from '../components/3d/LabEquipment';
import { FloatingBook } from '../components/3d/FloatingBook';
import { 
  Library, 
  FlaskConical, 
  Computer, 
  Dumbbell, 
  Bus, 
  Utensils, 
  Heart, 
  Shield,
  Wifi,
  Video,
  Users,
  TreePine
} from 'lucide-react';

export function Facilities() {
  const facilities = [
    {
      icon: Library,
      title: 'Modern Library',
      description: 'Over 10,000 books, journals, and digital resources with comfortable reading spaces',
      image: 'https://images.unsplash.com/photo-1632217142144-f96b15d867a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzY3NTE2MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#6ba3d1',
    },
    {
      icon: FlaskConical,
      title: 'Science Laboratories',
      description: 'State-of-the-art Physics, Chemistry, and Biology labs with modern equipment',
      image: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3Njc1MDU5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#9b8fd9',
    },
    {
      icon: Computer,
      title: 'Computer Labs',
      description: 'Advanced computer labs with high-speed internet and latest software',
      image: 'https://images.unsplash.com/photo-1764025130362-0162c3dd2035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3NTE2MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#7bc47f',
    },
    {
      icon: Dumbbell,
      title: 'Sports Complex',
      description: 'Indoor and outdoor sports facilities including basketball, cricket, and athletics',
      image: 'https://images.unsplash.com/photo-1761775446030-5e1fdd4166a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBmYWNpbGl0eXxlbnwxfHx8fDE3Njc1MTYyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#f4a261',
    },
  ];

  const amenities = [
    { icon: Bus, title: 'Transport', description: 'GPS-enabled school buses covering major routes', color: '#5e8eb8' },
    { icon: Utensils, title: 'Cafeteria', description: 'Nutritious meals and hygienic food options', color: '#7bc47f' },
    { icon: Heart, title: 'Medical Room', description: '24/7 medical assistance with trained staff', color: '#e07a7a' },
    { icon: Shield, title: 'Security', description: 'CCTV surveillance and trained security personnel', color: '#9b8fd9' },
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Campus-wide internet connectivity', color: '#6ba3d1' },
    { icon: Video, title: 'Smart Classes', description: 'Interactive digital learning environments', color: '#f4a261' },
    { icon: Users, title: 'Auditorium', description: '500-seater air-conditioned auditorium', color: '#5e8eb8' },
    { icon: TreePine, title: 'Green Campus', description: 'Eco-friendly environment with gardens', color: '#7bc47f' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section with 3D Lab Equipment */}
      <section className="bg-gradient-to-br from-secondary via-accent to-muted py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:block">
          <Scene3D camera={{ position: [0, 0, 4] }} className="w-full h-full">
            <LabEquipment position={[0, 0, 0]} scale={1.5} />
          </Scene3D>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">World-Class Facilities</h1>
            <p className="text-lg text-muted-foreground">
              State-of-the-art infrastructure designed to provide the best learning 
              environment for our students
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Facilities with 3D Transitions */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div
                key={facility.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${facility.color}20` }}
                  >
                    <facility.icon className="w-8 h-8" style={{ color: facility.color }} />
                  </div>
                  <h2 className="mb-4">{facility.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {facility.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30, rotateY: index % 2 === 0 ? 15 : -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ rotateY: index % 2 === 0 ? -5 : 5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                  className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-80 object-cover"
                      style={{ transform: 'translateZ(30px)' }}
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Library Showcase */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 relative">
              <Scene3D camera={{ position: [0, 0, 6] }} className="w-full h-full">
                <FloatingBook position={[-1.2, 1, 0]} color="#5e8eb8" scale={1} />
                <FloatingBook position={[0, 0.5, 0.5]} color="#7bc47f" scale={0.9} />
                <FloatingBook position={[1, 0, 0]} color="#f4a261" scale={1.1} />
                <FloatingBook position={[-0.5, -0.8, -0.5]} color="#9b8fd9" scale={0.8} />
                <FloatingBook position={[1.2, -0.5, 0.3]} color="#e07a7a" scale={0.85} />
              </Scene3D>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl mb-4">Digital & Physical Library</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Access to thousands of books, journals, and online resources to support 
                your academic journey and personal growth.
              </p>
              <div className="space-y-3">
                {['10,000+ Physical Books', 'Digital E-Library', 'Research Journals', 'Quiet Study Zones'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Amenities with 3D Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Additional Amenities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive facilities to ensure comfort, safety, and holistic development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Card3DWrapper key={amenity.title} delay={index * 0.05}>
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${amenity.color}20` }}
                >
                  <amenity.icon className="w-6 h-6" style={{ color: amenity.color }} />
                </div>
                <h4 className="mb-2">{amenity.title}</h4>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </Card3DWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights with 3D Stats */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Infrastructure Highlights</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateX: -5, transition: { duration: 0.3 } }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card3DWrapper className="text-center bg-gradient-to-br from-blue-50 to-blue-100/50">
                <div className="text-4xl mb-2 text-primary" style={{ transform: 'translateZ(20px)' }}>50+</div>
                <div className="text-sm text-muted-foreground">Spacious Classrooms</div>
              </Card3DWrapper>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, rotateX: -5, transition: { duration: 0.3 } }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card3DWrapper className="text-center bg-gradient-to-br from-purple-50 to-purple-100/50" delay={0.1}>
                <div className="text-4xl mb-2 text-primary" style={{ transform: 'translateZ(20px)' }}>15+</div>
                <div className="text-sm text-muted-foreground">Specialized Labs</div>
              </Card3DWrapper>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, rotateX: -5, transition: { duration: 0.3 } }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card3DWrapper className="text-center bg-gradient-to-br from-green-50 to-green-100/50" delay={0.2}>
                <div className="text-4xl mb-2 text-primary" style={{ transform: 'translateZ(20px)' }}>5 Acres</div>
                <div className="text-sm text-muted-foreground">Green Campus</div>
              </Card3DWrapper>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
