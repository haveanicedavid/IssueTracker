# Cosmos Issue Viewer Challenge

## Data
I used [Zustand](https://github.com/pmndrs/zustand) for a global store
## Setup

## Notes

- I intentionally over-architected the heck out of this challenge given the code challenge instructions to prioritize architecture and code quality. In a real app, the acceptance criteria would likely be one component, and certainly much less code :)
<!-- - On a similar note, I focused on data over UI. [SALT Lending's Homepage](http://www.saltlending.com) is a much better example of my preference for aesthetic, but if it's a concern I'd be happy to come back and add more style. On a similar note (for full disclosure): while I wrote the majority of the code from scratch, some of what's in `Issue.tsx` is copy-pasted from Material UI's [card exampe](https://material-ui.com/components/cards/) -->
- There is a console error due to my use of MUI Datables with Typescript 4.0 ([issue](https://github.com/gregnb/mui-datatables/issues/1261)). I'd Probably revert the TS version or use another library in a real use case
- The github API limits responses to 30, so it doesn't fetch all issues from the repo. In a 'real world application', I'd probably do something like: use the `open_issues_count` property from Github's `https://api.github.com/users/:user/repos` return in conjunction with pagination to make sure all repo issues can be displayed. Alternatively, the GraphQL API might avoid having to do this
- in `Issue.tsx` (the issue show page) I am passing an issue number through route params and using that to re-fetch the same data, which isn't ideal architecture but I wanted to try and demonstrate a few different code patterns

## TODO
- Extract progress loader to 
