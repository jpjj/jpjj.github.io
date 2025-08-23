// JPJ Solutions - AI Consulting Configuration
const CONFIG = {
  personal: {
    name: "Jens-Peter Joost",
    title: "Mathematiker & Data Scientist | KI-Experte",
    description: "Maßgeschneiderte KI-Anwendungen für Logistik und Produktion",
    heroHeadline: "Ihr Partner für KI-Lösungen 🤖",
    heroSubline: "Als Mathematiker und Data Scientist entwickle ich maßgeschneiderte KI-Anwendungen für Logistik und Produktion",
    email: "jenspeter.joost@gmail.com",
    linkedin: "https://www.linkedin.com/in/jens-peter-joost/",
    github: "https://github.com/jpjj",
    profileImage: "/assets/headshot_circle.png"
  },

  company: {
    current: {
      name: "DHL Data & Analytics GmbH",
      url: "https://www.linkedin.com/company/dhl-data-analytics/posts/?feedView=all",
      position: "Senior Data Scientist - Operations Research",
      duration: "Jan 2023 - Apr 2025"
    },
    previous: {
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
      title: "Route Planning Application",
      description: "Intelligente Routenoptimierung für Logistikunternehmen mit interaktiver Weboberfläche",
      url: "https://jumper.streamlit.app",
      image: "/assets/project-route-planning.png",
      technologies: ["Python", "Streamlit", "Optimization"]
    },
    {
      title: "Supply Chain Analytics",
      description: "Dashboard für Echtzeit-Analyse von Logistikprozessen bei internationalen Versanddienstleistern",
      url: "#",
      image: "/assets/project-analytics.png",
      technologies: ["Python", "Machine Learning", "Data Visualization"]
    },
    {
      title: "Production Optimization",
      description: "KI-basierte Produktionsplanung für Fertigungsunternehmen",
      url: "#",
      image: "/assets/project-production.png", 
      technologies: ["Operations Research", "AI", "Process Optimization"]
    }
  ],

  testimonials: [
    {
      text: "JPJ Solutions hat unsere Logistikprozesse revolutioniert. Die entwickelte Routenoptimierung spart uns täglich mehrere Stunden und reduziert unsere Transportkosten um 15%.",
      author: "Dr. Maria Schmidt",
      company: "LogTech Solutions GmbH",
      date: "März 2024"
    },
    {
      text: "Die Zusammenarbeit war hervorragend. Jens-Peter versteht es, komplexe mathematische Konzepte in praktische Lösungen zu übersetzen.",
      author: "Thomas Müller",
      company: "Produktions AG",
      date: "Februar 2024"
    },
    {
      text: "Professionelle Beratung und erstklassige Umsetzung. Das KI-Dashboard gibt uns endlich die Transparenz, die wir für datenbasierte Entscheidungen brauchen.",
      author: "Sarah Weber",
      company: "Manufacturing Pro",
      date: "Januar 2024"
    }
  ],

  faq: [
    {
      question: "Wie läuft die Zusammenarbeit ab?",
      answer: "Wir starten mit einer kostenlosen Erstberatung, in der ich Ihre Anforderungen verstehe. Anschließend entwickle ich einen detaillierten Projektplan mit klaren Meilensteinen und Deliverables."
    },
    {
      question: "Welche Technologien verwenden Sie?",
      answer: "Ich arbeite hauptsächlich mit Python (TensorFlow, scikit-learn, pandas), JavaScript für Webinterfaces und professionellen Optimierungstools wie CPLEX und Gurobi."
    },
    {
      question: "Wie lange dauert ein Projekt?",
      answer: "Das hängt vom Umfang ab. Einfache Analysen: 2-4 Wochen, komplexe KI-Anwendungen: 3-6 Monate. Ich arbeite agil mit regelmäßigen Updates."
    },
    {
      question: "Was kostet eine KI-Lösung?",
      answer: "Die Kosten variieren je nach Komplexität. Nach der Erstberatung erhalten Sie ein transparentes Angebot. Kleine Projekte starten ab 5.000€, größere Entwicklungen nach Aufwand."
    },
    {
      question: "Bieten Sie auch Support nach Projektende?",
      answer: "Ja, ich biete verschiedene Support-Pakete für Wartung, Updates und Erweiterungen Ihrer KI-Lösung an."
    }
  ],

  navigation: {
    about: "Über mich",
    references: "Referenzen", 
    contact: "Kontakt"
  }
};