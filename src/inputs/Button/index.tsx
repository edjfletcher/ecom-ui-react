import * as React from 'react';

import './styles.scss';
import {CommonProps} from "../../CommonProps";

export interface ButtonProps extends CommonProps {
    display?: 'block';
    disabled?: boolean;
    onClick: () => void;
}

const Button = (props: React.PropsWithChildren<ButtonProps>) => {

    let classes: string = 'button';
    if (props.variant) {
        classes += ' button-' + props.variant;
    }
    if (props.size) {
        classes += ' button-' + props.size;
    }
    if (props.display) {
        classes += ' button-display-' + props.display;
    }
    if (props.disabled) {
        classes += ' button-disabled';
    }

    return (
        <button className={classes} disabled={props.disabled} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;
