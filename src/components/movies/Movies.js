export const Movies = () => {
    return (
        <>
        <section className="banner">
            <div className="banner-card">
                <img
                    src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/9bba82e4-cc02-4c2d-9905-bba6f549ae11/9ae78f4f-7db4-4add-ac93-26b40fad0da0/1280x720/match/image.jpg"
                    className="banner-img"
                    alt=""
                />
                <div className="card-content">
                    <h2 className="card-title">Movie Catalogue</h2>
                </div>
            </div>
        </section>
        <section className="movies">

            <div className="movies-grid">
                <div className="movie-card">
                    <div className="card-head">
                        <img
                            src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png"
                            alt=""
                            className="card-img"
                        />
                        <div className="card-overlay">
                            <div className="rating">
                                <span>9</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Spider-Man</h3>
                        <div className="card-info">
                            <span className="genre">Action</span>
                            <span className="year">2022</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="load-more">LOAD MORE</button>
        </section>
        </>
    );
}