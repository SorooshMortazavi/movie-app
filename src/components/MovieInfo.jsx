import React from 'react'

export default function MovieInfo(props) {
  const { Title, Genre, Released, imdbRating, Plot,Poster } = props.data
  return (
    <div className='d-flex justify-content-center'>
      <div className="col-lg-5 col-sm-6 mb-4 hover-animate mt-4 w-50">
        <div className="card shadow border-0 h-100">
            <img className="img-fluid card-img-top" style={{ maxHeight: '500px' }} src={Poster} alt="..." />
          <div className="card-body">
            <p className="text-uppercase text-muted text-sm letter-spacing-2">GENRE: {Genre} </p>
            <h5 className="my-2">MOVIE NAME: {Title}</h5>
            <p className="text-gray-500 text-sm my-3"><i className="far fa-clock mr-2"></i>{Released}</p>
            <p className="my-2 text-muted text-sm">STORY: {Plot}</p>
            <p className="my-2 text-muted text-sm">IMDB RATE: {imdbRating}</p>

          </div>
        </div>
      </div>
    </div>


  )
}
