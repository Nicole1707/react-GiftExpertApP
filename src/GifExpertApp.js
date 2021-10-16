import React, { useState } from "react"
import { Addcategories} from "./components/Addcategories";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Avatar'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'Naruto'])
    //     //setCategories(cats => [...cats, 'Hola'])
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <Addcategories  setCategories ={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map( category => {
                        return(<GifGrid 
                            key ={category}
                            category={category}/>)
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp