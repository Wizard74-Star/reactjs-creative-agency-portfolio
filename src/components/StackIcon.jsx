import { motion } from "motion/react";
import * as simpleIcons from "simple-icons";

const StackIcon = ({ stack, size = 80, className = "" }) => {
  // Map our stack IDs to simple-icons variable names (with si prefix)
  const iconNameMap = {
    'react': 'siReact',
    'next': 'siNextdotjs',
    'vue': 'siVuedotjs',
    'angular': 'siAngular',
    'svelte': 'siSvelte',
    'nuxt': 'siNuxtdotjs',
    'remix': 'siRemix',
    'bubble': 'siBubble',
    'figma': 'siFigma',
    'tailwind': 'siTailwindcss',
    'bootstrap': 'siBootstrap',
    'material-ui': 'siMui',
    'chakra-ui': 'siChakraui',
    'nodejs': 'siNodedotjs',
    'express': 'siExpress',
    'nestjs': 'siNestjs',
    'fastify': 'siFastify',
    'django': 'siDjango',
    'flask': 'siFlask',
    'fastapi': 'siFastapi',
    'aspnet': 'siDotnet',
    'wordpress': 'siWordpress',
    'crm': null, // Custom icon needed
    'ecommerce': null, // Custom icon needed
    'laravel': 'siLaravel',
    'spring': 'siSpring',
    'mongodb': 'siMongodb',
    'postgresql': 'siPostgresql',
    'mysql': 'siMysql',
    'sql-server': 'siMicrosoftsqlserver',
    'redis': 'siRedis',
    'prisma': 'siPrisma',
    'supabase': 'siSupabase',
    'cassandra': 'siApachecassandra',
    'react-native': 'siReact',
    'flutter': 'siFlutter',
    'swift': 'siSwift',
    'kotlin': 'siKotlin',
    'ionic': 'siIonic',
    'ios': 'siApple',
    'solidity': 'siSolidity',
    'truffle': 'siTruffle',
    'hardhat': 'siHardhat',
    'web3': 'siWeb3dotjs',
    'ethers': 'siEthersdotjs',
    'ipfs': 'siIpfs',
    'polygon': 'siPolygon',
    'openai': 'siOpenai',
    'chatgpt': 'siOpenai',
    'python': 'siPython',
    'tensorflow': 'siTensorflow',
    'pytorch': 'siPytorch',
    'langchain': 'siLangchain',
    'rag-systems': null, // Custom icon needed
    'lindy-ai': null, // Custom icon needed
    'botpress': null, // Custom icon needed
    'lovable': null, // Custom icon needed
    'n8n': 'siN8n',
    'zapier': 'siZapier',
    'make': 'siMake',
    'autodesk': 'siAutodesk',
    'monday': 'siMondaydotcom',
    'zoho': 'siZoho',
    'ghl': null, // Custom icon needed
    'aws': null, // Not available in simple-icons, will use fallback
    'docker': 'siDocker',
    'kubernetes': 'siKubernetes',
    'azure': null, // Not available in simple-icons, will use fallback
    'gcp': 'siGooglecloud',
    'vercel': 'siVercel',
    'netlify': 'siNetlify',
    'firebase': 'siFirebase',
    'graphql': 'siGraphql',
    'apollo': 'siApollographql',
    'webrtc': 'siWebrtc',
    'websockets': null, // Custom icon needed
    'stripe': 'siStripe',
    'paypal': 'siPaypal',
    'typescript': 'siTypescript',
    'javascript': 'siJavascript',
    'go': 'siGo',
    'rust': 'siRust',
    'java': 'siJava',
    'php': 'siPhp',
    'csharp': 'siCsharp',
    'jest': 'siJest',
    'cypress': 'siCypress',
    'playwright': null, // Not available in simple-icons, will use fallback
    'puppeteer': null // Not available in simple-icons, will use fallback
  };

  const getIcon = () => {
    const iconName = iconNameMap[stack.id];
    
    // If explicitly set to null, use fallback
    if (iconName === null) {
      return {
        path: '',
        title: stack.name,
        hex: stack.color?.replace('#', '') || '6366F1'
      };
    }
    
    if (!iconName) {
      // Fallback to a generic icon
      return {
        path: '',
        title: stack.name,
        hex: stack.color?.replace('#', '') || '6366F1'
      };
    }

    try {
      // Get icon from simple-icons
      const icon = simpleIcons[iconName];
      if (icon && icon.path) {
        return icon;
      }
    } catch (error) {
      console.warn(`Icon not found for ${iconName}:`, error);
    }

    // Fallback
    return {
      path: '',
      title: stack.name,
      hex: stack.color?.replace('#', '') || '6366F1'
    };
  };

  // Custom SVG icons for stacks not in simple-icons
  const customIcons = {
    'aws': (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M5.8 21.196l-.01-7.987 2.3 2.3a12.7 12.7 0 0 0 8.1-7.5l-2.28-2.3.01-.01a12.7 12.7 0 0 0-8.13 2.26L5.8 2.804v18.392zm.792-18.4l2.298 2.3a12.7 12.7 0 0 1 8.13-2.26l2.3-2.3-2.3-2.3a12.7 12.7 0 0 0-8.1 7.5l-2.28 2.3-.01.01zm15.4 18.4l-2.3-2.3a12.7 12.7 0 0 1-8.1 7.5l-2.28 2.3.01.01a12.7 12.7 0 0 0 8.13-2.26l2.3 2.3V2.804zm-.792 18.4l-2.298-2.3a12.7 12.7 0 0 1-8.13 2.26l-2.3 2.3 2.3 2.3a12.7 12.7 0 0 0 8.1-7.5l2.28-2.3-.01-.01z" fill="#FF9900"/>
      </svg>
    ),
    'azure': (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M13.05 4.24L6.56 18.05l-2.24-4.95L.05 18.05h3.07l10.4-18.1 3.24 6zm.71 5.94l6.9 10.05-3.66-6.3-3.24 6.3h10.5l-10.5-10.05z" fill="#0078D4"/>
      </svg>
    ),
    'playwright': (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#45BA4B"/>
      </svg>
    ),
    'puppeteer': (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="#40B5A4"/>
      </svg>
    ),
    'websockets': (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z" fill="#010101"/>
      </svg>
    ),
    'rag-systems': (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#6366F1" strokeWidth="2" fill="none"/>
      </svg>
    ),
    'lindy-ai': (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#8B5CF6"/>
        <circle cx="12" cy="12" r="3" fill="#8B5CF6"/>
      </svg>
    ),
    'botpress': (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#20B2AA"/>
      </svg>
    ),
    'lovable': (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF6B6B"/>
      </svg>
    ),
    'ghl': (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00A4FF" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="12" r="2" fill="#00A4FF"/>
      </svg>
    ),
    'crm': (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#4A90E2"/>
      </svg>
    ),
    'ecommerce': (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#FF6B35"/>
      </svg>
    )
  };

  const icon = getIcon();
  const iconColor = `#${icon.hex}`;

  // Check for custom icon first
  if (customIcons[stack.id]) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ width: size, height: size }}
        className="flex items-center justify-center"
      >
        {customIcons[stack.id]}
      </motion.div>
    );
  }

  // If we have a path from simple-icons, use it
  if (icon.path) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ width: size, height: size }}
        className="flex items-center justify-center"
      >
        <svg 
          viewBox="0 0 24 24" 
          width={size} 
          height={size} 
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{icon.title}</title>
          <path d={icon.path} fill={iconColor} />
        </svg>
      </motion.div>
    );
  }

  // Fallback icon
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ width: size, height: size }}
      className="flex items-center justify-center"
    >
      <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
        <rect x="20" y="20" width="60" height="60" fill={iconColor} rx="8"/>
        <text x="50" y="55" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
          {stack.name.charAt(0)}
        </text>
      </svg>
    </motion.div>
  );
};

export default StackIcon;
