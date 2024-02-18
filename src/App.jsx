import { useCallback, useEffect, useState, useRef} from 'react'

function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const passwordRef = useRef(null) //useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
                                  //The returned object will persist for the full lifetime of the component. 
                                  //Simply, kisi bhi value ko persist karne ke liye useRef hook ka use karte hain.


  //useCallback is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed
  const handleGeneratePassword = useCallback(() => {  //Whatever is inside this function will only be called when the dependencies change
    let pass = ""
    let characterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) characterList += '0123456789'
    if (includeSymbols) characterList += '!@#$%^&*()_+{}<>?'

    for (let i = 1; i <= passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characterList.length + 1)
      pass += characterList[randomIndex]
    }
    setPassword(pass)

  }, [passwordLength, includeNumbers, includeSymbols, setPassword]) //whatever values is interlinked with each other, we put them in the dependency array.


  //useEffect is a hook that allows you to perform side effects in function components
  useEffect(() => { //Whatever is inside this function will be called when the component mounts and when the dependencies change
    handleGeneratePassword()
  }, [passwordLength, includeNumbers, includeSymbols, setPassword])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select() //select() method selects all the text in a <textarea> element or in an <input> element that includes a text field.
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 my-10 text-orange-500 bg-gray-800'>
        <h1 className='text-3xl text-white text-center my-5'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' className='outline-none w-full py-2.5 px-3 rounded-lg'
            value={password} onChange={(e) => setPassword(e.target.value)} readOnly placeholder='Password' ref={passwordRef} />
          <button
            className='outline-none bg-orange-500 text-white px-3 py-0.5 shrink-0 hover:bg-orange-600 transition duration-300 ease-in-out'
            onClick={copyToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-md gap-x-10'>
          <div className='flex items-center gap-x-2'>
            <input type='range' min={8} max={30} value={passwordLength}
              className='cursor-pointer' onChange={(e) => { setPasswordLength(e.target.value) }} />
            <span>Length: {passwordLength}</span>
          </div>
          <div className='flex items-center gap-x-1'>
            <label>
              <input type='checkbox' defaultChecked={includeNumbers} id='numberInput'
              onChange={() => setIncludeNumbers((prev) => !prev)} />
              Include Numbers
            </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <label>
              <input type='checkbox' defaultChecked={includeSymbols} id='symbolInput'
              onChange={() => setIncludeSymbols((prev) => !prev)} />
              Include Symbols
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
