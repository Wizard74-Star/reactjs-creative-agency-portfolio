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
    'laravel': 'siLaravel',
    'spring': 'siSpring',
    'mongodb': 'siMongodb',
    'postgresql': 'siPostgresql',
    'mysql': 'siMysql',
    'redis': 'siRedis',
    'prisma': 'siPrisma',
    'supabase': 'siSupabase',
    'cassandra': 'siApachecassandra',
    'react-native': 'siReact',
    'flutter': 'siFlutter',
    'swift': 'siSwift',
    'kotlin': 'siKotlin',
    'ionic': 'siIonic',
    'solidity': 'siSolidity',
    'truffle': 'siTruffle',
    'hardhat': 'siHardhat',
    'web3': 'siWeb3dotjs',
    'ethers': 'siEthersdotjs',
    'ipfs': 'siIpfs',
    'polygon': 'siPolygon',
    'openai': 'siOpenai',
    'python': 'siPython',
    'tensorflow': 'siTensorflow',
    'pytorch': 'siPytorch',
    'langchain': 'siLangchain',
    'n8n': 'siN8n',
    'zapier': 'siZapier',
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
    'stripe': 'siStripe',
    'paypal': 'siPaypal',
    'typescript': 'siTypescript',
    'javascript': 'siJavascript',
    'go': 'siGo',
    'rust': 'siRust',
    'java': 'siJava',
    'php': 'siPhp',
    'jest': 'siJest',
    'cypress': 'siCypress',
    'playwright': null // Not available in simple-icons, will use fallback
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
