import * as React from "react";

export interface ButtonProps {

}

const Button: React.FC<ButtonProps> = (props) => {
    return <button>test: {props.children}</button>
};

export default Button;
