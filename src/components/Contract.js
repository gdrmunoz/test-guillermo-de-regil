import React from 'react'

export default function Contract(props) {
    const { contract, onAdd, onRemove } = props;
    return (
        <>
            {contract.qty > 0 ? <div className='row-contract selected'>
                <button onClick={() => onRemove(contract)} className='button-1 selected'>-</button>
                <div className='counter selected'>{contract.qty}</div>
                <button onClick={() => onAdd(contract)} className='button-1 selected'>+</button>
                <h3 className='contract-name'>{contract.name}</h3>
            </div> :
                <div className='row-contract'>
                    <button onClick={() => onRemove(contract)} className='button-1'>-</button>
                    <div className='counter'>{contract.qty}</div>
                    <button onClick={() => onAdd(contract)} className='button-1'>+</button>
                    <h3 className='contract-name'>{contract.name}</h3>
                </div>}
        </>
    )
}
