import { trpc } from "../../lib/trpc"

const Home = () => {
  const response=trpc.pulse.getPulses.useQuery()
  return (
    <div>Home</div>
  )
}

export default Home 