import React from 'react';
import { useHistory } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome;'


import './Post.css';

function Post(props) {
    const history = useHistory();


    const {
        title,
        // thumbnail,
        like,
        like_count,
        is_like,
        postId,
    } = props;
    let thumbnail = "https://post-phinf.pstatic.net/MjAyMDAyMjlfMjY4/MDAxNTgyOTU0Nzg3MjQ4.PBMFV4WrSJmeSUJ56c4C7Vkz_SsQlJ1SByKU18kkJh0g.T7mQnadCWVtEZ448AGk_9kG1HFBAzdztXZcBjvSbduwg.JPEG/%EA%B3%A0%EC%96%91%EC%9D%B4_%EB%82%98%EC%9D%B41.jpg?type=w1200";

    thumbnail = "https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2"


    return (
        <>
            <div className="postCard">
                <div className="postImage"
                    onClick={() => {
                        history.push(`/detail:/${postId}`);
                    }}>
                    <img src={thumbnail} alt="썸네일" />
                </div>
                <div className="postFooter">
                    <p className="postTitle">{title}</p>
                    {is_like
                        ?
                        <div className="likeBtn">
                            빨간 하트
                        </div>
                        :
                        <div className="dislikeBtn">
                            회색 하트
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default Post;