export const stacks = [
  // Frontend Frameworks
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    description: 'A powerful JavaScript library for building interactive user interfaces. We use React to create component-based, reusable UI elements that deliver fast, responsive experiences across web and mobile platforms.',
    color: '#61DAFB',
    projects: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18, 19, 20, 21, 26]
  },
  {
    id: 'next',
    name: 'Next.js',
    category: 'Frontend',
    description: 'The React framework for production. Next.js enables server-side rendering, static site generation, and optimized performance out of the box, perfect for SEO-friendly, high-performance web applications.',
    color: '#000000',
    projects: []
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'Frontend',
    description: 'A progressive JavaScript framework for building user interfaces. Vue offers an intuitive API, excellent performance, and seamless integration capabilities for modern web applications.',
    color: '#4FC08D',
    projects: []
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'Frontend',
    description: 'Platform and framework for building single-page client applications using HTML and TypeScript. Angular provides a complete solution for enterprise-scale applications.',
    color: '#DD0031',
    projects: []
  },
  {
    id: 'svelte',
    name: 'Svelte',
    category: 'Frontend',
    description: 'Component framework that compiles to highly optimized vanilla JavaScript. Svelte delivers exceptional performance by shifting work to compile time.',
    color: '#FF3E00',
    projects: []
  },
  {
    id: 'nuxt',
    name: 'Nuxt.js',
    category: 'Frontend',
    description: 'The Intuitive Vue Framework. Nuxt makes web development simple and powerful with automatic code splitting, server-side rendering, and static site generation.',
    color: '#00DC82',
    projects: []
  },
  {
    id: 'remix',
    name: 'Remix',
    category: 'Frontend',
    description: 'Full-stack web framework that lets you focus on the user interface and work back through web fundamentals to deliver a fast, slick, and resilient user experience.',
    color: '#000000',
    projects: []
  },
  {
    id: 'bubble',
    name: 'Bubble.io',
    category: 'Frontend',
    description: 'No-code platform for building web applications visually. Bubble.io enables rapid development of complex web apps without writing code, with powerful database, API, and workflow capabilities.',
    color: '#E61E4D',
    projects: []
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Frontend',
    description: 'Collaborative design tool for creating user interfaces, prototypes, and design systems. Figma enables design-to-code workflows and seamless collaboration between designers and developers.',
    color: '#F24E1E',
    projects: []
  },
  
  // Styling & UI
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    description: 'Utility-first CSS framework for rapidly building custom user interfaces. Tailwind provides low-level utility classes to build complex designs without leaving HTML.',
    color: '#06B6D4',
    projects: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18, 19, 20, 21, 26]
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'Frontend',
    description: 'Popular CSS framework for developing responsive and mobile-first websites. Bootstrap provides pre-built components and utilities for rapid UI development.',
    color: '#7952B3',
    projects: []
  },
  {
    id: 'material-ui',
    name: 'Material-UI',
    category: 'Frontend',
    description: 'React components that implement Google\'s Material Design. Material-UI provides a comprehensive suite of UI tools to help you ship new features faster.',
    color: '#007FFF',
    projects: []
  },
  {
    id: 'chakra-ui',
    name: 'Chakra UI',
    category: 'Frontend',
    description: 'Simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
    color: '#319795',
    projects: []
  },
  
  // Backend Frameworks
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    description: 'JavaScript runtime built on Chrome\'s V8 engine. We leverage Node.js to build scalable, high-performance server-side applications and APIs that power real-time features and microservices.',
    color: '#339933',
    projects: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18, 19, 20, 21, 26]
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend',
    description: 'Fast, minimalist web framework for Node.js. Express enables rapid API development with middleware support, routing, and seamless integration with databases and services.',
    color: '#000000',
    projects: [3, 5, 14, 17, 19]
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'Backend',
    description: 'Progressive Node.js framework for building efficient and scalable server-side applications. NestJS uses TypeScript and provides a modular architecture.',
    color: '#E0234E',
    projects: []
  },
  {
    id: 'fastify',
    name: 'Fastify',
    category: 'Backend',
    description: 'Fast and low overhead web framework for Node.js. Fastify focuses on performance and developer experience with a plugin architecture.',
    color: '#000000',
    projects: []
  },
  {
    id: 'django',
    name: 'Django',
    category: 'Backend',
    description: 'High-level Python web framework that encourages rapid development and clean, pragmatic design. Django includes an ORM, admin interface, and security features.',
    color: '#092E20',
    projects: []
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'Backend',
    description: 'Lightweight WSGI web application framework in Python. Flask is designed to make getting started quick and easy, with the ability to scale up to complex applications.',
    color: '#000000',
    projects: []
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Backend',
    description: 'Modern, fast web framework for building APIs with Python based on standard Python type hints. FastAPI provides automatic API documentation, high performance, and easy-to-use features.',
    color: '#009688',
    projects: []
  },
  {
    id: 'aspnet',
    name: '.NET / ASP.NET',
    category: 'Backend',
    description: 'Microsoft\'s web application framework for building modern web applications and APIs. ASP.NET provides a unified platform for building web apps with C# and .NET.',
    color: '#512BD4',
    projects: []
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'Backend',
    description: 'Popular content management system and website builder. WordPress powers millions of websites with its flexible plugin architecture, themes, and extensive customization options.',
    color: '#21759B',
    projects: []
  },
  {
    id: 'crm',
    name: 'CRM',
    category: 'Backend',
    description: 'Customer Relationship Management systems for managing customer interactions, sales pipelines, and business relationships. CRM platforms help businesses track leads, manage contacts, and automate sales processes.',
    color: '#4A90E2',
    projects: []
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    category: 'Backend',
    description: 'E-commerce platforms and solutions for building online stores and marketplaces. E-commerce systems provide product management, shopping carts, payment processing, and order fulfillment capabilities.',
    color: '#FF6B35',
    projects: []
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'Backend',
    description: 'PHP web application framework with expressive, elegant syntax. Laravel makes development enjoyable by simplifying common tasks used in web projects.',
    color: '#FF2D20',
    projects: []
  },
  {
    id: 'spring',
    name: 'Spring Boot',
    category: 'Backend',
    description: 'Java-based framework for creating microservices and enterprise applications. Spring Boot simplifies the development of production-ready applications.',
    color: '#6DB33F',
    projects: []
  },
  
  // Databases
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database',
    description: 'NoSQL database for modern applications. MongoDB\'s flexible document model enables rapid development and scales seamlessly with your application\'s growth.',
    color: '#47A248',
    projects: [3, 5, 14, 17, 19]
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Advanced open-source relational database. PostgreSQL provides ACID compliance, JSON support, and powerful querying capabilities for complex data requirements.',
    color: '#336791',
    projects: [1, 2, 13, 15, 18, 20, 21, 26]
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Database',
    description: 'Popular open-source relational database management system. MySQL provides reliable, scalable data storage for web applications and enterprise solutions.',
    color: '#4479A1',
    projects: [4]
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'Database',
    description: 'In-memory data structure store used as a database, cache, and message broker. Redis enables high-performance caching and real-time features in our applications.',
    color: '#DC382D',
    projects: [5]
  },
  {
    id: 'prisma',
    name: 'Prisma',
    category: 'Database',
    description: 'Next-generation ORM for Node.js and TypeScript. Prisma makes database access easy with an auto-generated query builder for type safety.',
    color: '#2D3748',
    projects: []
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Database',
    description: 'Open source Firebase alternative. Supabase provides a Postgres database, authentication, real-time subscriptions, and storage.',
    color: '#3ECF8E',
    projects: []
  },
  {
    id: 'cassandra',
    name: 'Apache Cassandra',
    category: 'Database',
    description: 'Distributed NoSQL database designed to handle large amounts of data across many commodity servers. Cassandra provides high availability with no single point of failure.',
    color: '#1287B1',
    projects: []
  },
  {
    id: 'sql-server',
    name: 'SQL Server',
    category: 'Database',
    description: 'Microsoft\'s relational database management system. SQL Server provides enterprise-grade data management, analytics, and business intelligence capabilities for mission-critical applications.',
    color: '#CC2927',
    projects: []
  },
  
  // Mobile Development
  {
    id: 'react-native',
    name: 'React Native',
    category: 'Mobile',
    description: 'Framework for building native mobile apps using React. We create cross-platform iOS and Android applications with a single codebase, delivering native performance and user experience.',
    color: '#61DAFB',
    projects: [14, 20, 29]
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'Mobile',
    description: 'Google\'s UI toolkit for building natively compiled applications. Flutter enables us to create beautiful, fast mobile apps for iOS and Android from a single codebase.',
    color: '#02569B',
    projects: []
  },
  {
    id: 'swift',
    name: 'Swift',
    category: 'Mobile',
    description: 'Powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS. Swift is designed to be safe, fast, and expressive.',
    color: '#FA7343',
    projects: []
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'Mobile',
    description: 'Modern programming language for Android development. Kotlin is concise, safe, and interoperable with Java, making Android development more productive.',
    color: '#7F52FF',
    projects: []
  },
  {
    id: 'ionic',
    name: 'Ionic',
    category: 'Mobile',
    description: 'Cross-platform mobile app development framework. Ionic allows you to build native iOS and Android apps using web technologies.',
    color: '#3880FF',
    projects: []
  },
  {
    id: 'ios',
    name: 'iOS',
    category: 'Mobile',
    description: 'Apple\'s mobile operating system for iPhone and iPad devices. iOS development enables us to create native applications with Swift and Objective-C, delivering optimized performance and seamless user experiences.',
    color: '#000000',
    projects: [29]
  },
  
  // Blockchain
  {
    id: 'solidity',
    name: 'Solidity',
    category: 'Blockchain',
    description: 'Programming language for writing smart contracts on Ethereum and other blockchain platforms. We develop secure, audited smart contracts for DeFi, NFTs, and decentralized applications.',
    color: '#363636',
    projects: [27, 28]
  },
  {
    id: 'truffle',
    name: 'Truffle',
    category: 'Blockchain',
    description: 'Development framework for Ethereum smart contracts. Truffle provides testing, compilation, and deployment tools that streamline blockchain development and ensure contract reliability.',
    color: '#3FE0C5',
    projects: [18]
  },
  {
    id: 'hardhat',
    name: 'Hardhat',
    category: 'Blockchain',
    description: 'Development environment for Ethereum software. Hardhat provides compilation, testing, and debugging tools that make smart contract development efficient and reliable.',
    color: '#FFF100',
    projects: [17]
  },
  {
    id: 'web3',
    name: 'Web3.js',
    category: 'Blockchain',
    description: 'JavaScript library for interacting with Ethereum blockchain. Web3.js enables us to connect applications to blockchain networks, interact with smart contracts, and manage wallets.',
    color: '#F16822',
    projects: [19, 20, 27, 28]
  },
  {
    id: 'ethers',
    name: 'Ethers.js',
    category: 'Blockchain',
    description: 'Complete Ethereum library for JavaScript. Ethers.js offers a clean, simple API for interacting with Ethereum blockchain and smart contracts.',
    color: '#3C3C3D',
    projects: [17, 20, 27, 28]
  },
  {
    id: 'ipfs',
    name: 'IPFS',
    category: 'Blockchain',
    description: 'Distributed system for storing and accessing files, websites, applications, and data. IPFS provides a peer-to-peer method of storing and sharing hypermedia.',
    color: '#65C2CB',
    projects: [18]
  },
  {
    id: 'polygon',
    name: 'Polygon',
    category: 'Blockchain',
    description: 'Ethereum scaling platform enabling developers to build scalable user-friendly dApps with low transaction fees. Polygon provides faster and cheaper transactions.',
    color: '#8247E5',
    projects: []
  },
  
  // AI & Machine Learning
  {
    id: 'openai',
    name: 'OpenAI API',
    category: 'AI',
    description: 'Powerful AI models for natural language processing and generation. We integrate OpenAI to build intelligent chatbots, content generators, and AI-powered features that enhance user experiences.',
    color: '#412991',
    projects: [1, 5, 9, 10]
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Language',
    description: 'Versatile programming language for AI, automation, and backend development. Python\'s extensive libraries make it ideal for machine learning, data processing, and API development.',
    color: '#3776AB',
    projects: [1, 2, 4, 5, 7, 8, 9, 10, 11]
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'AI',
    description: 'End-to-end open source platform for machine learning. TensorFlow provides tools, libraries and community resources to help researchers push the state-of-the-art in ML.',
    color: '#FF6F00',
    projects: []
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'AI',
    description: 'Open source machine learning framework that accelerates the path from research prototyping to production deployment. PyTorch is known for its flexibility and ease of use.',
    color: '#EE4C2C',
    projects: []
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'AI',
    description: 'Framework for developing applications powered by language models. LangChain simplifies building LLM applications with chains, agents, and memory.',
    color: '#000000',
    projects: [9]
  },
  {
    id: 'rag-systems',
    name: 'RAG Systems',
    category: 'AI',
    description: 'Retrieval-Augmented Generation systems that combine information retrieval with language models. RAG systems enable AI applications to access and use external knowledge bases for more accurate and context-aware responses.',
    color: '#6366F1',
    projects: []
  },
  {
    id: 'lindy-ai',
    name: 'Lindy.ai',
    category: 'AI',
    description: 'AI automation platform that helps businesses automate workflows and processes using artificial intelligence. Lindy.ai enables intelligent task automation and process optimization.',
    color: '#8B5CF6',
    projects: []
  },
  {
    id: 'botpress',
    name: 'BotPress',
    category: 'AI',
    description: 'Open-source conversational AI platform for building chatbots and virtual assistants. BotPress provides tools for creating, deploying, and managing intelligent conversational interfaces.',
    color: '#20B2AA',
    projects: []
  },
  {
    id: 'lovable',
    name: 'Lovable',
    category: 'AI',
    description: 'AI-powered development platform that accelerates web application creation. Lovable uses AI to generate, iterate, and deploy applications with natural language instructions.',
    color: '#FF6B6B',
    projects: []
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI',
    description: 'Advanced AI language model developed by OpenAI. ChatGPT enables natural language understanding, conversation, content generation, and intelligent automation across various applications.',
    color: '#10A37F',
    projects: []
  },
  
  // Automation & Tools
  {
    id: 'n8n',
    name: 'n8n',
    category: 'Automation',
    description: 'Workflow automation platform that connects APIs and services. We use n8n to create powerful automation workflows, integrate systems, and streamline business processes without code complexity.',
    color: '#FF6D5A',
    projects: [1, 2, 3, 4, 5, 7, 8]
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'Automation',
    description: 'Platform for automating workflows by connecting apps and services. Zapier enables non-technical users to automate repetitive tasks without coding.',
    color: '#FF4A00',
    projects: []
  },
  {
    id: 'make',
    name: 'Make.com',
    category: 'Automation',
    description: 'Visual automation platform that connects apps and services to automate workflows. Make.com enables complex automation scenarios with a visual interface and powerful integration capabilities.',
    color: '#00C896',
    projects: []
  },
  {
    id: 'autodesk',
    name: 'AutoDesk',
    category: 'Automation',
    description: 'Design and engineering software platform providing tools for 3D design, modeling, and automation. AutoDesk offers APIs and integrations for automating design workflows and processes.',
    color: '#0696D7',
    projects: []
  },
  {
    id: 'monday',
    name: 'Monday.com',
    category: 'Automation',
    description: 'Work operating system that powers teams to run projects and workflows with confidence. Monday.com provides project management, automation, and collaboration tools for teams of all sizes.',
    color: '#FF3D57',
    projects: []
  },
  {
    id: 'zoho',
    name: 'Zoho',
    category: 'Automation',
    description: 'Comprehensive suite of business applications including CRM, email, office suite, and automation tools. Zoho enables businesses to manage operations, automate workflows, and integrate various business processes.',
    color: '#C8202F',
    projects: []
  },
  {
    id: 'ghl',
    name: 'GHL',
    category: 'Automation',
    description: 'GoHighLevel all-in-one marketing and sales platform for agencies and businesses. GHL provides CRM, automation, funnels, SMS, email marketing, and appointment scheduling in one platform.',
    color: '#00A4FF',
    projects: []
  },
  
  // Cloud & DevOps
  {
    id: 'aws',
    name: 'AWS',
    category: 'Cloud',
    description: 'Amazon Web Services cloud computing platform. We leverage AWS for scalable infrastructure, storage, and services that power enterprise-grade applications.',
    color: '#FF9900',
    projects: [1, 2]
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Cloud',
    description: 'Platform for developing, shipping, and running applications using containerization. Docker enables consistent environments from development to production.',
    color: '#2496ED',
    projects: []
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'Cloud',
    description: 'Open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.',
    color: '#326CE5',
    projects: []
  },
  {
    id: 'azure',
    name: 'Azure',
    category: 'Cloud',
    description: 'Microsoft\'s cloud computing platform. Azure provides a comprehensive suite of cloud services for building, deploying, and managing applications.',
    color: '#0078D4',
    projects: []
  },
  {
    id: 'gcp',
    name: 'Google Cloud',
    category: 'Cloud',
    description: 'Suite of cloud computing services. Google Cloud Platform provides infrastructure, platform, and software services for building and deploying applications.',
    color: '#4285F4',
    projects: []
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'Cloud',
    description: 'Platform for frontend frameworks and static sites. Vercel provides the best developer experience for deploying and scaling web applications.',
    color: '#000000',
    projects: []
  },
  {
    id: 'netlify',
    name: 'Netlify',
    category: 'Cloud',
    description: 'Platform for deploying modern web projects. Netlify provides continuous deployment, serverless functions, and edge computing capabilities.',
    color: '#00C7B7',
    projects: []
  },
  
  // Backend Services
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'Backend',
    description: 'Google\'s platform for building mobile and web applications. Firebase provides authentication, real-time database, cloud storage, and hosting services that accelerate development.',
    color: '#FFCA28',
    projects: []
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'Backend',
    description: 'Query language for APIs and a runtime for executing those queries. GraphQL provides a more efficient, powerful and flexible alternative to REST.',
    color: '#E10098',
    projects: []
  },
  {
    id: 'apollo',
    name: 'Apollo',
    category: 'Backend',
    description: 'Platform for building a data graph, a communication layer that seamlessly connects your application clients to your back-end services.',
    color: '#311C87',
    projects: []
  },
  {
    id: 'webrtc',
    name: 'WebRTC',
    category: 'Backend',
    description: 'Real-time communication protocol that enables peer-to-peer audio, video, and data sharing directly between browsers and devices. We use WebRTC to build video conferencing, voice calling, and real-time collaboration features without plugins.',
    color: '#333333',
    projects: [10, 11]
  },
  {
    id: 'websockets',
    name: 'WebSockets',
    category: 'Backend',
    description: 'Communication protocol that provides full-duplex communication channels over a single TCP connection. WebSockets enable real-time, bidirectional data exchange between client and server for live updates and interactive features.',
    color: '#010101',
    projects: []
  },
  
  // Payment & E-commerce
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'Payment',
    description: 'Payment processing platform for online businesses. We integrate Stripe to enable secure, seamless payment processing with support for subscriptions, invoices, and global payments.',
    color: '#635BFF',
    projects: [3, 15, 18, 20]
  },
  {
    id: 'paypal',
    name: 'PayPal',
    category: 'Payment',
    description: 'Online payment system that supports online money transfers. PayPal provides secure payment processing for e-commerce and subscription services.',
    color: '#00457C',
    projects: []
  },
  
  // Languages
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Language',
    description: 'Typed superset of JavaScript that enhances code quality and developer experience. TypeScript helps us build more maintainable, error-free applications with better IDE support.',
    color: '#3178C6',
    projects: []
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Language',
    description: 'High-level programming language that is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is essential for web development.',
    color: '#F7DF1E',
    projects: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18, 19, 20, 21, 26]
  },
  {
    id: 'go',
    name: 'Go',
    category: 'Language',
    description: 'Statically typed, compiled programming language designed at Google. Go is known for its simplicity, concurrency support, and fast compilation.',
    color: '#00ADD8',
    projects: []
  },
  {
    id: 'rust',
    name: 'Rust',
    category: 'Language',
    description: 'Systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. Rust is memory-safe without garbage collection.',
    color: '#000000',
    projects: []
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Language',
    description: 'High-level, class-based, object-oriented programming language. Java is designed to have as few implementation dependencies as possible.',
    color: '#ED8B00',
    projects: []
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'Language',
    description: 'General-purpose scripting language especially suited to web development. PHP is widely used for server-side web development.',
    color: '#777BB4',
    projects: []
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'Language',
    description: 'Modern, object-oriented programming language developed by Microsoft. C# is widely used for building Windows applications, web services, and enterprise software with the .NET framework.',
    color: '#239120',
    projects: []
  },
  
  // Testing & Quality
  {
    id: 'jest',
    name: 'Jest',
    category: 'Testing',
    description: 'JavaScript testing framework maintained by Facebook. Jest provides a zero-configuration testing experience with built-in mocking and code coverage.',
    color: '#C21325',
    projects: []
  },
  {
    id: 'cypress',
    name: 'Cypress',
    category: 'Testing',
    description: 'End-to-end testing framework for web applications. Cypress enables you to write tests that run in a real browser with time-travel debugging.',
    color: '#17202C',
    projects: []
  },
  {
    id: 'playwright',
    name: 'Playwright',
    category: 'Testing',
    description: 'End-to-end testing framework for web applications. Playwright enables reliable end-to-end testing for modern web apps across all browsers.',
    color: '#45BA4B',
    projects: []
  },
  {
    id: 'puppeteer',
    name: 'Puppeteer',
    category: 'Testing',
    description: 'Node.js library for controlling headless Chrome or Chromium browsers. Puppeteer enables automated testing, web scraping, and browser automation with a high-level API.',
    color: '#40B5A4',
    projects: []
  }
];

export const stackCategories = [
  'All Stacks',
  'Frontend',
  'Backend',
  'Mobile',
  'Blockchain',
  'AI',
  'Database',
  'Automation',
  'Cloud',
  'Language',
  'Payment',
  'Testing'
];
