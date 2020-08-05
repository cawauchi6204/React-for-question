import * as React from 'react'

const RadioInput = (props: any) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value)
    }

    return (
        <label htmlFor={props.label}>{props.label}
            <input type="radio" onChange={handleChange} name={props.name} value={props.gender} />
        </label>
    )
}

export default RadioInput

