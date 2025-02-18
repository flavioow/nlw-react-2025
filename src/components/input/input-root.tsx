import type { ComponentProps } from "react"

interface InputRootProps extends ComponentProps<"div"> {
    error?: boolean
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
    return (
        <div
            data-error={error}
            className="group flex items-center gap-2 bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 focus-within:border-gray-100 data-[error=true]:border-danger"
            {...props}
        />
    )
}
