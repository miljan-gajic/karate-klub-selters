import React from 'react'

type Props = {
  message?: string
}

export const TestComponent: React.FC<Props> = ({ message }) => {
  return <h1>Hello from {message}</h1>
}
