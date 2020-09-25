import React from 'react'

function FullDeal(props) {
    return (
        <div className='fullDeal'>
            {'Deal - ' + props.match.params.number}
        </div>
    )
}

export default FullDeal
