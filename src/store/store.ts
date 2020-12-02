import create from 'zustand'
import axios from 'axios'
import { Issue } from 'types'

export const BASE_URL = 'https://api.github.com/repos/cosmos/cosmos-sdk'

type StoreState = {
  issuesByNum: {
    [num: string]: Issue
  }
  fetchIssues: () => void
}

export const useStore = create<StoreState>((set) => ({
  issuesByNum: {},
  fetchIssues: async () => {
    try {
      const { data: issues } = await axios.get(`${BASE_URL}/issues`)
      issues.forEach((issue: Issue) => {
        set((state) => ({
          issuesByNum: { ...state.issuesByNum, [issue.number]: issue },
        }))
      })
    } catch (err) {
      alert(
        `Uh oh! Error fetching data from github (might have reached the rate limit): \n\n ${JSON.stringify(
          err,
          null,
          2
        )}`
      )
    }
  },
}))
