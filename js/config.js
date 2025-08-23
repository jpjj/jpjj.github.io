// Personal information configuration
const CONFIG = {
  personal: {
    name: "Jens-Peter Joost",
    title: "Data Scientist | AI Expert | Algorithm Engineer | Scrum Master",
    description: "Developing tailored AI applications and providing expert consulting in logistics & manufacturing optimization",
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

  projects: {
    routePlanning: {
      name: "Route planning",
      url: "https://jumper.streamlit.app"
    }
  }
};