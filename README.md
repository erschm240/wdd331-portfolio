# WDD 331R Portfolio

**Student:** Emma Schmitz
**Semester:** Fall 2026
**Live Site:** [View Site](https://erschm240.github.io/wdd331-portfolio/)

## About

This repository is my portfolio for WDD 331R: Advanced CSS.
Each week I add new pages and styles as I work through the course
assignments. The site deploys automatically to GitHub Pages on
every push to main.

## File Structure
├── css/
│   ├── base/
│   │   ├── elements.css
│   │   └── reset.css
│   ├── components/
│   │   └── card.css
│   ├── layout/
│   │   └── primary.css
│   ├── tokens/
│   │   ├── colors.css
│   │   └── variables.css
│   ├── utilities/
│   │   └── utilities.css
│   └── main.css
├── dist/
│   └── styles.css
├── images/
├── unit-1/
│   └── custom-properties/
├── unit-2/
│   └── bootstrap-awareness/
│   └── layered-components/
│   └── part-and-slotted/
├── index.html
└── README.md

## Build Tool: Lightning CSS & How to Run the Build
Lightning CSS, Chokidar, Node, and NPM need to be installed. To run the build, this script is needed:

"build": "lightningcss --bundle --minify --targets \"<= 0.25%\" css/main.css -o dist/styles.css"

To run it, type "npm run build" in the terminal.

This build script runs LightningCSS to start. Then it bundles the code, meaning it takes all the code scattered in different files and compiles it into one. Next it minifies the code, removing all whitespaces, comments, and readable formatting. Then the script will modify the code to support the browsers specified by the percentage. In this case it means any browser that is used by 0.25% of the world. Lastly, it states where to go to get the code to build (css/main.css) and where to put it when it's done (dist/styles.css).

## Pages

[Home](index.html)

[Custom Properties and Nesting](unit-1/custom-properties/index.html)

[Layered Components](unit-2/layered-components/index.html)

[Bootstrap Awareness](unit-2/bootstrap-awareness/index.html)

[Part and Slotted](unit-2/part-and-slotted/index.html)