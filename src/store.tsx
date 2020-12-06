import create from 'zustand'
import axios from 'axios'
import { Issue } from 'types'

export const BASE_URL = 'https://api.github.com/repos/cosmos/cosmos-sdk'
type StoreIssue = {
  [number: string]: Issue
}

type StoreState = {
  issuesByNum: {
    [num: string]: Issue
  }
  totalIssueCount: number
  fetchIssues: (page: number) => void
  fetchIssueCount: () => void
}

export const useStore = create<StoreState>((set) => ({
  issuesByNum: {},
  totalIssueCount: 0,
  fetchIssueCount: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}`)
      set({ totalIssueCount: data.open_issues_count })
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
  fetchIssues: async (page: number) => {
    try {
      const { data: issues } = await axios.get(`${BASE_URL}/issues`, {
        params: { page, per_page: 100 },
      })
      const parsedIssues = issues.reduce((prev: StoreIssue, curr: Issue) => {
        return { ...prev, [curr.number]: curr }
      }, {})
      set({ issuesByNum: parsedIssues })
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
