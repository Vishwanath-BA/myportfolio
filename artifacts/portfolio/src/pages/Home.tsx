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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                      fontSize: "clamp(48px, 7vw, 80px)",
                      fontWeight: 800,
                      lineHeight: 1.05,
                      margin: "0 0 16px",
                      color: text,
                    }}
                  >
                    Hello! 👋 I'm
                    <br />
                    <span style={{ color: "#0F94FA" }}>Vishwanath BA</span>
                  </h1>
                  <p
                    style={{
                      fontSize: "18px",
                      color: subText,
                      margin: "0 0 28px",
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
                        padding: "12px 26px",
                        fontSize: "16px",
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
                        padding: "12px 26px",
                        fontSize: "16px",
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
                        fontSize: "45px",
                        fontWeight: 800,
                        color: "#0F94FA",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: subText,
                        marginTop: "6px",
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
                    fontSize: "30px",
                    fontWeight: 700,
                    marginBottom: "20px",
                    color: text,
                  }}
                >
                  Core Skills 🛠️
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: "12px",
                  }}
                >
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -3, boxShadow: isDark ? "0 8px 24px rgba(0,0,0,0.4)" : "0 8px 24px rgba(0,0,0,0.08)" }}
                      style={{
                        background: card,
                        border: `1px solid ${border}`,
                        borderRadius: "16px",
                        padding: "18px 14px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        cursor: "default",
                        textAlign: "center",
                      }}
                    >
                      <span style={{ fontSize: "34px", lineHeight: 1 }}>{skill.icon}</span>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: text, lineHeight: 1.3 }}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* BEHIND THE SCREENS */}
              <div style={{ marginTop: "48px" }}>
                <p style={{ color: "#0F94FA", fontSize: "12px", fontWeight: 600, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Essence</p>
                <h2 style={{ fontSize: "30px", fontWeight: 700, marginBottom: "8px", color: text }}>
                  Behind the Screens 🖥️
                </h2>
                <p style={{ color: subText, fontSize: "16px", marginBottom: "24px" }}>
                  A glimpse into my mindset, style, and marketing edge.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
                  {[
                    {
                      emoji: "🙋",
                      label: "Who am I?",
                      desc: "A performance marketer who turns data into growth stories and campaigns into measurable results.",
                      bg: isDark ? "#1E2A3A" : "#EBF5FF",
                      accent: "#0F94FA",
                    },
                    {
                      emoji: "💡",
                      label: "My Philosophy",
                      desc: "Every metric tells a story — I make sure it's a success story built on data, not guesswork.",
                      bg: isDark ? "#1A2A1A" : "#EDFAF3",
                      accent: "#10B981",
                    },
                    {
                      emoji: "⚡",
                      label: "My Distinct Edge",
                      desc: "I bridge AI-powered automation and strategic thinking to craft campaigns that scale and convert.",
                      bg: isDark ? "#251A35" : "#F3EEFF",
                      accent: "#8B5CF6",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -4 }}
                      style={{
                        background: item.bg,
                        border: `1px solid ${item.accent}30`,
                        borderRadius: "20px",
                        padding: "24px 20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        minHeight: "160px",
                      }}
                    >
                      <span style={{ fontSize: "36px" }}>{item.emoji}</span>
                      <span style={{ fontSize: "18px", fontWeight: 700, color: text }}>{item.label}</span>
                      <span style={{ fontSize: "16px", color: subText, lineHeight: 1.5 }}>{item.desc}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* WHY WORK WITH ME */}
              <div style={{ marginTop: "48px" }}>
                <p style={{ color: "#0F94FA", fontSize: "12px", fontWeight: 600, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Value</p>
                <h2 style={{ fontSize: "30px", fontWeight: 700, marginBottom: "8px", color: text }}>
                  Why Work With Me? 🤝
                </h2>
                <p style={{ color: subText, fontSize: "16px", marginBottom: "24px" }}>
                  Backed by experience, driven by purpose.
                </p>

                {/* Stat blocks row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "14px" }}>
                  {[
                    { value: "4+", label: "Years of experience" },
                    { value: "Meta & Google", label: "Ads specialist" },
                    { value: "5+ clients", label: "Led digital teams" },
                    { value: "AI-powered", label: "Campaign automation" },
                  ].map((s, i) => (
                    <div key={i} style={{
                      background: card,
                      border: `1px solid ${border}`,
                      borderRadius: "16px",
                      padding: "18px 14px",
                      textAlign: "center",
                    }}>
                      <div style={{ fontSize: "18px", fontWeight: 800, color: text }}>{s.value}</div>
                      <div style={{ fontSize: "13px", color: subText, marginTop: "4px", lineHeight: 1.3 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Value cards 2x2 */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px" }}>
                  {[
                    {
                      emoji: "🎯",
                      title: "ROI-First Mindset",
                      desc: "Every campaign is measured against real outcomes — ROAS, CPL, conversions. No vanity metrics.",
                      color: "#0F94FA",
                    },
                    {
                      emoji: "🤖",
                      title: "AI-Powered Execution",
                      desc: "I use generative AI and automation to move faster, personalize at scale, and cut manual work.",
                      color: "#8B5CF6",
                    },
                    {
                      emoji: "📈",
                      title: "Proven Track Record",
                      desc: "30% CPL reduction, 450K+ YouTube subscribers, 35%+ engagement — results that speak.",
                      color: "#10B981",
                    },
                    {
                      emoji: "🔄",
                      title: "Full-Funnel Thinking",
                      desc: "From awareness to conversion — omnichannel strategies covering every touchpoint.",
                      color: "#F59E0B",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -4, boxShadow: `0 12px 40px ${item.color}18` }}
                      style={{
                        background: card,
                        border: `1px solid ${border}`,
                        borderRadius: "20px",
                        padding: "24px 20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        borderTop: `3px solid ${item.color}`,
                      }}
                    >
                      <span style={{ fontSize: "36px" }}>{item.emoji}</span>
                      <span style={{ fontSize: "18px", fontWeight: 700, color: text }}>{item.title}</span>
                      <span style={{ fontSize: "16px", color: subText, lineHeight: 1.6 }}>{item.desc}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Milestone metrics row */}
                <div style={{
                  background: isDark ? "#111" : "#000",
                  borderRadius: "20px",
                  padding: "28px 32px",
                  marginTop: "14px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "0",
                }}>
                  <div style={{ textAlign: "center", borderRight: "1px solid rgba(255,255,255,0.1)" }}>
                    <div style={{ fontSize: "45px", fontWeight: 800, color: "#FFF" }}>450K+</div>
                    <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginTop: "6px" }}>YouTube Subscribers</div>
                  </div>
                  <div style={{ textAlign: "center", borderRight: "1px solid rgba(255,255,255,0.1)" }}>
                    <div style={{ fontSize: "45px", fontWeight: 800, color: "#FFF" }}>30%</div>
                    <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginTop: "6px" }}>CPL Reduction</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "45px", fontWeight: 800, color: "#FFF" }}>35%+</div>
                    <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginTop: "6px" }}>Engagement Increase</div>
                  </div>
                </div>
              </div>

              {/* FEATURED WORK - Marquee scroll */}
              <div style={{ marginTop: "48px" }}>
                <p style={{ color: "#0F94FA", fontSize: "12px", fontWeight: 600, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Projects</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <div>
                    <h2 style={{ fontSize: "30px", fontWeight: 700, color: text, margin: "0 0 8px" }}>
                      Featured Work 🚀
                    </h2>
                    <p style={{ color: subText, fontSize: "16px", margin: 0 }}>My past campaigns showcasing my expertise.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab("portfolio")}
                    style={{
                      background: isDark ? "#1A1A1A" : "#F0F0F0",
                      color: text,
                      border: `1px solid ${border}`,
                      borderRadius: "22px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    View All Projects <ChevronRight size={14} />
                  </button>
                </div>

                {/* Marquee Row 1 */}
                <div className="marquee-wrapper" style={{ marginBottom: "12px" }}>
                  <div className="marquee-track">
                    {[...portfolioProjects, ...portfolioProjects].map((p, i) => (
                      <div
                        key={i}
                        style={{
                          background: card,
                          border: `1px solid ${border}`,
                          borderRadius: "20px",
                          padding: "20px",
                          width: "260px",
                          flexShrink: 0,
                          marginRight: "14px",
                        }}
                      >
                        <div style={{
                          width: "44px", height: "44px", borderRadius: "12px",
                          background: `${p.color}20`, display: "flex",
                          alignItems: "center", justifyContent: "center",
                          fontSize: "24px", marginBottom: "12px",
                        }}>{p.icon}</div>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: text, marginBottom: "6px" }}>{p.title}</div>
                        <div style={{ fontSize: "14px", color: subText, lineHeight: 1.4, marginBottom: "12px" }}>{p.description}</div>
                        <div style={{
                          background: `${p.color}15`, color: p.color,
                          borderRadius: "8px", padding: "4px 10px",
                          fontSize: "12px", fontWeight: 700, display: "inline-block",
                        }}>📊 {p.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Marquee Row 2 - reversed */}
                <div className="marquee-wrapper">
                  <div className="marquee-track-reverse">
                    {[...portfolioProjects.slice().reverse(), ...portfolioProjects.slice().reverse()].map((p, i) => (
                      <div
                        key={i}
                        style={{
                          background: card,
                          border: `1px solid ${border}`,
                          borderRadius: "20px",
                          padding: "20px",
                          width: "260px",
                          flexShrink: 0,
                          marginRight: "14px",
                        }}
                      >
                        <div style={{
                          width: "44px", height: "44px", borderRadius: "12px",
                          background: `${p.color}20`, display: "flex",
                          alignItems: "center", justifyContent: "center",
                          fontSize: "24px", marginBottom: "12px",
                        }}>{p.icon}</div>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: text, marginBottom: "6px" }}>{p.title}</div>
                        <div style={{ fontSize: "14px", color: subText, lineHeight: 1.4, marginBottom: "12px" }}>{p.description}</div>
                        <div style={{
                          background: `${p.color}15`, color: p.color,
                          borderRadius: "8px", padding: "4px 10px",
                          fontSize: "12px", fontWeight: 700, display: "inline-block",
                        }}>📊 {p.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ SECTION */}
              <div style={{ marginTop: "56px" }}>
                <p style={{ color: "#0F94FA", fontSize: "12px", fontWeight: 600, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>FAQ</p>
                <h2 style={{ fontSize: "30px", fontWeight: 700, marginBottom: "8px", color: text }}>
                  Got Questions? I Got Answers! 💬
                </h2>
                <p style={{ color: subText, fontSize: "16px", marginBottom: "24px" }}>
                  Here are common questions about my experience.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    {
                      q: "What kind of work do you specialize in?",
                      a: "I specialize in performance marketing — Meta Ads, Google Ads, and omnichannel campaigns. I focus on driving measurable results like CPL reduction, ROAS improvement, and audience growth through data-driven strategies.",
                    },
                    {
                      q: "What is your campaign process?",
                      a: "I start with audience research and goal-setting, then build creatives and targeting, launch with A/B tests, analyze performance data, and iterate rapidly to maximize ROI.",
                    },
                    {
                      q: "What industries have you worked in?",
                      a: "I've worked across new-age D2C brands, education, and media companies — managing 5+ client accounts simultaneously and scaling a YouTube channel to 450K+ subscribers.",
                    },
                    {
                      q: "What are the primary tools you use?",
                      a: "Meta Ads Manager, Google Ads, Google Analytics, WhatsApp Business API, Canva, Excel, and AI tools including ChatGPT and Generative AI platforms for automation.",
                    },
                    {
                      q: "How do you approach campaign challenges?",
                      a: "I diagnose using data first — checking CPL trends, CTR, and ROAS. Then I test hypotheses through A/B experiments on creative, audience, and bidding before scaling what works.",
                    },
                  ].map((faq, i) => (
                    <div
                      key={i}
                      style={{
                        background: card,
                        border: `1px solid ${border}`,
                        borderRadius: "16px",
                        overflow: "hidden",
                      }}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          padding: "18px 20px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          color: text,
                          textAlign: "left",
                        }}
                      >
                        <span style={{ fontSize: "16px", fontWeight: 600 }}>{faq.q}</span>
                        <span style={{
                          fontSize: "20px",
                          color: subText,
                          transition: "transform 0.2s",
                          transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                          flexShrink: 0,
                          marginLeft: "12px",
                          display: "inline-block",
                        }}>+</span>
                      </button>
                      {openFaq === i && (
                        <div style={{
                          padding: "14px 20px 18px",
                          fontSize: "16px",
                          color: subText,
                          lineHeight: 1.6,
                          borderTop: `1px solid ${border}`,
                        }}>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* BLOG PREVIEW */}
              <div style={{ marginTop: "56px" }}>
                <p style={{ color: "#0F94FA", fontSize: "12px", fontWeight: 600, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Blog</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <div>
                    <h2 style={{ fontSize: "30px", fontWeight: 700, color: text, margin: "0 0 8px" }}>
                      Insights & Ideas ✍️
                    </h2>
                    <p style={{ color: subText, fontSize: "16px", margin: 0 }}>Thoughts on performance marketing and growth.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab("blog")}
                    style={{
                      background: "transparent",
                      color: text,
                      border: `1px solid ${border}`,
                      borderRadius: "22px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    View All Blog Posts
                  </button>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
                  {[
                    { tag: "Growth", emoji: "📺", date: "Apr 14, 2025", title: "How I Scaled to 450K Subscribers", desc: "The exact strategy, cadence, and SEO tactics that grew a channel from zero." },
                    { tag: "Ads", emoji: "🤖", date: "Apr 7, 2025", title: "Reducing CPL by 30% with AI Ads", desc: "How AI audience segmentation dramatically cut cost-per-lead." },
                    { tag: "Strategy", emoji: "🎯", date: "Mar 10, 2025", title: "The Omnichannel Playbook", desc: "Integrating paid, organic, and content channels for 35%+ engagement boost." },
                  ].map((post, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -4 }}
                      style={{
                        background: card,
                        border: `1px solid ${border}`,
                        borderRadius: "20px",
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{
                        background: isDark ? "#1A1A1A" : "#F3F4F6",
                        height: "90px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "36px",
                      }}>{post.emoji}</div>
                      <div style={{ padding: "16px" }}>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "10px" }}>
                          <span style={{ background: "#0F94FA20", color: "#0F94FA", borderRadius: "6px", padding: "2px 8px", fontSize: "12px", fontWeight: 600 }}>{post.tag}</span>
                          <span style={{ fontSize: "12px", color: subText }}>{post.date}</span>
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: text, marginBottom: "6px", lineHeight: 1.3 }}>{post.title}</div>
                        <div style={{ fontSize: "14px", color: subText, lineHeight: 1.5 }}>{post.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* LET'S CONNECT CTA */}
              <div style={{ marginTop: "56px" }}>
                <div style={{
                  background: isDark ? "#111" : "#000",
                  borderRadius: "28px",
                  padding: "56px 40px",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", top: "-60px", left: "50%",
                    transform: "translateX(-50%)",
                    width: "300px", height: "300px",
                    background: "radial-gradient(circle, rgba(15,148,250,0.2) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }} />
                  <h2 style={{ fontSize: "45px", fontWeight: 800, color: "#FFF", margin: "0 0 16px", position: "relative" }}>
                    Let's Connect 🤝
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "18px", margin: "0 auto 36px", maxWidth: "480px", lineHeight: 1.6, position: "relative" }}>
                    I'm always open to new opportunities, ideas, or just a good conversation.
                  </p>
                  <a
                    href="mailto:vishwavk8474@gmail.com"
                    style={{
                      background: "#0F94FA",
                      color: "#FFF",
                      borderRadius: "22px",
                      padding: "14px 36px",
                      fontSize: "16px",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      position: "relative",
                    }}
                  >
                    <Mail size={18} /> Get in Touch
                  </a>
                </div>
              </div>

              {/* FOOTER */}
              <div style={{ marginTop: "48px", marginBottom: "32px", borderTop: `1px solid ${border}`, paddingTop: "32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <img src="/avatar.png" alt="Vishwanath" style={{ width: "28px", height: "28px", borderRadius: "50%", objectFit: "cover" }} />
                      <span style={{ fontWeight: 700, color: text, fontSize: "14px" }}>Vishwanath BA</span>
                    </div>
                    <p style={{ fontSize: "12px", color: subText, margin: 0 }}>Digital Marketing Manager</p>
                  </div>
                  <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                    {["Home", "Portfolio", "About", "Blog"].map((p) => (
                      <button key={p} onClick={() => setActiveTab(p.toLowerCase() as Tab)} style={{
                        background: "transparent", border: "none",
                        color: subText, fontSize: "13px", cursor: "pointer", padding: 0,
                      }}>{p}</button>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <a href="mailto:vishwavk8474@gmail.com" style={{ color: subText, display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", textDecoration: "none" }}>
                      <Mail size={14} /> Contact
                    </a>
                    <a href="https://linkedin.com/in/vishwavk98" target="_blank" rel="noopener noreferrer" style={{ color: subText, display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", textDecoration: "none" }}>
                      <Linkedin size={14} /> LinkedIn
                    </a>
                  </div>
                </div>
                <p style={{ textAlign: "center", color: subText, fontSize: "11px", marginTop: "28px", margin: "28px 0 0" }}>
                  Vishwanath BA © 2025
                </p>
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
