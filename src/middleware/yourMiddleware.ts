import { Request, Response, NextFunction } from 'express';

const yourMiddleware = (_req: Request, _res: Response, next: NextFunction) => {
  console.log('Middleware executed');
  next();
};

export default yourMiddleware;