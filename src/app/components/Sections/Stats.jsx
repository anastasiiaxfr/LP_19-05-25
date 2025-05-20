import React from "react";

const stat = [
  {
    val: "16y",
    label: "Experience",
  },
  {
    val: "250+",
    label: "Merchant Partner",
  },
  {
    val: "18+",
    label: "Years Experience",
  },
  {
    val: "10.2k+",
    label: "Worldwide Clients",
  },
];

function SectionStats() {
  return (
    <section className="section section_stats">
      <div className="container">
        <div className="stats">
          {stat.map((i, ind) => (
            <div className="stat" key={ind}>
              <div className="stat_val">{i.val}</div>
              <div className="stat_label">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionStats;
