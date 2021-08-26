import recipeData from '../../../public/data.json'
import { writeFile } from '../../utils';

export default function handler(req, res) {
  const [key, value] = Object.entries(req.body)[0];
  recipeData[key] = value;
  writeFile(recipeData);
  res.status(200).json(recipeData)
}
