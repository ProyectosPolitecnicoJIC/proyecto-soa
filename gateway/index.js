import Express from 'express';
import { json } from 'express';
import mainRouter from './mainRouter.js';

const app = new Express();


/* external libraries implementation */
app.use(json());




app.use('/api/v1', mainRouter);


app.listen(3000, () => {
})