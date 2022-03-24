import React from "react";

const Nweet = ({nweetObj, isOwner}) => (
    <div>
        <h4>{nweetObj.nweet}</h4>
        {
            isOwner && (
                <>
                    <button>Delete Nweet</button>
                    <button>Edit Nweet</button>
                </>
            )
        }
    </div>
)

export default Nweet;