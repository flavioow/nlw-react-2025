import type { ComponentProps } from "react"

interface ButtonRootProps extends ComponentProps<"button"> {}

export default function ButtonRoot(props: ButtonRootProps) {
    return (
        <button
            className="group flex justify-between items-center px-5 h-12 outline-0 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
            {...props}
        />
    )
}
