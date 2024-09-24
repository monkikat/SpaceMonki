const cron = require('node-cron');
const { fetchAndStoreAPODDataHandler } = require('./controllers/APODDataControllers')

cron.schedule('1 0 * * *', async () => {
    fetchAndStoreAPODDataHandler();
});
