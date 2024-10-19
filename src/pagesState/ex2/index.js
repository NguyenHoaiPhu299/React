import Customer from "../../state/ex2/Customer";

function CustomerTest1() {
    const customerInfo = {
        name: 'Phương Tiên',
        email: 'phuongtien@gmail.com'
    }
    
    return (
        <>
            <Customer info={customerInfo}/>
        </>
    );
}

export default CustomerTest1;