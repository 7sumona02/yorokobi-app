import { useId } from "react"
import { SendIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function MsgInput() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
    <Link href='/chat'>      
      <div className="relative">
        <Input id={id} className="pe-9 bg-white shadow-xl shadow-neutral-400/20" placeholder="chat now" type="message" />
        <button
          className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Subscribe"
        >
          <img src='/assets/send.svg' alt='send' className='w-4' />
        </button>
      </div>
    </Link>
    </div>
  )
}
