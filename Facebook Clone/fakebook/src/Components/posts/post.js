import React from 'react';
import './post.css'; // Ensure the filename and path are correct
import LikeCommentShare from './LikeCommentShare/LikeCommentShare';

export default function Post() {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="posttop">
          <img src="/images/two.jpg" alt="" className="postImage" />
          <span className='postUserName'>K3</span>
          <span className="posttime">3 mins ago</span>
        </div>
        <div className="postcenter">
          Happy Awrudu.! :-]
        </div>
        <img src="/images/two.jpg" alt="booom" className='post1' />
        <div className="postbottom">
          <LikeCommentShare />
        </div>
      </div>

      <div className="postContainer">
        <div className="posttop">
          <img src="\images\wp9904544-msi-4k-wallpapers.jpg" alt="" className="postImage" />
          <span className='postUserName'>Science today</span>
          <span className="posttime">3 mins ago</span>
        </div>
        <div className="postcenter">
          Today Science..!
        </div>
        <img src="\images\qubit.png" alt="booom" className='post1' />
        <div className="postbottom">
          <LikeCommentShare />
        </div>
      </div>

      <div className="postContainer">
        <div className="posttop">
          <img src="\images\62df01d48ccbc0c270176291_rrss_01-1024x1024.png" alt="" className="postImage" />
          <span className='postUserName'>American White house</span>
          <span className="posttime">3 mins ago</span>
        </div>
        <div className="postcenter">
          Gov Announcement
        </div>
        <img src="\images\2022.11.21-White-House-begins-transition-to-post-quantum-cryptography-for-federal-agencies-conducts-inventory-of-cryptographic-systems.webp" alt="booom" className='post1' />
        <div className="postbottom">
          <LikeCommentShare />
        </div>
      </div>
    </div>
  );
}
