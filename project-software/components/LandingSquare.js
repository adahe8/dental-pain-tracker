
const LandingSquare = ({ router }) => {
    return(
        <div>
            <h1>Landing</h1>
            <p> App description here </p>
            <button className="go" onClick={() => router.push('../session')}> Start Session </button>
        </div>
    )
}

export default LandingSquare
