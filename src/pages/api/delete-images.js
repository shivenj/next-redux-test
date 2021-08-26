import recipeData from '../../../public/data.json';
import { writeFile, removeDir } from '../../utils';

export default function handler(req, res) {
  recipeData.images = [];
  removeDir();
  writeFile(recipeData);
  res.status(200).json(recipeData);
}
