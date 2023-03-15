import { useEffect, useState } from "react";
import Post from '../components/Post'

export default function Home() {
    const [cars, setCars] = useState([])
    console.log(cars)
    useEffect(() => {
        async function getCars() {
            const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
            const data = await response.json()
            setCars(data)
        }
        getCars()
    }, [])

    return (
        <div>
            <h1>Home</h1>
            { cars.map((post) => <Post post={post} key={post.id} />) }
        </div>
    )
}