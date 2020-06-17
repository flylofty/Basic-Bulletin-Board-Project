import React from 'react'
import { Button } from 'antd'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'



function FormDeleteAndModify(props) {

    console.log("FormDeleteAndModify", props.num) // 0
    console.log("FormDeleteAndModify", props.title)
    console.log("FormDeleteAndModify", props.content) // 0
    console.log("FormDeleteAndModify", props.boardNum)

    const DeletePost = (event) => {
        event.preventDefault();

      const body = {
          pNum : props.num
      }

      axios.post('/api/board/deletePost', body)
            .then(response => {
                if (response.data.success) {
                    props.history.push(`/board/${props.boardNum}`)
                } else {
                    alert('글 삭제에 실패했습니다.')
                }
            })
    }

    return (
        <div>
            {/* 수정,삭제 버튼 */}
                <Button type="primary" htmlType="submit">
                    <Link to={{
                        pathname : `/write`,
                        state : 
                            [ props.num,
                              props.title,
                              props.content,
                              props.num]    
                    }}>수 정</Link>
                </Button>

                {/* 수정,삭제 버튼 */}
                <Button onClick={DeletePost}>
                    삭제            
                </Button>
            </div>
    )
}

export default withRouter(FormDeleteAndModify)
