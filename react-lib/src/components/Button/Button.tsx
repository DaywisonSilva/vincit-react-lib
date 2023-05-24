import Style from './button.module.css'

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <a type='button' onClick={onClick} className={Style.button}>
      {children}
    </a>
  )
}

export default Button
