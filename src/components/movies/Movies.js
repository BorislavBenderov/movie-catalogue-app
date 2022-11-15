export const Movies = () => {
    return (
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
                            <div className="bookmark">
                                <ion-icon name="bookmark-outline" />
                            </div>
                            <div className="rating">
                                <ion-icon name="star-outline" />
                                <span>9</span>
                            </div>
                            <div className="play">
                                <ion-icon name="play-circle-outline" />
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
    );
}