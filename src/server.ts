import { app } from './app';

const PORT = process.env.SERVER_PORT || 3333;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
