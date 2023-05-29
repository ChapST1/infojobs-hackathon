export function Notification ({ children }) {
  return (
    <div className=' w-[max-content] fixed bottom-5 right-3  bg-[#0f0f0f] text-white py-2 px-3 rounded'>
      {children}
    </div>
  )
}
