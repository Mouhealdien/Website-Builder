import { EditorElement } from '@/providers/editor/editor-provider'
import React from 'react'
 import TextComponent from './text'
 import Container from './container'
 import VideoComponent from './video'
 import LinkComponent from './link-component'
 import ContactFormComponent from './contact-form-component'
 import Checkout from './checkout'
import ImageComponent from './image'
import TextInputComponent from './text-input'
import ButtonComponent from './button-component'
import FormComponent from './form-component'
import DateInputComponent from './date-input'
import NumberInputComponent from './number-input'
import EmailInputComponent from './email-input'
import TextAreaComponent from './textarea-component'
import LabelComponent from './label-component'

type Props = {
  element: EditorElement
}

const Recursive = ({ element }: Props) => {
   
  switch (element.type) {
    case 'text':
      return <TextComponent element={element} />
    case 'container':
      return <Container element={element} />
    case 'video':
      return <VideoComponent element={element} />
    case 'contactForm':
      return <ContactFormComponent element={element} />
    case 'paymentForm':
      return <Checkout element={element} />
    case '2Col':
      return <Container element={element} />
    case '3Col':
      return <Container element={element} />
    case '__body':
      return <Container element={element} />
    case 'image':
      return <ImageComponent element={element} />

    case 'link':
      return <LinkComponent element={element} />
    case 'textinput':
        return <TextInputComponent element={element} />
    case 'button':
          return <ButtonComponent element={element} />
    case 'form':
      return <FormComponent element={element} />
    case 'dateinput':
      return <DateInputComponent element={element} />
    case 'numberinput':
      return <NumberInputComponent element={element} />
    case 'emailinput':
        return <EmailInputComponent element={element} />
    case 'textarea':
        return <TextAreaComponent element={element} />
    case 'label':
          return <LabelComponent element={element} />
    default:
      return null
  }
}

export default Recursive