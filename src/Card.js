import './Card.css';

const Card = (props) => {
  return(
    <div className="card">
      <h3>{props.title}</h3>
      <span><a href='#'>{props.username}</a></span>
      <p>{props.content}</p>
    </div>
  )
}

export default Card;