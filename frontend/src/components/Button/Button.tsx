interface ButtonProps {
    // onClick: () => void
    title: string
}

export default function Button( {title}: ButtonProps ){
    return (
        <button>{title}</button>
    );
}