import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Pagination } from 'antd';
import queryStirng from 'query-string';
import PageList from './PageList';
import { withRouter } from 'react-router-dom'



function Page(props) {

    console.log("모야모야",   props.match.params.pageNum)

    const [List, setList] = useState([]);
    const [Total, setTotal] = useState(0);

    const getPageNum = () => {

        const { search } = props.location;
        const queryObj = queryStirng.parse(search);
        const { page } = queryObj;
        
        if (page) {
                return parseInt(page)
            } else{
                return 1
            }

    }


    useEffect(() => {

        let body = {};


        if (props.state === 'myReport'){
            body = {
                id: localStorage.getItem('userId'),
                currentPage: getPageNum()
            }

        } else {

            body = {
                currentPage: getPageNum()
            }
        }

        axios.post(props.getRouter, body)
            .then(response => {
                if(response.data.success){

                    setList(response.data.data);
                    setTotal(response.data.Count.count);
                } else {
                    alert('신고된 정보를 가져오지 못하였습니다')
                }
            })


    },[getPageNum(), props.getRouter])
    
    const deleteClick = (data) => {
        
        // data
        // comment: cGroupSquence
        // Post: pNum
        
        const body = {
            data: parseInt(data)
        }

        axios.post(props.deleteRouter, body)  
            .then(response => {
                if(response.data.success){
                    switch(props.state) {
                        case 'reportComment':
                            setList(List.filter(list => list.cGroupSquence !== data));
                        case 'reportPost':
                            setList(List.filter(list => list.pNum !== data));
                        case 'myReport':
                            setList(List.filter(list => list.rNum !== data));
                    }
                    alert('성공');
                } else {
                    alert('실패');
                }
            })

    };


    const pageSelect = (page) => {

        console.log("ppp",page)
        const body = {
            currentPage: page
        };

        console.log("페이지",page)
        axios.post(props.getRouter, body)
            .then(response => {
                if(response.data.success){
                    setList(response.data.data);
                    setTotal(response.data.Count.count);
                    props.history.push(`${props.state}?page=${page}`);

                } else {
                    alert('신고된 정보를 가져오지 못하였습니다')
                }
            })
    };

    

    return (
        <div>
            
            <PageList pageList={List} deleteClick={deleteClick} state={props.state} ></PageList>

            <div>
                <Pagination
                    current={getPageNum()}
                    total={Total}
                    onChange={pageSelect}
                />
            </div>
        </div>
    )
}

export default withRouter(Page);