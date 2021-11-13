import { FC, useState } from 'react'
import { Button } from 'react-native'

import styled from 'styled-components/native'
import { useAppDispatch } from '../redux/hooks'
import { addTodo } from '../redux/todoSlice'

import axios from 'axios'

const getTime = (): Promise<string> =>
  axios('http://worldtimeapi.org/api/ip')
    .then(({ data }) => data.datetime)
    .catch(console.error)

const StyledInput = styled.TextInput`
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  border: solid #000 2px;
  margin-bottom: 15px;
`

const TodoForm: FC = () => {
  const dispatch = useAppDispatch()
  const [message, setMessage] = useState('')

  const onPress = async () => {
    if (message) dispatch(addTodo({ message, createdAt: await getTime() }))
    setMessage('')
  }

  return (
    <>
      <StyledInput
        placeholder='Введите Todo'
        value={message}
        onChange={(e) => setMessage(e.nativeEvent.text)}
        onSubmitEditing={onPress}
        autoFocus
      />
      <Button onPress={onPress} title='Создать' />
    </>
  )
}

export default TodoForm
