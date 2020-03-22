import React from 'react';
import { Stats, Labels } from "./Service"

export const Grid = (props: { fields: (keyof Stats)[], data: Stats }) => {
    const { fields, data } = props
    return (
    <>
        {fields.map((field) => (
            <div className="row">
                <span>{Labels[field]}</span>
                <span>{data[field]}</span>
            </div>
        ))}
    </>
    )
}