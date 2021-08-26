import axios from 'axios';
import styles from '../../../components/DropZone/customstyles.module.scss';
import React, { useState } from 'react';
import DropZone from '../../../components/DropZone';
import recipeData from '../../../../public/data.json';
import { useDispatch } from 'react-redux';
import { reset, setImageData } from '../../RightComponent/GallerySlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(recipeData.title);
  const [description, setDescription] = useState(recipeData.description);
  const handleChange = async e => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
    await axios.post('/api/form', { [ name ]: value });
  };
  const deleteImages = () => {
    axios.delete('/api/delete-images');
    dispatch(reset());
  };
  return <div className={styles.dropboxLeftSide}>

    <div className={ styles.inputBox }>
      <input
        type="text"
        name={ 'title' }
        className={ styles.formBox }
        placeholder="Title"
        onChange={ handleChange }
        value={ title }
      />
    </div>
    <div className={ styles.inputBox }>
            <textarea
              name="description"
              className={ styles.formBox }
              placeholder="Description"
              rows="4"
              cols="50"
              value={ description }
              onChange={ handleChange }
            />
    </div>
    <DropZone cb ={ data => dispatch(setImageData(data)) } />
    <div className={ styles.deletedPhotos }>
      <button onClick={ deleteImages } className={ styles.trashBtn }>Delete
        All photos
      </button>
    </div>
  </div>;

};


export default Form;
