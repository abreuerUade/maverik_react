import { BsBasket, BsBell, BsBlockquoteRight, BsBoxes, BsBriefcase, BsBullseye, BsCalendar3Week, BsChatLeft, BsEmojiSunglasses, BsEnvelope, BsFileEarmarkText, BsFileText, BsHeart, BsLock, BsMask, BsPerson, BsQuestionCircle, BsRocket, BsShieldLock, BsStar, BsStickies, BsTrash, BsWallet } from 'react-icons/bs';
import slackImg from '@/assets/images/elements/slack.svg';
import webflowImg from '@/assets/images/elements/webflow.svg';
import mailchimpImg from '@/assets/images/elements/mailchimp.svg';
import redditImg from '@/assets/images/elements/reddit.svg';
import blogImg2 from '@/assets/images/blog/4by4/02.jpg';
import blogImg1 from '@/assets/images/blog/4by4/01.jpg';
import blogImg3 from '@/assets/images/blog/4by4/03.jpg';
import blog2Img from '@/assets/images/blog/02.jpg';
export const ACCOUNT_VERTICAL_MENU_ITEMS = [{
  key: 'account-profile',
  label: 'My Profile',
  url: '/account/profile',
  parentKey: 'pages-account',
  icon: BsPerson
}, {
  key: 'account-security',
  label: 'Security',
  url: '/account/security',
  parentKey: 'pages-account',
  icon: BsShieldLock
}, {
  key: 'account-notifications',
  label: 'Notifications',
  url: '/account/notifications',
  parentKey: 'pages-account',
  icon: BsBell
}, {
  key: 'account-projects',
  label: 'My Projects',
  url: '/account/projects',
  parentKey: 'pages-account',
  icon: BsBriefcase
}, {
  key: 'account-payment-details',
  label: 'Payment Details',
  url: '/account/payment-details',
  parentKey: 'pages-account',
  icon: BsWallet
}, {
  key: 'account-order-history',
  label: 'Order History',
  url: '/account/order-history',
  parentKey: 'pages-account',
  icon: BsBasket
}, {
  key: 'account-wishlist',
  label: 'Wishlist',
  url: '/account/wishlist',
  parentKey: 'pages-account',
  icon: BsHeart
}, {
  key: 'account-delete-profile',
  label: 'Delete Profile',
  url: '/account/delete-profile',
  parentKey: 'pages-account',
  icon: BsTrash
}];
export const APP_MENU_ITEMS = [{
  key: 'demos',
  label: 'Demos',
  children: [{
    key: 'demo-classic-default',
    label: 'Classic Default',
    url: '/demos/classic',
    parentKey: 'demos'
  }, {
    key: 'demo-creative-agency',
    label: 'Creative Agency',
    url: '/demos/agency/creative',
    parentKey: 'demos'
  }, {
    key: 'demo-digital-agency',
    label: 'Digital Agency',
    url: '/demos/agency/digital',
    parentKey: 'demos',
    badge: 'New'
  }, {
    key: 'demo-design-agency',
    label: 'Design Agency',
    url: '/demos/agency/design',
    parentKey: 'demos',
    badge: 'New'
  }, {
    key: 'demo-seo-agency',
    label: 'SEO Agency',
    url: '/demos/agency/seo',
    parentKey: 'demos',
    badge: 'New'
  }, {
    key: 'demo-product-landing',
    label: 'Product Landing',
    url: '/demos/product-landing',
    parentKey: 'demos'
  }, {
    key: 'demo-mobile-app',
    label: 'Mobile App Showcase',
    url: '/demos/mobile-app',
    parentKey: 'demos'
  }, {
    key: 'demo-saas-v1',
    label: 'SaaS v.1',
    url: '/saas/v1',
    parentKey: 'demos'
  }, {
    key: 'demo-saas-v2',
    label: 'SaaS v.2',
    url: '/saas/v2',
    parentKey: 'demos'
  }, {
    key: 'demo-saas-v3',
    label: 'SaaS v.3',
    url: '/saas/v3',
    parentKey: 'demos'
  }, {
    key: 'demo-saas-v4',
    label: 'SaaS v.4',
    url: '/saas/v4',
    parentKey: 'demos'
  }, {
    key: 'demo-saas-v5',
    label: 'SaaS v.5',
    url: '/saas/v5',
    parentKey: 'demos'
  }, {
    key: 'demo-finance-consulting',
    label: 'Finance Consulting',
    url: '/demos/finance-consulting',
    parentKey: 'demos',
    badge: 'New'
  }, {
    key: 'demo-shop-index',
    label: 'Index Shop',
    url: '/shop/index',
    parentKey: 'demos'
  }]
}, {
  key: 'pages',
  label: 'Pages',
  children: [{
    key: 'pages-about',
    label: 'About',
    parentKey: 'pages',
    children: [{
      key: 'about-v1',
      label: 'About v.1',
      url: '/about/v1',
      parentKey: 'pages-about'
    }, {
      key: 'about-v2',
      label: 'About v.2',
      url: '/about/v2',
      parentKey: 'pages-about'
    }, {
      key: 'about-v3',
      label: 'About v.3',
      url: '/about/v3',
      parentKey: 'pages-about'
    }, {
      key: 'about-team',
      label: 'Team',
      url: '/team',
      parentKey: 'pages-about'
    }, {
      key: 'about-services-v1',
      label: 'Services v.1',
      url: '/services/v1',
      parentKey: 'pages-about'
    }, {
      key: 'about-services-v2',
      label: 'Services v.2',
      url: '/services/v2',
      parentKey: 'pages-about'
    }, {
      key: 'about-services-single',
      label: 'Service Single',
      url: '/services/single',
      parentKey: 'pages-about'
    }, {
      key: 'about-customer-stories',
      label: 'Customer Stories',
      url: '/customer/stories',
      parentKey: 'pages-about'
    }, {
      key: 'about-customer-story-single',
      label: 'Customer Story Single',
      url: '/customer/story-single',
      parentKey: 'pages-about'
    }, {
      key: 'about-career',
      label: 'Career',
      url: '/career',
      parentKey: 'pages-about',
      badge: '2 Jobs'
    }, {
      key: 'about-career-single',
      label: 'Career Single',
      url: '/career/single',
      parentKey: 'pages-about'
    }]
  }, {
    key: 'pages-contact-1',
    label: 'Contact v.1',
    url: '/contact/v1',
    parentKey: 'pages'
  }, {
    key: 'pages-contact-2',
    label: 'Contact v.2',
    url: '/contact/v2',
    parentKey: 'pages'
  }, {
    key: 'pages-saas',
    label: 'SaaS Pages',
    parentKey: 'pages',
    children: [{
      key: 'saas-features',
      label: 'Features',
      url: '/saas/features',
      parentKey: 'pages-saas'
    }, {
      key: 'saas-feature-single',
      label: 'Feature Single',
      url: '/saas/feature-single',
      parentKey: 'pages-saas'
    }, {
      key: 'saas-integrations',
      label: 'Integrations',
      url: '/saas/integrations',
      parentKey: 'pages-saas'
    }, {
      key: 'saas-integration-single',
      label: 'Integration Single',
      url: '/saas/integration-single',
      parentKey: 'pages-saas'
    }]
  }, {
    key: 'pages-shop',
    label: 'Shop',
    parentKey: 'pages',
    children: [{
      key: 'shop-grid',
      label: 'Shop Grid',
      url: '/shop/grid',
      parentKey: 'pages-shop'
    }, {
      key: 'shop-single',
      label: 'Shop Single',
      url: '/shop/single/1030',
      parentKey: 'pages-shop'
    }, {
      key: 'shop-cart',
      label: 'Shop Cart',
      url: '/shop/cart',
      parentKey: 'pages-shop'
    }, {
      key: 'shop-empty-cart',
      label: 'Shop Empty Cart',
      url: '/shop/empty-cart',
      parentKey: 'pages-shop'
    }, {
      key: 'shop-checkout',
      label: 'Shop Checkout',
      url: '/shop/checkout',
      parentKey: 'pages-shop'
    }]
  }, {
    key: 'pages-blog',
    label: 'Blog',
    parentKey: 'pages',
    children: [{
      key: 'blog-grid',
      label: 'Blog Grid',
      url: '/blog/grid',
      parentKey: 'pages-blog'
    }, {
      key: 'blog-list-sidebar',
      label: 'Blog List Sidebar',
      url: '/blog/list-sidebar',
      parentKey: 'pages-blog'
    }, {
      key: 'blog-single-v1',
      label: 'Blog Single v.1',
      url: '/blog/single/v1',
      parentKey: 'pages-blog'
    }, {
      key: 'blog-single-v2',
      label: 'Blog Single v.2',
      url: '/blog/single/v2',
      parentKey: 'pages-blog'
    }]
  }, {
    key: 'pages-specialty',
    label: 'Specialty Pages',
    parentKey: 'pages',
    children: [{
      key: 'specialty-help-center',
      label: 'Help Center',
      url: '/help/center',
      parentKey: 'pages-specialty'
    }, {
      key: 'specialty-help-detail',
      label: 'Help Center Detail',
      url: '/help/detail',
      parentKey: 'pages-specialty'
    }, {
      key: 'specialty-pricing',
      label: 'Pricing',
      url: '/pricing',
      parentKey: 'pages-specialty'
    }, {
      key: 'specialty-faqs',
      label: 'FAQs',
      url: '/faq',
      parentKey: 'pages-specialty'
    }, {
      key: 'specialty-error-404',
      label: 'Error 404',
      target: '_blank',
      url: '/not-found',
      parentKey: 'pages-specialty'
    }, {
      key: 'specialty-coming-soon',
      label: 'Coming Soon',
      url: '/coming-soon',
      target: '_blank',
      parentKey: 'pages-specialty'
    }, {
      key: 'specialty-terms-&-conditions',
      label: 'Terms & Conditions',
      url: '/terms-conditions',
      parentKey: 'pages-specialty'
    }]
  }, {
    key: 'pages-auth',
    label: 'Authentication',
    parentKey: 'pages',
    children: [{
      key: 'auth-sign-up',
      label: 'Sign Up',
      url: '/auth/sign-up',
      target: '_blank',
      parentKey: 'pages-auth'
    }, {
      key: 'auth-sign-in',
      label: 'Sign In',
      url: '/auth/sign-in',
      target: '_blank',
      parentKey: 'pages-auth'
    }, {
      key: 'auth-forgot-pass',
      label: 'Forgot Password',
      url: '/auth/forgot-password',
      target: '_blank',
      parentKey: 'pages-auth'
    }]
  }, {
    key: 'pages-account',
    label: 'Account',
    parentKey: 'pages',
    children: ACCOUNT_VERTICAL_MENU_ITEMS
  }]
}, {
  key: 'portfolio',
  label: 'Portfolio',
  children: [{
    key: 'portfolio-masonry',
    label: 'Portfolio Masonry',
    url: '/portfolio/masonry',
    parentKey: 'portfolio'
  }, {
    key: 'portfolio-showcase',
    label: 'Portfolio Showcase',
    url: '/portfolio/showcase',
    parentKey: 'portfolio'
  }, {
    key: 'portfolio-list',
    label: 'Portfolio List',
    url: '/portfolio/list',
    parentKey: 'portfolio'
  }, {
    key: 'portfolio-case-study-v1',
    label: 'Portfolio Case Study v.1',
    url: '/portfolio/case-study/v1',
    parentKey: 'portfolio'
  }, {
    key: 'portfolio-case-study-v2',
    label: 'Portfolio Case Study v.2',
    url: '/portfolio/case-study/v2',
    parentKey: 'portfolio'
  }]
}];
export const MEGA_MENU_ITEMS = {
  usefulLinks: ['Market Research', 'Advertising', 'Consumer behavior', 'Digital marketing', 'Marketing ethics', 'Social media marketing'],
  company: [{
    icon: BsBoxes,
    title: 'About us',
    description: 'Learn about our story, our mission statement and roadmap.'
  }, {
    icon: BsRocket,
    title: 'Career',
    badge: '3 Jobs',
    description: "We're always looking for talented people. Join our team!"
  }, {
    icon: BsEmojiSunglasses,
    title: 'Customer stories',
    description: 'Learn how our customer are making big changes to their tech stack'
  }],
  integration: [{
    logo: slackImg,
    name: 'Slack'
  }, {
    logo: webflowImg,
    name: 'Webflow'
  }, {
    logo: mailchimpImg,
    name: 'Mailchimp'
  }, {
    logo: redditImg,
    name: 'Reddit'
  }],
  recentBlogs: [{
    image: blogImg2,
    title: '10 things you need to know about Mizzle',
    link: '/blog/single/v1'
  }, {
    image: blogImg1,
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    link: '/blog/single/v2'
  }, {
    image: blogImg3,
    title: 'Effortless Web Development with Mizzle',
    link: '/blog/single/v1'
  }]
};
export const RESOURCES_MENU_ITEMS = {
  usefulLinks: [{
    icon: BsFileText,
    name: "Guides"
  }, {
    icon: BsChatLeft,
    name: "Supports"
  }, {
    icon: BsCalendar3Week,
    name: "Community & events"
  }, {
    icon: BsBlockquoteRight,
    name: "Blogs"
  }, {
    icon: BsLock,
    name: "Security"
  }, {
    icon: BsStar,
    name: "Tutorials"
  }, {
    icon: BsQuestionCircle,
    name: "Help center"
  }, {
    icon: BsEnvelope,
    name: "Developer newsletter"
  }],
  keyFeatures: [{
    title: "Documentation",
    description: "Using documentation you can easily develop projects",
    icon: BsFileEarmarkText
  }, {
    title: "Snippets",
    description: "Development guides for building projects with Mizzle",
    icon: BsStickies
  }, {
    title: "Changelog",
    description: "Recent feature release and announcement. See how changes are made.",
    icon: BsBullseye
  }, {
    title: "Playwright tips",
    description: "Tips and In-depth guide for headless browser automation",
    icon: BsMask
  }],
  featureResource: {
    title: "Featured title here",
    description: "Departure defective arranging rapturous did believe him all had supported.",
    image: blog2Img
  }
};