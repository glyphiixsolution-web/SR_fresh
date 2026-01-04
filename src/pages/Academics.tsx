import { motion } from 'motion/react';
import { Card3DWrapper } from '../components/Card3DWrapper';
import { Scene3D } from '../components/3d/Scene3D';
import { SubjectCube } from '../components/3d/SubjectCube';
import { FloatingBook } from '../components/3d/FloatingBook';
import { BookOpen, Calculator, Beaker, Globe, Music, Palette, Code, Languages } from 'lucide-react';

export function Academics() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Primary Education',
      grades: 'Classes 1-5',
      description: 'Foundation building with focus on literacy, numeracy, and social skills',
      color: '#6ba3d1',
    },
    {
      icon: Calculator,
      title: 'Middle School',
      grades: 'Classes 6-8',
      description: 'Comprehensive curriculum with emphasis on critical thinking and analysis',
      color: '#9b8fd9',
    },
    {
      icon: Beaker,
      title: 'Secondary Education',
      grades: 'Classes 9-10',
      description: 'Board exam preparation with specialized subject focus',
      color: '#7bc47f',
    },
    {
      icon: Globe,
      title: 'Senior Secondary',
      grades: 'Classes 11-12',
      description: 'Science, Commerce, and Arts streams for career preparation',
      color: '#f4a261',
    },
  ];

  const subjects = [
    { icon: Calculator, name: 'Mathematics', color: '#5e8eb8' },
    { icon: Beaker, name: 'Science', color: '#7bc47f' },
    { icon: Languages, name: 'Languages', color: '#f4a261' },
    { icon: Globe, name: 'Social Studies', color: '#9b8fd9' },
    { icon: Code, name: 'Computer Science', color: '#6ba3d1' },
    { icon: Music, name: 'Fine Arts', color: '#e07a7a' },
    { icon: Palette, name: 'Visual Arts', color: '#f4a261' },
    { icon: BookOpen, name: 'Literature', color: '#5e8eb8' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section with 3D Books */}
      <section className="bg-gradient-to-br from-secondary via-accent to-muted py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:block">
          <Scene3D camera={{ position: [0, 0, 6] }} className="w-full h-full">
            <FloatingBook position={[-0.5, 1, 0]} color="#5e8eb8" scale={1} />
            <FloatingBook position={[0.5, 0, 0.5]} color="#7bc47f" scale={0.9} />
            <FloatingBook position={[0, -1, -0.3]} color="#f4a261" scale={0.8} />
          </Scene3D>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">Academic Programs</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive curriculum designed to nurture intellectual growth and 
              prepare students for future success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section with 3D Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Age-appropriate learning pathways from primary to senior secondary
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card3DWrapper key={program.title} delay={index * 0.1}>
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${program.color}20` }}
                >
                  <program.icon className="w-7 h-7" style={{ color: program.color }} />
                </div>
                <div className="text-sm mb-1" style={{ color: program.color }}>{program.grades}</div>
                <h3 className="mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </Card3DWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Subject Cubes Showcase */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Subjects Offered</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive range of subjects to cater to diverse interests and abilities
            </p>
          </motion.div>

          {/* 3D Subject Visualization */}
          <div className="h-96 mb-12 relative">
            <Scene3D camera={{ position: [0, 0, 10] }} className="w-full h-full">
              <SubjectCube position={[-3, 1.5, 0]} color="#5e8eb8" label="" delay={0} />
              <SubjectCube position={[-1, 1.5, 0]} color="#7bc47f" label="" delay={0.1} />
              <SubjectCube position={[1, 1.5, 0]} color="#f4a261" label="" delay={0.2} />
              <SubjectCube position={[3, 1.5, 0]} color="#9b8fd9" label="" delay={0.3} />
              
              <SubjectCube position={[-3, -1.5, 0]} color="#6ba3d1" label="" delay={0.4} />
              <SubjectCube position={[-1, -1.5, 0]} color="#e07a7a" label="" delay={0.5} />
              <SubjectCube position={[1, -1.5, 0]} color="#f4a261" label="" delay={0.6} />
              <SubjectCube position={[3, -1.5, 0]} color="#5e8eb8" label="" delay={0.7} />
            </Scene3D>
          </div>

          {/* Subject List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <Card3DWrapper key={subject.name} delay={index * 0.05}>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${subject.color}20` }}
                  >
                    <subject.icon className="w-5 h-5" style={{ color: subject.color }} />
                  </div>
                  <h4>{subject.name}</h4>
                </div>
              </Card3DWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Features with 3D Panels */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Our Curriculum Framework</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern teaching methodologies combined with proven educational practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card3DWrapper className="bg-gradient-to-br from-blue-50 to-blue-100/50">
              <h3 className="mb-3">CBSE Curriculum</h3>
              <p className="text-muted-foreground mb-4">
                Following the Central Board of Secondary Education guidelines with enhanced learning modules
              </p>
              <ul className="space-y-2">
                {['Activity-based learning', 'Continuous evaluation', 'Skill development focus'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card3DWrapper>

            <Card3DWrapper className="bg-gradient-to-br from-purple-50 to-purple-100/50" delay={0.1}>
              <h3 className="mb-3">Co-Curricular Activities</h3>
              <p className="text-muted-foreground mb-4">
                Beyond academics - sports, arts, music, and leadership development programs
              </p>
              <ul className="space-y-2">
                {['Sports competitions', 'Cultural events', 'Leadership programs'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card3DWrapper>

            <Card3DWrapper className="bg-gradient-to-br from-green-50 to-green-100/50" delay={0.2}>
              <h3 className="mb-3">Digital Learning</h3>
              <p className="text-muted-foreground mb-4">
                Technology-integrated classrooms with interactive smart boards and online resources
              </p>
              <ul className="space-y-2">
                {['Smart classrooms', 'E-learning portal', 'Digital library'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card3DWrapper>
          </div>
        </div>
      </section>

      {/* Image Section with 3D Effect */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 5, transition: { duration: 0.3 } }}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <Card3DWrapper className="overflow-hidden p-0">
                <img
                  src="https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NzQzMDA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students in classroom"
                  className="w-full h-64 object-cover"
                  style={{ transform: 'translateZ(20px)' }}
                />
                <div className="p-6">
                  <h3 className="mb-2">Interactive Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern classrooms designed for collaborative and engaging learning experiences
                  </p>
                </div>
              </Card3DWrapper>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: -5, transition: { duration: 0.3 } }}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <Card3DWrapper className="overflow-hidden p-0" delay={0.1}>
                <img
                  src="https://images.unsplash.com/photo-1632217142144-f96b15d867a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzY3NTE2MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Library"
                  className="w-full h-64 object-cover"
                  style={{ transform: 'translateZ(20px)' }}
                />
                <div className="p-6">
                  <h3 className="mb-2">Rich Resources</h3>
                  <p className="text-sm text-muted-foreground">
                    Extensive library with thousands of books and digital resources for research
                  </p>
                </div>
              </Card3DWrapper>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
