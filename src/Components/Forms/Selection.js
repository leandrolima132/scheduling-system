import React from 'react'

const Selection = ({name, value}) => {
    return (
        <select className={name}>
            <option value={value}>{value}</option>
        </select>
    )
}

export default Selection
