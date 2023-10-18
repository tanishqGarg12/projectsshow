import './App.css';
import { useCallback, useState,useEffect } from 'react';


function App() {  
  const [lenght ,setlenght]=useState(2);
  const[NumberAllowed,setNumberAllowed]=useState(false);
  const[CharacterAllowed,setCharacterAllowed]=useState(false);
  const[password,setpassword]=useState(null);
  function changelength(e) {
    setlenght(e.target.value);
  }

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (NumberAllowed) {
      str+= "0123456789"
    }
    if (CharacterAllowed) {
      str+= "!@#$%^&*-_+=[]{}~`"
    }
    for(let i=0;i<=lenght;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }

    setpassword(pass);
  },[lenght,NumberAllowed,CharacterAllowed,setpassword])


  useEffect(() => {
    passwordGenerator()
  }, [lenght, NumberAllowed, CharacterAllowed, passwordGenerator])

  return (
<>
    <div  className="main" style={{backgroundColor:'pink',display:'flex', alignItems:'Centre'}}>

    <h1>PASSWORD GENERATOR</h1>
    <div style={{backgroundColor:'red'}}>
    <input type='text' readOnly 
    value={password}
    placeholder='password'
    ></input>
    <button>copy</button>
    </div>


    <div>

    <input type='range' min={2  } max={100} onChange={(e)=>changelength(e)}></input>
    <label>lenght:{lenght}</label>
    </div>


    <div>
      
    <input type='checkbox' onChange={() => {
                  setNumberAllowed((prev) => !prev )
              }}>
                </input>
    <label>number</label>
    </div>



    <div>

    <input type='checkbox' onChange={() => {
                  setCharacterAllowed((prev) => !prev )
              }}>

              </input>
    <label>character</label>
    </div>
    </div>



</>


  );
}

export default App;
