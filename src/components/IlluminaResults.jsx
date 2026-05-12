import { useState } from "react";
import "./Illumina.css";

import { simulations } from './simulations'
import { seasons } from "./simulations";

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

  const [selectedSeason, setSelectedSeason] = useState("summer");

  // Parameters
  const currentParameters =
  currentSimulation.parameterSets?.[selectedSeason] ??
  currentSimulation.parameters;

  // Plots
  const currentPlots =
  currentSimulation.seasonPlots?.[selectedSeason] ??
  currentSimulation.plots;

  return (
    <section className="simulation-results-section">
      <div className="simulation-hero">
        <p className="eyebrow">Illumina Simulations ⚛︎</p>
        <h1>Simulation Results 🌐</h1>
        <p>
          Browse each simulation as an individual card (slide sideways)
        </p>
      </div>

      <div className="simulation-carousel">

        <article className="simulation-block" id={currentSimulation.id}>
          <div className="simulation-header">
            <p className="simulation-label">
              <button className="carousel-button" onClick={goPrevious}>
                  ◂
              </button>
              Simulation {activeIndex + 1} / {simulations.length} 
              <button className="carousel-button" onClick={goNext}>
                  ▸
              </button>
            </p>
            <h2>{currentSimulation.title}</h2>
            <p>{currentSimulation.subtitle}</p>
          </div>

{/* Description */}

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

{/* Input parameters */}

<div className="result-card">
  <div className="card-title-row">
    <h3>Input parameters</h3>

    {currentSimulation.parameterSets && (
      <select
        className="season-select"
        value={selectedSeason}
        onChange={(e) => setSelectedSeason(e.target.value)}
      >
        {Object.keys(currentSimulation.parameterSets).map((season) => (
          <option key={season} value={season}>
            {season.charAt(0).toUpperCase() + season.slice(1)}
          </option>
        ))}
      </select>
    )}
  </div>

  <div className="parameter-list">
    {currentParameters.map(([name, value]) => (
      <div className="parameter-row" key={name}>
        <span>{name}</span>
        <strong>{value}</strong>
      </div>
    ))}
  </div>
</div>
</div> 
          
{/* 2 plots. Add zoom to this ones too */}

<div className="plots-grid" key={`${currentSimulation.id}-${selectedSeason}`}>
  {currentPlots.map((plot, index) => (
    <figure
      className="plot-card zoomable"
      key={`${currentSimulation.id}-${selectedSeason}-plot-${index}`}
      onClick={() => setZoomedImage(plot.src)}>
     
      <div className="plot-image-wrapper">
        <img src={plot.src} alt={plot.caption} />
        <div className="zoom-hint">Click to zoom</div>
      </div>

      <figcaption>{plot.caption}</figcaption>
    </figure>
  ))}
</div>

{/* Additional notes */}

          <div className="result-card simulation-extra">
            <h3>Additional notes</h3>
            <p>{currentSimulation.extra}</p>
          </div>
        </article>

{/* Carousel buttons */}

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