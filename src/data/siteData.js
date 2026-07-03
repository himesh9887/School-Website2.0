import {
  Award,
  BookOpenCheck,
  Brain,
  Bus,
  CalendarDays,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  FileDown,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Languages,
  LibraryBig,
  Mail,
  MapPin,
  Microscope,
  MonitorSmartphone,
  Music,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Trophy,
  UsersRound,
  Video,
  Wifi,
} from 'lucide-react';

export const school = {
  name: 'Mehar Academy',
  shortName: 'Mehar Academy',
  phone: '+91 90000 00000',
  email: 'meharacademyofficial@gmail.com',
  location: 'Mehar Academy Campus',
  whatsapp: 'https://wa.me/910000000000?text=Hello%20Mehar%20Academy',
  logo: '/mehar-logo.svg',
  banner: '/mehar-banner.svg',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
];

export const heroSlides = [
  {
    title: 'Learn. Grow. Succeed.',
    subtitle:
      'Mehar Academy nurtures young learners with strong foundations, daily discipline, and caring guidance up to Class 8.',
    image: school.banner,
  },
  {
    title: 'A Caring School For Bright Young Minds.',
    subtitle:
      'Classroom learning, activities, values, and safe routines help every child move forward with confidence.',
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1800&q=85',
  },
  {
    title: 'Admissions Open For The 2026-27 Session.',
    subtitle:
      'Admissions are open from Nursery to Class 8. Book a visit and meet the Mehar Academy team.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85',
  },
];

export const stats = [
  { value: 8, suffix: 'th', label: 'Classes Up To' },
  { value: 25, suffix: '+', label: 'Dedicated Teachers' },
  { value: 500, suffix: '+', label: 'Learners Guided' },
  { value: 100, suffix: '%', label: 'Child Focused' },
  { value: 3, suffix: '+', label: 'Learning Stages' },
];

export const whyChoose = [
  { title: 'Mentor-Led Learning', icon: UsersRound, text: 'Every learner receives academic guidance, wellbeing check-ins, and personal growth goals.' },
  { title: 'Strong Foundations', icon: Languages, text: 'Focused reading, writing, numeracy, communication, and values for Nursery to Class 8.' },
  { title: 'Activity-Based Growth', icon: Brain, text: 'Children learn through practice, projects, presentations, competitions, and reflection.' },
  { title: 'Safe School Culture', icon: ShieldCheck, text: 'Child-first routines, caring staff, secure spaces, and clear communication with families.' },
];

export const programs = [
  { title: 'Nursery', icon: Sparkles, text: 'Play-based discovery, phonics, numeracy, movement, rhythm, and social confidence.' },
  { title: 'Primary', icon: BookOpenCheck, text: 'Concept clarity, reading fluency, handwriting, projects, sports, and values education.' },
  { title: 'Junior', icon: Brain, text: 'Classes 6 to 8 build subject confidence, communication, responsibility, and guided independence.' },
  { title: 'Class 8', icon: GraduationCap, text: 'Focused preparation, revision habits, leadership roles, and readiness for the next academic stage.' },
];

export const facilities = [
  { title: 'Computer Lab', icon: MonitorSmartphone, category: 'Technology', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80', text: 'High-speed systems, coding modules, AI literacy, and supervised digital citizenship.' },
  { title: 'Science Lab', icon: FlaskConical, category: 'Academics', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80', text: 'Physics, chemistry, and biology labs built for experimentation and inquiry.' },
  { title: 'Library', icon: LibraryBig, category: 'Academics', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80', text: 'Reading lounges, journals, digital catalogs, and quiet research corners.' },
  { title: 'Smart Classes', icon: Wifi, category: 'Technology', image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80', text: 'Interactive panels, classroom analytics, and blended learning workflows.' },
  { title: 'Sports Arena', icon: Trophy, category: 'Sports', image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80', text: 'Courts, turf, athletics coaching, yoga, and inter-school competition pathways.' },
  { title: 'Transport', icon: Bus, category: 'Safety', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80', text: 'GPS-enabled buses, verified drivers, attendants, and live route updates.' },
  { title: 'Medical Room', icon: Stethoscope, category: 'Safety', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80', text: 'On-campus nurse support, first-aid protocols, and emergency response readiness.' },
  { title: 'CCTV Security', icon: Video, category: 'Safety', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80', text: 'Monitored entrances, access control, visitor management, and secure zones.' },
];

export const galleryItems = [
  { category: 'Campus', title: 'Main Academic Block', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80' },
  { category: 'Classrooms', title: 'Collaborative Classrooms', image: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=900&q=80' },
  { category: 'Events', title: 'Annual Leadership Summit', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80' },
  { category: 'Sports', title: 'Inter-School Sports Day', image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80' },
  { category: 'Photos', title: 'Library Reading Hour', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80' },
  { category: 'Campus', title: 'Science Discovery Lab', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80' },
];

export const newsItems = [
  { title: 'Admissions Open For 2026-27', date: 'July 18, 2026', category: 'Admissions', icon: CalendarDays, text: 'Campus visits and interaction slots are open from Nursery to Class 8.' },
  { title: 'Mehar Academy Activity Week', date: 'August 04, 2026', category: 'Achievement', icon: Award, text: 'Students will present classroom projects, speeches, art, and activity work.' },
  { title: 'Language And Reading Week Announced', date: 'September 12, 2026', category: 'Events', icon: Languages, text: 'Students will take part in reading, handwriting, storytelling, and recitation activities.' },
  { title: 'Holiday List Published', date: 'October 01, 2026', category: 'Notice', icon: ClipboardCheck, text: 'The updated academic calendar and holiday list are available for families.' },
];

export const faculty = [
  { name: 'Mehar Academy Principal', role: 'Principal', department: 'Leadership', qualification: 'Education Leadership', experience: '15+ years', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80' },
  { name: 'Academic Coordinator', role: 'Coordinator', department: 'Academics', qualification: 'Curriculum Planning', experience: '12+ years', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80' },
  { name: 'Primary Wing Lead', role: 'Teacher', department: 'Primary', qualification: 'Primary Education', experience: '10+ years', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=700&q=80' },
  { name: 'Science Faculty', role: 'Teacher', department: 'Science', qualification: 'Science Education', experience: '8+ years', image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=700&q=80' },
  { name: 'English Faculty', role: 'Teacher', department: 'Languages', qualification: 'English Education', experience: '8+ years', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80' },
  { name: 'Activity Incharge', role: 'Teacher', department: 'Activities', qualification: 'Sports And Activities', experience: '10+ years', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80' },
];

export const testimonials = [
  { name: 'Parent', role: 'Class 6', text: 'Mehar Academy gives personal attention and keeps families informed about every child progress.' },
  { name: 'Student', role: 'Class 8', text: 'Teachers explain clearly and help us improve through practice, activities, and regular guidance.' },
  { name: 'Parent', role: 'Class 2', text: 'The early classes balance warmth and discipline beautifully. My child enjoys school every day.' },
];

export const events = [
  { title: 'Mehar Academy Celebration', date: 'Aug 22', text: 'Awards, performances, exhibitions, and student leadership showcases.' },
  { title: 'Activity And Project Expo', date: 'Sep 10', text: 'Class projects, chart work, reading displays, and parent walkthroughs.' },
  { title: 'Assessment Readiness Week', date: 'Oct 04', text: 'Revision guidance, study habits, and parent-teacher conversations.' },
];

export const timeline = [
  { year: 'Start', title: 'Mehar Academy was founded', text: 'Started with a promise of personal attention, values, and strong basics.' },
  { year: 'Primary', title: 'Primary wing strengthened', text: 'Built clear routines for reading, writing, numeracy, and activity-based learning.' },
  { year: 'Middle', title: 'Classes up to 8th', text: 'Expanded focused learning for junior and middle school children.' },
  { year: 'Now', title: 'Learn, grow, succeed', text: 'Continuing with discipline, care, communication, and steady academic growth.' },
];

export const admissionSteps = [
  'Submit online inquiry',
  'Attend campus tour',
  'Student interaction',
  'Offer letter and onboarding',
];

export const downloads = [
  { label: 'Academic Calendar', icon: FileDown },
  { label: 'Admission Prospectus', icon: FileDown },
  { label: 'Fee Structure', icon: FileDown },
];

export const contactItems = [
  { label: school.phone, icon: Phone, href: `tel:${school.phone.replaceAll(' ', '')}` },
  { label: school.email, icon: Mail, href: `mailto:${school.email}` },
  { label: school.location, icon: MapPin, href: 'https://maps.google.com' },
];

export const values = [
  { icon: CheckCircle2, label: 'Integrity' },
  { icon: HeartHandshake, label: 'Empathy' },
  { icon: Microscope, label: 'Inquiry' },
  { icon: Camera, label: 'Expression' },
];
