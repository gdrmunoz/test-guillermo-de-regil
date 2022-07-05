import React from 'react'
import Contract from './Contract';

export default function Main(props) {
    const { contracts, onAdd, onRemove } = props;
    return (
        <main className='block col-2'>
            <div>
                {contracts.map((contract) => (
                    <Contract key={contract.code} contract={contract} onAdd={onAdd} onRemove={onRemove}></Contract>
                ))}
            </div>
        </main>
    )
}
