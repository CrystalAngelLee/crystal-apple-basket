import { createContext, useContext } from "react"
import AppleStore from './Apple.store'

class MStore {
  constructor() {
    this.store = new AppleStore()
  }
}

const Context = createContext()
const Provider = ({store, children}) => (
  <Context.Provider value={store}>
    {children}
  </Context.Provider>
)
const useStore = () => {
  return useContext(Context)
}

export { MStore, Provider, useStore}
