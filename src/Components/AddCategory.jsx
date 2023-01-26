import { useState } from "react"

export const AddCategory = ({onNewCategory}) =>{

 const [inputValue, setInputValue] = useState('')

 const onInputChange =({target})=>{
    setInputValue(target.value)
 }

 const onSubmit =(event)=>{
    event.preventDefault();
    if(inputValue.trim().length >= 1 ) {
        onNewCategory(inputValue.trim())
     //setCategories(categories =>[inputValue, ...categories]);
     return setInputValue('')
    }
   

}


return <>
 <form  onSubmit={onSubmit}>
        <input
            type='text'
            value={inputValue}
            placeholder='Buscar Gif'
            onChange={onInputChange}
        ></input>
    </form>
</>
}