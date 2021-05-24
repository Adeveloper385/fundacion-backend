import { Router } from 'express'
import { indexController } from '../controllers/indexController'

const router:Router = Router()

router.get('/', indexController.get)

export default router
