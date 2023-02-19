import { useState, useRef } from "react"

function ImageDrop(){
    const [file,setFile] = useState()
    const [uploaded, setUploaded] = useState(false)
    const hiddenFileInput = useRef(null);

    function handleChange (e) {
        console.log(e.target.files)
        setFile(URL.createObjectURL(e.target.files[0]))
        setUploaded(true)
    }

    const handleClick = (e) => {
        hiddenFileInput.current.click()
    }

    return (
        <>
        <div className="img-drop">
            <button onClick={handleClick}> Upload a scan </button>
            <input className="img-drop" type="file" style={{display:'none'}} ref={hiddenFileInput} onChange={handleChange}></input>
            <img src={file} />
        </div>
        </>
    )
}

export default ImageDrop;