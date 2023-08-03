require('dotenv').config(); 
const app = require('./app');

const PORT = process.env.PORT || 3400;

app.listen(PORT, () => {
  console.log(`Server is running successfully at ${PORT}`);
})