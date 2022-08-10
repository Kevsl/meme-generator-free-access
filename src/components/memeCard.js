import { useNavigate } from 'react-router-dom'

const MemeCard = (props) => {
  let navigate = useNavigate()

  return (
    <div>
      <div className="card">
        <img src={props.image} className="cardImg" />
        <h2>{props.title}</h2>
        <button
          className="button "
          onClick={() => {
            navigate(`/meme/${props.id}`)
          }}
        >
          Create
        </button>
      </div>
    </div>
  )
}
export default MemeCard
