import { EditorBtns } from '@/lib/constants'
import { BookText, Contact2Icon, FormInput, PlusCircle, TypeIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const FormPlaceholder = (props: Props) => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'form')}
      className=" h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      <BookText
        size={40}
        className="text-muted-foreground"
      />
    </div>
  )
}

export default FormPlaceholder