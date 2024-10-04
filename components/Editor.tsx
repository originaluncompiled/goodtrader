'use client'

import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Checkbox } from './ui/checkbox'
import { Input } from './ui/input'

// Have it be divided into "Sections" with:
// - "Section Title" <- font-bold when done editing
// - Checkboxes/Radio buttons (have toggle for user to change it)
// - Ability to add new sections + another checkboxLabel/radio button to each section (Maybe have a border around each section)

const Editor = () => {
  type GamePlanItem = {
    title: string,
    type: 'radio' | 'checkbox',
    items: string[],
  }

  // Sets initial dummy-data as state
  const localGamePlan: GamePlanItem[] = [
    {
      title: 'Bias:',
      type: 'radio',
      items: [
        'Bullish',
        'Bearish'
      ]
    },
    {
      title: 'Trend Reversal Confirmation:',
      type: 'checkbox',
      items: [
        'Liquidity Sweep',
        'Break of Structure',
        'Inverse Fair Value Gap'
      ]
    },
  ]

  const [gamePlan, setGamePlan] = useState<GamePlanItem[]>(localGamePlan);

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>, inputId: string, gamePlanItemIndex: string) => {
    const input = document.getElementById(`${inputId} Input`) as HTMLInputElement;
    const inputValue = event.target.value;
    
    setGamePlan((prevGamePlan):GamePlanItem[] => {
      const updatedGamePlan = [...prevGamePlan];

      updatedGamePlan[gamePlanItemIndex] = {
        ...updatedGamePlan[gamePlanItemIndex],
        items: newItems,
      };
      return updatedGamePlan;
    })
  }

  return (
    <section className='bg-gray-300/25 p-2 rounded-xl border-gray-200 border'>
      {
        gamePlan.map((listSection, i) => {
          return (
            <article key={i}>
              <Input id={`Title${i}`} className='border-none shadow-none font-bold text-base hover:underline mb-1' value={listSection.title} onChange={(event) => updateValue(event, listSection.title, `Title${i}`)}/>
              {
                listSection.type === 'radio' ?
                // Displays radio buttons
                <RadioGroup className='gap-0 ml-2'>
                  {
                    listSection.items.map(((radioButtonLabel: string) => {
                      return (
                        <div className='flex items-center space-x-2 mb-2' key={radioButtonLabel}>
                          <RadioGroupItem value={radioButtonLabel} id={radioButtonLabel} disabled/>
                          <Input
                            id={`${radioButtonLabel} Input`}
                            className='border-none hover:underline shadow-none p-0 pl-1 h-fit'
                            value={radioButtonLabel}
                            onChange={(event) => updateValue(event, radioButtonLabel, i)}
                          />
                        </div>
                      )
                    }))
                  }
                </RadioGroup> :
                // Displays checkboxes
                <div>
                  {
                    listSection.items.map(((checkboxLabel) => {
                      return (
                        <div className={'flex items-center space-x-2 ml-2 mb-2'} key={checkboxLabel}>
                          <Checkbox value={checkboxLabel} id={checkboxLabel} disabled/>
                          <Input id={`${checkboxLabel} Input`} className='border-none hover:underline shadow-none p-0 pl-1 h-fit' value={checkboxLabel} onChange={(event) => updateValue(event, checkboxLabel, i)}/>
                        </div>
                      )
                    }))
                  }
                </div>
              }
            </article>
          )
        })
      }
    </section>
  )
}

export default Editor