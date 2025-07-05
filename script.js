// Configuration object for all URLs
const config = {
  urls: {
    support: 'https://example.com/support',
    quickDeploy: 'https://example.com/quick-deploy',
    manualInstall: 'https://example.com/manual-install',
    servers: {
      server1: 'https://example.com/server1',
      server2: 'https://example.com/server2',
      server3: 'https://example.com/server3'
    },
    qrServers: {
      server1: 'https://example.com/qr-server1',
      server2: 'https://example.com/qr-server2'
    },
    deployment: {
      heroku: 'https://heroku.com/deploy',
      replit: 'https://replit.com/github'
    },
    download: {
      latestRepo: 'https://example.com/latest-repo',
      githubRepo: 'https://github.com/cypherx/repo'
    },
    legal: {
      terms: 'https://example.com/terms',
      privacy: 'https://example.com/privacy',
      disclaimer: 'https://example.com/disclaimer'
    },
    resources: {
      github: 'https://github.com/cypherx',
      docs: 'https://example.com/docs',
      releases: 'https://example.com/releases'
    },
    social: {
      discord: 'https://discord.gg/cypherx',
      telegram: 'https://t.me/cypherx',
      twitter: 'https://twitter.com/cypherx',
      youtube: 'https://youtube.com/cypherx'
    }
  }
};

// DOM Elements
const elements = {
  supportBtn: document.getElementById('supportBtn'),
  quickDeployBtn: document.getElementById('quickDeployBtn'),
  manualInstallBtn: document.getElementById('manualInstallBtn'),
  serverButtons: {
    server1: document.getElementById('server1Btn'),
    server2: document.getElementById('server2Btn'),
    server3: document.getElementById('server3Btn')
  },
  qrButtons: {
    server1: document.getElementById('qrServer1Btn'),
    server2: document.getElementById('qrServer2Btn')
  },
  deployButtons: {
    heroku: document.getElementById('herokuBtn'),
    replit: document.getElementById('replitBtn')
  },
  downloadButtons: {
    latestRepo: document.getElementById('latestRepoBtn'),
    githubRepo: document.getElementById('githubRepoBtn')
  },
  understandBtn: document.getElementById('understandBtn'),
  footerNavButtons: {
    home: document.getElementById('homeBtn'),
    features: document.getElementById('featuresBtn'),
    deploy: document.getElementById('deployBtn'),
    download: document.getElementById('downloadBtn')
  },
  legalLinks: {
    terms: document.getElementById('termsLink'),
    privacy: document.getElementById('privacyLink'),
    disclaimer: document.getElementById('disclaimerLink')
  },
  resourceLinks: {
    github: document.getElementById('githubLink'),
    docs: document.getElementById('docsLink'),
    releases: document.getElementById('releasesLink')
  },
  socialLinks: {
    discord: document.getElementById('discordLink'),
    telegram: document.getElementById('telegramLink'),
    twitter: document.getElementById('twitterLink'),
    youtube: document.getElementById('youtubeLink')
  }
};

// Initialize all event listeners
function initEventListeners() {
  // Main buttons
  elements.supportBtn.addEventListener('click', () => openUrl(config.urls.support));
  elements.quickDeployBtn.addEventListener('click', () => openUrl(config.urls.quickDeploy));
  elements.manualInstallBtn.addEventListener('click', () => openUrl(config.urls.manualInstall));
  
  // Server buttons
  elements.serverButtons.server1.addEventListener('click', () => openUrl(config.urls.servers.server1));
  elements.serverButtons.server2.addEventListener('click', () => openUrl(config.urls.servers.server2));
  elements.serverButtons.server3.addEventListener('click', () => openUrl(config.urls.servers.server3));
  
  // QR buttons
  elements.qrButtons.server1.addEventListener('click', () => openUrl(config.urls.qrServers.server1));
  elements.qrButtons.server2.addEventListener('click', () => openUrl(config.urls.qrServers.server2));
  
  // Deployment buttons
  elements.deployButtons.heroku.addEventListener('click', () => openUrl(config.urls.deployment.heroku));
  elements.deployButtons.replit.addEventListener('click', () => openUrl(config.urls.deployment.replit));
  
  // Download buttons
  elements.downloadButtons.latestRepo.addEventListener('click', () => openUrl(config.urls.download.latestRepo));
  elements.downloadButtons.githubRepo.addEventListener('click', () => openUrl(config.urls.download.githubRepo));
  
  // Legal links
  elements.legalLinks.terms.addEventListener('click', () => openUrl(config.urls.legal.terms));
  elements.legalLinks.privacy.addEventListener('click', () => openUrl(config.urls.legal.privacy));
  elements.legalLinks.disclaimer.addEventListener('click', () => openUrl(config.urls.legal.disclaimer));
  
  // Resource links
  elements.resourceLinks.github.addEventListener('click', () => openUrl(config.urls.resources.github));
  elements.resourceLinks.docs.addEventListener('click', () => openUrl(config.urls.resources.docs));
  elements.resourceLinks.releases.addEventListener('click', () => openUrl(config.urls.resources.releases));
  
  // Social links
  elements.socialLinks.discord.addEventListener('click', () => openUrl(config.urls.social.discord));
  elements.socialLinks.telegram.addEventListener('click', () => openUrl(config.urls.social.telegram));
  elements.socialLinks.twitter.addEventListener('click', () => openUrl(config.urls.social.twitter));
  elements.socialLinks.youtube.addEventListener('click', () => openUrl(config.urls.social.youtube));
  
  // Footer navigation
  elements.footerNavButtons.home.addEventListener('click', () => scrollToSection('header'));
  elements.footerNavButtons.features.addEventListener('click', () => scrollToSection('features'));
  elements.footerNavButtons.deploy.addEventListener('click', () => scrollToSection('deploy'));
  elements.footerNavButtons.download.addEventListener('click', () => scrollToSection('download'));
  
  // I Understand button
  elements.understandBtn.addEventListener('click', () => {
    openUrl(config.urls.legal.terms);
    showToast('Terms accepted successfully!');
  });
  
  // Tab switching functionality
  setupTabs();
}

// Open URL in new tab
function openUrl(url) {
  window.open(url, '_blank');
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Show toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// Tab switching functionality
function setupTabs() {
  const tabs = document.querySelectorAll('.tabs span');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Show corresponding content
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// Initialize copy functionality for code snippets
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const codeBlock = button.parentElement.querySelector('pre');
      const textToCopy = codeBlock.textContent;
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast('Failed to copy!');
      });
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  initCopyButtons();
  
  // Set active tab on page load
  const defaultTab = document.querySelector('.tabs .active');
  if (defaultTab) {
    const tabId = defaultTab.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  }
});