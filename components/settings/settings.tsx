'use client'

import { Languages, LayoutGrid, Settings2, Type } from "lucide-react"
import SettingsItem from "./settings-item"

const Settings = () => {
  return (
    <div 
    className='
    hidden
    xl:flex 
    xl:col-span-2
    xl:h-[560px]
    xl:bg-white
    xl:border-[1px]
    shadow-sm
    rounded-lg
    xl:flex-col
    xl:px-3
    '>
      <div className="py-4 mb-3">
        <h2 className="text-xl text-center text-black font-semibold">Settings</h2>
      </div>
      <div className="space-y-2">
          <SettingsItem
          href="#"
          icon={Languages}
          label="Language Settings"
          />
          <SettingsItem
          href="#"
          icon={Settings2}
          label="General Settings"
          />
          <SettingsItem
          href="#"
          icon={Type}
          label="Font Settings"
          />
          <SettingsItem
          href="#"
          icon={LayoutGrid}
          label="Appearance Settings"
          />
      </div>
    </div>
        

  )
}

export default Settings