import Customer from "../../state/ex1/Customer";

function CustomerTest() {
    const customerInfo = {
        name: 'Hoài Phú',
        email: 'hoaiphu@gmail.com'
    }
    
    return (
        <>
            <Customer info={customerInfo}/>
        </>
    );
}

export default CustomerTest;