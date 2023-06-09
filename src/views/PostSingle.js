import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Post from "../components/Post"

export default function PostSingle() {
    const { id } = useParams()
    const [post, setPost] = useState('')
    const[error, setError] = useState(false)
    console.log(post)
    useEffect(() => {
        async function getPost() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
                const data = await response.json()
                setPost(data)
            } catch(err) {
                setError(true)
            }
        }
        getPost()
    }, [])

    return (
        <div>
            {
                error ?
                <>
                    <h2>404 Not Found</h2>
                    <p>Post with id {id} could not be found</p>
                    
                </>:
                <>
                    <h1>Post Single: {id}</h1>
                    <Post post={post} hideLink={true} />
                </>
            }
        </div>
    )
}