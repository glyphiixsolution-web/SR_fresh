import { motion } from 'motion/react';
import { Card3DWrapper } from '../components/Card3DWrapper';
import { Scene3D } from '../components/3d/Scene3D';
import { Timeline3D } from '../components/3d/Timeline3D';
import { Trophy3D } from '../components/3d/Trophy3D';
import { Target, Eye, Heart, Users, BookOpen, Trophy } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and ethical behavior',
      color: '#e07a7a',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of education and development',
      color: '#5e8eb8',
    },
    {
      icon: Users,
      title: 'Respect',
      description: 'We foster a culture of mutual respect and understanding',
      color: '#7bc47f',
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'We embrace innovative teaching methods and continuous learning',
      color: '#f4a261',
    },
  ];

  const milestones = [
    { year: '1985', event: 'School Founded' },
    { year: '1995', event: 'First International Award' },
    { year: '2005', event: 'Smart Classrooms Introduced' },
    { year: '2015', event: 'Ranked #1 in State' },
    { year: '2020', event: 'Digital Learning Platform Launched' },
    { year: '2026', event: 'Celebrating 41 Years of Excellence' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section with 3D */}
      <section className="bg-gradient-to-br from-secondary via-accent to-muted py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:block">
          <Scene3D camera={{ position: [0, 0, 5] }} className="w-full h-full">
            <Trophy3D position={[0, 0, 0]} scale={1.2} color="#ffd700" />
          </Scene3D>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">About Excellence Academy</h1>
            <p className="text-lg text-muted-foreground">
              A legacy of educational excellence spanning over four decades, 
              committed to nurturing minds and shaping futures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision with 3D Depth */}
      <section className="py-16 lg:py-20 bg-white" style={{ transformStyle: 'preserve-3d' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card3DWrapper>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality education that empowers students with knowledge, skills, 
                and values necessary to become responsible global citizens. We are committed 
                to creating a nurturing environment that encourages academic excellence, 
                critical thinking, and holistic development.
              </p>
            </Card3DWrapper>

            <Card3DWrapper delay={0.1}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading educational institution recognized for excellence in 
                teaching, learning, and character development. We envision creating future 
                leaders who are innovative, compassionate, and equipped to make positive 
                contributions to society while maintaining the highest ethical standards.
              </p>
            </Card3DWrapper>
          </div>
        </div>
      </section>

      {/* Values Section with 3D Cards */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our educational philosophy and shape our school community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card3DWrapper key={value.title} delay={index * 0.1}>
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="w-6 h-6" style={{ color: value.color }} />
                </div>
                <h3 className="mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card3DWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message with 3D Frame */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <Card3DWrapper className="bg-gradient-to-br from-secondary to-accent">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwcmluY2lwYWwlMjB0ZWFjaGVyfGVufDF8fHx8MTc2NzUxNjIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Principal"
                      className="w-48 h-48 object-cover rounded-2xl mx-auto shadow-lg"
                      style={{ transform: 'translateZ(30px)' }}
                    />
                  </motion.div>
                </div>
                <div className="md:col-span-2">
                  <h2 className="mb-2">Principal's Message</h2>
                  <p className="text-muted-foreground mb-4">
                    "Education is not just about acquiring knowledge; it's about developing 
                    character, building confidence, and preparing for life's challenges. 
                    At Excellence Academy, we are committed to providing a supportive 
                    environment where every student can thrive and discover their unique potential. 
                    Our dedicated faculty and state-of-the-art facilities ensure that learning 
                    is both engaging and transformative."
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    - Dr. Sarah Johnson, Principal
                  </p>
                </div>
              </div>
            </Card3DWrapper>
          </motion.div>
        </div>
      </section>

      {/* 3D Timeline */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our 40+ years of educational excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 3D Timeline Visualization */}
            <div className="h-[500px] relative order-2 lg:order-1">
              <Scene3D camera={{ position: [0, 0, 4] }} className="w-full h-full">
                <Timeline3D position={[0, 0, 0]} events={6} />
              </Scene3D>
            </div>

            {/* Timeline Details */}
            <div className="space-y-4 order-1 lg:order-2">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex gap-4 items-center bg-white rounded-xl p-4 shadow-sm"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-md">
                    <div className="text-center">
                      <div className="text-xs opacity-80">Year</div>
                      <div className="font-semibold">{milestone.year}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground">{milestone.event}</p>
                  </div>
                  <Trophy className="w-6 h-6 text-primary" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Achievement Showcase */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Awards & Recognition</h2>
          </motion.div>

          <div className="h-80 relative mb-8">
            <Scene3D camera={{ position: [0, 0, 8] }} className="w-full h-full">
              <Trophy3D position={[-3, 0, 0]} scale={1} color="#ffd700" />
              <Trophy3D position={[0, 0, 0]} scale={1.2} color="#c0c0c0" />
              <Trophy3D position={[3, 0, 0]} scale={1} color="#cd7f32" />
            </Scene3D>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card3DWrapper className="text-center">
              <div className="text-4xl mb-2 text-yellow-600">🥇</div>
              <h3 className="mb-2">National Excellence Award</h3>
              <p className="text-sm text-muted-foreground">Best School Infrastructure 2025</p>
            </Card3DWrapper>
            <Card3DWrapper className="text-center" delay={0.1}>
              <div className="text-4xl mb-2 text-gray-400">🥈</div>
              <h3 className="mb-2">State Recognition</h3>
              <p className="text-sm text-muted-foreground">Top Academic Performance 2024</p>
            </Card3DWrapper>
            <Card3DWrapper className="text-center" delay={0.2}>
              <div className="text-4xl mb-2 text-orange-600">🥉</div>
              <h3 className="mb-2">Regional Award</h3>
              <p className="text-sm text-muted-foreground">Excellence in Sports 2023</p>
            </Card3DWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
