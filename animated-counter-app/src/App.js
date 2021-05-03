import './App.css'
import { useState } from 'react'
import { Counter } from './Components/Counter'

function App() {
    const [amount, setAmount] = useState(15423)
    const [newAmount, setNewAmount] = useState(0)

    const handleUpdateCounter = () => {
        setAmount(newAmount)
    }

    return (
        <div className="App">
            <input type="number" value={newAmount} onChange={(event) => setNewAmount(event.target.value)} />
            &nbsp; <input type="button" value="Update counter" onClick={handleUpdateCounter} />
            <p>
                <Counter amount={amount} />
            </p>
        </div>
    )
}

export default App
