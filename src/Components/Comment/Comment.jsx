import cls from './Comment.module.css'

function Comment(props) {
  
  return (
    <div  className={cls.wrapper}>
      <p className={cls.header}>Машина {props.car}:</p>
      <p className={cls.comment}>{props.comment}</p>
    </div>
  );
}

export default Comment;
