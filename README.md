# [**Space Cowboy 3D Website**](https://spcwby.com)
This website was made with React Three Fiber.

![alt text](https://i.imgur.com/ggFo497.png)
![alt text](https://i.imgur.com/msGNfAh.png)
![alt text](https://i.imgur.com/oYLkBE5.png)

### Responsive 3D Website for the Art Collective Space Cowboy

- HTML, CSS, JavaScript + React Three Fiber 
- Smooth scrolling in each section
- Visually stunning postprocessing effects
- Responsive interface using media queries
- Site maintains optimal performance with low-res images and optimized geometry
- Advanced camera capabilities 



## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- Modern web browser with WebGL support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/spcwby.git
   cd spcwby
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production


```bash
# Create optimized production build
npm run build

# Serve locally to test
npm install -g serve
serve -s build
```

### Deploying
```bash
npm run deploy
```


### Linting

```bash
# Check code for issues
npm run lint

# Auto-fix most issues
npm run lint:fix

# Fix both linting and formatting
npm run format

# Check everything (no fixes)
npm run check
```

## 🔧 Tech Stack

### Core Technologies
- **React** - UI framework
- **React Three Fiber** - 3D graphics and animations
- **Three.js** - WebGL 3D library
- **React Router** - Client-side routing

### 3D & Graphics
- **@react-three/drei** - Useful helpers for R3F
- **@react-three/postprocessing** - Post-processing effects
- **three-stdlib** - Three.js extensions
