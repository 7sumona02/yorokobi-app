import { Bold, Italic, Underline } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function MoodSelector() {
  return (
    <ToggleGroup type="single" className="bg-[#BECFBC] py-1.5 px-8 flex gap-2">
      <ToggleGroupItem value="1" aria-label="toggle">
        <img src='/assets/happy.svg' className="w-20" />
      </ToggleGroupItem>
      <ToggleGroupItem value="2" aria-label="toggle">
      <img src='/assets/sad.svg' className="w-20" />
      </ToggleGroupItem>
      <ToggleGroupItem value="3" aria-label="toggle">
      <img src='/assets/angry.svg' className="w-20" />
      </ToggleGroupItem>
      <ToggleGroupItem value="4" aria-label="toggle">
      <img src='/assets/disgusted.svg' className="w-20" />
      </ToggleGroupItem>
      <ToggleGroupItem value="5" aria-label="toggle">
      <img src='/assets/fearful.svg' className="w-20" />
      </ToggleGroupItem>
      <ToggleGroupItem value="6" aria-label="toggle">
      <img src='/assets/surprised.svg' className="w-20" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
