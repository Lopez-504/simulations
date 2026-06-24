import autumn from "/skyglow-map_Exp-autumn_555.0_interp.png"
import summer from "/skyglow-map_Exp-summer_555.0_interp.png"
import winter from "/skyglow-map_Exp-winter_555.0_interp.png"
import spring from "/skyglow-map_Exp-spring_555.0_interp.png"
import seasonalset from '/seasonalSets.png'
import contrastset from '/contrastSims.png'
import cloudy from '/skyglow-map_workSupCloudy_555.0.png'
import clear01 from '/summer.png'           //using this one for now
import domain from '/illumina_domain_no-buffer4.png'          

import autumn_contribution from "/autumn_contribution4.png"
import summer_contribution from "/summer_contribution4.png"
import winter_contribution from "/winter_contribution4.png"
import spring_contribution from "/spring_contribution4.png"

export const seasons = ["summer", "autumn", "winter", "spring"];

export const simulations = [

// Seasonal exp
    
  {
    id: "season-exp",
    title: "Seasonal Experiment ☀️🍂❄️🌸",
    subtitle: "Atmospheric conditions based on season",
    description:
      "This simulations explores the behaviour of articial light contributions to skyglow under typical atmospheric conditions for each season. Input parameters are obtained from typical condition for Paranal Observatory region at the beginning of each season (approx. dates: Dec 21, Mar 20, Jun 21, Sep 23)",
    previewImage: seasonalset, 
    parameterSets: {
      summer: [
        ["Relative Humidity", "15%"],
        ['Air pressure', '760 hPa'],
        ["Aerosol Optical Depth", "0.03"],
        ["Ångström Coefficient", "1.35"],
        ["Aerosol profile", "D (Desert)"],
        ["Aerosol height", "1000 m"],
        ["Cloud base", "0"],
        ["Cloud model", "0 (Clear)"],
        ["Cloud fraction", "0"],
        ['Observer elevation', '15 m'],
        ["Ground Reflectance", "80% grass\n20% asphalt"],
        ['nb_bins', '3'],
        ['Lambda_min', '510 nm'],
        ['Lambda_max', '600 nm'],
        ['Elevation angle', '[2:90:4]'],
        ['Azimuth angle', '[2:354:8]'],
        ['Direct fiel of vision', '5 m'],
      ],
      autumn: [
        ["Relative Humidity", "20%"],
        ['Air pressure', '758 hPa'],
        ["Aerosol Optical Depth", "0.04"],
        ["Ångström Coefficient", "1.30"],
        ["Aerosol profile", "D (Desert)"],
        ["Aerosol height", "1500 m"],
        ["Cloud base", "10000 m"],
        ["Cloud model", "1 (thin Cirrus)"],
        ["Cloud fraction", "10"],
        ['Observer elevation', '15 m'],
        ["Ground Reflectance", "80% grass\n20% asphalt"],
        ['nb_bins', '3'],
        ['Lambda_min', '510 nm'],
        ['Lambda_max', '600 nm'],
        ['Elevation angle', '[2:90:4]'],
        ['Azimuth angle', '[2:354:8]'],
        ['Direct fiel of vision', '5 m'],
      ],
      winter: [
        ["Relative Humidity", "30%"],
        ['Air pressure', '753 hPa'],
        ["Aerosol Optical Depth", "0.05"],
        ["Ångström Coefficient", "1.20"],
        ["Aerosol profile", "D (Desert)"],
        ["Aerosol height", "1800 m"],
        ["Cloud base", "9000 m"],
        ["Cloud model", "1 (thin Cirrus)"],
        ["Cloud fraction", "20"],
        ['Observer elevation', '15 m'],
        ["Ground Reflectance", "80% grass\n20% asphalt\n0% snow"],
        ['nb_bins', '3'],
        ['Lambda_min', '510 nm'],
        ['Lambda_max', '600 nm'],
        ['Elevation angle', '[2:90:4]'],
        ['Azimuth angle', '[2:354:8]'],
        ['Direct fiel of vision', '5 m'],
      ],
      spring: [
        ["Relative Humidity", "25%"],
        ['Air pressure', '756 hPa'],
        ["Aerosol Optical Depth", "0.06"],
        ["Ångström Coefficient", "1.40"],
        ["Aerosol profile", "D (Desert)"],
        ["Aerosol height", "2000 m"],
        ["Cloud base", "10000 m"],
        ["Cloud model", "1 (thin Cirrus)"],
        ["Cloud fraction", "5"],
        ['Observer elevation', '15 m'],
        ["Ground Reflectance", "80% grass\n20% asphalt"],
        ['nb_bins', '3'],
        ['Lambda_min', '510 nm'],
        ['Lambda_max', '600 nm'],
        ['Elevation angle', '[2:90:4]'],
        ['Azimuth angle', '[2:354:8]'],
        ['Direct fiel of vision', '5 m'],
      ],
    },
    plots: [
      {
        src: summer,
        caption: "Artificial light contribution to skyglow. Typical summer atmospheric conditions.",
      },
      {
        src: autumn,
        caption: "Artificial light contribution to skyglow. Typical autumn atmospheric conditions.",
      },
      {
        src: winter,
        caption: "Artificial light contribution to skyglow. Typical winter atmospheric conditions.",
      },
      {
        src: spring,
        caption: "Artificial light contribution to skyglow. Typical spring atmospheric conditions.",
      }
    ],
    seasonPlots: {
      summer: [
        {
          src: domain,
          caption: "Simulation domain: 3 nested layers (27² km, 81² km, 243² km), not including 10km buffer.",
        },
        {
          src: summer,
          caption: "Diffuse radiance @555nm under typical summer atmospheric conditions at Paranal, Antofagasta.",
        },
      ],
      autumn: [
        {
          src: domain,
          caption: "Simulation domain: 3 nested layers (27² km, 81² km, 243² km), not including 10km buffer.",
        },
        {
          src: autumn,
          caption: "Diffuse radiance @555nm under typical autumn atmospheric conditions at Paranal, Antofagasta.",
        },
      ],
      winter: [
        {
          src: domain,
          caption: "Simulation domain: 3 nested layers (27² km, 81² km, 243² km), not including 10km buffer.",
        },
        {
          src: winter,
          caption: "Diffuse radiance @555nm under typical winter atmospheric conditions at Paranal, Antofagasta.",
        },
      ],
      spring: [
        {
          src: domain,
          caption: "Simulation domain: 3 nested layers (27² km, 81² km, 243² km), not including 10km buffer.",
        },
        {
          src: spring,
          caption: "Diffuse radiance @555nm under typical spring atmospheric conditions at Paranal, Antofagasta.",
        },
      ],
    },  
    seasonalContributionPlots: {
      summer: {
        src: summer_contribution,
        caption: "Summer contribution plots",
      },
      autumn: {
        src: autumn_contribution,
        caption: "Autumn contribution plots",
      },
      winter: {
        src: winter_contribution,
        caption: "Winter contribution plots",
      },
      spring: {
        src: spring_contribution,
        caption: "Spring contribution plots",
      },
    },
    
    extra:
      "These are only preliminary results, investigation is currently being made to further refine input parameters and aerosol characterization.",
  },  

  // Clear sky

  {
    id: "clear-sky",
    title: "Clear Sky Scenario ⋆⭒˚.⋆🔭",
    subtitle: "Low aerosol loading, dry atmosphere, and high visibility.",
    description:
      "This simulation represents a stable clear-sky atmosphere, useful as a reference case for comparing the effect of clouds, humidity, and aerosol concentration. Input parameters are obtained from stable clear-sky conditions at Paranal Observatory.",
    previewImage: contrastset, 
    parameters: [
      ["Relative Humidity", "10%"],
        ['Air pressure', '762 hPa'],
        ["Aerosol Optical Depth", "0.02"],
        ["Ångström Coefficient", "1.40"],
        ["Aerosol profile", "D (Desert)"],
        ["Aerosol height", "800 m"],
        ["Cloud base", "0"],
        ["Cloud model", "0 (clear)"],
        ["Cloud fraction", "0"],
        ['Observer elevation', '15 m'],
        ["Ground Reflectance", "80% grass\n20% asphalt"],
        ['nb_bins', '3'],
        ['Lambda_min', '510 nm'],
        ['Lambda_max', '600 nm'],
        ['Elevation angle', '[2:90:4]'],
        ['Azimuth angle', '[2:354:8]'],
        ['Direct fiel of vision', '5 m'],
    ],
    plots: [
      {
        src: domain,
        caption: "Simulation domain: 3 nested layers (27² km, 81² km, 243² km), not including 10km buffer.",
      },
      {
        src: clear01,
        caption: "This map corresponds to the summer one from the seasonal experiment (their input params are practically identical). Units of W/m²/sr/nm.",
      },
    ],
    extra:
      "These are only preliminary results, further investigation is currently being made to further refine input parameters and ground reflectance data.",
  },
  
  
  // Cloudy sky

  {
    id: "cloudy-sky",
    title: "Cloudy Scenario ☁️",
    subtitle: "Enhanced scattering caused by low cloud cover.",
    description:
      "This simulation explores how cloud layers redistribute artificial light, increasing diffuse sky brightness. Input parameters are obtained from typical low cloud cover conditions at Paranal Observatory.",
    previewImage: contrastset, 
      parameters: [
        ["Relative Humidity", "70%"],
        ['Air pressure', '750 hPa'],
        ["Aerosol Optical Depth", "0.08"],
        ["Ångström Coefficient", "1.10"],
        ["Aerosol profile", "D (Desert)"],
        ["Aerosol height", "2200 m"],
        ["Cloud base", "7000 m"],
        ["Cloud model", "3 (Altostratus/Altocumulus)"],
        ["Cloud fraction", "80"],
        ['Observer elevation', '15 m'],
        ["Ground Reflectance", "80% grass\n20% asphalt"],
        ['nb_bins', '3'],
        ['Lambda_min', '510 nm'],
        ['Lambda_max', '600 nm'],
        ['Elevation angle', '[2:90:4]'],
        ['Azimuth angle', '[2:354:8]'],
        ['Direct fiel of vision', '5 m'],
    ],
    plots: [
      {
        src: domain,
        caption: "Simulation domain: 3 nested layers (27² km, 81² km, 243² km), not including 10km buffer.",
      },
      {
        src: cloudy,
        caption: "Diffuse radiance @555nm. Units of W/m²/sr/nm.",
      },
    ],
    extra:
      "Investigate these white patches, probably interpolation-generated artifacts. These are only preliminary results, further investigation is currently being made to further refine input parameters and ground reflectance data.",
  },
];


/* plotSet: [[
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
    ]],*/


    /*
    
    summer_plot: [summer,"Typical summer atmospheric conditions"],
      autumn_plot: [autumn, "Typical autumn atmospheric conditions"],
      winter_plot: [winter, "Typical winter atmospheric conditions"],
      spring_plot: [spring, "Typical spring atmospheric conditions"],
    */