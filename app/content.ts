export type Locale = "en" | "fr";
export type Role = "all" | "analyst" | "scientist" | "engineer" | "ai";

export type ProjectResource = {
  label: Record<Locale, string>;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  category: "analytics" | "ml" | "ai";
  roles: Role[];
  status: "Live" | "Completed" | "In development" | "Planned" | "Academic prototype";
  description?: Record<Locale, string>;
  summary: Record<Locale, string>;
  outcome: Record<Locale, string>;
  stack: string[];
  metric?: string;
  evidence?: Record<Locale, string>[];
  sleepingServer?: boolean;
  liveDemo?: {
    apiUrl?: string;
    appUrl: string;
  };
  resources?: ProjectResource[];
};

export const projects: Project[] = [
  {
    slug: "real-estate-intelligence",
    title: "Paris Real Estate Intelligence",
    category: "ai",
    roles: ["ai", "scientist", "engineer"],
    status: "Completed",
    description: {
      en: "A real estate intelligence platform and multi-tool agent for exploring the Paris residential market using DVF, DPE and official sources.",
      fr: "Une plateforme d’intelligence immobilière et un agent multi-outils pour explorer le marché résidentiel parisien à partir des données DVF, DPE et de sources officielles.",
    },
    summary: {
      en: "Property prices, energy performance and housing regulations are scattered across several sources. The platform centralises them into reliable analytics, interactive visualisations and sourced conversational answers.",
      fr: "Les prix immobiliers, la performance énergétique et la réglementation sont dispersés entre plusieurs sources. La plateforme les centralise pour produire des analyses fiables, des visualisations interactives et des réponses conversationnelles sourcées.",
    },
    outcome: {
      en: "Compare all 20 Paris districts, analyse prices per square metre and DPE ratings, then query a system combining deterministic analytics with document retrieval from official sources.",
      fr: "Comparer les 20 arrondissements parisiens, analyser les prix au m² et les diagnostics énergétiques, puis interroger un système combinant analyses déterministes et recherche documentaire sur des sources officielles.",
    },
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Streamlit", "OpenAI API", "RAG", "Docker", "GitHub Actions", "Render"],
    metric: "364 tests",
    evidence: [
      {en: "Nearly one million DVF and DPE records analysed", fr: "Près d’un million d’enregistrements DVF et DPE analysés"},
      {en: "6 official sources and 116 vectorised passages", fr: "6 sources officielles et 116 passages vectorisés"},
      {en: "364 automated tests passed", fr: "364 tests automatisés réussis"},
    ],
    sleepingServer: true,
    liveDemo: {
      apiUrl: "https://paris-real-estate-api-5xw1.onrender.com/",
      appUrl: "https://paris-real-estate-dashboard-a4tn.onrender.com/",
    },
    resources: [
      {label: {en: "Explore the GitHub repository", fr: "Explorer le dépôt GitHub"}, url: "https://github.com/fresnelkameni06/real-estate-intelligence-agent"},
    ],
  },
  {
    slug: "visionbank",
    title: "VisionBank",
    category: "ml",
    roles: ["scientist", "analyst", "engineer", "ai"],
    status: "Completed",
    description: {
      en: "A banking data platform combining reliable data pipelines, credit scoring, budget forecasting and conversational financial guidance.",
      fr: "Une plateforme bancaire combinant pipelines de données fiables, scoring de crédit, prévision budgétaire et accompagnement financier conversationnel.",
    },
    summary: {
      en: "Historical credit applications needed to be structured, cleaned and documented before they could support analysis and modelling. A normalised PostgreSQL schema, ingestion pipeline and dbt transformation layer produce reusable analytical tables.",
      fr: "Les demandes de crédit historiques devaient être structurées, nettoyées et documentées avant de servir à l’analyse et à la modélisation. Un schéma PostgreSQL normalisé, un pipeline d’ingestion et une couche de transformation dbt produisent des tables analytiques réutilisables.",
    },
    outcome: {
      en: "The platform exposes traceable data through an API, supports explainable lending decisions, forecasts future expenses and integrates a financial adviser powered by the Anthropic Claude API.",
      fr: "La plateforme expose des données traçables par API, soutient des décisions de crédit explicables, prévoit les dépenses futures et intègre un conseiller financier connecté à l’API Claude d’Anthropic.",
    },
    stack: ["Python", "PostgreSQL", "dbt", "FastAPI", "Flask", "scikit-learn", "Random Forest", "Claude API", "Docker", "GitHub Actions"],
    metric: "ROC-AUC 0.969",
    evidence: [
      {en: "20,000 historical credit applications processed", fr: "20 000 demandes de crédit historiques traitées"},
      {en: "Credit scoring with logistic regression, ROC-AUC 0.969", fr: "Scoring de crédit par régression logistique, ROC-AUC 0,969"},
      {en: "Budget forecasting and financial health scoring", fr: "Prévision budgétaire et score de santé financière"},
    ],
    resources: [
      {label: {en: "Explore the GitHub repository", fr: "Explorer le dépôt GitHub"}, url: "https://github.com/fresnelkameni06/VisionBank-Data-IA"},
    ],
  },
  {
    slug: "medivision",
    title: "MediVision AI",
    category: "ml",
    roles: ["scientist", "engineer"],
    status: "In development",
    description: {
      en: "A breast cancer detection research pipeline using deep learning, explainability and reproducible MLOps practices.",
      fr: "Un pipeline de recherche pour la détection du cancer du sein associant Deep Learning, explicabilité et pratiques MLOps reproductibles.",
    },
    summary: {
      en: "The project explores binary classification of benign and malignant tumours on CBIS-DDSM mammograms using convolutional neural networks and transfer learning.",
      fr: "Le projet explore la classification binaire de tumeurs bénignes et malignes sur des mammographies CBIS-DDSM avec des réseaux de neurones convolutifs et du Transfer Learning.",
    },
    outcome: {
      en: "ResNet50 and EfficientNetB3 are fine-tuned and interpreted with Grad-CAM. Experiments, data and deployments are tracked through MLflow, DVC, Docker, GitHub Actions, AWS and Evidently monitoring.",
      fr: "ResNet50 et EfficientNetB3 sont ajustés puis interprétés avec Grad-CAM. Les expériences, données et déploiements sont suivis avec MLflow, DVC, Docker, GitHub Actions, AWS et le monitoring Evidently.",
    },
    stack: ["PyTorch", "CNN", "ResNet50", "EfficientNetB3", "Grad-CAM", "MLflow", "DVC", "Docker", "GitHub Actions", "AWS", "Evidently"],
    metric: "AUC > 0.92",
  },
  {
    slug: "idfm-mobility-platform",
    title: "IDFM Mobility Platform",
    category: "ml",
    roles: ["scientist", "engineer"],
    status: "Completed",
    description: {
      en: "An end-to-end urban mobility data platform for traffic forecasting, anomaly detection and stop segmentation across Île-de-France.",
      fr: "Une plateforme de données mobilité de bout en bout pour prévoir les flux, détecter les anomalies et segmenter les arrêts en Île-de-France.",
    },
    summary: {
      en: "Transport validation data is ingested, cleaned and enriched through distributed processing. Airflow orchestrates the pipeline and dbt structures bronze, silver and gold analytical layers.",
      fr: "Les validations de transport sont ingérées, nettoyées et enrichies par traitement distribué. Airflow orchestre le pipeline et dbt structure les couches analytiques bronze, silver et gold.",
    },
    outcome: {
      en: "XGBoost forecasts traffic by stop, Isolation Forest detects unusual flows and K-Means groups stops by profile. Results are exposed through FastAPI, Streamlit and Power BI.",
      fr: "XGBoost prévoit le trafic par arrêt, Isolation Forest détecte les flux inhabituels et K-Means regroupe les arrêts par profil. Les résultats sont exposés avec FastAPI, Streamlit et Power BI.",
    },
    stack: ["Python", "PySpark", "Apache Airflow", "AWS S3", "Redshift", "dbt", "XGBoost", "Isolation Forest", "K-Means", "MLflow", "FastAPI", "Streamlit"],
    metric: "R² > 0.85",
    evidence: [
      {en: "1,844,000 transport validations processed", fr: "1 844 000 validations de transport traitées"},
      {en: "Traffic forecasting by stop with R² above 0.85", fr: "Prévision du trafic par arrêt avec un R² supérieur à 0,85"},
      {en: "779 stops monitored through decision dashboards", fr: "779 arrêts suivis dans les tableaux de bord décisionnels"},
    ],
    sleepingServer: true,
    liveDemo: {
      apiUrl: "https://idfm-api-hzbc.onrender.com/",
      appUrl: "https://idfm-streamlit-k1ho.onrender.com/",
    },
    resources: [
      {label: {en: "Explore the GitHub repository", fr: "Explorer le dépôt GitHub"}, url: "https://github.com/fresnelkameni06/idfm-mobility-prediction"},
    ],
  },
  {
    slug: "mobility-analytics-bi",
    title: "Mobility Analytics BI",
    category: "analytics",
    roles: ["analyst", "engineer"],
    status: "Completed",
    description: {
      en: "A Business Intelligence study for monitoring and forecasting public transport activity in Île-de-France.",
      fr: "Une étude Business Intelligence consacrée au pilotage et à la prévision de l’activité des transports en Île-de-France.",
    },
    summary: {
      en: "Transport validations were prepared, checked and analysed to identify volume trends, seasonal patterns, peak periods, transport modes and the busiest stops.",
      fr: "Les validations de transport ont été préparées, contrôlées et analysées afin d’identifier les tendances, saisonnalités, périodes de pointe, modes les plus utilisés et arrêts les plus fréquentés.",
    },
    outcome: {
      en: "A Power BI dashboard brings together operational KPIs, traffic monitoring and volume forecasts to support decision-making.",
      fr: "Un dashboard Power BI réunit les KPI opérationnels, le suivi des flux et la prévision des volumes afin de faciliter la prise de décision.",
    },
    stack: ["SQL", "Python", "Pandas", "PySpark", "Power BI", "Data Quality", "KPI"],
    metric: "1.84M validations",
  },
  {
    slug: "internal-audit",
    title: "Internal Audit Intelligence",
    category: "analytics",
    roles: ["analyst"],
    status: "In development",
    description: {
      en: "A Business Intelligence project for monitoring controls, risks and internal audit indicators.",
      fr: "Un projet Business Intelligence pour suivre les contrôles, les risques et les indicateurs d’audit interne.",
    },
    summary: {
      en: "The project structures audit data and control indicators to reveal anomalies, risk areas and priority actions.",
      fr: "Le projet structure les données d’audit et les indicateurs de contrôle pour faire ressortir les anomalies, les zones de risque et les actions prioritaires.",
    },
    outcome: {
      en: "Interactive dashboards will provide traceable reporting and decision support once the analysis is finalised.",
      fr: "Les tableaux de bord interactifs fourniront un reporting traçable et une aide à la décision lorsque l’analyse sera finalisée.",
    },
    stack: ["Power BI", "SQL", "Python", "Risk Analysis", "Data Quality", "Reporting"],
  },
  {
    slug: "diabetes-prediction",
    title: "Diabetes Prediction",
    category: "ml",
    roles: ["scientist", "engineer"],
    status: "Completed",
    description: {
      en: "An explainable educational prototype for estimating diabetes risk from simple clinical measurements.",
      fr: "Un prototype pédagogique et explicable pour estimer le risque de diabète à partir de mesures cliniques simples.",
    },
    summary: {
      en: "The complete pipeline cleans the data, creates useful features, trains XGBoost and evaluates performance through cross-validation.",
      fr: "Le pipeline complet nettoie les données, construit les variables utiles, entraîne XGBoost et évalue les performances par validation croisée.",
    },
    outcome: {
      en: "SHAP explains predictions while a containerised FastAPI service and Streamlit dashboard make the model accessible. Evidently supports monitoring.",
      fr: "SHAP explique les prédictions tandis qu’une API FastAPI conteneurisée et un dashboard Streamlit rendent le modèle accessible. Evidently assure le suivi du modèle.",
    },
    stack: ["Python", "scikit-learn", "XGBoost", "SHAP", "FastAPI", "Streamlit", "Docker", "Evidently", "AWS EC2"],
    metric: "Explainable ML",
    sleepingServer: true,
    liveDemo: {
      apiUrl: "https://diabetes-api-2-jv78.onrender.com/",
      appUrl: "https://diabetes-streamlit-2.onrender.com/",
    },
    resources: [
      {label: {en: "Explore the GitHub repository", fr: "Explorer le dépôt GitHub"}, url: "https://github.com/fresnelkameni06/diabetes-prediction"},
    ],
  },
  {
    slug: "cti-anssi",
    title: "CTI ANSSI",
    category: "ml",
    roles: ["analyst", "scientist", "engineer"],
    status: "In development",
    description: {
      en: "A cyber threat intelligence platform for collecting, enriching and prioritising ANSSI vulnerability bulletins.",
      fr: "Une plateforme de Cyber Threat Intelligence pour collecter, enrichir et prioriser les bulletins de vulnérabilités de l’ANSSI.",
    },
    summary: {
      en: "The pipeline retrieves ANSSI bulletins, extracts CVE identifiers, enriches them with MITRE, CVSS, CWE and EPSS data, then consolidates and validates the results.",
      fr: "Le pipeline collecte les bulletins ANSSI, extrait les identifiants CVE, les enrichit avec les données MITRE, CVSS, CWE et EPSS, puis consolide et contrôle les résultats.",
    },
    outcome: {
      en: "Dashboards support risk interpretation while forecasting and K-Means clustering help explore future trends and vulnerability families.",
      fr: "Des visualisations facilitent l’interprétation des risques tandis que la prévision et le clustering K-Means permettent d’explorer les tendances et familles de vulnérabilités.",
    },
    stack: ["Python", "Web Scraping", "ETL", "ANSSI", "CVE", "MITRE API", "EPSS", "Pandas", "K-Means", "Forecasting", "Jupyter"],
  },
  {
    slug: "sepi-visio",
    title: "SEPI Visio",
    category: "ml",
    roles: ["analyst", "engineer"],
    status: "Completed",
    description: {
      en: "A transparent computer vision application that detects whether waste collection points are empty or full from field images.",
      fr: "Une application transparente de vision par ordinateur qui détecte si un point de collecte est vide ou plein à partir d’images du terrain.",
    },
    summary: {
      en: "Each image is converted into 23 colour, brightness, contour, texture and ground-disorder features. Explicit rules then produce an auditable Empty or Full decision without a trained model.",
      fr: "Chaque image est transformée en 23 caractéristiques de couleur, luminosité, contours, texture et désordre au sol. Des règles explicites produisent ensuite une décision Vide ou Pleine vérifiable, sans modèle entraîné.",
    },
    outcome: {
      en: "The application supports single and batch uploads, human annotations, image galleries, historical data, CSV exports and performance dashboards.",
      fr: "L’application propose l’analyse d’une image ou d’un lot, l’annotation humaine, une galerie, un historique, l’export CSV et des tableaux de bord de performance.",
    },
    stack: ["Python", "Streamlit", "OpenCV", "Pillow", "NumPy", "SQLite", "Matplotlib", "Seaborn", "Rule-based Classification"],
    metric: "23 image features",
    sleepingServer: true,
    liveDemo: {
      appUrl: "https://sepi-visio.streamlit.app/",
    },
    resources: [
      {label: {en: "Explore the GitHub repository", fr: "Explorer le dépôt GitHub"}, url: "https://github.com/fresnelkameni06/SEPI-visio"},
    ],
  },
  {
    slug: "financial-analyst-agent",
    title: "Financial Analyst Agent",
    category: "ai",
    roles: ["ai", "scientist", "engineer"],
    status: "In development",
    description: {
      en: "A multi-tool financial analysis platform for studying and comparing listed companies using structured financial data and official SEC filings.",
      fr: "Une plateforme d’analyse financière multi-outils pour étudier et comparer des entreprises cotées à partir de données structurées et de rapports officiels de la SEC.",
    },
    summary: {
      en: "Financial analysis requires combining statements, performance indicators and long regulatory reports. The platform centralises these sources for verifiable analysis and comparisons.",
      fr: "L’analyse financière nécessite de croiser des états financiers, des indicateurs de performance et de longs rapports réglementaires. La plateforme centralise ces sources pour produire des analyses et comparaisons vérifiables.",
    },
    outcome: {
      en: "The system will combine structured queries, deterministic financial calculations and document retrieval over official 10-K reports.",
      fr: "Le système combinera interrogation de données structurées, calculs financiers déterministes et recherche documentaire dans les rapports 10-K officiels.",
    },
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Next.js", "LangGraph", "SEC EDGAR", "XBRL", "RAG", "Docker", "GitHub Actions"],
  },
  {
    slug: "connect-four-ai",
    title: "Connect Four Arena",
    category: "ai",
    roles: ["ai", "scientist", "engineer"],
    status: "Completed",
    description: {
      en: "A 6 by 12 Connect Four arena where a player can challenge the computer or watch two strategies compete.",
      fr: "Une arène Puissance 4 sur grille 6 par 12 permettant d’affronter l’ordinateur ou d’observer deux stratégies jouer l’une contre l’autre.",
    },
    summary: {
      en: "The decision engine uses Minimax with Alpha-Beta pruning, iterative deepening and a window-based heuristic to select moves efficiently.",
      fr: "Le moteur de décision utilise Minimax avec élagage Alpha-Beta, approfondissement itératif et heuristique par fenêtres afin de sélectionner les coups efficacement.",
    },
    outcome: {
      en: "A tested and containerised FastAPI backend powers a React interface deployed online for interactive play and strategy observation.",
      fr: "Un backend FastAPI testé et conteneurisé alimente une interface React déployée en ligne pour jouer et observer les stratégies.",
    },
    stack: ["Minimax", "Alpha-Beta", "Iterative Deepening", "FastAPI", "React", "Docker", "Testing"],
    metric: "6 × 12 grid",
    sleepingServer: true,
    liveDemo: {
      apiUrl: "https://connect4-arena.onrender.com/",
      appUrl: "https://connect4-arena.vercel.app/",
    },
    resources: [
      {label: {en: "Explore the GitHub repository", fr: "Explorer le dépôt GitHub"}, url: "https://github.com/fresnelkameni06/connect4-arena"},
    ],
  },
];
