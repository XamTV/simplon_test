import { Request, Response, NextFunction } from 'express';
import { jokes, Joke } from '../models/joke';

// CRUD

// C
export const createJoke = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, answer } = req.body;
    const newJoke: Joke = { id: Date.now(), title, answer };
    jokes.push(newJoke);
  } catch (error) {
    next(error);
  }
};
// R
export const getJokes = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(jokes);
  } catch (error) {
    next(error);
  }
};

export const getRandomJoke = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (jokes.length === 0) {
      res.status(404).json({ message: 'No jokes available' });
      return;
    }
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];

    res.json(randomJoke);
  } catch (error) {
    next(error);
  }
};

export const getJokeById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const joke = jokes.find((i) => i.id === id);
    if (!joke) {
      res.status(404).json({ message: 'Joke not found' });
      return;
    }
    res.json(joke);
  } catch (error) {
    next(error);
  }
};

// U
export const updateJoke = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { title } = req.body;
    const jokeIndex = jokes.findIndex((i) => i.id === id);
    if (jokeIndex === -1) {
      res.status(404).json({ message: 'Joke not found' });
      return;
    }
    jokes[jokeIndex].title = title;
    res.json(jokes[jokeIndex]);
  } catch (error) {
    next(error);
  }
};

// D
export const deleteJoke = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const jokeIndex = jokes.findIndex((i) => i.id === id);
    if (jokeIndex === -1) {
      res.status(404).json({ message: 'Joke not found' });
      return;
    }
    const deletedJoke = jokes.splice(jokeIndex, 1)[0];
    res.json(deletedJoke);
  } catch (error) {
    next(error);
  }
};
