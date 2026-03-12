import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home as HomeIcon,
  Grid,
  User,
  FileText,
  Sun,
  Moon,
  ExternalLink,
  Mail,
  Linkedin,
  MapPin,
  Briefcase,
  TrendingUp,
  BarChart3,
  Users,
  Target,
  ChevronRight,
} from "lucide-react";

type Tab = "home" | "portfolio" | "about" | "blog";
type Theme = "light" | "dark";

const skills = [
  { name: "Meta Ads", icon: "📱" },
  { name: "Google Ads", icon: "🔍" },
  { name: "Performance Marketing", icon: "🚀" },
  { name: "Growth Strategy", icon: "📈" },
  { name: "Content Marketing", icon: "✍️" },
  { name: "SEO", icon: "🔎" },
  { name: "Analytics", icon: "📊" },
  { name: "A/B Testing", icon: "🧪" },
  { name: "AI Automation", icon: "🤖" },
  { name: "WhatsApp API", icon: "💬" },
  { name: "Team Leadership", icon: "👥" },
  { name: "Data-Driven", icon: "💡" },
];

const experiences = [
  {
    role: "Business Associate – Digital Marketing",
    company: "Innovative Advanced Media Management Pvt. Ltd.",
    period: "Jan 2024 – Sep 2025",
    location: "India",
    bullets: [
      "Optimized Meta Ads campaigns end-to-end—achieving consistent improvement in ROAS and reducing CPL by 25–30%",
      "Deployed AI-powered tools for audience segmentation and creative personalization, boosting campaign CTR by 20%+",
      "Built and executed data-driven content marketing strategies driving organic traffic growth",
      "Automated campaign optimization workflows using AI tools, reducing manual reporting time",
    ],
    color: "#0F94FA",
  },
  {
    role: "Marketing Team Lead – Digital",
    company: "Innovative Advanced Media Management Pvt. Ltd.",
    period: "Nov 2022 – Dec 2023",
    location: "Bengaluru, Karnataka",
    bullets: [
      "Scaled YouTube channel from zero to 450K+ subscribers with structured digital growth plan",
      "Led omnichannel digital strategy for 5+ clients, integrating paid, organic, and content channels",
      "Directed cross-functional marketing team in executing performance campaigns",
      "Increased engagement metrics by 35%+ through data-driven creative iteration",
    ],
    color: "#8B5CF6",
  },
  {
    role: "Digital Marketing Executive",
    company: "Innovative Advanced Media Management Pvt. Ltd.",
    period: "Apr 2021 – Oct 2022",
    location: "Bengaluru, Karnataka",
    bullets: [
      "Managed social media across Facebook, Instagram, YouTube—growing follower base by 40%+",
      "Executed email marketing campaigns, improving open rates through optimization",
      "Generated bi-weekly campaign performance reports tracking reach, engagement, CPL, and ROAS",
    ],
    color: "#10B981",
  },
];

const stats = [
  { value: "4+", label: "Years Experience", icon: <Briefcase size={20} /> },
  { value: "450K+", label: "YouTube Subscribers", icon: <TrendingUp size={20} /> },
  { value: "30%", label: "CPL Reduction", icon: <Target size={20} /> },
  { value: "5+", label: "Clients Led", icon: <Users size={20} /> },
];

const portfolioProjects = [
  {
    title: "YouTube Channel Growth",
    description: "Scaled a YouTube channel from 0 to 450K+ subscribers through SEO, content cadence, and audience development strategy.",
    tags: ["YouTube SEO", "Content Strategy", "Growth Hacking"],
    metric: "450K+ subscribers",
    icon: "📺",
    color: "#FF0000",
  },
  {
    title: "Meta Ads Performance Campaign",
    description: "Optimized Meta Ads campaigns end-to-end reducing cost-per-lead by 25-30% while consistently improving ROAS for new-age brands.",
    tags: ["Meta Ads", "Facebook", "Instagram"],
    metric: "25-30% CPL reduction",
    icon: "📱",
    color: "#0F94FA",
  },
  {
    title: "AI-Powered Campaign Automation",
    description: "Deployed AI tools for audience segmentation and creative personalization, boosting campaign CTR by 20%+ across key verticals.",
    tags: ["AI Automation", "Personalization", "CTR Optimization"],
    metric: "20%+ CTR boost",
    icon: "🤖",
    color: "#8B5CF6",
  },
  {
    title: "Omnichannel Brand Strategy",
    description: "Led omnichannel digital strategy for 5+ clients, integrating paid, organic, and content channels for cohesive brand messaging.",
    tags: ["Omnichannel", "Brand Strategy", "Client Management"],
    metric: "35%+ engagement increase",
    icon: "🎯",
    color: "#10B981",
  },
];

const certifications = [
  {
    name: "Generative AI Foundations",
    issuer: "UpGrad × Microsoft",
    icon: "🎓",
  },
  {
    name: "WhatsApp API Expert Certification",
    issuer: "WhatsApp Business Platform",
    icon: "💬",
  },
  {
    name: "Marketing Launchpad Program",
    issuer: "Kraftshala",
    icon: "🚀",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [theme, setTheme] = useState<Theme>("light");

  const isDark = theme === "dark";

  const bg = isDark ? "#111" : "#F8F9FA";
  const card = isDark ? "#1A1A1A" : "#FFFFFF";
  const text = isDark ? "#FFFFFF" : "#000000";
  const subText = isDark ? "#999" : "#666";
  const border = isDark ? "#2A2A2A" : "#E5E7EB";
  const navBg = isDark ? "rgba(17,17,17,0.95)" : "rgba(248,249,250,0.95)";

  const tabs = [
    { id: "home" as Tab, label: "Home", icon: <HomeIcon size={18} /> },
    { id: "portfolio" as Tab, label: "Portfolio", icon: <Grid size={18} /> },
    { id: "about" as Tab, label: "About", icon: <User size={18} /> },
    { id: "blog" as Tab, label: "Blog", icon: <FileText size={18} /> },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        color: text,
        fontFamily: "'Inter', -apple-system, sans-serif",
        transition: "all 0.3s ease",
      }}
    >
      {/* TOP NAV */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: navBg,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: "60px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/avatar.png"
            alt="Vishwanath"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span style={{ fontWeight: 700, fontSize: "15px", color: text }}>
            Vishwanath BA
          </span>
        </div>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            style={{
              background: isDark ? "#2A2A2A" : "#F0F0F0",
              border: "none",
              borderRadius: "8px",
              padding: "6px 8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: subText,
            }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="mailto:vishwavk8474@gmail.com"
            style={{
              background: "#0F94FA",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "22px",
              padding: "7px 18px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Connect
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "80px 24px 100px",
        }}
      >
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {/* HERO SECTION */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "32px",
                  marginTop: "32px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: "260px" }}>
                  <h1
                    style={{
                      fontSize: "clamp(36px, 6vw, 72px)",
                      fontWeight: 800,
                      lineHeight: 1.1,
                      margin: "0 0 12px",
                      color: text,
                    }}
                  >
                    Hello! 👋 I'm
                    <br />
                    <span style={{ color: "#0F94FA" }}>Vishwanath BA</span>
                  </h1>
                  <p
                    style={{
                      fontSize: "16px",
                      color: subText,
                      margin: "0 0 24px",
                      lineHeight: 1.6,
                      maxWidth: "420px",
                    }}
                  >
                    I'm a <strong style={{ color: text }}>Digital Marketing Manager</strong> specializing in{" "}
                    <strong style={{ color: text }}>Performance Marketing</strong> — scaling brands with Meta Ads, Google Ads, and AI-powered growth strategies.
                  </p>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <button
                      onClick={() => setActiveTab("portfolio")}
                      style={{
                        background: "#0F94FA",
                        color: "#FFFFFF",
                        border: "none",
                        borderRadius: "22px",
                        padding: "10px 22px",
                        fontSize: "14px",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      View Portfolio
                    </button>
                    <a
                      href="mailto:vishwavk8474@gmail.com"
                      style={{
                        background: "transparent",
                        color: text,
                        border: `1.5px solid ${border}`,
                        borderRadius: "22px",
                        padding: "10px 22px",
                        fontSize: "14px",
                        fontWeight: 600,
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>

                {/* Avatar */}
                <div
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Pulse ring */}
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.15, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      width: "270px",
                      height: "270px",
                      borderRadius: "50%",
                      background: "rgba(15, 148, 250, 0.15)",
                      zIndex: 0,
                    }}
                  />
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      width: "230px",
                      height: "230px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #0F94FA 0%, #00C6FF 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      boxShadow: "0 24px 80px rgba(15, 148, 250, 0.35)",
                      zIndex: 1,
                      position: "relative",
                    }}
                  >
                    <img
                      src="/avatar.png"
                      alt="Vishwanath"
                      style={{ width: "210px", height: "210px", objectFit: "cover" }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* STATS ROW */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "16px",
                  marginTop: "48px",
                }}
              >
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      background: card,
                      borderRadius: "16px",
                      padding: "20px",
                      border: `1px solid ${border}`,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        color: "#0F94FA",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "8px",
                      }}
                    >
                      {s.icon}
                    </div>
                    <div
                      style={{
                        fontSize: "28px",
                        fontWeight: 800,
                        color: "#0F94FA",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: subText,
                        marginTop: "4px",
                      }}
                    >
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* SKILLS */}
              <div style={{ marginTop: "48px" }}>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "20px",
                    color: text,
                  }}
                >
                  Core Skills 🛠️
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      style={{
                        background: card,
                        border: `1px solid ${border}`,
                        borderRadius: "30px",
                        padding: "8px 16px",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: text,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        cursor: "default",
                      }}
                    >
                      <span>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FEATURED WORK */}
              <div style={{ marginTop: "48px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <h2 style={{ fontSize: "22px", fontWeight: 700, color: text, margin: 0 }}>
                    Featured Work 🚀
                  </h2>
                  <button
                    onClick={() => setActiveTab("portfolio")}
                    style={{
                      background: "transparent",
                      color: "#0F94FA",
                      border: "none",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    View all <ChevronRight size={14} />
                  </button>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {portfolioProjects.slice(0, 2).map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      style={{
                        background: card,
                        borderRadius: "20px",
                        padding: "24px",
                        border: `1px solid ${border}`,
                        cursor: "pointer",
                        transition: "transform 0.2s, box-shadow 0.2s",
                      }}
                      whileHover={{ y: -4 }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          background: `${p.color}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "24px",
                          marginBottom: "16px",
                        }}
                      >
                        {p.icon}
                      </div>
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          margin: "0 0 8px",
                          color: text,
                        }}
                      >
                        {p.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          color: subText,
                          margin: "0 0 16px",
                          lineHeight: 1.5,
                        }}
                      >
                        {p.description}
                      </p>
                      <div
                        style={{
                          background: `${p.color}15`,
                          color: p.color,
                          borderRadius: "8px",
                          padding: "6px 12px",
                          fontSize: "12px",
                          fontWeight: 700,
                          display: "inline-block",
                        }}
                      >
                        📊 {p.metric}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "portfolio" && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ marginTop: "32px" }}>
                <h1
                  style={{
                    fontSize: "36px",
                    fontWeight: 800,
                    marginBottom: "8px",
                    color: text,
                  }}
                >
                  Portfolio 📁
                </h1>
                <p style={{ color: subText, fontSize: "15px", marginBottom: "32px" }}>
                  Real campaigns and projects that delivered measurable results
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {portfolioProjects.map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      style={{
                        background: card,
                        borderRadius: "20px",
                        padding: "28px",
                        border: `1px solid ${border}`,
                        cursor: "pointer",
                      }}
                      whileHover={{ y: -4, boxShadow: `0 12px 40px ${p.color}20` }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "14px",
                          background: `${p.color}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "28px",
                          marginBottom: "20px",
                        }}
                      >
                        {p.icon}
                      </div>
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          margin: "0 0 10px",
                          color: text,
                        }}
                      >
                        {p.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: subText,
                          margin: "0 0 20px",
                          lineHeight: 1.6,
                        }}
                      >
                        {p.description}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                        {p.tags.map((tag, t) => (
                          <span
                            key={t}
                            style={{
                              background: isDark ? "#2A2A2A" : "#F3F4F6",
                              color: subText,
                              borderRadius: "6px",
                              padding: "3px 10px",
                              fontSize: "11px",
                              fontWeight: 500,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div
                        style={{
                          background: `${p.color}15`,
                          color: p.color,
                          borderRadius: "10px",
                          padding: "8px 14px",
                          fontSize: "13px",
                          fontWeight: 700,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <BarChart3 size={14} />
                        {p.metric}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ marginTop: "32px" }}>
                {/* About Hero */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                    marginBottom: "40px",
                    flexWrap: "wrap",
                  }}
                >
                  <img
                    src="/avatar.png"
                    alt="Vishwanath"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      boxShadow: "0 8px 32px rgba(15, 148, 250, 0.3)",
                    }}
                  />
                  <div>
                    <h1
                      style={{
                        fontSize: "32px",
                        fontWeight: 800,
                        margin: "0 0 6px",
                        color: text,
                      }}
                    >
                      Vishwanath BA 👋
                    </h1>
                    <p style={{ color: "#0F94FA", fontWeight: 600, margin: "0 0 8px", fontSize: "15px" }}>
                      Digital Marketing Manager
                    </p>
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          color: subText,
                          fontSize: "13px",
                        }}
                      >
                        <MapPin size={14} /> Bengaluru, Karnataka, India
                      </span>
                      <a
                        href="mailto:vishwavk8474@gmail.com"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          color: subText,
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                      >
                        <Mail size={14} /> vishwavk8474@gmail.com
                      </a>
                      <a
                        href="https://linkedin.com/in/vishwavk98"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          color: "#0F94FA",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                      >
                        <Linkedin size={14} /> LinkedIn <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div
                  style={{
                    background: card,
                    borderRadius: "20px",
                    padding: "28px",
                    border: `1px solid ${border}`,
                    marginBottom: "28px",
                  }}
                >
                  <h2 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 14px", color: text }}>
                    About Me 💡
                  </h2>
                  <p style={{ color: subText, lineHeight: 1.7, fontSize: "14px", margin: 0 }}>
                    Results-driven Digital Marketing professional with <strong style={{ color: text }}>4+ years of experience</strong> scaling performance campaigns across Meta Ads, Google Ads, and omnichannel platforms. Demonstrated track record of maximizing ROI, growing YouTube channels to <strong style={{ color: text }}>450K+ subscribers</strong>, and deploying AI-powered marketing automation for high-growth brands. Expertise in data-driven audience targeting, campaign optimization, and content marketing strategy—delivering measurable growth across CPL, ROAS, and conversion KPIs.
                  </p>
                </div>

                {/* Experience */}
                <div style={{ marginBottom: "28px" }}>
                  <h2 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 20px", color: text }}>
                    Experience 💼
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {experiences.map((exp, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        style={{
                          background: card,
                          borderRadius: "20px",
                          padding: "24px",
                          border: `1px solid ${border}`,
                          borderLeft: `4px solid ${exp.color}`,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: "12px",
                            flexWrap: "wrap",
                            gap: "8px",
                          }}
                        >
                          <div>
                            <h3
                              style={{
                                fontSize: "15px",
                                fontWeight: 700,
                                margin: "0 0 4px",
                                color: text,
                              }}
                            >
                              {exp.role}
                            </h3>
                            <p style={{ color: exp.color, fontSize: "13px", margin: 0, fontWeight: 600 }}>
                              {exp.company}
                            </p>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <div
                              style={{
                                background: `${exp.color}20`,
                                color: exp.color,
                                borderRadius: "8px",
                                padding: "3px 10px",
                                fontSize: "11px",
                                fontWeight: 600,
                              }}
                            >
                              {exp.period}
                            </div>
                            <div style={{ color: subText, fontSize: "11px", marginTop: "4px" }}>
                              📍 {exp.location}
                            </div>
                          </div>
                        </div>
                        <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
                          {exp.bullets.map((b, j) => (
                            <li
                              key={j}
                              style={{
                                color: subText,
                                fontSize: "13px",
                                lineHeight: 1.6,
                                marginBottom: "6px",
                              }}
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div style={{ marginBottom: "28px" }}>
                  <h2 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 20px", color: text }}>
                    Certifications 🏆
                  </h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: "14px",
                    }}
                  >
                    {certifications.map((cert, i) => (
                      <div
                        key={i}
                        style={{
                          background: card,
                          borderRadius: "16px",
                          padding: "20px",
                          border: `1px solid ${border}`,
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                        }}
                      >
                        <div
                          style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "12px",
                            background: "rgba(15, 148, 250, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "22px",
                            flexShrink: 0,
                          }}
                        >
                          {cert.icon}
                        </div>
                        <div>
                          <div style={{ fontSize: "13px", fontWeight: 700, color: text, marginBottom: "3px" }}>
                            {cert.name}
                          </div>
                          <div style={{ fontSize: "11px", color: subText }}>{cert.issuer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 20px", color: text }}>
                    Education 🎓
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div
                      style={{
                        background: card,
                        borderRadius: "16px",
                        padding: "20px",
                        border: `1px solid ${border}`,
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "12px",
                          background: "rgba(139, 92, 246, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "22px",
                          flexShrink: 0,
                        }}
                      >
                        🎯
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 700, color: text }}>
                          Marketing Launchpad Program
                        </div>
                        <div style={{ fontSize: "12px", color: subText }}>Kraftshala • Nov 2025</div>
                      </div>
                    </div>
                    <div
                      style={{
                        background: card,
                        borderRadius: "16px",
                        padding: "20px",
                        border: `1px solid ${border}`,
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "12px",
                          background: "rgba(16, 185, 129, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "22px",
                          flexShrink: 0,
                        }}
                      >
                        🏫
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 700, color: text }}>
                          12th (EBACS)
                        </div>
                        <div style={{ fontSize: "12px", color: subText }}>
                          National College, Basavanagudi, Bengaluru
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "blog" && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ marginTop: "32px" }}>
                <h1 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "8px", color: text }}>
                  Blog ✍️
                </h1>
                <p style={{ color: subText, fontSize: "15px", marginBottom: "40px" }}>
                  Insights on digital marketing, performance campaigns, and growth strategies
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    {
                      title: "How I Scaled a YouTube Channel to 450K Subscribers",
                      description: "A deep dive into the exact strategy, content cadence, and SEO techniques used to grow a brand-new channel to 450,000 subscribers.",
                      tags: ["YouTube", "SEO", "Growth"],
                      readTime: "8 min read",
                      emoji: "📺",
                      date: "Coming Soon",
                    },
                    {
                      title: "Reducing CPL by 30% with AI-Powered Meta Ads",
                      description: "How we used AI tools for audience segmentation and creative personalization to dramatically cut cost-per-lead while maintaining quality.",
                      tags: ["Meta Ads", "AI", "Performance"],
                      readTime: "6 min read",
                      emoji: "🤖",
                      date: "Coming Soon",
                    },
                    {
                      title: "The Omnichannel Strategy That Boosted Engagement 35%",
                      description: "Breaking down the omnichannel framework we used to integrate paid, organic, and content channels for maximum brand impact.",
                      tags: ["Omnichannel", "Strategy", "Engagement"],
                      readTime: "5 min read",
                      emoji: "🎯",
                      date: "Coming Soon",
                    },
                    {
                      title: "WhatsApp API for Marketing: A Complete Guide",
                      description: "Everything you need to know about leveraging WhatsApp Business API for personalized marketing campaigns at scale.",
                      tags: ["WhatsApp API", "Automation", "Marketing"],
                      readTime: "7 min read",
                      emoji: "💬",
                      date: "Coming Soon",
                    },
                  ].map((post, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      style={{
                        background: card,
                        borderRadius: "20px",
                        padding: "24px",
                        border: `1px solid ${border}`,
                        cursor: "pointer",
                        display: "flex",
                        gap: "20px",
                        alignItems: "flex-start",
                      }}
                      whileHover={{ y: -2, boxShadow: `0 8px 32px rgba(0,0,0,0.1)` }}
                    >
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "14px",
                          background: "rgba(15, 148, 250, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "26px",
                          flexShrink: 0,
                        }}
                      >
                        {post.emoji}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                          <h3 style={{ fontSize: "16px", fontWeight: 700, margin: 0, color: text }}>
                            {post.title}
                          </h3>
                          <span
                            style={{
                              background: "rgba(15, 148, 250, 0.1)",
                              color: "#0F94FA",
                              borderRadius: "6px",
                              padding: "3px 10px",
                              fontSize: "11px",
                              fontWeight: 600,
                              flexShrink: 0,
                              marginLeft: "12px",
                            }}
                          >
                            {post.date}
                          </span>
                        </div>
                        <p style={{ color: subText, fontSize: "13px", margin: "0 0 12px", lineHeight: 1.5 }}>
                          {post.description}
                        </p>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                          {post.tags.map((tag, t) => (
                            <span
                              key={t}
                              style={{
                                background: isDark ? "#2A2A2A" : "#F3F4F6",
                                color: subText,
                                borderRadius: "6px",
                                padding: "2px 8px",
                                fontSize: "11px",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                          <span style={{ color: subText, fontSize: "11px", marginLeft: "auto" }}>
                            ⏱ {post.readTime}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BOTTOM NAV */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          background: isDark ? "rgba(26,26,26,0.95)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${border}`,
          borderRadius: "40px",
          padding: "8px 12px",
          display: "flex",
          gap: "4px",
          boxShadow: isDark
            ? "0 8px 32px rgba(0,0,0,0.4)"
            : "0 8px 32px rgba(0,0,0,0.12)",
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: isActive ? "#0F94FA" : "transparent",
                color: isActive ? "#FFFFFF" : subText,
                border: "none",
                borderRadius: "28px",
                padding: isActive ? "8px 18px" : "8px 14px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {tab.icon}
              {isActive && <span>{tab.label}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
