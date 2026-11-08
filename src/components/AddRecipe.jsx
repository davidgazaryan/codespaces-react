import React, { useState } from "react"

export const AddRecipe = () => {
    const [recipe,setRecipe] = useState('');
    const [categories,setCategories] = useState([]);
    console.log(categories)

    const fetchCategories = async () => {
        try {const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await response.json();
        setCategories(data.categories);
        }
        catch(err){
            console.log("error fetching categories", err);
        }
    }



    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",alignContent:"center"}}>
        <button onClick={fetchCategories} style={{width:"20%"}}>Categories</button>
        <li>
            {categories.map((category,index) => (
                <>
                <ul key={index}>{category.strCategory}</ul>
                <img src={category.strCategoryThumb}/>
                </>
            ))}
        </li>
        
            
        </div>
    )
}