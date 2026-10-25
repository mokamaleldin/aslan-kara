import { useLanguage } from "../../context/LanguageContext";

export function Tools() {
  const { t } = useLanguage();
  const tools = [
    {
      monogram: "Pr",
      title: "Premiere Pro",
      label: t.toolEditing,
      ink: "#9999ff",
      background: "#00005b",
    },
    {
      monogram: "Ae",
      title: "After Effects",
      label: t.toolMotion,
      ink: "#9999ff",
      background: "#00005b",
    },
    {
      monogram: "",
      title: "DaVinci Resolve",
      label: t.toolGrading,
      ink: "#e2e9f3",
      background: "#1e2836",
      kind: "resolve",
    },
    {
      monogram: "Au",
      title: "Audition",
      label: t.toolAudio,
      ink: "#99ffdb",
      background: "#00005b",
    },
    {
      monogram: "",
      title: "Fairlight",
      label: t.toolMixing,
      ink: "#4bdc9b",
      background: "#142e29",
      kind: "audio",
    },
    {
      monogram: "Ps",
      title: "Photoshop",
      label: t.toolImage,
      ink: "#31a8ff",
      background: "#001e36",
    },
    {
      monogram: "Ai",
      title: "Illustrator",
      label: t.toolVector,
      ink: "#ff9a00",
      background: "#330000",
    },
    {
      monogram: "Lr",
      title: "Lightroom",
      label: t.toolColor,
      ink: "#31a8ff",
      background: "#001e36",
    },
  ];
  return (
    <section
      className="container section-space expertise-section"
      aria-labelledby="tools-heading"
    >
      <p className="section-label">{t.craftLabel}</p>
      <div className="expertise-heading">
        <h2 id="tools-heading">{t.craftHeading}</h2>
        <p>{t.craftIntro}</p>
      </div>
      <ul className="skills-list">
        {t.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <div className="software-heading">
        <h3>{t.tools}</h3>
        <span className="mono" dir="ltr">
          VIDEO / COLOR / AUDIO
        </span>
      </div>
      <div className="software-grid">
        {tools.map((tool) => (
          <div className="software-item" key={tool.title}>
            <svg
              direction="ltr"
              viewBox="0 0 64 64"
              width="52"
              height="52"
              role="img"
              aria-label={tool.kind ? tool.title : `Adobe ${tool.title}`}
            >
              <rect width="64" height="64" rx="12" fill={tool.background} />
              {tool.kind === "resolve" ? (
                <>
                  <circle
                    cx="32"
                    cy="32"
                    r="23"
                    fill="#2b394c"
                    stroke="#8291a5"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M32 29C24 24 22 18 27 14C32 10 39 14 39 19C39 23 35 27 32 29Z"
                    fill="#f5c858"
                  />
                  <path
                    d="M35 33C43 29 49 30 49 36C49 42 42 46 38 42C35 40 34 36 35 33Z"
                    fill="#65c9e7"
                  />
                  <path
                    d="M29 33C29 42 25 47 20 43C15 40 15 32 21 30C24 29 27 31 29 33Z"
                    fill="#ef6578"
                  />
                  <circle cx="32" cy="32" r="3" fill="#d4dfeb" />
                </>
              ) : tool.kind === "audio" ? (
                <g
                  fill="none"
                  stroke={tool.ink}
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <path d="M14 28v8M23 19v26M32 13v38M41 23v18M50 28v8" />
                </g>
              ) : (
                <text
                  x="32"
                  y="43"
                  textAnchor="middle"
                  fontFamily="Arial,sans-serif"
                  fontWeight="600"
                  fontSize="32"
                  fill={tool.ink}
                >
                  {tool.monogram}
                </text>
              )}
            </svg>
            <strong lang="en" dir="ltr">
              {tool.title}
            </strong>
            <span>{tool.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
