import cls from './Bonus.module.css'

function Bonus(props) {

  function closeTheBonus (){
    props.setIsBonus(false)
  }
  return (
    <div className={cls.wrapper}>
      <div className={cls.window}>
        <p className={cls.header}>BONUS</p>
          <p className={cls.text}>У тебя шесть ТАУСОВ добавь бонус!</p>
      </div>
    </div>
  );
}

export default Bonus;
