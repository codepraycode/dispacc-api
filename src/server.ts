import app from '@/modules/app';
import { PORT } from './config';

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
