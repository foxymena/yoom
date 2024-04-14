import { useParams} from "react-router-dom";

function Meeting() {
  let { meetingId } = useParams();

  return (
    <>
      {`Meeting #: ${meetingId}`}
    </>
  )
}

export default Meeting
