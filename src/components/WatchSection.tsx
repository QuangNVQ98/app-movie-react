import { useStore } from "../store/hooks";
import { embedMovie } from "../utils/constants"

export const WatchSection = () => {

  const [state, dispatch] = useStore();
  console.log('state12: ', state)

  return (
    <div className="w-full h-full">
      {/* <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={embedMovie(id)}
        title=""
        frameBorder="0"
        allowFullScreen
      ></iframe> */}
    </div>
  )
}
