# Cosmos Issue Viewer

A simple issue viewer for [Cosmos-SDK](https://github.com/cosmos/cosmos-sdk)

## Setup

1. Clone this repo
2. run `yarn` to install dependencies
3. `yarn start` to run the app locally

## Live version

Deployed on Netlify [here](https://5fae42c4e8156800076a61a5--gifted-jackson-04a1aa.netlify.app)

## Technologies

- Create React App + Typescript
- [React Router](https://reactrouter.com)
- [Material UI](https://material-ui.com)
- [Zustand](https://github.com/pmndrs/zustand) for global state

## TODO

- UI Buildout. Emphasis so far has been on architecture and data flow
- There is a console error due to my use of MUI Datables with Typescript 4.0 ([issue](https://github.com/gregnb/mui-datatables/issues/1261)). Reverting to a prior TS version would likely fix
