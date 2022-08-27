
## Getting Started with React Software Architecture

Hi! In this repository i've covered "React Software Architecture" according as [React: Software Architecture](https://www.linkedin.com/learning/react-software-architecture/learn-software-architecture-with-react?autoplay=true) course on linkedin. This repository includes final and ready to use code snippets of the concepts.

> **Note:** This reposity is not entirely connected to the course.

    I have changed some parts and designed according to my needs.

**Tech Stack of Repository;**

**Frontend**

- React
- React Router Dom
- Styled Components
- React Redux
- MobX
- MobX React Lite
- Recoil


**Backend**

- Node.js
- Express
- Isomorphic Fetch

## Concepts

 - Server-Side Rendering (SSR) (Building, Routing, Styling, Data Loading and Rendering with SSR)
 - State Management (incl. Hooks, Redux, MobX and Recoil)
 - Code Splitting (Folder Naming and Structure Conventions, and Optimizing the Components)

## What should you know?

This app runs with 2 different way. With SSR and without SSR. You can switch to both of them with doing that i wrote underneath.

**Running SSR**

You need to go to the "index.js", "app.js" and "index.html" files.

In the "index.html" uncomment the  `<!-- {{ styles }} -->` .
In the "app.js" there is Routes with Router. You need to use which there is not having `<Router>` one to use SSR.
In the "index.js" you need to use hydrated DOM to use SSR.

> **Note:** To use SSR, you need to use  commented codes that i wrote. And of course you need to cover with comment the unused one.

> **Note:** Code Splitting and State Management parts not working on SSR.


## Avaliable Scripts

**With SSR**

    npm run server

Runs the app with SSR.  
Open [http://localhost:8080](http://localhost:8080/) to view it in your browser.

The page **will not reload** when you make changes.  
You may also see any lint errors in the console.

**Without SSR**

    npm start

Runs the app without SSR.  
Open [http://localhost:3000](http://localhost:3000/) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.
