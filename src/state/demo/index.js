import React, { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        // Khởi tạo
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }

    // Thay đổi
    changeColor = () => {
        this.setState({color: "blue"});
    }

    render() {
        return (
            <div style={{ fontWeight: 700 }}>
                {/* Sử dụng, truy cập, tham chiếu */}
                <p>My car is {this.state.brand}</p>
                <p>Model: {this.state.model}</p>
                <p>Color: {this.state.color}</p>
                <p>Year: {this.state.year}</p>

                {/* Button thay đổi */}
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change color</button>
            </div>

        );
    }
}

export default Demo;