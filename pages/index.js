import { useState } from 'react'

const Home = () => {
    return (
        <div>
            <h1>Contador</h1>
            <Counter/>
        </div>
    )
}

const Counter = () => {
    const [counter, setCounter] = useState(1);

    const plusCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div> 
            {counter} 
            <button onClick={plusCounter}>Adicionar Contador</button>
        </div>
    )

}

export default Home