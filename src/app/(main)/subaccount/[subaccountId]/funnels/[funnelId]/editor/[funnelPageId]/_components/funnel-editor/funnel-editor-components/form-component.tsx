'use client'
import { Badge } from '@/components/ui/badge'
import { EditorBtns, defaultStyles } from '@/lib/constants'
import { EditorElement, useEditor } from '@/providers/editor/editor-provider'
import clsx from 'clsx'
import React, { useRef } from 'react'
import { v4 } from 'uuid'
import Recursive from './recursive'
import { Trash } from 'lucide-react'
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'
type Props = { element: EditorElement }

const FormComponent = ({ element }: Props) => {
  const { id, content, name, styles, type } = element
  const { dispatch, state } = useEditor()

  const handleOnDrop = (e: React.DragEvent, type: string) => {
    e.stopPropagation()
    const componentType = e.dataTransfer.getData('componentType') as EditorBtns

    switch (componentType) {

     

     
        case 'textinput':
          dispatch({
            type: 'ADD_ELEMENT',
            payload: {
              containerId: id,
              elementDetails: {
                content: {
                  placeholder:""
                },
                id: v4(),
                name: 'TextInput',
                styles: {},
                type: 'textinput',
              },
            },
          })
        break
        case 'dateinput':
          dispatch({
            type: 'ADD_ELEMENT',
            payload: {
              containerId: id,
              elementDetails: {
                content: [],
                id: v4(),
                name: 'DateInput',
                styles: {},
                type: 'dateinput',
              },
            },
          })
        break
        case 'numberinput':
          dispatch({
            type: 'ADD_ELEMENT',
            payload: {
              containerId: id,
              elementDetails: {
                content: [],
                id: v4(),
                name: 'NumberInput',
                styles: {},
                type: 'numberinput',
              },
            },
          })
        break
        case 'emailinput':
          dispatch({
            type: 'ADD_ELEMENT',
            payload: {
              containerId: id,
              elementDetails: {
                content: [],
                id: v4(),
                name: 'EmailInput',
                styles: {},
                type: 'emailinput',
              },
            },
          })
        break
        case 'textarea':
          dispatch({
            type: 'ADD_ELEMENT',
            payload: {
              containerId: id,
              elementDetails: {
                content: [],
                id: v4(),
                name: 'TextArea',
                styles: {},
                type: 'textarea',
              },
            },
          })
        break
        case 'label':
          dispatch({
            type: 'ADD_ELEMENT',
            payload: {
              containerId: id,
              elementDetails: {
                content: { innerText: 'Label' },
                id: v4(),
                name: 'Label',
                styles: {
                  color: 'black',
                  ...defaultStyles,
                },
                type: 'label',
              },
            },
          })
          break
  
        case 'button':
        dispatch({
          type: 'ADD_ELEMENT',
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              name: 'Button',
              styles: {},
              type: 'button',
            },
          },
        })
        break
      
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDragStart = (e: React.DragEvent, type: string) => {
    if (type === '__body') return
    e.dataTransfer.setData('componentType', type)
  }

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch({
      type: 'CHANGE_CLICKED_ELEMENT',
      payload: {
        elementDetails: element,
      },
    })
  }

  const handleDeleteElement = () => {
    dispatch({
      type: 'DELETE_ELEMENT',
      payload: {
        elementDetails: element,
      },
    })
  }



  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fx0o0o7', 'template_f28rfvu', e.target, {
        publicKey: 'rEE1Vb4QraWztCpIY',
      })
      .then(
        () => {
          toast.success('success')
          
        },
        (error) => {
          toast.error('faild'+error)
          
        },
      );
  };

  return (
    <div
      style={styles}
      className={clsx('relative p-4 transition-all group', {
        'max-w-full w-full': type === 'container' || type === '2Col',
        'h-fit': type === 'container',
        'h-full': type === '__body',
        'overflow-scroll ': type === '__body',
        'flex flex-col md:!flex-row': type === '2Col',
        '!border-blue-500':
          state.editor.selectedElement.id === id &&
          !state.editor.liveMode &&
          state.editor.selectedElement.type !== '__body',
        '!border-yellow-400 !border-4':
          state.editor.selectedElement.id === id &&
          !state.editor.liveMode &&
          state.editor.selectedElement.type === '__body',
        '!border-solid':
          state.editor.selectedElement.id === id && !state.editor.liveMode,
        'border-dashed border-[1px] border-slate-300': !state.editor.liveMode,
      })}
      onDrop={(e) => handleOnDrop(e, id)}
      onDragOver={handleDragOver}
      draggable={type !== '__body'}
      onClick={handleOnClickBody}
      onDragStart={(e) => handleDragStart(e, 'form')}
    >
      <Badge
        className={clsx(
          'absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg hidden',
          {
            block:
              state.editor.selectedElement.id === element.id &&
              !state.editor.liveMode,
          }
        )}
      >
        {element.name}
      </Badge>
      
      {Array.isArray(content) &&
      <form
       onSubmit={sendEmail}
      >
        {content.map((childElement) => (
          <Recursive
            key={childElement.id}
            element={childElement}
          />
        ))}
        </form>
        }
        
      {state.editor.selectedElement.id === element.id &&
        !state.editor.liveMode &&
        state.editor.selectedElement.type !== '__body' && (
          <div className="absolute bg-primary px-2.5 py-1 text-xs font-bold  -top-[25px] -right-[1px] rounded-none rounded-t-lg ">
            <Trash
              size={16}
              onClick={handleDeleteElement}
            />
          </div>
        )}
    </div>
  )
}

export default FormComponent 