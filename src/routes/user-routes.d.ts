// user-routes.d.ts
declare module './routes/user-routes' {
  import { Router } from 'express';
  const userRouter: Router;
  export default userRouter;
}