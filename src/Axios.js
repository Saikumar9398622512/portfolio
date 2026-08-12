// import React, { useEffect, useState, } from "react";
// import axios, { Axios } from "axios";
// const App = () => {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/todos").then(
//             response => setData(response.data)
//         )
//     }, [])
//     return (
//         <div>
//             {data.map(item => <li key={item.id}>{item.title}</li>)}
//         </div>
//     )
// }
// export default App/




import React, { useEffect, useState } from "react";
const App = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(
            res => res.json()
        ).then(json=>setData(json))
    }, [])
    return (
        <div>
            {data.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}
export default App