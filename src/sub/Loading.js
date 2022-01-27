const Loading = () => {
    return (
        <div className="load">
            <h1>Loading...</h1>
            <img
                src={`${process.env.PUBLIC_URL}/img/start_loading.gif`}
                alt="start_loading"
            />
        </div>
    )
}

export default Loading;
