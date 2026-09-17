import { Router } from 'express'
import { chatWithNexa } from '../controllers/nexaController'

const router = Router()

router.post('/chat', chatWithNexa)

export default router