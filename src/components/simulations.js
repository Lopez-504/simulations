import autumn from "/autumn.png"
import summer from "/summer.png"
import winter from "/winter.png"
import spring from "/spring.png"
import seasonalset from '/seasonalSets.png'
import contrastset from '/contrastSims.png'
import cloudy from '/skyglow-map_workSupCloudy_555.0.png'
import clear01 from '/skyglow-map_work4_550.0.png'
import clear02 from '/illumina_domain.png'

export const seasons = ["summer", "autumn", "winter", "spring"];

export const simulations = [

// Seasonal exp
    
  {
    id: "season-exp",
    title: "Seasonal Experiment ☀️🍂❄️🌸",
    subtitle: "Atmospheric conditions based on season",
    description:
      "This simulations explores the behaviour of the articial light contributions under typical atmospheric conditions for each season",
    previewImage: seasonalset, 
    parameterSets: {
      summer: [
        ["Relative Humidity", "20%"],
        ["Aerosol Optical Depth", "0.08"],
        ["Ångström Coefficient", "1.3"],
        ["Cloud Base", "None"],
        ["Ground Reflectance", "80% grass\n20% asphalt"],
      ],
      autumn: [
        ["Relative Humidity", "20%"],
        ["Aerosol Optical Depth", "0.08"],
        ["Ångström Coefficient", "1.3"],
        ["Cloud Base", "None"],
        ["Ground Reflectance", "80% grass\n20% asphalt"],
      ],
      winter: [
        ["Relative Humidity", "70%"],
        ["Aerosol Optical Depth", "0.08"],
        ["Ångström Coefficient", "1.3"],
        ["Cloud Base", "None"],
        ["Ground Reflectance", "80% grass\n20% asphalt"],
      ],
      spring: [
        ["Relative Humidity", "20%"],
        ["Aerosol Optical Depth", "0.08"],
        ["Ångström Coefficient", "1.3"],
        ["Cloud Base", "None"],
        ["Ground Reflectance", "80% grass\n20% asphalt"],
      ],
    },
    plots: [
      {
        src: summer,
        caption: "Typical summer atmospheric conditions",
      },
      {
        src: autumn,
        caption: "Typical autumn atmospheric conditions",
      },
      {
        src: winter,
        caption: "Typical winter atmospheric conditions",
      },
      {
        src: spring,
        caption: "Typical spring atmospheric conditions",
      }
    ],
    extra:
      "This case can be used as the baseline simulation. Differences between this and other scenarios help isolate the role of atmospheric turbidity and cloud scattering.",
  },  

  // Clear sky

  {
    id: "clear-sky",
    title: "Clear Sky Scenario ⋆⭒˚.⋆🔭",
    subtitle: "Low aerosol loading, dry atmosphere, and high visibility.",
    description:
      "This simulation represents a stable clear-sky atmosphere, useful as a reference case for comparing the effect of clouds, humidity, and aerosol concentration.",
    previewImage: contrastset, 
    parameters: [
      ["Relative Humidity", "20%"],
      ["Aerosol Optical Depth", "0.08"],
      ["Ångström Coefficient", "1.3"],
      ["Cloud Base", "None"],
      ["Ground Reflectance", "80% grass\n20% asphalt"],
      ["Relative Humidity", "20%"],
      ["Aerosol Optical Depth", "0.08"],
      ["Ångström Coefficient", "1.3"],
      ["Cloud Base", "None"],
      ["Ground Reflectance", "80% grass\n20% asphalt"],
    ],
    plots: [
      {
        src: clear01,
        caption: "caption",
      },
      {
        src: clear02,
        caption: "caption.",
      },
    ],
    extra:
      "This case can be used as the baseline simulation. Differences between this and other scenarios help isolate the role of atmospheric turbidity and cloud scattering.",
  },
  
  
  // Cloudy sky

  {
    id: "cloudy-sky",
    title: "Cloudy Scenario ☁️",
    subtitle: "Enhanced scattering caused by low cloud cover.",
    description:
      "This simulation explores how cloud layers redistribute artificial light, increasing diffuse sky brightness and changing the angular radiance structure.",
    previewImage: contrastset, 
      parameters: [
      ["Relative Humidity", "70%"],
      ["Aerosol Optical Depth", "0.18"],
      ["Ångström Coefficient", "0.9"],
      ["Cloud Base", "1200 m"],
      ["Ground Reflectance", "80% grass\n20% asphalt "],
    ],
    plots: [
      {
        src: cloudy,
        caption: "caption",
      },
      {
        src: cloudy,
        caption: "caption",
      },
    ],
    extra:
      "Investigate this white patches, probably artifacts",
  },
];

