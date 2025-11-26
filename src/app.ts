import express, {Express} from "express";
import { Description, ExpressInitializer, SwaggerEndpoint, SwaggerInitializer, Title, Version } from "express-swagger-autoconfigure";
import { FaculdadeController } from "./controller/FaculdadeController";

@SwaggerInitializer
@SwaggerEndpoint("/doc")
@Description("API para gerenciamento de uma faculdade")
@Version("1.0.0")
@Title("API Faculdade")

export default class App {
    @ExpressInitializer
    public app!: Express;

    constructor() {
        this.initControllers();

    }

    private initControllers() {
        new FaculdadeController();

    } 

    public getApp() {
        return this.app;
        
    }

    
}