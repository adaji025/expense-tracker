import  React, { createContext, useReducer } from 'react'

// initial state
const initialState = [
    {id: 1, label: 'flower',  amount: -20},
    {id: 2, label: 'salary',  amount: -30},
    {id: 3, label: 'book',  amount: 40},
    {id: 4, label: 'camera',  amount: 220},
]

// create context
export const GlobalContext  =  createContext(initialState)

// provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch]  = useReducer(initialState)
    return(
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}