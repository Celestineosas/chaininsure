import { VariantProps, cva } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export const buttonStyles = cva(["transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary"],
            ghost: ["hover:bg-gray-900"],
            dark: [
                "bg-secondary-dark",
                "hover:bg-secondary-dark-hover",
                "text-secondary",
            ],
            normal: ["bg-white"],
        },
        size: {
            default: ["p-5"],
            icon: [
                "rounded-full",
                "w-10",
                "h-10",
                "flex",
                "items-center",
                "justify-center",
                "p-1.5",
            ],
            normal: [
                "rounded-[8px]",
                "items-center",
                "justify-center",
                "flex",
                "text-white",
               " rounded-[5px]",
                "bg-blue",
                 "cursor-pointer", 
                 "py-2",
                  "px-8"

            ],
            small: ["px-2 py-1"],
            large: ["px-6 py-3"]
        },

    },
    defaultVariants: {
        variant: "default",
        size: "default",
    }
}


)
type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">
export function Button({ variant, size, className, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={twMerge(buttonStyles({ variant, size }), className)}
        />
    )
}