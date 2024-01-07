import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import MyButton from './MyButton';
import axios from 'axios';

const UploadImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);

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
          })
          .catch((error) => {
            console.log(error);
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