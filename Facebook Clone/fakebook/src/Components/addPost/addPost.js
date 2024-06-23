import React from 'react';
import "./addPost.css";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className='addPost'>
      <div className="addpostcontainer">
        <img src="/images/one.jpeg" alt="propic" className='addpostpic' />
        <input placeholder="What's on your mind?" type="text" className="addpostinput" />
      </div>
      <hr className='posrhr' />
      <div className='addPostBottom'>
        <div className="addpostoptions">
          <div className="addpostoption">
            <InsertPhotoIcon className='addphotoicon' />
            <span className="addphotooption">Add Photo</span>
          </div>

          <div className="addpostoption">
            <AddLocationAltIcon className='addlocationicon' />
            <span className="addphotooption">Add Location</span>
          </div>

          <div className="addpostoption">
            <LocalOfferIcon className='tagphotoicon' />
            <span className="addphotooption">Tag a Friend</span>
          </div>

          <div className="addpostoption">
            <LiveTvIcon htmlColor='blue' className='addphotoicon' />
            <span className="addphotooption">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}
