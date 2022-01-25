import React from 'react';

const LoadingScreen = (props) => {
    return (
        <>
            <div className="loadingScreen">
                <img
                    src={`${process.env.PUBLIC_URL}/img/start_loading.gif`}
                    alt="start_loading"
                />
            </div>
        </>
    )

};

export default LoadingScreen;