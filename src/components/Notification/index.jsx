export function Notification ({ children }) {
  return (
    <div className=' w-[max-content] fixed bottom-5 right-3  bg-[#7276b2] text-[#f0f3ff] py-2 px-3 rounded'>
      {children}
    </div>
  )
}
