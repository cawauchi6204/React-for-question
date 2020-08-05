import * as React from 'react'
import { useState } from 'react'
import TextInput from './components/Textinput'
import RadioInput from './components/RadioInput'
import FormButton from './components/FormButton'

const App = () => {

    const [state, setState] = useState({
        name: '',
        gender: '',
        age: 0
    })

    // const changeName = (name: string) => {
    //     setState({ ...state, name: name })
    // }

    // const changeAge = (age: number) => {
    //     setState({ ...state, age: age })
    // }

    // const changeGender = (gender: any) => {
    //     setState({ ...state, gender: gender })
    // }

    const changeState = (prevState: any) => {
        setState({ ...prevState,prevState:prevState  })
    }

    const clickButton = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        alert(`以下の内容を登録します。\n名前 :{${state.name}}\n性別 :{${state.gender}}\n年齢: {${state.age}}`)
    }

    return (
        <form>
            {/* <TextInput label={'名前'} onChange={changeName} /> */}
            <TextInput label={'名前'} onChange={changeState} />
            <label>性別:</label>
            {/* <RadioInput label={'男性'} gender={'男'} name={"gender"} onChange={changeGender} checked={state.gender === '男'} /> */}
            <RadioInput label={'男性'} gender={'男'} name={"gender"} onChange={changeState} checked={state.gender === '男'} />
            {/* <RadioInput label={'女性'} gender={'女'} name={"gender"} onChange={changeGender} checked={state.gender === '女'} /> */}
            <RadioInput label={'女性'} gender={'女'} name={"gender"} onChange={changeState} checked={state.gender === '女'} />
            {/* <TextInput label={'年齢'} onChange={changeAge} /> */}
            <TextInput label={'年齢'} onChange={changeState} />
            <FormButton onClick={clickButton} />
        </form>
    )
}


export default App
