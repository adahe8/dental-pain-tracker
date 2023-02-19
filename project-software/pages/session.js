//second page, where info from the hardware is read in
//general swathes of pain area lit up on screen
// page to be displayed on dentist/ provider's screen during dentist session
import Timer from '../components/Timer'
import { useRouter } from 'next/router'
import ImageDrop from '../components/ImageDrop'

export default function session(){
    const router = useRouter();
    return (
        <div> 
            <h2> Patient Updates </h2>
            <Timer />
            <ImageDrop />
            <button className="endSession" onClick={() => router.push('./endsummary')}> End Session </button>
        </div>
    )
}