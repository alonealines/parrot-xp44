import { CommonRoutesConfig } from "./common.routes.config";
import express from "express";
import postController from "../controllers/post.controller"
import usersMiddlewares from "../middlewares/users.middlewares";
import authMiddleware from "../middlewares/auth.middleware";

export class PostRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PostsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/post`)
            .get(postController.listPosts,
                
                )
        this.app.route(`/post`)
            .post( 
              
                postController.createPosts 
            );

            this.app.route('/post/:PostId')
            .get(postController.getPostById)
            .put(postController.updatePosts)
            
            return this.app;

            }}