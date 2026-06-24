import autumn_contribution from "/autumn_contribution4.png"
import summer_contribution from "/summer_contribution4.png"
import winter_contribution from "/winter_contribution4.png"
import spring_contribution from "/spring_contribution4.png"

export const contributions = [
    
  {
    id: "season-exp",
    contributionPlots: {
      summer: [
        {
          src: autumn_contribution,
          caption: "test autumn",
        },
      ],
      autumn: [
        {
          src: summer_contribution,
          caption: "test summer",
        },
      ],
      winter: [
        {
          src: winter_contribution,
          caption: "test winter",
        },
      ],
      spring: [
        {
          src: spring_contribution,
          caption: "test spring",
        },
      ],
    },  
  }
]