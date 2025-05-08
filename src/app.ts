import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import jiraRoutes from './routes/jira.routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/jira', jiraRoutes);

export default app;