import { useState } from 'react';
import PORT from '../../assets/config';
import cls from './Search.module.css'

function Search(props) {

  const [searchWord, setSearchWord] = useState('')

  async function pressButton(e) {
    e.preventDefault()
    await fetch(PORT + 'search', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        searchWord
      })
    }).then((response) => {
      return response.text()
    })
    .then((data) => {
      props.setCars(JSON.parse(data))
    });
  }
 
  return (
    <div className={cls.wrapper}>
      <form className={cls.form}>
        <div className={cls.inputWrapper}>
          <label className={cls.label}>Номер:</label>
          <input className={cls.input}type="text" 
                value={searchWord}
                onChange={(e) => setSearchWord(e.currentTarget.value.toUpperCase())}
                placeholder='XXX-000 или 12345'/>
        </div>
        <button className={cls.button} onClick={(e) => {pressButton(e)}}>Искать</button>
      </form>
    </div>
  );
}

export default Search;
