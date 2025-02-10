const app = require('./src');
const dotenv = require('dotenv');

dotenv.config();


const PORT = process.env.PORT || 3050;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
