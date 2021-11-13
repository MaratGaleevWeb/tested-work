import { useState } from 'react'
import { Text, Image, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'

import EditIcon from '../icons/EditIcon.svg'
import DeleteIcon from '../icons/DeleteIcon.svg'
import CheckIcon from '../icons/CheckIcon.svg'
import { useAppDispatch } from '../redux/hooks'
import { ITodo, updateTodo, toggleTodo, deleteTodo } from '../redux/todoSlice'

const StyledListItem = styled.View`
  padding: 8px;
  color: #212529;
  border: 1px solid rgba(0, 0, 0, 0.125);
  flex-direction: row;
`
const LeftView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`
const RightView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`
const StyledInput = styled.TextInput`
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  border: solid #000 2px;
`

const TodoItem: React.FC<ITodo> = ({ id, message, status, createdAt }) => {
  const dispatch = useAppDispatch()

  const [isChanging, setIsChanging] = useState(true)
  const [updatedMessage, setUpdatedMessage] = useState<string | undefined>(undefined)

  const handleSubmit = () => {
    if (updatedMessage) dispatch(updateTodo({ id, message: updatedMessage }))
    setIsChanging(true)
  }

  return isChanging ? (
    <StyledListItem style={status && { backgroundColor: '#d1e7dd' }}>
      <LeftView>
        <TouchableOpacity onPress={() => dispatch(toggleTodo(id))}>
          <Image
            style={{ height: 25, width: 25, tintColor: '#04e604' }}
            source={{ uri: CheckIcon }}
          />
        </TouchableOpacity>

        <Text>{message}</Text>
      </LeftView>

      <RightView>
        <TouchableOpacity onPress={() => setIsChanging(false)}>
          <Image
            style={{ height: 25, width: 25, tintColor: '#0404f2' }}
            source={{ uri: EditIcon }}
          />
        </TouchableOpacity>

        <View>
          <Text> {createdAt.split(' ')[0]}</Text>
          <Text> {createdAt.split(' ')[1] + ' ' + createdAt.split(' ')[2]}</Text>
        </View>

        <TouchableOpacity onPress={() => dispatch(deleteTodo(id))}>
          <Image
            style={{ height: 25, width: 25, tintColor: '#dc3545' }}
            source={{ uri: DeleteIcon }}
          />
        </TouchableOpacity>
      </RightView>
    </StyledListItem>
  ) : (
    <StyledInput
      value={updatedMessage ?? message}
      onChange={(e) => setUpdatedMessage(e.nativeEvent.text)}
      onSubmitEditing={handleSubmit}
      autoFocus
    />
  )
}

export default TodoItem
