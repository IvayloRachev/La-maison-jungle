import {useState} from 'react'
import "../styles/Footer.css"

function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas de @, ceci n'est pas une adresse valide")
        }
    }
    return(
        <footer>
            <div className='lmj-footer'>
                <div className='lmj-footer-elem'>
                    Pour les passionnés de plantes
                </div>
                <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
                <input type="text" placeholder='Entrez votre mail' onChange={handleInput} value={inputValue} onBlur={handleBlur} />
            </div>
        </footer>
    )
}

export default Footer