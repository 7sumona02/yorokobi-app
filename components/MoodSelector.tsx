import { Bold, Italic, Underline } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function MoodSelector() {
  return (
    <ToggleGroup type="single" className="bg-[#BECFBC] py-1.5 px-8">
      <ToggleGroupItem value="1" aria-label="Toggle bold">
        <img src='/assets/paw.svg' className="w-20" />
      </ToggleGroupItem>
      <ToggleGroupItem value="2" aria-label="Toggle italic">
      <img src='/assets/paw.svg' className="w-20" />
      </ToggleGroupItem>
      <ToggleGroupItem value="3" aria-label="Toggle strikethrough">
      <img src='/assets/paw.svg' className="w-20" />
      </ToggleGroupItem>
      <ToggleGroupItem value="4" aria-label="Toggle strikethrough">
      <img src='/assets/paw.svg' className="w-20" />
      </ToggleGroupItem>
      <ToggleGroupItem value="5" aria-label="Toggle strikethrough">
      <img src='/assets/paw.svg' className="w-20" />
      </ToggleGroupItem>
      <ToggleGroupItem value="6" aria-label="Toggle strikethrough">
      <img src='/assets/paw.svg' className="w-20" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
