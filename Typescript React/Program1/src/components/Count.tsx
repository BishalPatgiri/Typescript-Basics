
interface input{
    label:number
}

export const Count = ({label}:input) => {
  return (
    <div>
        <h1>{label}</h1>
    </div>
  )
}
