import { useSelector } from 'react-redux'

const Home = () => {
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)

  return (
    <div>
      <h1 className="text-center bg-blue br-9">Home</h1>

      <p>Bienvenue {firstName + ' ' + lastName}</p>
    </div>
  )
}
export default Home
