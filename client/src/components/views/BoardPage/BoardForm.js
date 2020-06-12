import React, { useEffect, useState } from 'react';
import { List, Avatar, Typography, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import Comments from './Sections/Comments';
import { useDispatch } from 'react-redux';
import { requestBoardForm } from '../../../_actions/board_actions';
import { getComment } from '../../../_actions/comment_actions';
import FormDeleteAndModify from './Sections/FormDeleteAndModify';


function BoardForm(props) {
    
    const { Title } = Typography;
    const dispatch = useDispatch(); 
    const [Content, setcontent] = useState([]);
    const [CommentLists, setCommentLists] = useState([])
    const [date, setDate] = useState("")

    let body = {
        postNum : parseInt(props.match.params.postNum)
    }
    

    useEffect(() => {

        // 게시판 내용 요청
        dispatch(requestBoardForm(body))
        .then(response =>{
        if (response.payload.success){
            setcontent(response.payload.content[0].pContent);
            setDate(response.payload.content[0].date )
            console.log("피콘텐트" + response.payload.content[0].pContent)
            
        } else {
            alert('게시판 내용을 가져오는데 실패했습니다.')
        }
        })

        // 코멘트 요청
        dispatch(getComment(body))
            .then(response =>{
            if (response.payload.success){
                setCommentLists(response.payload.comment);
            } else {
                alert('게시판 내용을 가져오는데 실패했습니다.')
            }
        })


    },[])


    const updateComment = (newComment) => {

        setCommentLists(CommentLists.concat(newComment))    
        
    }
    
    const deleteComment = (cGroupSquence) => {
        setCommentLists(CommentLists.map(item => item.cGroupSquence === cGroupSquence 
            ? ({...item, pComment: null}) : item
            ))  
    }

    const modifyComment = (pComment, cGroupSquence) => {
        
        setCommentLists(CommentLists.map(item => item.cGroupSquence === cGroupSquence 
            ? ({...item, pComment: pComment}) : item
            ))  
    }
    

    // const boardcontent = Content.map((contents, index) => {

    //     return <div key={index}>
    //             {contents.pContent}
    //            </div>

    // })

    return (
        <div style={{
            maxWidth: '700px', margin: '2rem auto'
        }}>
            <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <Title level={2}> { props.location.state[0] } </Title>
            </div>

            {/*글번호, 제목, 글내용*/}
            <FormDeleteAndModify num={props.match.params.postNum} title={props.location.state[0]} content={Content} />

            {/* 이미지,아이디,날짜,조회수 */}
             <List.Item>
                <List.Item.Meta 
                    avatar={<Avatar shape="square" size="large" icon={<UserOutlined/>}  />}
                    title={ props.location.state[1] }
                    description={ date + " 조회 " + props.location.state[2] }
                />
             </List.Item>
            <hr />


            <div>
                {/* 글쓰여진 부분 */}
                {Content}
            </div>

            {/* 코멘트 */}
            <div>
                <br />
                <p> (게시글좋아요), 댓글 수, </p>
                <hr />

                <Comments CommentLists={CommentLists} refreshComment={updateComment} deleteFuction = {deleteComment} modifyFunction = {modifyComment} >  </Comments>
            </div>

        </div>
    )
}

export default withRouter(BoardForm)
