import { prisma } from '../lib/db';

const staff = [
  ['VIKAS SHUKLA','PRINCIPAL','MSc, B.Ed'],
  ['SNEH MISRA','PGT','MA, B.Ed'],
  ['RAVI PRATAP SINGH','PGT','MCA'],
  ['MOHD DANISH','PGT','MCOM, B.ED.'],
  ['RAGINI VERMA','PET','B.PED'],
  ['JASPREET KAUR','PRT','MA, B.ED'],
  ['SARIKA PANDEY','WELLNESS AND COUNSELLOR','BA'],
  ['VINEET KUMAR DIXIT','TGT','MA B.ED.'],
  ['VINEET KRISHNA RASTOGI','PGT','MSc, B.Ed'],
  ['ABHISHEK KUMAR','PGT','MSc, B.Ed'],
  ['ANKUR TIWARI','PGT','MSc, B.Ed'],
  ['BHOLA SINGH','PGT','MA B.ED.'],
  ['ARTI SHARMA','PRT','B.A. B.ED'],
  ['MANTSHA KHAN','PRT','BA NTT'],
  ['MANTSHA SAHEER','PRT','BA NTT'],
  ['KRATIKA SHUKLA','PRT','BA B.ED'],
  ['PRADEEP TIWARI','PGT','MCOM B.ED'],
  ['SHYAM KISHOR TIWARI','TGT','B.SC. B.ED.'],
  ['APOORV AWASTHI','PGT','MSC B.ED.'],
  ['AMARISH KUMAR','TGT','MA B.ED'],
  ['REEBAN YADAV','TGT','BA, B.ED'],
  ['SHIKHA SHUKLA','PRT','BA B.ED'],
  ['DEEPTI SHUKLA','PRT','BA B.ED'],
  ['SIMARDEEP SINGH','PGT','MA, B.ED'],
];

const events = [
  { title: 'Founders Day Celebration', date: new Date('2025-08-15'), description: 'Annual Founders Day celebration honouring the legacy and vision of Paul International School with cultural performances and awards.', category: 'Cultural' },
  { title: 'Annual Sports Meet', date: new Date('2025-11-20'), description: 'A vibrant inter-house sports competition featuring track events, team sports and a march-past.', category: 'Sports' },
  { title: 'Science Exhibition', date: new Date('2025-09-12'), description: 'Students showcase innovative working models and research projects across physics, chemistry and biology.', category: 'Academic' },
  { title: 'Innovation Meetup', date: new Date('2026-04-01'), description: 'Workshops and presentations exploring creativity, design thinking and student innovation.', category: 'Academic' },
  { title: 'Volunteering Day', date: new Date('2026-06-15'), description: 'Community outreach programme where students participate in tree-plantation, cleanliness and donation drives.', category: 'Community' },
  { title: 'Annual Book Club', date: new Date('2026-09-20'), description: 'Reading marathon, book discussions and meet-the-author sessions celebrating literature.', category: 'Literary' },
  { title: 'Mathematics Tutoring Program', date: new Date('2026-12-03'), description: 'Senior-junior peer tutoring sessions designed to make mathematics fun and accessible.', category: 'Academic' },
  { title: 'Republic Day', date: new Date('2026-01-26'), description: 'Flag hoisting, parade and patriotic performances celebrating the Indian Republic.', category: 'National' },
];

const gallery = [
  { url: 'https://i.ytimg.com/vi/WWgkSID1idY/maxresdefault.jpg', caption: 'Our School Campus', album: 'Campus' },
  { url: 'https://www.mindandlife.org/wp-content/uploads/2023/01/Happiness_Activity_Delhi_Government_School-1024x616.jpg', caption: 'Engaged Classroom Learning', album: 'Academics' },
  { url: 'https://www.divyajyotschool.org/wp-content/uploads/2025/04/importance-of-Science-laboratory.jpeg', caption: 'Modern Science Laboratory', album: 'Facilities' },
  { url: 'https://b.mscwlns.co/blog/lj/Untitled-design--28-.png', caption: 'Sports & Playground', album: 'Sports' },
  { url: 'https://i.ytimg.com/vi/WvgehH5hkYA/hq720.jpg', caption: 'Founders Day Cultural Performance', album: 'Events' },
  { url: 'https://pbs.twimg.com/media/F7rFFzkXQAA_dL9.jpg', caption: 'Computer Lab', album: 'Facilities' },
];

async function main() {
  for (let i = 0; i < staff.length; i++) {
    const [name, designation, qualification] = staff[i];
    await prisma.staff.upsert({
      where: { id: i + 1 },
      update: { sno: i + 1, name, designation, qualification },
      create: { id: i + 1, sno: i + 1, name, designation, qualification },
    });
  }
  for (let i = 0; i < events.length; i++) {
    const e = events[i];
    await prisma.event.upsert({ where: { id: i + 1 }, update: e, create: { id: i + 1, ...e } });
  }
  for (let i = 0; i < gallery.length; i++) {
    const g = gallery[i];
    await prisma.galleryImage.upsert({ where: { id: i + 1 }, update: { ...g, ord: i }, create: { id: i + 1, ...g, ord: i } });
  }
  console.log('Seed complete');
}
main().finally(() => prisma.$disconnect());
