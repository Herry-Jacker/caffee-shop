import './review.css';

const Review = () => {
    return (
        <section id="review">
            <div className='review-backgroun-overlay'></div>
            <div className='review-shadow'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path>
                    <path className="elementor-shape-fill" style={{opacity: 0.5}} d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                    <path className="elementor-shape-fill" style={{opacity: 0.25}} d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                </svg>
            </div>
            <div className='review-body container'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default Review;