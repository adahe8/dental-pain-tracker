import { Heading } from '@chakra-ui/react';

const LandingSquare = ({ router }) => {
    return(
        <div>
            <Heading color="blue.50" as="h1">Denteel</Heading>
            <p> A monitor for your patient's oral comfort, to ensure your dental practice puts them first. </p>
            <button className="go" onClick={() => router.push('../session')}> Start Session </button>
        </div>
    )
}

export default LandingSquare

