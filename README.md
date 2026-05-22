# Latest Update (4/29/2026 4:34 PM)

Update: Officially deployed the website and added unit testing with React testing library and playwright for web accessibility guidelines. A common issue we are running into is the rendering latency. I found a page that provides a diagnosis report on how to optimize it better. Plan is to incrementally follow it with integrated unit testing: https://pagespeed.web.dev/analysis/https-www-altrealityinitiative-com/9dxna6y4ps?form_factor=mobile 

# Alternate Reality Initiative Website (WIP)

This repository contains a **work-in-progress redesign and rebuild** of the Alternate Reality Initiative (ARI) website, an XR-focused student organization at the University of Michigan.

The goal of this project is to:

* Rebuild the website **from scratch** with a cleaner, more maintainable codebase
* Redesign the visual and interaction experience to better reflect ARI’s identity and mission
* Improve accessibility, performance, and long-term scalability
* Establish a solid foundation for future contributors and iterations

This is an active development project; structure, components, and design decisions are still evolving.

## About Alternate Reality Initiative

Alternate Reality Initiative (ARI) is a student-led organization at the University of Michigan focused on extended reality (XR), including virtual reality, augmented reality, and immersive media. ARI explores XR through projects, workshops, research, and community-building across disciplines.

## Tech Stack

* React
* Vite
* JavaScript
* ESLint

The project uses Vite for a fast development environment with hot module replacement (HMR).

## Development Status

* Initial project scaffolding complete
* Ongoing code cleanup and refactoring
* UI/UX redesign in progress
* Component architecture and styling patterns subject to change

Expect breaking changes as the site is actively reworked.

## Getting Started

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build for production:

```
npm run build
```

## Notes on Tooling

This project is currently using the standard React + Vite setup. Advanced features such as the React Compiler or TypeScript may be added later once the core architecture stabilizes.

## Contributions

Contributions, feedback, and design input are welcome. Because this is a work in progress, **please coordinate changes with the project manager, kvho2004, or open an issue before making large structural updates.**
