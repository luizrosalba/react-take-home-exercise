import { Dispatch, SetStateAction } from 'react'
import Button from '../Buttons/Button'
type Filter = {
    setFilter: Dispatch<SetStateAction<string>>
}
export default function Filter({setFilter}: Filter) {
  return (
    <>
            <Button 
              filter="all" 
              data-testid="all-button"
              title={"All"} 
              setFilter={setFilter}
            /> 
            <Button 
              filter="completed" 
              title={"Completed"} 
              setFilter={setFilter}
            /> 
            <Button 
              filter="pending" 
              title={"Pending"} 
              setFilter={setFilter}
            /> 
            </>
  )
}
