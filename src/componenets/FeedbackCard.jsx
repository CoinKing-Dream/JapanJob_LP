
const FeedbackCard  = ({item}) => {
    return (
        <>
            <div className="flex flex-row items-center justify-center">
                <div>
                    <img src={item.img.src} alt={item.img.alt}></img>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div>{item.company}</div>
                    <div>{item.name}</div>
                    <div>{item.content}</div>
                </div>
            </div>
        </>
    )
}

export default FeedbackCard;