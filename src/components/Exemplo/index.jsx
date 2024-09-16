import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENTAR":
            return {count: state.count + 1};
        case "DECREMENTAR":
            return {count: state.count - 1};
        case "ZERAR":
            return {count: 0};
        default:
            throw new Error("Ação inválida");
    }
}

const Exemplo = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <>
            <h1>Contador: {state.count}</h1>
            <button onClick={() => dispatch({type: "DECREMENTAR"})} type={"button"}>-</button>
            <button onClick={() => dispatch({type: "INCREMENTAR"})} type={"button"}>+</button>
            <button onClick={() => dispatch({type: "ZERAR"})} type={"button"}>Zerar</button>
        </>
    )
}

export default Exemplo;