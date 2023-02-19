import { useState, useRef } from "react"

import { Button, Box } from "@chakra-ui/react";

import Image from "next/image";

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
        <Box>
            <Button bg="blue.50" onClick={handleClick}> Upload a scan </Button>
            <input className="img-drop" type="file" style={{display:'none'}} ref={hiddenFileInput} onChange={handleChange}></input>
            <img src={file} />
        </Box>
    )
}

export default ImageDrop;