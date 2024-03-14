import React, { createContext, useContext, useState } from "react";

const authContext = createContext()

export const InputContext = ({ children }) => {

    const [teamNames, setTeamNames] = useState({
        1: [''],
        2: [''],
        3: [''],
        4: ['']
    })

    const [ actualGroup, setActualGroup ] = useState(1)

    const handleSetTeamNames = (teamId, index, value) => {
        setTeamNames((previousNames) => ({
            ...previousNames,
            [teamId]: previousNames[teamId].map((names, i) => (i === index ? value : names)) 
        }))
    }

    const handleNextGroup = () => {
        if (actualGroup < 4) {
            setActualGroup(actualGroup +1)
        } else {
            setActualGroup(1)
        }
    }

    return (
        <authContext.Provider value={{
            teamNames, handleSetTeamNames,
            actualGroup, handleNextGroup
        }}>
            {children}
        </authContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(authContext)
}