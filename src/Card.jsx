export default ({data})=> {
    return (
        <div className="card col-3 ">
            <img src={data.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href="#" className="btn btn-primary">Price: {data.price}</a>
                <a href="#" className="btn btn-primary mt-2">Category: {data.category}</a>
            </div>
        </div>
    )
}