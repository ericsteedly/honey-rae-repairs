import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCustomerByUserId } from "../../services/customerService"
import "./Customer.css"

export const CustomerDetails = () => {
    // /customers/3
    // path="/customers/:customerId"
    const [customer, setCustomer] = useState({})
    const { customerId } = useParams()  
    //returns key value pair as an object, destructure on lefthand side: ex ouput {customerId: 3}
    //the key of this object is what you defined as the 'path= :....' in the route that is rendering this component

    useEffect(()=>{
        getCustomerByUserId(customerId).then((customerArray) => {
            const customerObj = customerArray[0]
            setCustomer(customerObj)
        })
    }, [customerId])

    return (
        <section className="customer">
            <header className="customer-header">{customer.user?.fullName}</header>
            <div>
                <span className="customer-info">Email : </span>
                {customer.user?.email}
            </div>
            <div>
                <span className="customer-info">Address : </span>
                {customer.address}
            </div>
            <div>
                <span className="customer-info">Phone Number : </span>
                {customer.phoneNumber}
            </div>
        </section>
    )
}