import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Card3DWrapper } from '../components/Card3DWrapper';
import { Scene3D } from '../components/3d/Scene3D';
import { SchoolBuilding } from '../components/3d/SchoolBuilding';
import { FloatingGlobe } from '../components/3d/FloatingGlobe';
import { FloatingBook } from '../components/3d/FloatingBook';
import { SubjectCube } from '../components/3d/SubjectCube';
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  Globe, 
  Microscope, 
  Calculator, 
  Palette,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export function Home() {
  const stats = [
    { icon: Users, value: '2000+', label: 'Students' },
    { icon: BookOpen, value: '150+', label: 'Teachers' },
    { icon: Award, value: '500+', label: 'Awards' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Curriculum',
      description: 'World-class education standards aligned with international frameworks',
      color: '#6ba3d1',
    },
    {
      icon: Microscope,
      title: 'Advanced Labs',
      description: 'State-of-the-art science and technology laboratories',
      color: '#9b8fd9',
    },
    {
      icon: Calculator,
      title: 'Smart Classrooms',
      description: 'Digital learning environments with modern teaching tools',
      color: '#7bc47f',
    },
    {
      icon: Palette,
      title: 'Arts & Culture',
      description: 'Comprehensive programs for creative and cultural development',
      color: '#f4a261',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-accent to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm">Excellence in Education Since 1985</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6 text-foreground">
                Nurturing Future Leaders with{' '}
                <span className="text-primary">Excellence</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Join a community dedicated to academic excellence, character building, 
                and holistic development. Where every child's potential is recognized and nurtured.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-md"
                >
                  Apply Now
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-white text-foreground px-6 py-3 rounded-xl hover:bg-accent transition-colors shadow-sm"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* 3D Hero Scene */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <Scene3D camera={{ position: [0, 0, 6], fov: 50 }} className="w-full h-full">
                <SchoolBuilding position={[0, -0.5, 0]} scale={0.8} />
                <FloatingGlobe position={[2, 1, 0]} scale={0.5} />
                <FloatingBook position={[-2, 0.5, 0]} color="#5e8eb8" scale={0.8} />
                <FloatingBook position={[-1.5, -0.8, 0.5]} color="#ffd88a" scale={0.6} />
              </Scene3D>

              {/* Decorative floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl shadow-xl"
                style={{
                  transform: 'translateZ(50px)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Top Rated</div>
                    <div className="font-semibold">#1 School 2026</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with 3D depth */}
      <section className="py-16 bg-white relative" style={{ transformStyle: 'preserve-3d' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, z: -50 }}
                whileInView={{ opacity: 1, scale: 1, z: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  z: 30,
                  transition: { duration: 0.2 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 shadow-md">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl mb-2 text-foreground">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with 3D Cubes */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">Why Choose Excellence Academy?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a comprehensive educational experience that prepares students 
              for success in a rapidly changing world.
            </p>
          </motion.div>

          {/* 3D Subject Cubes Background */}
          <div className="h-64 mb-12 relative">
            <Scene3D camera={{ position: [0, 0, 8], fov: 50 }} className="w-full h-full">
              <SubjectCube position={[-2.5, 0, 0]} color="#6ba3d1" delay={0} />
              <SubjectCube position={[-0.8, 0, 0]} color="#9b8fd9" delay={0.2} />
              <SubjectCube position={[0.8, 0, 0]} color="#7bc47f" delay={0.4} />
              <SubjectCube position={[2.5, 0, 0]} color="#f4a261" delay={0.6} />
            </Scene3D>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card3DWrapper key={feature.title} delay={index * 0.1}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4`} 
                     style={{ backgroundColor: `${feature.color}20` }}>
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card3DWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Books Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 relative">
              <Scene3D camera={{ position: [0, 0, 5], fov: 60 }} className="w-full h-full">
                <FloatingBook position={[-0.8, 0.5, 0]} color="#5e8eb8" scale={1.2} />
                <FloatingBook position={[0.5, 0, 0.5]} color="#7bc47f" scale={1} />
                <FloatingBook position={[0, -0.5, -0.3]} color="#f4a261" scale={0.9} />
                <FloatingBook position={[-1.2, -0.3, 0.8]} color="#9b8fd9" scale={0.8} />
              </Scene3D>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl mb-4">Rich Learning Resources</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our extensive library and digital resources provide students with access 
                to world-class learning materials across all subjects.
              </p>
              <ul className="space-y-3">
                {['10,000+ Physical Books', 'Digital Library Access', 'Research Databases', 'Interactive Learning Tools'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Scene3D camera={{ position: [0, 0, 5] }} className="w-full h-full">
            <FloatingGlobe position={[-2, 0, 0]} scale={0.8} />
            <FloatingGlobe position={[2, 0, -2]} scale={0.6} />
          </Scene3D>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Start your child's journey towards excellence. Admissions are now open for 2026-27.
            </p>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Apply for Admission
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
