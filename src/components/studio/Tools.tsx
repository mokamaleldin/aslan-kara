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
      monogram: "Au",
      title: "Audition",
      label: t.toolAudio,
      ink: "#99ffdb",
      background: "#00005b",
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
          ADOBE CREATIVE CLOUD
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
              aria-label={`Adobe ${tool.title}`}
            >
              <rect width="64" height="64" rx="12" fill={tool.background} />
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
