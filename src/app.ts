import express, { Express } from "express";
import {
  Description,
  ExpressInitializer,
  SwaggerEndpoint,
  SwaggerInitializer,
  Title,
  Version,
  BearerTokenJWT,
} from "express-swagger-autoconfigure";
import FaculdadeController from "./controller/FaculdadeController";
import { AuthController } from "./controller/AuthController";

@SwaggerInitializer
@SwaggerEndpoint("/doc")
@BearerTokenJWT(true)
@Description("API de Faculdade com autenticação")
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
    new AuthController();
  }

  public getApp(): Express {
    return this.app;
  }
}
