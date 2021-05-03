import React, { useEffect, useRef } from 'react'

function usePrevious(value) {
    const ref = useRef(value)
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}

export const Counter = React.memo(({ amount }) => {
    const prevValue = usePrevious(amount)

    useEffect(() => {
        console.log('Amount: ' + amount)
        console.log('Previous Value: ' + prevValue)

        console.log('Difference: ' + (amount - prevValue))
    }, [])

    return (
        <span>
            Now: {amount}, Prev. Value: {prevValue}
        </span>
    )
})
