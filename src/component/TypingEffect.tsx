import { useState, useEffect } from 'react'

interface TypingEffectProps {
  text: string
}

function TypingEffect({ text }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      if (index < text.length-1) {
        setDisplayedText((prev) => prev + text[index])
        index++
      } else {
        clearInterval(intervalId)
      }
    }, 30)

    return () => clearInterval(intervalId)
  }, [text])

  const renderedText = displayedText.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))

  return <div className="whitespace-pre-wrap text-base leading-relaxed">{renderedText}</div>
}

export default TypingEffect
