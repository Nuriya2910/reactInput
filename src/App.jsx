import { useEffect, useState } from "react"
import Card from "./Card"
import "./App.css"
function App() {
  const [data, setData] = useState([])
  const [inp1, setInp1] = useState(null)
  const [inp2, setInp2] = useState(null)
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  function getAll() {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(data => setData(data))
  }
  function getInp1(e) {
    setInp1(e.target.value)
  }
  function getLimit() {
    fetch(`https://fakestoreapi.com/products?limit=${inp1}`)
      .then(res => res.json())
      .then(data => setData(data))
  }

  function getInp2(e) {
    setInp2(e.target.value)
  }
  function getOne() {
    if(inp2 != ''){
      fetch(`https://fakestoreapi.com/products/${inp2}`)
      .then(res => res.json())
      .then(data => setData([data]))
    }else{
      getAll()
    }
  }
  
  return (
    <div className="container">
      <div className="container d-flex flex-wrap gap-3">
        


        <button onClick={getAll} className="btn btn-success mx-3">All </button>
        <input onChange={getInp1} type="number" />
        <button onClick={getLimit} className="btn btn-warning mx-1">Get by limit </button>

        <input onChange={getInp2} type="number" />
        <button onClick={getOne} className="btn btn-warning mx-1">Get one </button>

      </div>
      <div className=" mt-5 row gap-5 justify-content-between">
        {data.map(item => {
          return (
            <Card key={item.id} data={item} />
          )
        })}


      </div>


    </div>
  )
}

export default App
