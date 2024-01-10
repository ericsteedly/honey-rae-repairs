import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeByUserId, getEmployeeTicketsByEmployeeId } from "../../services/employeeService"
import "./Employee.css"

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({})
    const [employeeTickets, setEmployeeTickets] = useState([])
    const { userId } = useParams()

    useEffect(()=>{
        getEmployeeByUserId(userId).then((employeeArray) => {
            const employeeObj = employeeArray[0]
            setEmployee(employeeObj)
            setEmployeeTickets(employeeObj.employeeTickets)
        })
    }, [userId])

    // useEffect(()=>{
    //     getEmployeeTicketsByEmployeeId(employee.id).then((ticketsArray) => {
    //         const employeeTix = ticketsArray
    //         setEmployeeTickets(employeeTix)
    //     })
    // }, [employee])

    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-info">Email : </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-info"> Specialty : </span>
                {employee.specialty}
            </div>
            <div>
                <span className="employee-info"> Rate : </span>
                ${employee.rate}/hr
            </div>
            <footer className="employee-footer">Currently working on {employeeTickets.length} tickets</footer>
        </section>
    )
}