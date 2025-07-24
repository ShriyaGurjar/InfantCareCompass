import dbConnect from "../config/database/DBconnect";
import { Content } from "../models/learningHubContent.models";

dbConnect.then(async() => {
await Content.deleteMany();
await Content.insertMany([
    {
    title: 'Cognitive Milestones for Toddlers',
    description:
      'Discover key cognitive milestones that occur between ages 1 to 3 and learn how to support your toddler\'s growing brain through play, language-rich interactions, and everyday activities. This resource provides practical tips for encouraging problem-solving, memory skills, and early understanding of cause and effect during this critical stage of brain development.',
    ageGroup: '1-3 years',
  },
  {
    title: 'Social Development for Preschoolers',
    description:
      'Support your child’s journey toward becoming socially confident and empathetic. This guide explores how children ages 3 to 5 begin forming friendships, taking turns, and understanding the feelings of others. Learn science-backed strategies to foster cooperative play, reduce conflict, and nurture emotional connections in the preschool years.',
    ageGroup: '3-5 years',
  },
  {
    title: 'Building Emotional Intelligence',
    description:
      'Help children aged 6 to 8 build strong emotional foundations that support mental well-being and healthy relationships. This resource offers evidence-based methods to teach self-awareness, emotional regulation, and empathy. Includes interactive activities and conversation prompts to help kids express feelings and resolve conflicts in constructive ways.',
    ageGroup: '6-8 years',
  },
]);
console.log("seeding done");
process.exit();
}).catch(err => console.error(err));