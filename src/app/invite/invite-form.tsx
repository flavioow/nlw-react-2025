"use client"

import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Copy, Link } from "lucide-react"

interface InviteFormProps {
    inviteLink: string,
}

export function InviteForm({ inviteLink }: InviteFormProps) {
    function copyLink() {
        navigator.clipboard.writeText(inviteLink)
    }

    return (
        <Input.Root>
            <Input.Icon>
                <Link className="size-5" />
            </Input.Icon>

            <Input.Field readOnly defaultValue={inviteLink} />

            <Button.Icon className="-mr-2" onClick={copyLink}>
                <Copy className="size-5" />
            </Button.Icon>
        </Input.Root>
    )
}
