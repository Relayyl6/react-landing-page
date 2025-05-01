import ButtonSvg from '../../assets/svg/ButtonSvg'

function Button({ className, href, onClick, children, px, white }) {

    const classes = `${className || ''} hover:text-blue-600 
    button relative flex items-center justify-center h-11 
    transition-colors hover:text-color-1 ${px || 'px-7'} 
    ${white ? 'text-[#0E0C15]' : 'text-[#FFFFFF]'}`;

    const spanClasses = `relative z-10`

    const buttonElement = () => (
            <button className={classes} onClick={onClick}>
                <span className={spanClasses}>{children}</span>
                {ButtonSvg(white)}
            </button>
        )

    const linkElement = () => (
            <a href={href} className={classes}>
                <span className={spanClasses}>{children}</span>
                {ButtonSvg(white)} 
            </a>
        )

    return href ? linkElement() : buttonElement()
} 

export default Button