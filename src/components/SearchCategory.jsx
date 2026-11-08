import React, { useEffect, useState } from "react";

export const SearchCategory = ({category}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
                const data = await res.json();
                setData(data.meals || []);
                console.log(data);

            }
            catch(err){
                console.log("error fetching recipes from categories", err);
            }
        }
        fetchRecipes()
    },[category]
    )
    
    return (
        <div>
            {data.map((value,index) => 
             {
                return (
                    <p key={index}>{value.strMeal}</p>
                )
            })}
        </div>
    )
}