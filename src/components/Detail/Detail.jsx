import axios from "axios"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
const Detail = ()=> {
    const {id} = useParams()
    let [character, setChracter] = useState({})
    useEffect(()=>{
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({data})=>{
            if(data.id){
                setChracter(data)
            }
        })
        return setChracter({})
    },[id])
    return;
}

export default Detail