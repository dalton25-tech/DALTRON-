import { Router } from 'express'
import { chatWithNexa } from '../controllers/nexaController.js'

const router = Router()

router.post('/chat', chatWithNexa)

export default router