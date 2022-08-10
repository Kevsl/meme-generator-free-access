import { useDispatch } from 'react-redux'
import { setMemeId, setMemeUrl } from '../redux/meme'
import { useNavigate } from 'react-router-dom'

const MemeCard = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
      <div className="card">
        <img src={props.image} className="cardImg" alt={props.title} />
        <h2>{props.title}</h2>
        <button
          className="button "
          onClick={() => {
            dispatch(setMemeId(props.id))
            dispatch(setMemeUrl(props.image))
            navigate('/create-meme')
          }}
        >
          Create
        </button>
      </div>
    </div>
  )
}
export default MemeCard
