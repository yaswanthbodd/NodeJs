const Employee=require('../models/Employee')

const createEmployee = async (req,res)=>{
    try{
        const {name,email,phone,city} = req.body

        const employee = new Employee({
            name,
            email,
            phone,
            city
        })
        await employee.save()
        res.status(201).json(employee)
    }catch(error){
        console.log("There is an error: ",error)
        res.status(500).json({message:'server error'})
    }
}

const getEmployees = async (req,res)=>{
    try{
        const employees = await Employee.find()
        res.status(500).json(employees)
    }
    catch(error){
        console.log("There is an error, ",error)
        res.status(500).json({message:"Server error"})
    }
}

const singleEmployee=async (req,res)=>{
    try{
        const employee=await Employee.findById(req.params.id)

        if(!employee){
            return res.status(404).json({message:"Employee not found"})
        }

        res.status(200).json(employee)
    }catch(error){
        console.log("There is an error, ",error)
        res.status(500).json({message:"Server not Found"})
    }
}

const updateEmployee = async (req,res)=>{
    try{
        const {name,email,phone,city} = req.body

        const myEmployee=await Employee.findByIdAndUpdate(
            req.params.id,
            {name,email,phone,city}
        )
        if(!myEmployee){
            return res.status(404).json({message: "Employee not Found"})
        }
        res.status(200).json(myEmployee)
    }
    catch(error){
        console.log("There is an error: ",error)
        res.status(500).json({messge:"Server not Found"})
    }
}

const deleteEmployee = async (req,res)=>{
    try{
        const deleteEmployee =await Employee.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }catch(error){
        console.log("There is an error: ",error)
        res.status(500).json({message: "server Error"})
    }
}
module.exports = {createEmployee, getEmployees,singleEmployee,updateEmployee,deleteEmployee}