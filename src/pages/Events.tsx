import { motion } from 'motion/react';
import { Card3DWrapper } from '../components/Card3DWrapper';
import { Calendar, MapPin, Clock, Users, Trophy, Music, BookOpen, Heart } from 'lucide-react';

export function Events() {
  const upcomingEvents = [
    {
      date: { day: '15', month: 'Feb' },
      title: 'Annual Sports Day',
      time: '9:00 AM - 4:00 PM',
      location: 'School Grounds',
      type: 'Sports',
      icon: Trophy,
      color: 'bg-orange-50 text-orange-600',
    },
    {
      date: { day: '22', month: 'Feb' },
      title: 'Science Exhibition',
      time: '10:00 AM - 2:00 PM',
      location: 'School Auditorium',
      type: 'Academic',
      icon: BookOpen,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      date: { day: '01', month: 'Mar' },
      title: 'Annual Cultural Fest',
      time: '5:00 PM - 8:00 PM',
      location: 'Main Auditorium',
      type: 'Cultural',
      icon: Music,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      date: { day: '08', month: 'Mar' },
      title: 'International Women\'s Day',
      time: '11:00 AM - 1:00 PM',
      location: 'School Campus',
      type: 'Special Day',
      icon: Heart,
      color: 'bg-pink-50 text-pink-600',
    },
  ];

  const recentEvents = [
    {
      title: 'Republic Day Celebration 2026',
      description: 'Patriotic fervor filled the campus with flag hoisting and cultural performances',
      image: 'https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NzQzMDA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'January 26, 2026',
    },
    {
      title: 'Inter-School Quiz Competition',
      description: 'Our students won first prize in the regional inter-school quiz championship',
      image: 'https://images.unsplash.com/photo-1647667436195-6954ef8b27e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NzQ2ODAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'January 15, 2026',
    },
    {
      title: 'Winter Carnival 2025',
      description: 'A fun-filled day with games, stalls, and performances by students and parents',
      image: 'https://images.unsplash.com/photo-1632217142144-f96b15d867a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzY3NTE2MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'December 20, 2025',
    },
  ];

  const announcements = [
    {
      title: 'Term 2 Examinations Schedule',
      description: 'Final term examinations will commence from March 15, 2026. Detailed schedule sent to parents.',
      date: 'Posted 2 days ago',
    },
    {
      title: 'Parent-Teacher Meeting',
      description: 'PTM scheduled for February 28, 2026. Please check your registered email for appointment slots.',
      date: 'Posted 1 week ago',
    },
    {
      title: 'School Picnic Announcement',
      description: 'Annual school picnic for classes 1-5 on February 18. Permission slips must be submitted by Feb 12.',
      date: 'Posted 2 weeks ago',
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
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">Events & Announcements</h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with latest happenings and important announcements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-2">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground">Mark your calendars for these exciting events</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card3DWrapper key={event.title} delay={index * 0.1}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-xl flex flex-col items-center justify-center text-white">
                      <div className="text-xs">{event.date.month}</div>
                      <div className="text-xl">{event.date.day}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 ${event.color} rounded-lg flex items-center justify-center`}>
                        <event.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-primary">{event.type}</span>
                    </div>
                    <h3 className="mb-2">{event.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3DWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-2">Recent Events</h2>
            <p className="text-lg text-muted-foreground">Highlights from our recent activities</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentEvents.map((event, index) => (
              <Card3DWrapper key={event.title} delay={index * 0.1} className="overflow-hidden p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary mb-2 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </div>
                  <h3 className="mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </Card3DWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-2">Important Announcements</h2>
            <p className="text-lg text-muted-foreground">Latest updates and notifications</p>
          </motion.div>

          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <Card3DWrapper key={announcement.title} delay={index * 0.1}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">{announcement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{announcement.description}</p>
                    <div className="text-xs text-muted-foreground">{announcement.date}</div>
                  </div>
                </div>
              </Card3DWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl mb-4">Academic Calendar 2026-27</h2>
            <p className="text-lg mb-8 text-blue-100">
              Download the complete academic calendar to stay informed about all events and holidays
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
              Download Calendar
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}