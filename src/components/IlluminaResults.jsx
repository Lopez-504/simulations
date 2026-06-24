import { useState, useEffect } from "react";
import "./Illumina.css";

import winterContribution from '/winter_contribution4.png'

import { simulations } from './simulations'
import { seasons } from "./simulations";
//import { contributions } from './contributions';        working on it

import pdf from '/Illumina_results.pdf';
//import html from '/Illumina_results.html';        // still working on it; we need all the images separately

export default function SimulationResults() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);                 //2 zoom systems
  const [zoomedPlotIndex, setZoomedPlotIndex] = useState(null);

  const currentSimulation = simulations[activeIndex];
  //const currentContribution = contributions[activeIndex]            // testing

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

  //Contribution plots
  const currentContributionPlot =
  currentSimulation.seasonalContributionPlots?.[selectedSeason];

  // Keyboard navigation
  useEffect(() => {
    if (
      currentSimulation.id !== "season-exp" ||
      zoomedPlotIndex === null
    ) {
      return;
    }

    const handleKeyDown = (event) => {

      if (event.key === "ArrowRight") {
        setZoomedPlotIndex(prev =>
          (prev + 1) % currentSimulation.plots.length
        );
      }
      if (event.key === "ArrowLeft") {
        setZoomedPlotIndex(prev =>
          (prev - 1 + currentSimulation.plots.length) %
          currentSimulation.plots.length
        );
      }
      if (event.key === "Escape") {
        setZoomedPlotIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedPlotIndex, currentSimulation]);


  return (
    <section className="simulation-results-section">
      <div className="simulation-hero">
        <p className="eyebrow">Illumina 🌍</p>
        <h1>Simulation Results 🌐</h1>
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

{/* Comparison for seasonal simulation */}

{currentSimulation.id === "season-exp" && (
  <div className="result-card seasonal-comparison-card">
    <h3>Seasonal Comparison</h3>

    <p className="comparison-subtitle">
      Compare the four seasonal simulations simultaneously.
    </p>

    <div className="seasonal-comparison-grid">
      {currentSimulation.plots.map((plot, index) => (
        <figure
          className="comparison-plot-card"
          key={`comparison-${index}`}
          onClick={() => setZoomedPlotIndex(index)}
        >
          <div className="comparison-label">
            {plot.caption.split(" ")[6]}
          </div> 
          <img src={plot.src} alt={plot.caption} />
          {/*<figcaption>{plot.caption}</figcaption>*/}    
        </figure>
      ))}
    </div>
  </div>
)}

{/* Contribution test */}

  {currentSimulation.id === "season-exp" && currentContributionPlot && (
  <div className="result-card2">
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
    {/*<h3>
      {selectedSeason.charAt(0).toUpperCase() + selectedSeason.slice(1)}
      {" "}Season Contribution (under construction)
    </h3>*/}

    <figure
      className="plot-card zoomable"
      onClick={() => setZoomedImage(currentContributionPlot.src)}
    >
      <div className="plot-image-wrapper">
        <img
          src={currentContributionPlot.src}
          alt={currentContributionPlot.caption}
        />
        <div className="zoom-hint">Click to zoom</div>
      </div>

      <figcaption>{currentContributionPlot.caption}</figcaption>
    </figure>
  </div>
)}

{/* Additional notes */}

          <div className="result-card simulation-extra">
            <h3>Additional notes</h3>
            <p>{currentSimulation.extra}</p>
            <p>Simulations made by: Jorge López. Email: <a href="mailto:jorgelopezr8@gmail.com">Write to me</a></p>
            <p>Results presentation: <a href={pdf} target="_blank" rel="noopener noreferrer">PDF</a> | <a href='/Illumina_results.pdf' target="_blank" rel="noopener noreferrer">HTML</a></p>
            <p>Illumina documentation: <a href="http://obsand.org/wiki/index.php?n=Prof.IlluminaGuidev22" target="_blank" rel="noopener noreferrer">User's guide</a></p>
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

      {/* 2nd zoom system */} 
      {currentSimulation.id === "season-exp" &&
        zoomedPlotIndex !== null && (

          <div
            className="image-modal"
            onClick={() => setZoomedPlotIndex(null)}
          >
            <h2>Use your keyboard arrows to navigate between plots</h2> 
            <img
              src={currentSimulation.plots[zoomedPlotIndex].src}
              alt={currentSimulation.plots[zoomedPlotIndex].caption}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
         
        {/* 1st zoom system */} 
        {zoomedImage && (
          <div
            className="image-modal"
            onClick={() => setZoomedImage(null)}
          >
            <img src={zoomedImage} alt="Zoomed image" />
          </div>
        )}

    </section>
  );
}

//Fix css: size of paramtere list, Use all available space; make the gpt image smaller (done)
//Expand on the brief description (done)
// For now I don't like the captions for the seasonal comparison plots, too repetitive.

// TASK: update HTML href to an actual html file generated by Obsidian
// TASK: the images used here must be squared. So generate the domain one as a squared one

// NOTE: when using my ViewSonic monitor, set the zoom to 80% for better css evaluation

/*
<p>
  Browse each simulation as an individual cards.
</p>
*/


/* Contribution try


<div className="result-card simulation-extra">
      <p>Contribution Plots (section still under construction)</p>
      <img src={winterContribution} alt="" />
  </div>


//Contributions test.... 
  const goPrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? contributions.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === contributions.length - 1 ? 0 : prev + 1
    );
  };



  <div className="plots-grid-contribution" key={`${currentSimulation.id}-${selectedSeason}`}>
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


*/
