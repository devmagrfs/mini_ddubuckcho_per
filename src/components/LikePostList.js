import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import { actionCreators as postActions } from '../redux/modules/post';
import './LikePostList.css'
import LikePost from './LikePost';
import Carousel from 'react-elastic-carousel';


function LikePostList(props) {
    const dispatch = useDispatch();
    // const post_list = useSelector((state) => state.post.list);

    React.useEffect(() => {
        if (post_list.length === 0) {
            dispatch(postActions.getLikePostDB());
        }
    }, [])

    const post_list = [{
        title: "1번 사진",
        thumbnail: "url 들어감",
        like: "",
        like_count: 0,
        is_like: false,
        postId: 1
    },
    {
        title: "2번 사진",
        thumbnail: "url 들어감",
        like: "",
        like_count: 0,
        is_like: false,
        postId: 2
    },
    {
        title: "3번 사진",
        thumbnail: "url 들어감",
        like: "",
        like_count: 0,
        is_like: false,
        postId: 3
    },
    {
        title: "4번 사진",
        thumbnail: "url 들어감",
        like: "",
        like_count: 0,
        is_like: false,
        postId: 4
    }, {
        title: "4번 사진",
        thumbnail: "url 들어감",
        like: "",
        like_count: 0,
        is_like: false,
        postId: 4
    },
    {
        title: "4번 사진",
        thumbnail: "url 들어감",
        like: "",
        like_count: 0,
        is_like: false,
        postId: 4
    },
    {
        title: "4번 사진",
        thumbnail: "url 들어감",
        like: "",
        like_count: 0,
        is_like: false,
        postId: 4
    },
    {
        title: "4번 사진",
        thumbnail: "url 들어감",
        like: "",
        like_count: 0,
        is_like: false,
        postId: 4
    },
    ]



    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4, itemsToScroll: 2 }
    ];

    return (
        <>
            <div>
                <Carousel breakPoints={breakPoints}>
                    {post_list.map((p, idx) => {
                        return (
                            <LikePost key={idx} {...p} />
                        )
                    })}
                </Carousel>
            </div>
        </>
    )
}

// const styles = styled.div`
//     display: flex;
//     justify-contents: center;
//     align-items: center;
//     height: 250px;
//     width: 100%;
//     margin: 0 15px;
//     font-size:4em;
// `



export default LikePostList;