import { useState } from "react";
import "./Illumina.css";

const simulations = [
  {
    id: "season-exp",
    title: "Seasonal Experiment",
    subtitle: "Atmospheric conditions based on season",
    description:
      "This simulation represents a ...",
    previewImage: 'seasonalSets.png', 
    parameters: [
      ["Relative Humidity", "20%"],
      ["Aerosol Optical Depth", "0.08"],
      ["Ångström Coefficient", "1.3"],
      ["Cloud Base", "None"],
      ["Ground Reflectance", "80% grass, 20% asphalt"],
    ],
    plots: [
      {
        src: "/summer.png",
        caption: "caption",
      },
      {
        src: "/autumn.png",
        caption: "Angular radiance profile showing the smooth scattering pattern.",
      },
    ],
    extra:
      "This case can be used as the baseline simulation. Differences between this and other scenarios help isolate the role of atmospheric turbidity and cloud scattering.",
  },  
  {
    id: "clear-sky",
    title: "Clear Sky Scenario",
    subtitle: "Low aerosol loading, dry atmosphere, and high visibility.",
    description:
      "This simulation represents a stable clear-sky atmosphere, useful as a reference case for comparing the effect of clouds, humidity, and aerosol concentration.",
    previewImage: 'contrastSims.png', 
    parameters: [
      ["Relative Humidity", "20%"],
      ["Aerosol Optical Depth", "0.08"],
      ["Ångström Coefficient", "1.3"],
      ["Cloud Base", "None"],
      ["Ground Reflectance", "Dry soil / ASTER-like"],
      ["Relative Humidity", "20%"],
      ["Aerosol Optical Depth", "0.08"],
      ["Ångström Coefficient", "1.3"],
      ["Cloud Base", "None"],
      ["Ground Reflectance", "Dry soil / ASTER-like"],
    ],
    plots: [
      {
        src: "/plots/clear_radiance_map.png",
        caption: "Spatial distribution of sky radiance for the clear-sky case.",
      },
      {
        src: "/plots/clear_angular_profile.png",
        caption: "Angular radiance profile showing the smooth scattering pattern.",
      },
    ],
    extra:
      "This case can be used as the baseline simulation. Differences between this and other scenarios help isolate the role of atmospheric turbidity and cloud scattering.",
  },
  {
    id: "cloudy-sky",
    title: "Cloudy Scenario",
    subtitle: "Enhanced scattering caused by low cloud cover.",
    description:
      "This simulation explores how cloud layers redistribute artificial light, increasing diffuse sky brightness and changing the angular radiance structure.",
    previewImage: 'contrastSims.png', 
      parameters: [
      ["Relative Humidity", "70%"],
      ["Aerosol Optical Depth", "0.18"],
      ["Ångström Coefficient", "0.9"],
      ["Cloud Base", "1200 m"],
      ["Ground Reflectance", "Asphalt / urban surface"],
    ],
    plots: [
      {
        src: "/plots/cloudy_radiance_map.png",
        caption: "Radiance field under cloudy conditions.",
      },
      {
        src: "/plots/cloudy_comparison.png",
        caption: "Comparison between clear and cloudy simulations.",
      },
    ],
    extra:
      "Clouds strongly modify the radiance field by reflecting and trapping upward-emitted light. This makes the cloudy case especially relevant for studying urban skyglow amplification.",
  },
];

export default function SimulationResults() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);

  const currentSimulation = simulations[activeIndex];

  const goPrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? simulations.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === simulations.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="simulation-results-section">
      <div className="simulation-hero">
        <p className="eyebrow">Illumina Simulation Outputs</p>
        <h1>Simulation Results</h1>
        <p>
          Browse each atmospheric simulation as an individual result card.
        </p>
      </div>

      <div className="simulation-carousel">
        <button className="carousel-button" onClick={goPrevious}>
          ← Previous
        </button>

        <article className="simulation-block" id={currentSimulation.id}>
          <div className="simulation-header">
            <p className="simulation-label">
              Simulation {activeIndex + 1} / {simulations.length}
            </p>
            <h2>{currentSimulation.title}</h2>
            <p>{currentSimulation.subtitle}</p>
          </div>

          <div className="simulation-grid">
            <div className="result-card">
              <h3>Brief description</h3>

              <div className="description-content">
                <p>{currentSimulation.description}</p>

                <div
                  className="preview-image-wrapper"
                  onClick={() => setZoomedImage(currentSimulation.previewImage)}
                >
                  <img
                    src={currentSimulation.previewImage}
                    alt={`${currentSimulation.title} preview`}
                    className="preview-image"
                  />
                  <div className="zoom-hint">Click to zoom</div>
                </div>
              </div>
            </div>

            <div className="result-card">
              <h3>Input parameters</h3>

              <div className="parameter-list">
                {currentSimulation.parameters.map(([name, value]) => (
                  <div className="parameter-row" key={name}>
                    <span>{name}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="plots-grid">
            {currentSimulation.plots.map((plot) => (
              <figure className="plot-card" key={plot.src}>
                <img src={plot.src} alt={plot.caption} />
                <figcaption>{plot.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="result-card simulation-extra">
            <h3>Additional notes</h3>
            <p>{currentSimulation.extra}</p>
          </div>
        </article>

        <button className="carousel-button" onClick={goNext}>
          Next →
        </button>
      </div>

      <div className="carousel-dots">
        {simulations.map((sim, index) => (
          <button
            key={sim.id}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to ${sim.title}`}
          />
        ))}
      </div>

      {zoomedImage && (
        <div className="image-modal" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage} alt="Zoomed simulation preview" />
        </div>
      )}
    </section>
  );
}