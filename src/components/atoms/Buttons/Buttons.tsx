import type {ButtonProps} from "./ButtonProps.ts";

const Buttons = ({className, buttonText}: ButtonProps) => {
    return (
        <button className={className}>
            {buttonText}
        </button>
    )
}

export default Buttons;
