import Express from 'express';
import { json } from 'express';

const app = new Express();


/* external libraries implementation */
app.use(json());






app.get('/health', (req, res) => {
  res.send({
    "server_status": "running",
    "code": 200
  });
});


app.listen(3000, () => {
})