import React, { useMemo } from 'react';
import recipeData from '../../../../public/data.json';
import styles from '../../../styles/Main.module.scss'
import NavBar from './NavBar';
import { selectCurrentPage, selectImages, selectPages, setCurrentPage } from '../GallerySlice';
import { useDispatch, useSelector } from 'react-redux';
import { NO_OF_IMAGES } from '../../../CONST';
import EyeIcon from '../../../components/Icons/EyeLine';

const GalleryCard = () => {
  const dispatch = useDispatch();
  const pages = useSelector(selectPages)
  const currentPage = useSelector(selectCurrentPage)
  const images = useSelector(selectImages)
  const imagesToView = useMemo(() => {
    return images.slice((currentPage - 1) * NO_OF_IMAGES, currentPage * NO_OF_IMAGES)
  }, [images, currentPage, pages])

  return <div className={styles.imagesGridWrap}>
    <div>
      <div className={styles.stylesGalleryBoxTop}>
        <div className={styles.galleryHeadingText}>{recipeData.title}</div>
        <div className={styles.gallerySubHeadingText}>
          {recipeData.description}
        </div>
      </div>
      <div className={styles.galleryBox}>
        {imagesToView?.map((i, index) => (
          <div key={i} className={styles.galleryHover}>
            <img
              alt={`uploaded-${index}`}
              className={styles.uploadImageIcon}
              src={recipeData.imgPath+i}
            />
            <span className={styles.hoverEye}>
                    <EyeIcon />
                  </span>
            {/* <span className={styles.overlay}></span> */}
          </div>
        ))}
      </div>

    </div>
    <NavBar currentPage={currentPage} setCurrentPage={(val) => dispatch(setCurrentPage(val))} pages={pages} />
  </div>
}

export default GalleryCard;
