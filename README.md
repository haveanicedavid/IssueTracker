# Cosmos Issue Viewer Challenge

## Setup

## Notes
- There is a console error due to my use of MUI Datables with Typescript 4.0 ([issue](https://github.com/gregnb/mui-datatables/issues/1261)). I'd Probably revert the TS version or use another library in a real use case
- The github API limits responses to 30, so it doesn't fetch all issues from the repo. In a 'real world application', I'd probably do something like: use the `open_issues_count` property from Github's `https://api.github.com/users/:user/repos` return in conjunction with pagination to make sure all repo issues can be displayed. Alternatively, the GraphQL API might avoid having to do this

