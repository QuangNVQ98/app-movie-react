import Context from "./Context"
import { useReducer } from "react"
import reducer, { initState } from "./Reducer";

function Provider({children}: {children: any}) {

    const [state, dispatch] = useReducer(reducer, initState as any );

    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;