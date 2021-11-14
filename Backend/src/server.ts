import express from 'express';
import server from './config/server';
import initMiddlewares from './utils/init_middleware';
import middlewares from './middlewares';
import errorHandlers from './exceptions';
import initRoutes from './utils/init_routes';
import allRoutes from './services/routes';

const app = express();

// initializing all middlewares
initMiddlewares(middlewares, app);

// initializing all routes
initRoutes(allRoutes, app)

// initialing errors handle middlewares
initMiddlewares(errorHandlers, app);

// start listening
app.listen(server.port, () => {
    console.log(`${server.name} running on http://${server.host}:${server.port}`);
})

process.on('uncaughtException', (e) => {
    console.log(e);
});

process.on('unhandledRejection', (e) => {
    console.log(e);
});
