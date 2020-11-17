# Cosmos Issue Viewer

A simple git issue viewer for [Cosmos-SDK](https://github.com/cosmos/cosmos-sdk)

## Setup

1. Clone this repo
2. run `yarn` to install dependencies
3. `yarn start` to run the app locally

## Live version

Deployed on Netlify [here](https://gifted-jackson-04a1aa.netlify.app/)

## Technologies

- Create React App + Typescript
- [React Router](https://reactrouter.com)
- [Material UI](https://material-ui.com)
- [Zustand](https://github.com/pmndrs/zustand) for global state
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) for component structure
- [React Markdown](https://github.com/remarkjs/react-markdown) for parsing comments
- [Framer Motion](https://www.framer.com/motion/) for page transitions

## TODO

- Some of the markdown rendering in comments might still be wonky
- There are two console errors due to my use of MUI Datables with Typescript 4.0 ([issue](https://github.com/gregnb/mui-datatables/issues/1261)). Reverting to a prior TS version would likely fix
- The github API limits responses to 30, so it doesn't fetch all issues from the repo. To get around this, I'd probably use the `open_issues_count` property from Github's `https://api.github.com/users/:user/repos` endpoint in conjunction with pagination to make sure all repo issues can be displayed. Alternatively, the GraphQL API might avoid having to do this
