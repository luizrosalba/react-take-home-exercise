import Button from '../Buttons/Button'
type Filter = {
    setFilter: () => void
}
export default function Filter({setFilter}: Filter) {
  return (
    <>
            <Button 
              filter="all" 
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
