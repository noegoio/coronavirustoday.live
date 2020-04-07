import React from 'react';
import { Stats, Labels } from "./Service"

export const Grid = (props: { fields: (keyof Stats)[], data: Stats }) => {
    const { fields, data } = props
    return (
    <div>
        {fields.map((field, index) => (
            <div className="row" key={index}>
                <span className="row-label">{Labels[field]}</span>
                <span className="row-stats">{data[field]}</span>
            </div>
        ))}
    </div>
    )
}