import { useLayoutEffect, useState} from 'react'
import {StoreContext} from "../../contexts";

const useTimerEffect = () => {
    const [date, setDate] = useState(new Date())
    useLayoutEffect(() => {
        const intervalID = setInterval(() => setDate(new Date()), 100)
        return () => {
            clearInterval(intervalID)
        }
    }, [date])
    return date
}

const Clock = (props: any) => {
    const { clickCounter, incrementClickAction } = props;
    const time = useTimerEffect();
    return (
        <>
            <h1>Testing</h1>
            <h2>It is clock {time.toLocaleTimeString()}.</h2>
            <p onClick={ () => incrementClickAction() }>Total de clicks { clickCounter }</p>
            <StoreContext.Consumer>
                {(store) => (
                    store.domain?.auth.authenticatedUser ?
                    <ul>
                        <li>{store.domain?.auth.authenticatedUser?.name}</li>
                    </ul> : <button onClick={() => store.domain?.auth.login("Sarah", "")}>Login</button>
                )}
            </StoreContext.Consumer>
        </>
    )
}

export default Clock