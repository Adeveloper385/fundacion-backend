import {Request, Response} from 'express'

class IndexController {
    
    public get (req: Request, res: Response) {
       res.send('Hello World')
    }

}

export const indexController = new IndexController()



