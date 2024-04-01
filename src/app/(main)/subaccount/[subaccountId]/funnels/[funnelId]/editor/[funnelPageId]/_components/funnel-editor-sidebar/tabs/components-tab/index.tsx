import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion'
  import { EditorBtns } from '@/lib/constants'
  import React from 'react'
  import TextPlaceholder from './text-placeholder'
   import ContainerPlaceholder from './container-placeholder'
   import VideoPlaceholder from './video-placeholder'
   import TwoColumnsPlaceholder from './two-columns-placeholder'
   import LinkPlaceholder from './link-placeholder'
   import ContactFormComponentPlaceholder from './contact-form-placeholder'
   import CheckoutPlaceholder from './checkout-placeholder'
   import ImagePlaceholder from './image-placeholder'
import ThreeColumnsPlaceholder from './three-columns-placeholder'
import TextInputPlaceholder from './text-input-placeholder'
import ButtonPlaceholder from './button-placeholder'
import FormPlaceholder from './form-placeholder'
import DateInputPlaceholder from './date-input-placeholder'
import NumberInputPlaceholder from './number-input-placeholder'
import EmailInputPlaceholder from './email-input-placeholder'
import TextAreaPlaceholder from './textarea-placeholder'
import LabelPlaceholder from './label-placeholder'
  
  type Props = {}
  
  const ComponentsTab = (props: Props) => {
    const elements: {
      Component: React.ReactNode
      label: string
      id: EditorBtns
      group: 'layout' | 'elements'
    }[] = [
      {
        Component: <TextPlaceholder />,
        label: 'Text',
        id: 'text',
        group: 'elements',
      },
      {
        Component: <ContainerPlaceholder />,
        label: 'Container',
        id: 'container',
        group: 'layout',
      },
      {
        Component: <TwoColumnsPlaceholder />,
        label: '2 Columns',
        id: '2Col',
        group: 'layout',
      },
      {
        Component: <VideoPlaceholder />,
        label: 'Video',
        id: 'video',
        group: 'elements',
      },
      // {
      //   Component: <ContactFormComponentPlaceholder />,
      //   label: 'Contact',
      //   id: 'contactForm',
      //   group: 'elements',
      // },
      // {
      //   Component: <CheckoutPlaceholder />,
      //   label: 'Checkout',
      //   id: 'paymentForm',
      //   group: 'elements',
      // },
      {
        Component: <LinkPlaceholder />,
        label: 'Link',
        id: 'link',
        group: 'elements',
      },
      {
        Component: <ImagePlaceholder />,
        label: 'Image',
        id: 'image',
        group: 'elements',
      },
      {
        Component: <ThreeColumnsPlaceholder />,
        label: '3 Columns',
        id: '3Col',
        group: 'layout',
      },
      {
        Component: <FormPlaceholder />,
        label: 'Form',
        id: 'form',
        group: 'elements',
      },
      {
        Component: <ButtonPlaceholder />,
        label: 'Button',
        id: 'button',
        group: 'elements',
      },
      {
        Component: <TextInputPlaceholder />,
        label: 'Text Input',
        id: 'textinput',
        group: 'elements',
      },
      
      
      {
        Component: <DateInputPlaceholder />,
        label: 'Date Input',
        id: 'dateinput',
        group: 'elements',
      },
      {
        Component: <NumberInputPlaceholder />,
        label: 'Number Input',
        id: 'numberinput',
        group: 'elements',
      },
      {
        Component: <EmailInputPlaceholder />,
        label: 'Email Input',
        id: 'emailinput',
        group: 'elements',
      },
   
      {
        Component: <TextAreaPlaceholder />,
        label: 'Text Area',
        id: 'textarea',
        group: 'elements',
      },
      {
        Component: <LabelPlaceholder />,
        label: 'Label',
        id: 'label',
        group: 'elements',
      },
      
    ]
  
    return (
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={['Layout', 'Elements']}
      >
        <AccordionItem
          value="Layout"
          className="px-6 py-0 border-y-[1px]"
        >
          <AccordionTrigger className="!no-underline">Layout</AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-2 ">
            {elements
              .filter((element) => element.group === 'layout')
              .map((element) => (
                <div
                  key={element.id}
                  className="flex-col items-center justify-center flex"
                >
                  {element.Component}
                  <span className="text-muted-foreground">{element.label}</span>
                </div>
              ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="Elements"
          className="px-6 py-0 "
        >
          <AccordionTrigger className="!no-underline">Elements</AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-2 ">
            {elements
              .filter((element) => element.group === 'elements')
              .map((element) => (
                <div
                  key={element.id}
                  className="flex-col items-center justify-center flex"
                >
                  {element.Component}
                  <span className="text-muted-foreground">{element.label}</span>
                </div>
              ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  
  export default ComponentsTab