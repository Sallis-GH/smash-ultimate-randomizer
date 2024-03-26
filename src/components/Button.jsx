const Button = ({title, onClick=''}) => {
  return (
    <button onClick={onClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-gray-800 dark:hover:bg-gray-700'>
      {title}
    </button>
  )
}

export default Button
