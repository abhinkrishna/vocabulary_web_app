import { NextFunction, Request, Response } from "express";
import { Method, Route } from "../../types/route";
import DictionaryController from "./dictionary.controller";
import { CreateWordDTO, UpdateWordDTO } from "./dictionary.dto";

const dictionaryRoutes: Route[] = [
    {
        path: '/dictionary',
        method: Method.post,
        validator: CreateWordDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new DictionaryController(req, res, next).create();
        } 
    },
    {
        path: '/dictionary',
        method: Method.get,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new DictionaryController(req, res, next).readMany();
        } 
    },
    {
        path: '/dictionary/:id',
        method: Method.get,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new DictionaryController(req, res, next).readOne();
        }
    },
    {
        path: '/dictionary/:id',
        method: Method.patch,
        validator: UpdateWordDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new DictionaryController(req, res, next).update();
        } 
    },
    {
        path: '/dictionary/:id',
        method: Method.delete,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new DictionaryController(req, res, next).delete();
        } 
    },
]

export default dictionaryRoutes;