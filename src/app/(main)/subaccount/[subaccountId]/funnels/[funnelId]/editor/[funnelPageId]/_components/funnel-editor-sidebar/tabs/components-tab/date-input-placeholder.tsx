import { EditorBtns } from '@/lib/constants'
import { Calendar, TextIcon, TypeIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const DateInputPlaceholder = (props: Props) => {
  const handleDragState = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }

  return (
    <div
      draggable
      onDragStart={(e) => {
        handleDragState(e, 'dateinput')
      }}
      className=" h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      <Calendar
        size={40}
        className="text-muted-foreground"
      />
      
    </div>
  )
}

export default DateInputPlaceholder