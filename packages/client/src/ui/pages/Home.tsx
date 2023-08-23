import moment from "moment";
import { trpc } from "../../lib/trpc";

const Home = () => {
  const response=trpc.pulse.getPulses.useQuery( )
  const randomPulse=trpc.pulse.createPulse.useMutation({
    onSuccess:()=>response.refetch()
  })
  const deletePulse=trpc.pulse.deletePulse.useMutation({
    onSuccess:()=>response.refetch()
  })
  return (
    <div className="bg-white w-2/3 mx-auto ">
      <h1 className="text-center font-medium text-xl">Precious Pulses</h1>
      <section className="pulse-container py-3 relative">
        {response.data?.map(el=>
        <div className="flex justify-between bg-gray-50 px-4 py-4 my-2">
          <div className="">
            <h3 className="text-sm">{el?.title}</h3>
            <p className="text-xs text-gray-700">{el?.description}</p>
          </div>
          <div>
            <p className="text-sm">{el?.date ? moment(el?.date).format("YYYY-MM-DD") : ""}</p>
            {el?.date &&  <p className="text-xs mr-10">{moment(el.date).fromNow()}</p>}
          </div>
          <button className="absolute p-1 text-white bg-red-700 right-0 bg-red text-xs" onClick={()=>{
            deletePulse.mutate({
              id:el.id
            })
          }}>Delete</button>
        </div>

        )}
      </section>
      <div className="flex justify-center items-center">
        <button className="bg-green-600 text-white px-3 py-2 rounded-lg" onClick={()=>randomPulse.mutate()}>Generate Random</button>
      </div>
    </div>
  );
}

export default Home 