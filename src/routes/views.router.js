import { Router } from 'express';
import CompaniesManager from '../dao/mongo/Manager/Companies.js';

const router = Router();
const companiesService = new CompaniesManager();

router.get('/', async (_req, res) => {
    try {
        const companies = await companiesService.getCompanies();
        res.render('companies', {companies})
    } catch (error) {
        console.log(error);
    }
    
})

router.get('/chat', (req, res) => {
    try {
        res.render('companyChat')
    } catch (error) {
        console.log(error);
    }
})


export default router;