import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonIconProps extends ComponentProps<"button"> {}

export default function ButtonIcon({ className, ...props }: ButtonIconProps) {
    return (
        <button
            className={twMerge("p-1.5 bg-gray-500 text-blue outline-0 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900 group-hover:bg-blue group-hover:text-gray-900", className)}
            {...props}
        />
    )
}
