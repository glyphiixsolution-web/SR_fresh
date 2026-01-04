import { motion } from 'motion/react';
import { Card3DWrapper } from '../components/Card3DWrapper';
import { Scene3D } from '../components/3d/Scene3D';
import { FloatingBook } from '../components/3d/FloatingBook';
import { FileText, Calendar, CheckCircle, Users, Download, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export function Admissions() {
  const process = [
    {
      step: '01',
      icon: FileText,
      title: 'Application Form',
      description: 'Fill out the online application form or download and submit physically',
    },
    {
      step: '02',
      icon: Calendar,
      title: 'Entrance Test',
      description: 'Appear for age-appropriate entrance examination and interview',
    },
    {
      step: '03',
      icon: CheckCircle,
      title: 'Document Verification',
      description: 'Submit required documents for verification and processing',
    },
    {
      step: '04',
      icon: Users,
      title: 'Enrollment',
      description: 'Complete admission formalities and fee payment to secure seat',
    },
  ];

  const requirements = [
    'Birth Certificate (original & photocopy)',
    'Transfer Certificate from previous school',
    'Mark sheets of last examination',
    'Passport size photographs (4 copies)',
    'Aadhar Card copy of student',
    'Address proof (electricity bill/rent agreement)',
    'Medical certificate',
    'Caste certificate (if applicable)',
  ];

  const timeline = [
    { date: 'January 2026', event: 'Admission Portal Opens' },
    { date: 'February 2026', event: 'Entrance Test Registration Deadline' },
    { date: 'March 2026', event: 'Entrance Tests Conducted' },
    { date: 'April 2026', event: 'Results Announced' },
    { date: 'May 2026', event: 'Admission Confirmation Deadline' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-secondary via-accent to-muted py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:block">
          <Scene3D camera={{ position: [0, 0, 5] }} className="w-full h-full">
            <FloatingBook position={[-0.5, 0.5, 0]} color="#5e8eb8" scale={1} />
            <FloatingBook position={[0.5, -0.3, 0.5]} color="#7bc47f" scale={0.9} />
          </Scene3D>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">Admissions 2026-27</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community of learners and embark on a journey of excellence
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl">
                Apply Online
              </Button>
              <Button variant="outline" className="px-8 py-6 rounded-xl flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Prospectus
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Admission Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple and transparent admission procedure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card3DWrapper key={item.title} delay={index * 0.1} className="text-center">
                <div className="text-4xl text-primary/20 mb-4">{item.step}</div>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card3DWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline & Requirements */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8">Important Dates</h2>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.event}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-primary mb-1">{item.date}</div>
                      <div className="text-foreground">{item.event}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8">Required Documents</h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <motion.li
                      key={req}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Admission Inquiry</h2>
            <p className="text-lg text-muted-foreground">
              Have questions? Fill out the form and we'll get back to you
            </p>
          </motion.div>

          <Card3DWrapper className="bg-gradient-to-br from-secondary to-accent">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm">Parent's Name</label>
                  <Input placeholder="Enter your name" className="bg-white" />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Student's Name</label>
                  <Input placeholder="Enter student's name" className="bg-white" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-white" />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Phone</label>
                  <Input type="tel" placeholder="+91 98765 43210" className="bg-white" />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm">Class Applying For</label>
                <Input placeholder="e.g., Class 5" className="bg-white" />
              </div>
              <div>
                <label className="block mb-2 text-sm">Message</label>
                <Textarea placeholder="Any questions or special requirements..." className="bg-white min-h-32" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl">
                Submit Inquiry
              </Button>
            </form>
          </Card3DWrapper>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="mb-2">Call Us</h3>
              <p className="text-blue-100">+91 98765 43210</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="mb-2">Email Us</h3>
              <p className="text-blue-100">admissions@excellenceacademy.edu</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="mb-2">Office Hours</h3>
              <p className="text-blue-100">Mon - Sat: 9 AM - 5 PM</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}