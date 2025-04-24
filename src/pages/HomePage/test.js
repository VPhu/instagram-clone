import React from "react"
const list = [
    {
        id: 1,
        name: "Phu",
        age: 18,
    },
    {
        id: 2,
        name: "Hay",
        age: 14,
    },
    {
        id: 3,
        name: "Hotr",
        age: 18,
    }
]
const Test = () => {
    const newList = list.find((item)=> {
        if(item.name.includes("tr")) {
            return true
        } else {
            return false
        }
    } )
    const total = newList.length > 0 ? true : false
    console.log(total)

    return (
        <div>
        </div>
    )
}
export default Test