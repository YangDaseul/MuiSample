// GNB.js
import React from 'react';
import {GNBContainer, Logo, LogoutButton} from "../css/GnbStyled";


const GNB = () => {
    return (
        <>
            <GNBContainer>
                <Logo>
                    <img src="/img/mona.png" alt="Company Logo" />
                </Logo>
                <LogoutButton>Logout</LogoutButton>
            </GNBContainer>
        </>
    );
};

export default GNB;
