// Project categories: Full-Stack, Mobile App, Blockchain, AI Automation, AI Agent/Chatbot
import assets from '../assets/assets';

export const projectCategories = [
  'All Projects',
  'Full-Stack',
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
    category: 'AI Agent / Chatbot',
    stacks: ['React', 'Node.js', 'Python', 'OpenAI', 'PostgreSQL', 'AWS'],
    featured: true,
    url: 'https://www.sprintiq.ai/'
  },
  {
    id: 2,
    title: 'LoyalAI',
    description: 'Smart loyalty platform that consolidates bonus cards and rewards programs. Allows users to collect points from multiple partners, access exclusive offers, and redeem rewards seamlessly.',
    image: assets.loyalai,
    category: ['Full-Stack', 'Mobile App'],
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
  {
    id: 26,
    title: 'Utropia',
    description: 'Innovative platform designed to transform digital experiences. Utropia provides cutting-edge solutions for modern businesses seeking to enhance their online presence and user engagement.',
    image: assets.utropia,
    category: 'Full-Stack',
    stacks: ['React', 'Node.js', 'PostgreSQL'],
    featured: false,
    url: 'https://utropia.io/'
  },
  {
    id: 27,
    title: 'Rayls',
    description: 'The blockchain for banks. Built to bring $100 trillion liquidity and 6 billion bank customers onchain. Rayls is a scalable private and public blockchain for financial institutions with native compliance, governance controls, and quantum-safe privacy preservation.',
    image: assets.rayls,
    category: 'Blockchain',
    stacks: ['Blockchain', 'Smart Contracts', 'Privacy', 'Compliance'],
    featured: false,
    url: 'https://www.rayls.com/'
  },
  {
    id: 28,
    title: 'Decibel',
    description: 'The trading engine for global markets and the onchain future. Decibel is a fully onchain trading platform built on Aptos, combining spot, perps, and vault-based strategies with cross-margin and multicollateral support for high-performance trading.',
    image: assets.decibel,
    category: 'Blockchain',
    stacks: ['Blockchain', 'DeFi', 'Trading', 'Aptos'],
    featured: false,
    url: 'https://decibel.trade/'
  },
  {
    id: 29,
    title: 'PushPurr',
    description: 'The couple\'s app that speaks the heart, even when you\'re silent. PushPurr helps couples connect through Purrs (pre-written emotional nudges), Promises (scheduled acts of love), Questions (expert-crafted conversation starters), and real-time notifications to stay close.',
    image: assets.pushpurr,
    category: 'Mobile App',
    stacks: ['React Native', 'iOS', 'Node.js', 'Real-time Notifications'],
    featured: false,
    url: 'https://www.pushpurr.com/'
  }
];
