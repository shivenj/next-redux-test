import formidable from 'formidable';
import recipeData from '../../../public/data.json';
import { writeFile } from '../../utils';

export const config = {
  api: {
    bodyParser: false,
  },
};

const getFileName = (name) => {
  const splitName = name.split('/');
  return splitName[ splitName.length - 1 ];
}

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.multiples = true;
  form.uploadDir = `${process.env.PWD}/public/uploads/`;
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    const path = Array.isArray(files.file) ? files.file.map(( file) => getFileName(file.path)) : [getFileName(files.file.path)];
    recipeData.images = recipeData.images.concat(path);
    writeFile(recipeData);
    res.status(200).json(recipeData.images)
  });
};
