// Project categories: Full-Stack, Web Application, Mobile App, Blockchain, AI Automation, AI Agent/Chatbot
import assets from '../assets/assets';

export const projectCategories = [
  'All Projects',
  'Full-Stack',
  'Web Application',
  'Mobile App',
  'Blockchain',
  'AI Automation',
  'AI Agent / Chatbot'
];

export const projects = [
  // AI Automation Projects
  {
    id: 1,
    title: 'SprintiQ',
    description: 'AI-native agile planning platform that transforms agile planning from hours to minutes. Features AI-powered story generation, smart sprint planning, backlog prioritization, and real-time collaboration with integrations for Jira, GitHub, and Slack.',
    image: assets.sprintiq,
    category: 'AI Automation',
    stacks: ['React', 'Node.js', 'Python', 'OpenAI', 'PostgreSQL', 'AWS'],
    featured: true,
    url: 'https://www.sprintiq.ai/'
  },
  {
    id: 2,
    title: 'LoyalAI',
    description: 'Smart loyalty platform that consolidates bonus cards and rewards programs. Allows users to collect points from multiple partners, access exclusive offers, and redeem rewards seamlessly.',
    image: assets.loyalai,
    category: 'Full-Stack',
    stacks: ['React', 'Node.js', 'MongoDB', 'Mobile App', 'Payment Integration'],
    featured: true,
    url: 'https://www.loyal-app.com/home'
  },
  {
    id: 3,
    title: 'EasySuite CRM',
    description: 'All-in-one CRM platform designed to improve sales processes and business growth. Features deal pipeline management, client relationship building, team collaboration, lead generation, and progress tracking tools.',
    image: assets.easysuite,
    category: 'AI Automation',
    stacks: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    featured: true,
    url: 'https://www.easysuite.com/'
  },
  {
    id: 4,
    title: 'AppMixer',
    description: 'Integration platform that connects various business applications and automates workflows. Enables seamless data synchronization and process automation across multiple tools and services.',
    image: assets.appmixer,
    category: 'AI Automation',
    stacks: ['React', 'Node.js', 'REST APIs', 'Webhooks', 'PostgreSQL'],
    featured: false,
    url: 'https://www.appmixer.com/'
  },
  {
    id: 5,
    title: 'CopySmith',
    description: 'AI-powered copywriting platform that generates high-quality marketing copy, product descriptions, and content. Uses advanced AI to create compelling, conversion-optimized content for businesses.',
    image: assets.copysmith,
    category: 'AI Automation',
    stacks: ['React', 'Node.js', 'OpenAI', 'Python', 'MongoDB'],
    featured: false,
    url: 'https://copysmith.ai/'
  },
  {
    id: 7,
    title: 'MyInfinite',
    description: 'AI automation platform that streamlines business processes and workflows. Provides intelligent automation solutions to enhance productivity and reduce manual tasks.',
    image: assets.myinfinite,
    category: 'AI Automation',
    stacks: ['React', 'Node.js', 'Python', 'AI/ML', 'PostgreSQL'],
    featured: false,
    url: 'https://myinfinite.ai/'
  },
  {
    id: 8,
    title: 'Xpectrum AI',
    description: 'AI-powered platform offering intelligent solutions for business automation and data analysis. Provides advanced AI capabilities to transform business operations.',
    image: assets.xpectrum,
    category: 'AI Automation',
    stacks: ['React', 'Node.js', 'Python', 'AI/ML', 'MongoDB'],
    featured: false,
    url: 'https://xpectrum-ai.com/'
  },

  // AI Agent / Chatbot Projects
  {
    id: 9,
    title: 'RAGcanvas',
    description: 'AI-powered chatbot builder utilizing enterprise Retrieval-Augmented Generation (RAG) technology. Enables businesses to create intelligent chatbots that provide accurate and context-aware responses.',
    image: assets.ragcanvas,
    category: 'AI Agent / Chatbot',
    stacks: ['React', 'Node.js', 'Python', 'LangChain', 'Vector DB', 'OpenAI'],
    featured: true,
    url: 'https://ragcanvas.com/'
  },
  {
    id: 10,
    title: 'TryRing',
    description: 'AI-powered conversational platform that provides intelligent virtual assistance. Features advanced natural language processing for seamless user interactions.',
    image: assets.tryring,
    category: 'AI Agent / Chatbot',
    stacks: ['React', 'Node.js', 'Python', 'OpenAI', 'WebRTC'],
    featured: false,
    url: 'https://www.tryring.ai/'
  },
  {
    id: 11,
    title: 'PineCall',
    description: 'AI-powered calling platform that automates phone conversations and provides intelligent call handling. Features voice AI technology for business communication automation.',
    image: assets.pinecall,
    category: 'AI Agent / Chatbot',
    stacks: ['React', 'Node.js', 'Python', 'Voice AI', 'WebRTC', 'Twilio'],
    featured: false,
    url: 'https://pinecall.io/'
  },
  {
    id: 12,
    title: 'Global Voice Direct',
    description: 'Enterprise voice communication platform with AI-powered call routing and intelligent customer service automation. Provides advanced telephony solutions for businesses.',
    image: assets.globalvoicedirect,
    category: 'AI Agent / Chatbot',
    stacks: ['React', 'Node.js', 'Voice AI', 'Telephony', 'AWS'],
    featured: false,
    url: 'https://www.globalvoicedirect.com/'
  },

  // Full-Stack Projects
  {
    id: 13,
    title: 'UserLens',
    description: 'Account-level product analytics platform for Customer Success teams. Provides comprehensive product adoption analytics at both account and user levels to help CSMs track engagement and drive retention.',
    image: assets.userlens,
    category: 'Full-Stack',
    stacks: ['React', 'Node.js', 'PostgreSQL', 'Analytics', 'Data Visualization'],
    featured: true,
    url: 'https://userlens.io/'
  },
  {
    id: 14,
    title: 'Fiscal.ai',
    description: 'Modern financial data platform providing accurate global financial data for public equities, ETFs, and funds. Features AI-powered research, KPI data, dashboards, data visualization, and robust APIs for institutional-quality financial analysis.',
    image: assets.fiscalai,
    category: 'AI Automation',
    stacks: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Data APIs'],
    featured: true,
    url: 'https://fiscal.ai/'
  },
  {
    id: 15,
    title: 'Pabau',
    description: 'Comprehensive practice management software for healthcare and wellness businesses. Features online booking, calendar management, client portal, before & after photos, payment processing, and AI-powered note dictation.',
    image: assets.pabau,
    category: 'Full-Stack',
    stacks: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Calendar Integration'],
    featured: true,
    url: 'https://www.pabau.com/'
  },
  {
    id: 17,
    title: 'GoLodger',
    description: 'Property management and booking platform for accommodations. Features booking management, payment processing, and guest communication tools.',
    image: assets.golodger,
    category: 'Full-Stack',
    stacks: ['React', 'Node.js', 'MongoDB', 'Payment Gateway', 'Booking System'],
    featured: false,
    url: 'https://golodger.com/'
  },
  {
    id: 18,
    title: 'Hotel Spider',
    description: 'Hotel management and distribution platform that connects properties with booking channels. Provides comprehensive hotel management solutions and channel management.',
    image: assets.hotelspider,
    category: 'Full-Stack',
    stacks: ['React', 'Node.js', 'PostgreSQL', 'Channel Manager', 'Booking APIs'],
    featured: false,
    url: 'https://www.hotel-spider.com/'
  },
  {
    id: 19,
    title: 'StashBee',
    description: 'Storage and logistics platform connecting users with storage solutions. Features booking management, payment processing, and logistics coordination.',
    image: assets.stashbee,
    category: 'Full-Stack',
    stacks: ['React', 'Node.js', 'MongoDB', 'Payment Integration', 'Maps API'],
    featured: false,
    url: 'https://stashbee.com/'
  },
  {
    id: 20,
    title: 'Sportunity',
    description: 'Sports and activity booking platform that connects users with sports facilities, coaches, and activities. Features booking management, payment processing, and community features.',
    image: assets.sportunity,
    category: 'Full-Stack',
    stacks: ['React', 'Node.js', 'PostgreSQL', 'Mobile App', 'Payment Gateway'],
    featured: false,
    url: 'https://sportunity.com/en'
  },
  {
    id: 21,
    title: 'IS Luxury',
    description: 'Luxury real estate platform specializing in high-end properties. Provides curated selection of luxury homes with personalized services for discerning clients.',
    image: assets.isluxury,
    category: 'Full-Stack',
    stacks: ['React', 'Node.js', 'PostgreSQL', 'Real Estate APIs', 'Image Gallery'],
    featured: false,
    url: 'https://isluxury.com/'
  },
  // Web Application Projects
  {
    id: 23,
    title: 'GitWik',
    description: 'Developer collaboration platform that combines Git repository management with wiki documentation. Enables teams to manage code and documentation in one unified platform.',
    image: assets.gitwik,
    category: 'Web Application',
    stacks: ['React', 'Node.js', 'Git Integration', 'Markdown', 'PostgreSQL'],
    featured: false,
    url: 'https://www.gitwik.com/'
  },
  {
    id: 25,
    title: 'Access Experts 247',
    description: 'Expert consultation and access platform connecting users with industry professionals. Features booking, video conferencing, and payment processing for expert consultations.',
    image: assets.accessexperts247,
    category: 'Web Application',
    stacks: ['React', 'Node.js', 'Video Conferencing', 'Payment Gateway', 'PostgreSQL'],
    featured: false,
    url: 'https://accessexperts247.com/'
  }
];
