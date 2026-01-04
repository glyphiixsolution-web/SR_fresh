import { motion } from 'motion/react';
import { Card3DWrapper } from '../components/Card3DWrapper';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Education Street, Knowledge City, State - 110001, India',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210\n+91 98765 43211 (Admissions)',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@excellenceacademy.edu\nadmissions@excellenceacademy.edu',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday - Saturday\n9:00 AM - 5:00 PM',
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-secondary via-accent to-muted py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card3DWrapper key={info.title} delay={index * 0.1}>
                <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <info.icon className="w-7 h-7" />
                </div>
                <h3 className="mb-2">{info.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{info.details}</p>
              </Card3DWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <Card3DWrapper className="bg-white">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Email Address</label>
                    <Input type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Phone Number</label>
                    <Input type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Subject</label>
                    <Input placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Message</label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..." 
                      className="min-h-32"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </Card3DWrapper>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-2">Visit Our Campus</h2>
              <p className="text-muted-foreground mb-8">
                We welcome parents and students to visit our campus. Schedule a tour today!
              </p>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8 h-80">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <p>Interactive Map</p>
                    <p className="text-sm">123 Education Street, Knowledge City</p>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <Card3DWrapper className="bg-gradient-to-br from-primary to-blue-600 text-white">
                <h3 className="mb-4 text-white">Campus Tours</h3>
                <p className="text-blue-100 mb-4">
                  Experience our world-class facilities firsthand. Schedule a guided tour 
                  of our campus to see what makes Excellence Academy special.
                </p>
                <Button className="bg-white text-primary hover:bg-blue-50 w-full py-3 rounded-xl">
                  Schedule a Tour
                </Button>
              </Card3DWrapper>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments Contact */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Department Contacts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out to specific departments for specialized assistance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card3DWrapper className="text-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="mb-2">Admissions Office</h4>
              <p className="text-sm text-muted-foreground mb-3">
                For admission inquiries and application process
              </p>
              <a href="tel:+919876543210" className="text-primary hover:underline text-sm">
                +91 98765 43210
              </a>
            </Card3DWrapper>

            <Card3DWrapper className="text-center" delay={0.1}>
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="mb-2">Academic Office</h4>
              <p className="text-sm text-muted-foreground mb-3">
                For academic queries and curriculum information
              </p>
              <a href="tel:+919876543211" className="text-primary hover:underline text-sm">
                +91 98765 43211
              </a>
            </Card3DWrapper>

            <Card3DWrapper className="text-center" delay={0.2}>
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="mb-2">Administration</h4>
              <p className="text-sm text-muted-foreground mb-3">
                For general inquiries and administrative matters
              </p>
              <a href="tel:+919876543212" className="text-primary hover:underline text-sm">
                +91 98765 43212
              </a>
            </Card3DWrapper>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'What are the school timings?',
                answer: 'School timings are from 8:00 AM to 3:00 PM for all classes, Monday to Saturday.',
              },
              {
                question: 'How can I schedule a campus visit?',
                answer: 'You can schedule a campus visit by calling our admissions office or filling out the contact form above.',
              },
              {
                question: 'What documents are required for admission?',
                answer: 'Please refer to our Admissions page for a complete list of required documents.',
              },
            ].map((faq, index) => (
              <Card3DWrapper key={faq.question} delay={index * 0.1}>
                <h4 className="mb-2">{faq.question}</h4>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </Card3DWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}