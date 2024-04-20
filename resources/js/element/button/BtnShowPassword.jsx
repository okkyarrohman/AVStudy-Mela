import { Icon } from "@iconify/react";

const BtnShowPassword = (props) => {
    return (
        <button
            type="button"
            className={props.className}
            onClick={props.onClick}
        >
            <Icon icon={props.isShow ? "mdi:show" : "mdi:hide"}></Icon>
        </button>
    );
};

export default BtnShowPassword;
