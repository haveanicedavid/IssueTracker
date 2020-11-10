import create from 'zustand'
import axios from 'axios'
import { IssuesListForRepoResponseData } from '@octokit/types'

const BASE_URL = 'https://api.github.com/repos/cosmos/cosmos-sdk'

type StoreState = {
  issues: IssuesListForRepoResponseData
  fetchIssues: () => void
}
export const useStore = create<StoreState>((set) => ({
  issues: [],
  fetchIssues: async () => {
    try {
      const { data: issues } = await axios.get(`${BASE_URL}/issues`)
      console.log('rawData :>> ', issues)
      set({ issues })
    } catch (err) {
      alert(`Error fetching data from Cosmos: ${JSON.stringify(err)}`)
    }
  },
}))
