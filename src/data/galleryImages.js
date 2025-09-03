// Gallery image data
// CRITICAL: Order matters for animations! Do not reorder these images.

// Animation configuration for gallery images
export const galleryAnimationConfig = [
  // Image 0 - Main header with zoom and grayscale effects
  {
    zoom: { 
      formula: (data) => 1 + (1 - data.range(0.5, 2 / 3)) / 4,
      description: "Zoom effect based on scroll position" 
    },
    grayscale: { 
      formula: (data) => 1 - data.range(0.01 / 10, 1 / 30),
      description: "Grayscale fade effect"
    }
  },
  // Image 1 - Basic zoom
  {
    zoom: { 
      formula: (data) => 1 + data.range(0, 1 / 3) / 3,
      description: "Forward zoom on scroll"
    }
  },
  // Image 2 - Basic zoom
  {
    zoom: { 
      formula: (data) => 1 + data.range(2 / 3, 1 / 3) / 3,
      description: "Delayed zoom effect"
    }
  },
  // Image 3 - Zoom with grayscale
  {
    zoom: { 
      formula: (data) => 1 + data.range(0.3 / 3, 1 / 3) / 2,
      description: "Moderate zoom effect"
    },
    grayscale: { 
      formula: (data) => 1 - data.range(0.1 / 3, 1 / 3),
      description: "Grayscale transition"
    }
  },
  // Image 4 - Basic zoom
  {
    zoom: { 
      formula: (data) => 1 + data.range(0.3 / 3, 1 / 3) / 3,
      description: "Subtle zoom effect"
    }
  },
  // Image 5 - Zoom with grayscale
  {
    zoom: { 
      formula: (data) => 1 + data.range(1.8 / 3, 1 / 3) / 3,
      description: "Late zoom effect"
    },
    grayscale: { 
      formula: (data) => 1 - data.range(1.6 / 3, 1 / 3),
      description: "Late grayscale effect"
    }
  },
  // Image 6 - Reverse zoom
  {
    zoom: { 
      formula: (data) => 1 + (1 - data.range(2 / 3, 1 / 3)) / 3,
      description: "Reverse zoom effect"
    }
  },
  // Image 7 - Reverse zoom
  {
    zoom: { 
      formula: (data) => 1 + (1 - data.range(2 / 4, 1 / 3)) / 3,
      description: "Different reverse zoom"
    }
  },
  // Image 8 - Subtle reverse zoom
  {
    zoom: { 
      formula: (data) => 1 + (1 - data.range(2 / 4, 1 / 3)) / 4,
      description: "Subtle reverse zoom"
    }
  },
  // Image 9 - Subtle reverse zoom (same as 8)
  {
    zoom: { 
      formula: (data) => 1 + (1 - data.range(2 / 4, 1 / 3)) / 4,
      description: "Subtle reverse zoom"
    }
  },
  // Image 10 - Only grayscale
  {
    grayscale: { 
      formula: (data) => 1 - data.range(0.9 / 3, 0.1 / 3),
      description: "Pure grayscale effect"
    }
  },
  // Images 11-13 - No animations
  {}, {}, {},
  // Image 14 - Late zoom effect
  {
    zoom: { 
      formula: (data) => 1 + (1 - data.range(0.4 / 3, 0.1 / 3)) / 4,
      description: "Late subtle zoom"
    }
  },
  // Images 15+ - No animations (add empty objects for remaining images)
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
];

export const galleryImageData = [
  {
    url: "https://i.imgur.com/0bJ4URQ.jpg",
    getPosition: (width, height) => [0, -height * 1.5 + 12.1, 0],
    getScale: (width, height) => [width, 8, 1]
  },
  {
    url: "https://i.imgur.com/om2kvnR.jpg", 
    getPosition: (width, height) => [0, -12, 1],
    getScale: (width, height) => [8, height, 1]
  },
  {
    url: "https://i.imgur.com/F6D8rB4.jpg",
    getPosition: (width, height) => [2, -20, 0],
    getScale: (width, height) => [5, 5, 1]
  },
  {
    url: "https://i.imgur.com/R9O1MVg.jpg",
    getPosition: (width, height) => [-2, -height, 2],
    getScale: (width, height) => [1.5, height/2, 1]
  },
  {
    url: "https://i.imgur.com/rrnaVCY.jpg",
    getPosition: (width, height) => [0, -height, 2.3],
    getScale: (width, height) => [1.5, height/2, 1]
  },
  {
    url: "https://i.imgur.com/zbZELzh.jpg",
    getPosition: (width, height) => [2, -height, 2.6],
    getScale: (width, height) => [1.5, height/2, 1]
  },
  {
    url: "https://i.imgur.com/3Sct6DB.jpg",
    getPosition: (width, height) => [3.4, -height * 2 - height / 4 - 16, -1],
    getScale: (width, height) => [7, 5, 1]
  },
  {
    url: "https://i.imgur.com/Vo6ouG9.jpg",
    getPosition: (width, height) => [-5, -height * 2 - 7, -3],
    getScale: (width, height) => [7, 8, 1]
  },
  {
    url: "https://i.imgur.com/Hiu4HSr.jpg",
    getPosition: (width, height) => [2, -height * 2 - 10.5, 0],
    getScale: (width, height) => [4, 6, 1]
  },
  {
    url: "https://i.imgur.com/VQJ7t82.jpg",
    getPosition: (width, height) => [-4, -height * 2 - 16, -1],
    getScale: (width, height) => [5, 5, 1]
  },
  {
    url: "https://i.imgur.com/K9mXRGW.jpg",
    getPosition: (width, height) => [3, -height * 2 - 25, -1],
    getScale: (width, height) => [5, 5, 1]
  },
  {
    url: "https://i.imgur.com/ENb1Avr.jpg",
    getPosition: (width, height) => [-3, -height * 2 - 24, 0],
    getScale: (width, height) => [5, 7, 1]
  },
  {
    url: "https://i.imgur.com/TX4JWDH.jpg",
    getPosition: (width, height) => [3.3, -height * 2 - 32, -1],
    getScale: (width, height) => [5, 6, 1]
  },
  {
    url: "https://i.imgur.com/02zrkYe.jpg",
    getPosition: (width, height) => [2, -height * 2 - 39, 1],
    getScale: (width, height) => [4, 5, 1]
  },
  {
    url: "https://i.imgur.com/65TxBm7.jpg",
    getPosition: (width, height) => [-2, -height * 2 - 32, 1],
    getScale: (width, height) => [4, 5, 1]
  },
  {
    url: "https://i.imgur.com/PWC35N5.jpg",
    getPosition: (width, height) => [-3, -height * 2 - 38, 0],
    getScale: (width, height) => [5, 9, 1]
  },
  {
    url: "https://i.imgur.com/BilMD3V.jpg",
    getPosition: (width, height) => [0, -height * 2 - 45, 1],
    getScale: (width, height) => [8, 5, 1]
  },
  {
    url: "https://i.imgur.com/TsLo9gb.jpg",
    getPosition: (width, height) => [-2.5, -height * 2 - 52, 0],
    getScale: (width, height) => [5, 5, 1]
  },
  {
    url: "https://i.imgur.com/Hoeubov.jpg",
    getPosition: (width, height) => [3.2, -height * 2 - 53, -1],
    getScale: (width, height) => [5, 10, 1]
  },
  {
    url: "https://i.imgur.com/IRyRm8O.jpg",
    getPosition: (width, height) => [-3, -height * 2 - 60, -1],
    getScale: (width, height) => [5, 7, 1]
  },
  {
    url: "https://i.imgur.com/Jcij9ZI.jpg",
    getPosition: (width, height) => [0, -height * 2 - 67, 0.5],
    getScale: (width, height) => [9, 6, 1]
  },
  {
    url: "https://i.imgur.com/XdBLDKX.jpg",
    getPosition: (width, height) => [4, -height * 2 - 74, -2],
    getScale: (width, height) => [7, 5, 1]
  },
  {
    url: "https://i.imgur.com/DRUOZFN.jpg",
    getPosition: (width, height) => [-width/4, -height * 2 - 77, -2],
    getScale: (width, height) => [6, 9, 1]
  },
  {
    url: "https://i.imgur.com/jiI9r9D.jpg",
    getPosition: (width, height) => [0, -height * 2 - 86, 0],
    getScale: (width, height) => [9, 7, 1]
  },
  {
    url: "https://i.imgur.com/YJ0Pqf0.jpg",
    getPosition: (width, height) => [0, -height * 2 - 92, -3],
    getScale: (width, height) => [width, height/15, 1]
  }
];

// Helper function to apply animations to gallery images
export const applyGalleryAnimations = (group, scrollData) => {
  if (!group.current?.children) return;
  
  galleryAnimationConfig.forEach((config, index) => {
    const child = group.current.children[index];
    if (!child?.material) return;
    
    // Apply zoom animation if configured
    if (config.zoom) {
      child.material.zoom = config.zoom.formula(scrollData);
    }
    
    // Apply grayscale animation if configured  
    if (config.grayscale) {
      child.material.grayscale = config.grayscale.formula(scrollData);
    }
  });
};

export default galleryImageData;
