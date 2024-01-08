import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import MyButton from './MyButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function useImgCounter(initialNumber) {
  const [countImg, setCountImg] = useState(initialNumber);

  const increment = () => {
    setCountImg(countImg + 1);
  };

  return [countImg,increment];
}


const UploadImage = () => {
    const [countImg, incrementCount] = useImgCounter(0);
    const [selectedFile, setSelectedFile] = useState(null);
    let navigate=useNavigate();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image', selectedFile);
        console.log("ovde "+formData);
        

        let config = {
            method: 'post',
            url: 'api/upload',
            data : formData
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            alert(response.data.message);
            incrementCount(); 
            console.log("Current number of images: "+countImg);
            navigate("/teams");
          })
          .catch((error) => {
            alert("Data not found");
            navigate("/");
          });
          
    };

    return (
        <div>
            <p className='header-title'>Feel free to share images from the events with us!</p>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            <MyButton label={"Upload image"} onClick={handleUpload}/>
        </div>
    );
};

export default UploadImage;