const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

const { use } = require('./api');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

app.use('/', homeRoutes);
app.initialize(app);

router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;