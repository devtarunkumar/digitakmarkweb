import socialMediaImg from "../assets/social-media.jpg";
import paidAdsImg from "../assets/paid-ads.jpg";
import influencerMarketingImg from "../assets/influencer-marketing.jpg";
import graphicDesigningImg from "../assets/graphic-design.jpg";
import seoImg from "../assets/seo.jpg";
import podcastImg from "../assets/podcast.jpg";
import "../styles/services.css";
export const digitalServicesData = [
  {
    id: "social-media-management",
    title: "Social Media Marketing",
    image: socialMediaImg,

    description:
      "Grow your brand presence with strategic social media marketing.",

    details: {
      overview:
        "Social media marketing helps brands connect with audiences through consistent content, engagement strategies, and performance-driven campaigns. We create platform-specific strategies designed to increase visibility, engagement, and conversions.",

      features: [
        "Instagram & Facebook Management",
        "Content Calendar Planning",
        "Audience Engagement",
        "Analytics & Reporting",
        "Brand Voice Development",
      ],

      process: [
        "Market & competitor research",
        "Content strategy planning",
        "Creative design & copywriting",
        "Publishing & scheduling",
        "Performance tracking & optimization",
      ],

      benefits: [
        "Higher brand awareness",
        "Consistent online presence",
        "Better customer engagement",
        "Lead generation growth",
      ],

      tools: [
        "Meta Business Suite",
        "Canva Pro",
        "Hootsuite",
        "Google Analytics",
      ],

      faq: [
        {
          q: "How often do you post content?",
          a: "We create a customized posting schedule based on your business goals."
        },
        {
          q: "Do you provide analytics reports?",
          a: "Yes, monthly performance reports with insights are included."
        }
      ]
    }
  },

  {
    id: "paid-ads",
    title: "Paid Advertising",
    image: paidAdsImg,
    description: "Targeted ads to increase leads and conversions.",

    details: {
      overview:
        "Paid advertising accelerates business growth through targeted campaigns across Google, Meta, and other platforms. Our campaigns focus on ROI, conversions, and measurable results.",

      features: [
        "Google Ads Campaigns",
        "Meta Ads Management",
        "Audience Targeting",
        "Conversion Tracking",
        "A/B Testing"
      ],

      process: [
        "Audience research",
        "Ad creative development",
        "Campaign launch",
        "Optimization cycles",
        "Performance scaling"
      ],

      benefits: [
        "Instant traffic",
        "High-quality leads",
        "Improved ROI",
        "Scalable marketing"
      ],

      tools: [
        "Google Ads",
        "Meta Ads Manager",
        "Tag Manager",
        "Hotjar"
      ],

      faq: [
        {
          q: "How soon can results be seen?",
          a: "Most campaigns start generating data within 7 days."
        }
      ]
    }
  },

  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    image: influencerMarketingImg,
    description: "Collaborate with influencers to expand reach.",

    details: {
      overview:
        "Influencer marketing connects brands with trusted creators to build credibility and expand reach through authentic promotion.",

      features: [
        "Influencer research",
        "Campaign planning",
        "Content collaboration",
        "Performance tracking"
      ],

      process: [
        "Creator selection",
        "Campaign briefing",
        "Content approval",
        "Publishing",
        "Results analysis"
      ],

      benefits: [
        "Trust-based marketing",
        "Audience expansion",
        "Brand credibility"
      ],

      tools: [
        "CreatorIQ",
        "Upfluence",
        "Instagram Insights"
      ],

      faq: []
    }
  },

  {
    id: "graphic-design",
    title: "Graphic Designing",
    image: graphicDesigningImg,
    description: "Creative visuals that define your brand.",

    details: {
      overview:
        "Graphic design builds visual identity through branding, marketing creatives, and digital assets aligned with your business goals.",

      features: [
        "Logo Design",
        "Brand Identity",
        "Social Media Creatives",
        "Marketing Graphics"
      ],

      process: [
        "Brand discovery",
        "Concept creation",
        "Design iterations",
        "Final delivery"
      ],

      benefits: [
        "Strong brand identity",
        "Professional visuals",
        "Better engagement"
      ],

      tools: [
        "Adobe Photoshop",
        "Illustrator",
        "Figma"
      ],

      faq: []
    }
  },
  {
  id: "search-engine-optimization",
  title: "SEO Services",
  image: seoImg,
  description: "Improve search rankings and drive organic traffic.",

  details: {
    overview:
      "Search Engine Optimization (SEO) helps businesses rank higher on Google and attract organic traffic. Our SEO strategies focus on technical optimization, keyword targeting, and high-quality content to improve visibility and long-term growth.",

    features: [
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Technical SEO Audit",
      "Content Optimization",
      "Backlink Building"
    ],

    process: [
      "Website SEO audit",
      "Keyword & competitor research",
      "On-page optimization",
      "Content enhancement",
      "Link-building campaigns",
      "Performance monitoring"
    ],

    benefits: [
      "Higher Google rankings",
      "Increased organic traffic",
      "Long-term brand visibility",
      "Better website authority"
    ],

    tools: [
      "Google Search Console",
      "Ahrefs",
      "SEMrush",
      "Screaming Frog",
      "Google Analytics"
    ],

    faq: [
      {
        q: "How long does SEO take to show results?",
        a: "SEO typically shows noticeable improvements within 3–6 months depending on competition."
      },
      {
        q: "Do you provide monthly reports?",
        a: "Yes, we provide detailed ranking and traffic performance reports every month."
      }
    ]
  }
},
{
  id: "podcast-services",
  title: "Podcast Services",
  image: podcastImg,
  description: "Launch and grow your podcast with professional production.",

  details: {
    overview:
      "Podcast services help brands share stories, educate audiences, and build authority through engaging audio and video content. We handle recording setup, editing, publishing, and promotion to ensure professional podcast delivery.",

    features: [
      "Podcast Strategy Planning",
      "Audio & Video Editing",
      "Episode Publishing",
      "Thumbnail & Branding Design",
      "Podcast Promotion"
    ],

    process: [
      "Podcast concept planning",
      "Recording setup guidance",
      "Editing & sound enhancement",
      "Publishing across platforms",
      "Marketing & audience growth"
    ],

    benefits: [
      "Build industry authority",
      "Stronger audience connection",
      "Content repurposing opportunities",
      "Brand storytelling platform"
    ],

    tools: [
      "Adobe Audition",
      "Descript",
      "Spotify for Podcasters",
      "Riverside.fm",
      "Canva"
    ],

    faq: [
      {
        q: "Can you help launch a new podcast?",
        a: "Yes, we assist from planning and branding to publishing your first episode."
      },
      {
        q: "Which platforms will my podcast be published on?",
        a: "We distribute podcasts to Spotify, Apple Podcasts, Google Podcasts, and more."
      }
    ]
  }
}
];