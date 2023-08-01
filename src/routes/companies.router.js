import { Router } from 'express'
import CompaniesManager from '../dao/mongo/Manager/Companies.js';

const router = Router();
const companiesService = new CompaniesManager();

router.get('/', async (_req, res) => {
    try {
        const companies = await companiesService.getCompanies();
        res.status(200).send({status: "success", payload: companies})
    } catch (error) {
        console.log(error);
    }
})

router.post('/', async (req, res)=>{
    try {
        const { name,legal_name,plan,industry,address } = req.body
        if(!name||!legal_name||!industry||!address) 
            return res.status(400).send({status: 'error', error: 'Incomplete values'})
        const company = {
            name,
            legal_name,
            plan,
            industry,
            address
        }
        const result = await companiesService.createCompany(company);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);    
    }
})

router.get('/:cid', async (req, res) => {
    try {
        const { cid } = req.params
        const company = await companiesService.getCompanyBy({ _id: cid })
        if(!company) 
            return res.status(404).send({status: "error", error: "Company not found"})
        res.status(200).send({status: 'success',payload: company})
    } catch (error) {
        console.log(error);
    }
})

router.put('/:cid', async (req,res) =>{
    try {
        const { cid } = req.params
        const updateCompany = req.body
        await companiesService.updateCompany({cid, updateCompany})
        res.sendStatus(201)
    } catch (error) {
        console.log(error);
    }
})

router.delete('/:cid', async (req, res) => {
    try {
        const { cid } = req.params
        await companiesService.deleteCompany({cid})
        res.sendStatus(201)
    } catch (error) {
        console.log(error);
    }
})

export default router;