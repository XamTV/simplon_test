import { Router } from 'express';
import {
  createJoke,
  getJokes,
  getJokeById,
  getRandomJoke,
  updateJoke,
  deleteJoke,
} from '../controllers/jokeControllers';

const router = Router();

router.get('/', getJokes);
router.get('/random', getRandomJoke);
router.get('/:id', getJokeById);
router.post('/', createJoke);
router.put('/:id', updateJoke);
router.delete('/:id', deleteJoke);

export default router;
