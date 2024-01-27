import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import MyButton from './MyButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
      const file = event.target.files[0];
      setSelectedFile(file);
    };

    const handleUpload = () => {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('image', selectedFile);
        console.log("ovde "+formData);
        incrementCount();

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
            // navigate("/teams");
          })
          .catch((error) => {
            alert("Data not found");
            navigate("/");
          });}else {
            alert('Please select an image before uploading.');
          }
          
    };

    return (
        <div>
            <p className='header-title'>Feel free to share images from the events with us!</p>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            <MyButton label={"Upload image"} onClick={handleUpload}/>

            {selectedFile && (
            <div>
              <h2>Uploaded Image</h2>
              <div>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt={`Uploaded Image`}
                  style={{ width: '400px', height: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>
          )}
        </div>
    );
};

export default UploadImage;