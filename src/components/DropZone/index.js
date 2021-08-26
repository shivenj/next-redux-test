import React, { useRef, useState } from 'react';
import styles from '../../styles/Main.module.scss';
import axios from 'axios';

const DropZone = ({ cb }) => {
  const fileInputRef = useRef();
  const [error, setErrorMessage] = useState('');

  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  const handleFiles = async (files) => {
    const body = new FormData();
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[ i ])) {
        const element = files[ i ];
        body.append('file', element);
        setErrorMessage('');
      } else {
        setErrorMessage('File type not permitted');
      }
    }
   const result = await axios.post('/api/upload-images', body);
    cb(result.data);
  };

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  return (
    <div
      className={ styles.dropContainer }
      onDragOver={ dragOver }
      onDragEnter={ dragEnter }
      onDragLeave={ dragLeave }
      onDrop={ fileDrop }
    >


        <div className={ styles.dropbox }>
          <input
            className={ styles.inputFilebox }
            ref={ fileInputRef }
            type="file"
            multiple
            onChange={ filesSelected }
          />
          Drag Photos here{ ' ' }
        </div>

    </div>
  );
};

export default DropZone;
