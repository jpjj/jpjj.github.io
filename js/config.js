// JPJ Solutions - AI Consulting Configuration
const CONFIG = {
  personal: {
    name: "Jens-Peter Joost",
    title: "Mathematiker | Data Scientist | KI-Experte",
    description: "Maßgeschneiderte KI-Anwendungen für Logistik und Produktion",
    heroHeadline: "Ihr Partner für KI-Lösungen",
    heroSubline: "Mathematiker - Data Scientist - KI-Experte. Ich entwickle maßgeschneiderte KI-Anwendungen für Logistik und Produktion",
    email: "jenspeter.joost@jpjsolutions.com",
    phone: "+49 176 9588 1951",
    linkedin: "https://www.linkedin.com/in/jens-peter-joost/",
    github: "https://github.com/jpjj",
    calendly: "https://calendly.com/jenspeter-joost/30min",
    profileImage: "/assets/headshot_circle.png",
    imageFull: "/assets/headshot_rectangle.jpg",
    address: {
      street: "Hittorfstraße 9",
      postalCode: "50735",
      city: "Köln",
      country: "Deutschland"
    }
  },

  legal: {
    businessType: "Einzelunternehmer",
    taxNumber: "205/5138/4114",
    taxId: "67912054819",
    vatId: "DE455046175"
  },

  company: {
    current: {
      name: "JPJ Solutions",
      url: "https://www.jpjsolutions.com",
      position: "AI Partner",
      duration: "Apr 2025"
    },
    previous1: {
      name: "DHL Data & Analytics GmbH",
      url: "https://www.linkedin.com/company/dhl-data-analytics/posts/?feedView=all",
      position: "Senior Data Scientist - Operations Research",
      duration: "Jan 2023 - Apr 2025"
    },
    previous2: {
      name: "DPDHL Group",
      position: "Data Scientist - Operations Research",
      duration: "Apr 2019 – Dec 2022"
    }
  },

  education: {
    masters: {
      degree: "M.S. Mathematics",
      institution: "TU Kaiserslautern",
      date: "December 2018",
      grade: "1,1 (very good)",
      specialization: "Optimization",
      minor: "Computer Science",
      thesis: 'Online Optimization: "Competitive Algorithms for operative Resource Planning" (Grade: 1,0)'
    },
    scholarship: {
      program: "PROMOS scholarship",
      institution: "NUS Singapore",
      date: "August - December 2017",
      description: "DAAD-program at the National University of Singapore",
      achievement: "Best in class (took 5 courses, average final exam grade: 1,1)"
    },
    bachelors: {
      degree: "B.S. Mathematics",
      institution: "TU Kaiserslautern",
      date: "September 2016",
      grade: "1,1 (very good)",
      specialization: "Optimization and Stochastics",
      minor: "Computer Science",
      thesis: '"Preprocessing and Efficient Shortest Path Queries for Large Networks" (Grade: 1,0)'
    }
  },

  skills: {
    programming: {
      python: "numpy, pandas, tensorflow, polars, numba, cython, folium, sklearn, networkx, cProfile, snakeviz, pytest, matplotlib",
      javascript: "leaflet, Threejs, react",
      rust: "polars, PyO3, ndarray, serde, rayon, rustworkx, petgraph"
    },
    tools: {
      optimization: "Cplex, Gurobi, HiGHs",
      ide: "VSCode, PyCharm",
      versionControl: "Git, Github, Gitlab, Jira, Confluence"
    },
    ai: {
      genai: "ChatGPT, Claude, Llama, Deep Seek, Github Copilot",
      certification: {
        name: "Certified Scrum Master",
        url: "https://www.credly.com/badges/c6f39bb3-230f-41ed-81ed-21f94697fb3b?source=linked_in_profile"
      }
    }
  },

  services: {
    strategy: {
      title: "KI-Strategieberatung",
      description: "Entwicklung maßgeschneiderter KI-Strategien für Ihr Unternehmen",
      features: [
        "Analyse Ihrer Geschäftsprozesse",
        "Entwicklung einer KI-Roadmap",
        "ROI-Bewertung und Implementierungsplanung",
        "Change Management und Mitarbeiterschulung"
      ],
      icon: "🧠"
    },
    optimization: {
      title: "Operations Research & Optimierung",
      description: "Mathematische Optimierung für komplexe Logistik- und Produktionsprozesse",
      features: [
        "Supply Chain Optimierung",
        "Routenplanung und Ressourcenallokation",
        "Produktionsplanung und -steuerung",
        "Algorithmusentwicklung für spezielle Anwendungen"
      ],
      icon: "⚙️"
    },
    development: {
      title: "KI-Anwendungsentwicklung",
      description: "Von der Idee bis zur produktionsreifen KI-Lösung",
      features: [
        "Maßgeschneiderte Machine Learning Modelle",
        "Automatisierte Entscheidungssysteme",
        "Datenanalyse und interaktive Dashboards",
        "Integration in bestehende Systeme"
      ],
      icon: "🚀"
    }
  },

  projects: [
    {
      title: "E-Mail Klassifizierungssystem",
      description: "KI-basiertes System zur automatischen E-Mail-Kategorisierung mit 29% Genauigkeitssteigerung, ersetzte kostspieligen Drittanbieter",
      url: "#",
      image: "/assets/projects/project-email-classification.png",
      technologies: ["Generative AI", "NLP", "Machine Learning"],
      icon: "",
      category: "",
      tagColor: "blue",
      actionType: "confidential"
    },
    // {
    //   title: "SRT-Untertitel Übersetzer",
    //   description: "Entwicklung eines Untertitel-Übersetzers mit fortschrittlichem Prompt Engineering für präzise Übersetzung und Timing, 33% Produktivitätssteigerung",
    //   url: "#",
    //   image: "/assets/projects/project-subtitle-translator.png",
    //   technologies: ["Generative AI", "Prompt Engineering", "NLP"],
    //   icon: "📝",
    //   category: "Translation AI",
    //   tagColor: "green",
    //   actionType: "demo",
    //   demoUrl: "https://jpjj-srt-translator-app-hykvhc.streamlit.app/"
    // },
    {
      title: "E-Commerce ETA Vorhersagemodell",
      description: "Machine Learning Modell zur Vorhersage der geschätzten Ankunftszeit im E-Commerce, verbesserte Lieferversprechen bei engeren Zeitfenstern",
      url: "#",
      image: "/assets/projects/project-eta-prediction.png",
      technologies: ["Machine Learning", "Predictive Analytics", "E-Commerce"],
      icon: "",
      category: "",
      tagColor: "blue",
      actionType: "confidential"
    },
    {
      title: "KI-Matching Plattform für Experten",
      description: "Globale unternehmensweite Matching-Plattform für KI-Profis - wie 'Tinder für Datenexperten' zur Verbindung von Ingenieuren und Stakeholdern",
      url: "#",
      image: "/assets/projects/project-ai-matching.png",
      technologies: ["Machine Learning", "Recommendation Systems", "Operations Research"],
      icon: "",
      category: "",
      tagColor: "blue",
      actionType: "confidential"
    },
    {
      title: "Globale Luftfracht-Simulation",
      description: "Hochauflösende Simulationsmodellierung eines $1B+ globalen Luftfracht-Expressnetzes zur strategischen und operativen Optimierung",
      url: "#",
      image: "/assets/projects/project-air-network.png",
      technologies: ["Operations Research", "Simulation", "Network Optimization"],
      icon: "",
      category: "",
      tagColor: "blue",
      actionType: "confidential"
    },
    {
      title: "Last-Mile Delivery Optimierung",
      description: "Optimierte Routen- und Flottenplanung für die letzte Meile mit 8% Kosteneinsparung für große deutsche Automobilkunden unter Berücksichtigung von 3d-Beladungs-Simulation",
      url: "#",
      image: "/assets/projects/project-last-mile.png",
      technologies: ["Routing Optimization", "Fleet Management", "Cost Reduction"],
      icon: "",
      category: "",
      tagColor: "blue",
      actionType: "confidential"
    }
  ],
  faq: [
    {
      question: "Wie läuft die Zusammenarbeit ab?",
      answer: "Wir starten mit einer kostenlosen Erstberatung, in der ich Ihre Anforderungen verstehe. Anschließend entwicklen wir gemeinsam einen detaillierten Projektplan mit klaren Meilensteinen und Deliverables. Anschließend starten wir mit der Umsetzung.  Hierbei verwenden wir agiles Projekt Management, d.h.: regelmäßiger Austausch, Vorstellung von Zwischenergebnissen und Umsetzung von Feedback."
    },
    {
      question: "Wie lange dauert ein Projekt?",
      answer: "Das hängt vom Umfang ab. Einfache Analysen: 2-4 Wochen, komplexe KI-Anwendungen: 3-6 Monate."
    },
    {
      question: "Was kostet eine KI-Lösung?",
      answer: "Die Kosten variieren je nach Komplexität. Nach der Erstberatung erhalten Sie im Zweitgespräch ein transparentes Angebot."
    },
    {
      question: "Bieten Sie auch Support nach Projektende?",
      answer: "Ja, ich biete verschiedene Support-Pakete für Wartung, Updates und Erweiterungen Ihrer KI-Lösung an."
    },
    {
      question: "Viele Leute behaupten, sie seien KI-Experten. Was macht Sie anders?",
      answer: "Ich kann über 6 Jahre Praxiserfahrung in der Entwicklung von KI-Modellen aufweisen. Mit einem Master in Mathematik verfüge ich über das technische Verständnis und kann Ihnen nicht nur die Technik hinter der KI erklären, sondern maßschneidern. Ich habe bereits viele <a href='#projekte-section' style='color: #007bff; text-decoration: underline; cursor: pointer;'>erfolgreiche Projekte</a> und <a href='#referenzen-section' style='color: #007bff; text-decoration: underline; cursor: pointer;'>glückliche Kunden</a>. Überzeugen Sie sich selbst!"
    }
  ],

  testimonials: [
    {
      author: "Lutz Venhofen",
      jobTitle: "Senior Data Scientist",
      company: "Redcare Pharmacy GmbH",
      text: "Peter and I have closely cooperated for multiple years on multiple projects. I had the opportunity to witness both his ability to understand, develop and implement ML and OR solutions to complex business problems, as well as connect with business partners, understand their needs, take feedback from them and explain technical solutions. In short Peter is the one-stop-shop to understand and solve problems with AI and mathematical optimization. And he is just a great human being to be around and to work with.He shares freely his compassion, empathy and positive attitude.And if it gets tough he shows grit and determination.If I will have the chance to work with him again, I'll gladly do it!",
      profilePicture: "/assets/testimonials/lutz.png"
    },
    {
      author: "Henning Blunck",
      jobTitle: "Head of Routing & Operations Research",
      company: "DHL Data & Analytics",
      text: `It has been a joy working with Peter!

Peter is not just an outstanding programmer with great experience in algorithmic optimization and GenAI applications, but most importantly driven by the impact he can make on processes and systems. While working in my department, he has gone to great length to understand business processes, talk to stakeholders on both working- and management level and try to dial in his solution exactly on their needs.

His broad expertise allows him to both quickly design Proof-of-Concept implementations as well as drive the development of industry-grade, deployed analytics applications.

He is also a great teamplayer also to his colleagues and project members.`,
      profilePicture: "/assets/testimonials/henning.png"
    },
    {
      author: "Matteo Biggio",
      jobTitle: "Software Engineer",
      company: "DHL Data & Analytics",
      text: `Peter is a highly skilled data scientist and operations research expert.

He combines deep technical knowledge with a practical, solution-oriented mindset, delivering results that drive real business value to the customer. 

Peter is also a very skilled and passionate software engineer and software architect. I was very impressed by how he quickly became proficient in the Rust programming language, and by the soundness of the software he designed.

Beyond his technical skills, Peter is a wonderful teammate. He shares knowledge freely, and is always open to feedback and new ideas. His positive energy and professionalism make him a pleasure to work with.`,
      profilePicture: "/assets/testimonials/matteo.png"
    },
    {
      author: "Uğur Arikan",
      jobTitle: "Prinicipal Operations Research Scientist",
      company: "DHL Data & Analytics",
      text: `Peter is a highly motivated Operations Research practitioner with a strong background in algorithms, problem modeling & solving and great energy to learn more to always keep up with state of the art. He approaches the problem as a whole which let him become versatile going beyond the maths, and designing data flow, processes and user interfaces. Last but not least, he is a great teammate and it is joy to work with him.`,
      profilePicture: "/assets/testimonials/ugur.png"
    }
  ],

  navigation: {
    about: "About",
    projects: "Projekte",
    references: "Referenzen",
    contact: "Arbeitsweise"
  },

  meta: {
    siteUrl: "https://jpjsolutions.com",
    defaultImage: "/assets/JPJSolutionsSocialMediaPreview.png",
    siteName: "JPJ Solutions",
    pages: {
      "index.html": {
        title: "Jens-Peter Joost - KI-Experte | Mathematiker | Data Scientist",
        description: "Professionelle KI-Beratung und maßgeschneiderte Lösungen für Ihr Unternehmen. Expertise in GenAI, Machine Learning und Prozessoptimierung."
      },
      "zusammenarbeit.html": {
        title: "Kontakt - JPJ Solutions | KI-Beratung anfragen",
        description: "Starten Sie Ihr KI-Projekt mit einem kostenlosen Erstgespräch. Erfahren Sie mehr über unseren Projektablauf und Technologien."
      },
      "projekte.html": {
        title: "Projekte - Jens-Peter Joost | KI-Projekte & Anwendungen",
        description: "Entdecken Sie unsere erfolgreichen KI-Projekte: E-Mail-Klassifizierung, ETA-Vorhersage, Matching-Plattformen und Optimierungslösungen."
      },
      "referenzen.html": {
        title: "Referenzen - Jens-Peter Joost | Kundenstimmen & Bewertungen",
        description: "Lesen Sie Erfahrungsberichte zufriedener Kunden über unsere KI-Lösungen und Optimierungsprojekte."
      },
      "about.html": {
        title: "Über mich - Jens-Peter Joost | KI-Experte & Mathematiker",
        description: "Erfahren Sie mehr über meinen Hintergrund als Mathematiker, Data Scientist und KI-Experte mit über 6 Jahren Praxiserfahrung."
      },
      "impressum.html": {
        title: "Impressum - JPJ Solutions",
        description: "Rechtliche Angaben und Kontaktinformationen zu JPJ Solutions."
      },
      "datenschutz.html": {
        title: "Datenschutzerklärung - JPJ Solutions",
        description: "Datenschutzerklärung und Informationen zum Umgang mit personenbezogenen Daten bei JPJ Solutions."
      }
    }
  }
};