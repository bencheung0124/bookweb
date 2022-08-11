import 'dotenv/config.js';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import initMongoDB from './middlewares/database.js';
import { environment, port } from './config.js';
import bookRouter from './routes/book.route.js';
import preorderRouter from './routes/preorder.route.js';

const app = express();
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use('/books', bookRouter);
app.use('/preorder', preorderRouter);
if (environment === 'production') app.use('/', express.static('../../client/build'));
initMongoDB();

app.listen(port, () => {
    console.info(`server is listening on port ${port}`);
});
