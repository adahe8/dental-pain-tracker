
const LandingSquare = ({ router }) => {
    return(
        <div>
            <h1>PMT</h1>
            <p> A monitor for your patient's oral comfort, to ensure your dental practice puts them first. </p>
            <button className="go" onClick={() => router.push('../session')}> Start Session </button>
        </div>
    )
}

export default LandingSquare
