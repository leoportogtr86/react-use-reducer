// 2. **Contador com Valor Personalizado**: Modifique o contador para permitir que o usuário
// insira um valor específico para incrementar ou decrementar.
import {useReducer, useState} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return {count: state.count + action.delta};
        case "DEC":
            return {count: state.count - action.delta};
        case "ZERAR":
            return {count: 0};
        default:
            throw new Error("Ação inválida");
    }
}

const Ex2 = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const [delta, setDelta] = useState(1);

    return (
        <>
            <h1>Outro Contador: {state.count}</h1>
            <button onClick={() => dispatch({type: "DEC", delta})} type={"button"}>-</button>
            <button onClick={() => dispatch({type: "INC", delta})} type={"button"}>+</button>
            <button onClick={() => dispatch({type: "ZERAR"})} type={"button"}>Zerar</button>
            <input type={"number"} value={delta} onChange={(e) => setDelta(+e.target.value)}/>
        </>
    )
}

export default Ex2;