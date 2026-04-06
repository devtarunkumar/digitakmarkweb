import {
  FaCode,
  FaServer,
  FaDatabase,
  FaChartLine,
  FaLink,
  FaLock,
} from "react-icons/fa";

import whatfrontendImg from "../assets/fff1.png";
import buisnessUiimg from "../assets/ff2.webp";
import processimg from "../assets/ff3.webp";
import technologyimg from "../assets/ff4.webp";
import frontendImg from "../assets/ff1.jpeg";
import backendImg from "../assets/bb1.jpeg";
import whatbackendimg from "../assets/bb2.png";
import backbusinessimg from "../assets/bb3.png";
import backendprocessimg from "../assets/bb4.jfif";
import backendtechnologyimg from "../assets/bb5.png";
import databaseImg from "../assets/dd1.jpeg";
import whatdatabaseimg from "../assets/c1.jpg";
import databaseorganizationimg from "../assets/c2.jfif";
import databaseperformanceimg from "../assets/c3.png";
import databasetechnologyimg from "../assets/c4.jpeg";
import dashboardImg from "../assets/a1.jpeg";
import whatdashboardimg from "../assets/ddd1.webp";
import dashboarddatavisualizationimg from "../assets/d2.jpg";
import dashboardautomationimg from "../assets/d3.jpg";
import dashboardtechnologyimg from "../assets/d4.webp";
import apiImg from "../assets/ap1.jpeg";
import whatapiimg from "../assets/ee1.webp";
import apibusinessimg from "../assets/e2.webp";
import apiprocessimg from "../assets/e3.jpg";
import apitechnologyimg from "../assets/e4.webp";
import securityImg from "../assets/ss1.jpeg";
import whatsecurityimg from "../assets/g1.png";
import securitybusinessimg from "../assets/g2.png";
import securityprocessimg from "../assets/g3.jpg";
import securitytechnologyimg from "../assets/g4.avif";

export const services = [

  /* =====================================================
     FRONTEND DEVELOPMENT
  ===================================================== */

  {
    title: "Frontend Development",
    slug: "frontend-development",
    description: "Modern responsive interfaces using React & Tailwind.",
    icon: <FaCode />,
    image: frontendImg,

    details: {
      sections: [
        {
          title: "What is Frontend Development?",
          image: whatfrontendImg,
          content: `
Frontend development focuses on creating the visual and interactive
elements of a website or application. It is responsible for everything
users see and interact with including layouts, buttons, animations,
navigation systems, and responsiveness.

Modern frontend engineering combines design principles with advanced
JavaScript frameworks to deliver seamless user experiences across all
devices. A strong frontend ensures usability, accessibility, and visual
consistency while maintaining fast performance.
        `,
        },
        {
          title: "Business Impact of Modern UI",
          image: buisnessUiimg,
          content: `
A well-designed interface directly influences customer trust and
conversion rates. Users form opinions within seconds, making UI quality
a critical factor for business success.

Responsive design ensures accessibility on mobile devices, improving
engagement and SEO performance. Interactive experiences also increase
user retention and brand credibility.
        `,
        },
        {
          title: "Our Development Process",
          image: processimg,
          content: `
We build scalable component-based systems using React and modern CSS
frameworks. Our process includes UI planning, performance optimization,
responsive testing, and accessibility validation.

We emphasize reusable components, optimized rendering, and smooth
animations to ensure long-term maintainability.
        `,
        },
        {
          title: "Technologies We Use",
          image: technologyimg,
          content: `
React.js, Tailwind CSS, HTML5, CSS3, JavaScript ES6+, animation
libraries, and performance optimization tools help us create fast,
modern web applications and enterprise dashboards.
        `,
        },
      ],
    },
  },

  /* =====================================================
     BACKEND DEVELOPMENT
  ===================================================== */

  {
    title: "Backend Development",
    slug: "backend-development",
    description: "Secure server-side architecture and APIs.",
    icon: <FaServer />,
    image: backendImg,

    details: {
      sections: [
        {
          title: "What is Backend Development?",
          image: whatbackendimg,
          content: `
Backend development powers the logic behind applications. It manages
servers, databases, authentication systems, APIs, and business logic
that operate behind the user interface.

A strong backend ensures secure data handling, fast processing, and
reliable system performance.
        `,
        },
        {
          title: "Scalable System Architecture",
          image: backbusinessimg,
          content: `
We design scalable server architectures capable of handling increasing
traffic and complex operations. Efficient APIs allow seamless
communication between frontend and backend systems.

Our architecture focuses on modularity, maintainability, and long-term
scalability.
        `,
        },
        {
          title: "Security & Authentication",
          image: backendprocessimg,
          content: `
Security is implemented through authentication systems, encrypted
communication, and secure token-based access management.

We integrate JWT authentication, protected routes, and validation layers
to safeguard user data and application resources.
        `,
        },
        {
          title: "Technologies & Tools",
          image: backendtechnologyimg,
          content: `
Node.js, Express.js, REST APIs, authentication middleware, and cloud
deployment tools enable us to build reliable backend infrastructures
for startups and enterprise solutions.
        `,
        },
      ],
    },
  },

  /* =====================================================
     DATABASE MANAGEMENT
  ===================================================== */

  {
    title: "Database Management",
    slug: "database-management",
    description: "Efficient data storage and management solutions.",
    icon: <FaDatabase />,
    image: databaseImg,

    details: {
      sections: [
        {
          title: "Understanding Database Systems",
          image: whatdatabaseimg,
          content: `
Database management involves storing, organizing, and retrieving
application data efficiently. It forms the backbone of modern digital
platforms.

Well-structured databases improve application performance and ensure
data reliability.
        `,
        },
        {
          title: "Data Organization Strategy",
          image: databaseorganizationimg,
          content: `
We design optimized schemas and indexing strategies to improve query
speed and scalability. Structured and NoSQL databases are chosen based
on project requirements.

Efficient relationships and validation rules maintain data integrity.
        `,
        },
        {
          title: "Performance & Scalability",
          image: databaseperformanceimg,
          content: `
Optimized queries, caching techniques, and database indexing ensure fast
data retrieval even with large datasets.

Our systems are designed to scale as business data grows.
        `,
        },
        {
          title: "Tools & Technologies",
          image: databasetechnologyimg,
          content: `
MongoDB, MySQL, Firebase, and ORM tools like Mongoose allow secure and
efficient data management across applications.
        `,
        },
      ],
    },
  },

  /* =====================================================
     DASHBOARD & ADMIN PANELS
  ===================================================== */

  {
    title: "Dashboard & Admin Panels",
    slug: "dashboard-admin-panels",
    description: "Analytics-driven dashboards for business control.",
    icon: <FaChartLine />,
    image: dashboardImg,

    details: {
      sections: [
        {
          title: "Centralized Management Systems",
          image: whatdashboardimg,
          content: `
Admin dashboards provide centralized control over users, analytics,
content, and operational workflows.

They simplify complex data into actionable insights.
        `,
        },
        {
          title: "Data Visualization",
          image: dashboarddatavisualizationimg,
          content: `
Interactive charts and analytics help businesses track performance in
real time. Visual reporting improves decision-making and operational
efficiency.
        `,
        },
        {
          title: "Automation & Monitoring",
          image: dashboardautomationimg,
          content: `
Dashboards automate repetitive administrative tasks and provide
monitoring systems for business activities.

Real-time updates ensure accurate operational awareness.
        `,
        },
        {
          title: "Technology Stack",
          image: dashboardtechnologyimg,
          content: `
React dashboards powered by Chart.js and Recharts deliver responsive,
interactive, and scalable admin interfaces.
        `,
        },
      ],
    },
  },

  /* =====================================================
     API INTEGRATION
  ===================================================== */

  {
    title: "API Integration",
    slug: "api-integration",
    description: "Seamless communication between systems.",
    icon: <FaLink />,
    image: apiImg,

    details: {
      sections: [
        {
          title: "What is API Integration?",
          image: whatapiimg,
          content: `
API integration connects applications allowing them to exchange data
securely and efficiently.

It enables platforms to communicate with payment gateways, external
services, and cloud systems.
        `,
        },
        {
          title: "Business Automation",
          image: apibusinessimg,
          content: `
APIs automate workflows such as payments, notifications, analytics,
and third-party services integration, reducing manual processes.
        `,
        },
        {
          title: "Reliable Data Communication",
          image: apiprocessimg,
          content: `
We implement structured REST APIs ensuring reliable and scalable
communication between frontend and backend systems.
        `,
        },
        {
          title: "Tools Used",
          image: apitechnologyimg,
          content: `
REST APIs, Axios, Fetch API, and API testing tools like Postman help
deliver stable and secure integrations.
        `,
        },
      ],
    },
  },

  /* =====================================================
     SECURITY & DEPLOYMENT
  ===================================================== */

  {
    title: "Security & Deployment",
    slug: "security-deployment",
    description: "Secure hosting and optimized deployment pipelines.",
    icon: <FaLock />,
    image: securityImg,

    details: {
      sections: [
        {
          title: "Application Security",
          image: whatsecurityimg,
          content: `
Security ensures applications remain protected against vulnerabilities,
unauthorized access, and data breaches.

We implement encryption, authentication systems, and secure
communication protocols.
        `,
        },
        {
          title: "Deployment Strategy",
          image: securitybusinessimg,
          content: `
Deployment transforms development projects into live production systems.
We configure hosting environments, domains, and optimized builds.
        `,
        },
        {
          title: "Performance Optimization",
          image: securityprocessimg,
          content: `
Caching, compression, CDN integration, and asset optimization improve
loading speed and overall performance.
        `,
        },
        {
          title: "Tools & Platforms",
          image: securitytechnologyimg,
          content: `
Vercel, Netlify, Docker, and cloud hosting platforms allow scalable,
secure, and automated deployment workflows.
        `,
        },
      ],
    },
  },

];