import { Link } from "react-router-dom"

export default function Post(props) {
    return (
        <div className="post">
            <p>{props.post.name}</p>
            <p>{props.post.year}</p>
            <p>{props.post.owner}</p>
            <p>{props.post.id}</p>
            {
                (props.hiddenLink) ?
                <></> :
                <Link to={ `/cars/${props.post.id}` }>Read More</Link>
            }
        </div>
    )
}