import React, {Component} from "react";

class Customer extends Component {
    constructor(props) {
        super(props);

        // Khai báo state và thiết lập giá trị mặc định
        this.state = {
            info: props.info
        }
    }

    changeInfo = () => {
        // Thay đổi giá trị State
        this.setState({
            info: {
                name: "Hello Hi",
                email: "hellohi@gmail.com"
            }
        });
    }

    resetInfo = () => {
        // Thay đổi giá trị State
        this.setState({
            info: this.props.info
        });
    }
    
    render() {
        const {name, email} = this.state.info;

        return (
            <>
                <h2>Tên: {name}</h2>
                <h2>Email: {email}</h2>
                <button type={'button'} onClick={this.changeInfo}>Change Info</button>
                <button type={'button'} onClick={this.resetInfo}>Reset Info</button>
            </>
        );
    }
}

export default Customer;