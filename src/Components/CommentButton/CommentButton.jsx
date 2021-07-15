import cls from './CommentButton.module.css'
import { ChatDots} from 'react-bootstrap-icons';
import { useState } from 'react';
import Comment from '../Comment/Comment.jsx'
function CommentButtons(props) {
  

  const [commentIsOpen, setCommentIsOpen] = useState(false)

  return (
    <div  className={cls.wrapper}>
      <div className={cls.commentButtons}>
        <ChatDots 
          onClick={() => {setCommentIsOpen(!commentIsOpen)}}  
          
          color={commentIsOpen
                  ?'red'
                  :'darkGwrey'}/>
      </div>
      {commentIsOpen ? <Comment car={props.car} comment={props.comment}/>: null}
    </div>
  );
}

export default CommentButtons;
