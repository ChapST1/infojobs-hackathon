export function IconHeart ({ styles = '' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={21}
      height={17}
      className={styles}
    >
      <path
        fillRule='evenodd'
        d='M12.152 16.271a2.538 2.538 0 0 1-2.613 0C6.83 14.658.846 10.528.846 5.5c0-3.09 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.08C11.936.81 13.606 0 15.346 0c3.08 0 5.5 2.41 5.5 5.5 0 5.028-5.983 9.158-8.694 10.771Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export function IconSave ({ styles = '' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      className={styles}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1}
        d='M5 22V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v19l-7-6.111L5 22Z'
      />
    </svg>
  )
}
