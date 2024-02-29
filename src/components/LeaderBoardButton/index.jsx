import React, { useState } from 'react';
import LeaderBoard from "../Leaderboard";

const LeaderBoardButton = () => {
    const [active, setActive] = useState('');

    return (
        <>

        <button type="button" className="btn btn-warning" onClick={() => setActive('leaderboard element')}>Leaderboard</button>
        <div>
            {active === 'leaderboard element' && <LeaderBoard />}

        </div>
        </>

    )
}
export default LeaderBoardButton;