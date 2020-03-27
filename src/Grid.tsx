import React from 'react';
import { Stats, Labels } from "./Service"

export const Grid = (props: { fields: (keyof Stats)[], data: Stats }) => {
    const { fields, data } = props
    return (
    <div>
        {fields.map((field, index) => (
            <div className="row" key={index}>
                <span>{Labels[field]}</span>
                <span>{data[field]}</span>
            </div>
        ))}
    </div>
    )
}