import { useState } from "react"


export const AddCategoria = ({onNewCategoria}) => {
    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = ({target}) => {
        const {value} = target
       setInputValue(value)
    }

    const onSubmit = (e) => { 
            e.preventDefault();
            const newInputValue = inputValue.trim()
            if(newInputValue.length <= 1) return;

             // setCategoria([inputValue,...categoria])
            onNewCategoria(newInputValue)
              setInputValue('')
            
            
    }
  return (
   <form onSubmit={ onSubmit }>
     <input
        type='text'
        placeholder='Add Categoria'
        value={inputValue}
        onChange={onInputChange}
    />
   </form>
  )
}
