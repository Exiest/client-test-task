import { FC, MouseEvent } from "react"

import styles from "./styles/styles.module.css"

interface ButtonProps {
  text: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const TextButton: FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <button className={styles.textButton} type="button" {...rest}>
      {text}
    </button>
  )
}
