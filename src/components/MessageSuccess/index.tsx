'use client'

import './styles.css'

const MessageSuccess = ({ message, isSuccess }: { message: string, isSuccess: boolean }): JSX.Element => {
  return (
    <div className='container-message'>
      <p className={`${isSuccess ? 'text-success' : 'text-error'}`}>{message}</p>
    </div>
  )
}

export default MessageSuccess
