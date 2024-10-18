import React, {Component} from "react";

class Customer extends Component {
    constructor(props) {
        super(props);
    }

    changeInfo = () => {
        this.props.info = {};
    }
    
    render() {
        const {name, email} = this.props.info;

        return (
            <>
                <h2>Tên: {name}</h2>
                <h2>Email: {email}</h2>
                <button type={'button'} onClick={this.changeInfo}>Change Info</button>
            </>
        );
    }
}

export default Customer;