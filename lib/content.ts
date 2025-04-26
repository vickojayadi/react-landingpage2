export const siteConfig = {
  name: "HostFlow",
  description: "Simple and reliable web hosting services",
  logo: {
    text: "Host",
    highlight: "Flow",
  },
  contact: {
    email: "support@hostflow.com",
    phone: "+1 (555) 123-4567",
  },
};

export const navigationLinks = [
  { title: "Home", href: "#home" },
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "Contact", href: "#contact" },
];

export const heroContent = {
  title: "Simple, Fast, Reliable Hosting",
  subtitle: "Launch your website with confidence",
  description: "Get your website online in minutes with our reliable hosting solutions.",
  cta: {
    primary: {
      text: "Get Started",
      href: "#pricing",
    },
    secondary: {
      text: "Learn More",
      href: "#features",
    },
  },
  image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
};

export const featuresContent = {
  title: "Why Choose Us",
  subtitle: "Our Features",
  description: "Everything you need to host your website successfully",
  features: [
    {
      title: "99.9% Uptime",
      description: "Your website stays online with our reliable infrastructure",
      icon: "Server",
    },
    {
      title: "Easy Setup",
      description: "Get your website online in just a few clicks",
      icon: "Rocket",
    },
    {
      title: "24/7 Support",
      description: "Expert support team ready to help anytime",
      icon: "Headphones",
    },
  ],
};

export const projectsContent = {
  title: "Our Projects",
  subtitle: "Featured Work",
  description: "Take a look at some of our successful hosting implementations",
  projects: [
    {
      title: "E-commerce Platform",
      description: "High-performance hosting solution for a major online retailer",
      category: "Enterprise",
      image: "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg",
      link: "#"
    },
    {
      title: "Blog Network",
      description: "Scalable hosting infrastructure for a popular blogging network",
      category: "Publishing",
      image: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg",
      link: "#"
    },
    {
      title: "Gaming Server",
      description: "Low-latency hosting solution for online gaming platform",
      category: "Gaming",
      image: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg",
      link: "#"
    },
    {
      title: "Educational Platform",
      description: "Reliable hosting for an online learning management system",
      category: "Education",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
      link: "#"
    }
  ]
};

export const pricingContent = {
  title: "Simple Pricing",
  subtitle: "Choose Your Plan",
  description: "Select the perfect hosting plan for your needs",
  plans: [
    {
      title: "Starter",
      price: "$5/mo",
      description: "Perfect for personal websites",
      features: [
        "1 Website",
        "10 GB Storage",
        "Free SSL Certificate",
        "24/7 Support",
      ],
      cta: {
        text: "Get Started",
        href: "#contact",
      },
      popular: false,
    },
    {
      title: "Professional",
      price: "$15/mo",
      description: "Ideal for growing businesses",
      features: [
        "5 Websites",
        "50 GB Storage",
        "Free SSL Certificate",
        "24/7 Priority Support",
        "Daily Backups",
      ],
      cta: {
        text: "Get Started",
        href: "#contact",
      },
      popular: true,
    },
  ],
};

export const contactContent = {
  title: "Get Started Today",
  subtitle: "Contact Us",
  description: "Ready to launch your website? Get in touch with us.",
  cta: {
    text: "Send Message",
  },
};

export const footerContent = {
  description: "Simple and reliable web hosting services for everyone.",
  copyright: `© ${new Date().getFullYear()} HostFlow. All rights reserved.`,
  links: [
    {
      title: "Company",
      items: [
        { text: "About", href: "#" },
        { text: "Contact", href: "#contact" },
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
      ],
    },
  ],
};