export type ButtonProps  = {
    filter: string
    title: string
    setFilter: (filter: string)=> void
}
export default function Button({filter,title,  setFilter}: ButtonProps) {
    
  return (
    <button onClick={() => setFilter(filter)} className="text-gray-700">
    {title}
  </button>
  )
}
