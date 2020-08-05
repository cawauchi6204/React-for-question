import * as React from 'react'
import { useState } from 'react'

const TextInput = (props: any) => {
    const [textValue, setTextValue] = useState('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value)
        setTextValue(event.target.value)
    }

    return (
        <div>
            <label htmlFor={props.label}>{props.label}
                <input type="text" onChange={handleChange} value={textValue} />
            </label>
        </div>
    )
}

export default TextInput
