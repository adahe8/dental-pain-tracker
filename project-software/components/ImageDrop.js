import { useState } from "react";

function ImageDrop(){
    const [file,setFile] = useState();
    function handleChange (e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
        <div className="img-drop">
            <h3>Upload dental scan</h3>
            <input type="file" onChange={handleChange} />
            <img src={file} />
        </div>
        </>
    )
}

export default ImageDrop;