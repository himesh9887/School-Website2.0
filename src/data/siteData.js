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
  GraduationCap,
  HeartHandshake,
  Home,
  Languages,
  Mail,
  MapPin,
  Microscope,
  Music,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  UsersRound,
  Video,
} from 'lucide-react';

export const school = {
  name: 'Mehar Academy',
  shortName: 'Mehar Academy',
  headmaster: 'Dr. Salaudeen Mehar',
  phone: '+91 8078683410',
  email: 'meharacademy25@gmail.com',
  location: 'Badibass Neekach, PIN 301025',
  whatsapp: 'https://wa.me/918078683410?text=Hello%20Mehar%20Academy',
  logo: '/mehar-logo.svg',
  banner: '/mehar-banner.svg',
  heroImage: '/mehar-hero.jpeg',
  headmasterImage: '/mehar-logo.svg',
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
    title: 'English Medium Learning With Strong Values.',
    subtitle:
      'Mehar Academy provides caring English medium education from Nursery to Class 8 with Urdu as an important subject.',
    image: school.heroImage,
  },
  {
    title: 'Nursery, Primary And Upper Primary.',
    subtitle:
      'Classroom learning, activities, discipline, and safe routines help every child move forward with confidence.',
    image: '/mehar-class-corridor.jpeg',
  },
  {
    title: 'Admissions Open For The 2026-27 Session.',
    subtitle:
      'Admissions are open from Nursery to Class 8. Book a visit and meet the Mehar Academy team.',
    image: '/mehar-campus-gate.jpeg',
  },
];

export const stats = [
  { value: 8, suffix: 'th', label: 'Classes Up To' },
  { value: 2015, suffix: '', label: 'Established' },
  { value: 3, suffix: '', label: 'Academic Wings' },
  { value: 100, suffix: '%', label: 'English Medium' },
  { value: 1, suffix: '', label: 'Urdu Subject' },
];

export const whyChoose = [
  { title: 'English Medium School', icon: Languages, text: 'Students learn through English medium instruction with daily focus on reading, writing, and speaking.' },
  { title: 'Urdu As A Subject', icon: BookOpenCheck, text: 'Urdu is taught as an important subject along with core academic learning.' },
  { title: 'Strong Foundations', icon: Brain, text: 'Nursery, Primary, and Upper Primary students build basics through practice, discipline, and activities.' },
  { title: 'Safe School Culture', icon: ShieldCheck, text: 'Caring staff, clear routines, and a focused campus environment support every child.' },
];

export const programs = [
  { title: 'Nursery', icon: Sparkles, text: 'Early learning with play, phonics, numbers, poems, stories, manners, and social confidence.' },
  { title: 'Primary', icon: BookOpenCheck, text: 'Classes 1 to 5 focus on English, Mathematics, EVS, Hindi, Urdu, handwriting, activities, and values.' },
  { title: 'Upper Primary', icon: Brain, text: 'Classes 6 to 8 build subject confidence, communication, responsibility, and regular study habits.' },
];

export const facilities = [
  { title: 'Clean Classrooms', icon: Home, category: 'Campus', image: '/mehar-classroom.jpeg', text: 'Bright classrooms with boards, charts, seating, ventilation, and a calm learning atmosphere.' },
  { title: 'Academic Block', icon: GraduationCap, category: 'Academics', image: '/mehar-class-corridor.jpeg', text: 'Organized classrooms and corridors support daily teaching from Nursery to Class 8.' },
  { title: 'Safe Campus', icon: ShieldCheck, category: 'Safety', image: '/mehar-campus-gate.jpeg', text: 'A secure campus entrance, clear routines, and staff supervision help children feel safe.' },
  { title: 'Activity Learning', icon: Music, category: 'Activities', image: '/mehar-campus-collage.jpeg', text: 'Students learn through recitation, reading, writing, classroom activities, and value-based programs.' },
  { title: 'Sports And Play', icon: Trophy, category: 'Growth', image: '/mehar-campus-side.jpeg', text: 'Games, movement, and school activities support confidence, discipline, and healthy development.' },
  { title: 'School Transport', icon: Bus, category: 'Support', image: '/mehar-campus-side.jpeg', text: 'Transport support is available for families as per school routes and timing.' },
  { title: 'CCTV Security', icon: Video, category: 'Safety', image: '/mehar-class-corridor.jpeg', text: 'Campus monitoring and supervision support a safe school environment.' },
];

export const galleryItems = [
  { category: 'Campus', title: 'Mehar Academy Entrance', image: '/mehar-campus-gate.jpeg' },
  { category: 'Classrooms', title: 'Classroom Learning', image: '/mehar-classroom.jpeg' },
  { category: 'Classrooms', title: 'Students With Teacher', image: '/mehar-class-corridor.jpeg' },
  { category: 'Campus', title: 'School Campus Collage', image: '/mehar-campus-collage.jpeg' },
  { category: 'Campus', title: 'Campus Side View', image: '/mehar-campus-side.jpeg' },
];

export const newsItems = [
  { title: 'Admissions Open For 2026-27', date: 'July 18, 2026', category: 'Admissions', icon: CalendarDays, text: 'Campus visits and interaction slots are open from Nursery to Class 8.' },
  { title: 'Mehar Academy Activity Week', date: 'August 04, 2026', category: 'Achievement', icon: Award, text: 'Students will present classroom projects, speeches, art, and activity work.' },
  { title: 'Language And Reading Week Announced', date: 'September 12, 2026', category: 'Events', icon: Languages, text: 'Students will take part in reading, handwriting, storytelling, and recitation activities.' },
  { title: 'Holiday List Published', date: 'October 01, 2026', category: 'Notice', icon: ClipboardCheck, text: 'The updated academic calendar and holiday list are available for families.' },
];

export const faculty = [
  { name: school.headmaster, role: 'Headmaster', department: 'School Leadership', qualification: 'Headmaster, Mehar Academy', experience: 'English Medium School Administration', image: '/mehar-campus-collage.jpeg' },
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
  { year: '2015', title: 'Mehar Academy was founded', text: 'Started with a promise of personal attention, values, and strong basics.' },
  { year: 'Primary', title: 'Primary wing strengthened', text: 'Built clear routines for reading, writing, numeracy, and activity-based learning.' },
  { year: 'Upper Primary', title: 'Classes up to 8th', text: 'Expanded focused learning for upper primary children.' },
  { year: 'Now', title: 'English medium with Urdu subject', text: 'Continuing with discipline, care, communication, Urdu learning, and steady academic growth.' },
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
  { label: school.location, icon: MapPin, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Mehar Academy ${school.location}`)}` },
];

export const values = [
  { icon: CheckCircle2, label: 'Integrity' },
  { icon: HeartHandshake, label: 'Empathy' },
  { icon: Microscope, label: 'Inquiry' },
  { icon: Camera, label: 'Expression' },
];
