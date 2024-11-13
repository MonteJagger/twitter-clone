
# Getting Started with Create React App

  

To create a new React app with TypeScript, you can use the following command in the directory you want

```console
$ npx create-react-app app-name-here --template typescript
$ cd app-name-here
```

  

## Routing

  For routing we will use `react-router-dom`
```console
$ npm i react-router-dom
```
This allows you to assign components to specific paths. For example, this will display the Feed component when on the home page

```
import  './App.css';
import { Route, BrowserRouter  as  Router, Routes } from  'react-router-dom';
import { Feed } from  './components/Feed/Feed';

function  App() {
  return (
    <Router>
      <Routes>
        <Route  path="/"  Component={Feed}></Route>
      </Routes>
    </Router>
  )
}

export  default  App;
```

## Directory Structure





## Available Commands

In the project directory, you can run:
  

### `npm start`
```
  src/
├── @types/                 # Types for various parts of the app
│   ├── components/         # Types specific to reusable components
│   │   ├── Tweet.types.ts
│   │   ├── Profile.types.ts
│   │   └── index.ts        # Re-exports types in `components`
│   ├── pages/              # Types specific to page-level components
│   │   ├── ProfilePage.types.ts
│   │   ├── HomePage.types.ts
│   │   └── index.ts        # Re-exports types in `pages`
│   ├── api/                # Types specific to API responses and requests
│   │   ├── TweetAPI.types.ts
│   │   ├── UserAPI.types.ts
│   │   └── index.ts        # Re-exports types in `api`
│   └── index.d.ts          # Global types and utility types
│
├── api/                    # API functions for interacting with backend services
│   ├── tweetApi.ts         # API calls related to tweets (e.g., fetching, posting tweets)
│   ├── userApi.ts          # API calls related to user data
│   └── index.ts            # Re-exports API functions for easy imports
│
├── assets/                 # Static assets (images, fonts, etc.)
│   ├── images/
│   ├── fonts/
│   └── icons/
│
├── components/             # Reusable UI components
│   ├── Tweet/
│   │   ├── Tweet.tsx       # Component file
│   │   ├── styles.ts       # Styled-components or CSS module
│   │   └── types.ts        # Component-specific types
│   ├── Profile/
│   │   ├── Profile.tsx
│   │   ├── styles.ts
│   │   └── types.ts
│   ├── Button.tsx          # Generic reusable button component
│   └── index.ts            # Re-exports components for easy imports
│
├── context/                # Context providers and hooks for global state management
│   ├── AuthContext.tsx     # Authentication context
│   ├── ThemeContext.tsx    # Theme context for dark/light mode
│   └── index.ts            # Re-exports contexts for easy imports
│
├── hooks/                  # Custom hooks
│   ├── useAuth.ts          # Hook for authentication logic
│   ├── useFetchTweets.ts   # Hook for fetching tweets data
│   └── index.ts            # Re-exports hooks for easy imports
│
├── layouts/                # Layout components (page wrappers)
│   ├── MainLayout.tsx      # Layout with navbar, sidebar, footer, etc.
│   └── AuthLayout.tsx      # Layout for authentication pages
│
├── pages/                  # Pages or route-level components
│   ├── HomePage/           # Folder for the Home page
│   │   ├── HomePage.tsx    # Main file for Home page
│   │   ├── styles.ts       # Page-specific styles
│   │   └── types.ts        # Page-specific types
│   ├── ProfilePage/
│   │   ├── ProfilePage.tsx
│   │   ├── styles.ts
│   │   └── types.ts
│   ├── LoginPage/
│   │   ├── LoginPage.tsx
│   │   ├── styles.ts
│   │   └── types.ts
│   └── index.ts            # Re-exports pages for easy imports
│
├── services/               # Services for external integrations (Firebase, analytics, etc.)
│   ├── firebase.ts         # Firebase initialization and service functions
│   ├── analytics.ts        # Analytics tracking (e.g., Google Analytics, Mixpanel)
│   └── index.ts            # Re-exports services for easy imports
│
├── styles/                 # Global styles, themes, and styling utilities
│   ├── GlobalStyles.ts     # Global CSS reset or global styles using styled-components
│   ├── theme.ts            # Theme configuration (e.g., colors, typography)
│   └── index.ts            # Re-exports styles for easy imports
│
├── utils/                  # Utility functions and helpers
│   ├── formatDate.ts       # Helper to format dates
│   ├── debounce.ts         # Debounce function
│   └── index.ts            # Re-exports utilities for easy imports
│
├── App.tsx                 # Main app component
├── index.tsx               # App entry point
└── reportWebVitals.ts      # Optional, for measuring app performance
```

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.\

You will also see any lint errors in the console.

  

### `npm test`

  

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `npm run build`

  

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

### `npm run eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).