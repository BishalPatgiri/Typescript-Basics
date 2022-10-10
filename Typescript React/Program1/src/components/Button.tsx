interface input{
    label:string
    onClick:()=>void
}

export const Button = ({label,onClick}:input) => {
  return (
    <div>
        <button onClick={onClick}>{label}</button>
    </div>
  )
}
