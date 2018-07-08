import React from 'react'

class Picturecard extends React.Component {
  render () {
    return (
      <div className='col-sm-6 col-md-3' key={this.props.id}>
        <div className='card mb-3'>
          <img class='card-img-top' src={this.props.imgSrc} height='230px' />
          <div className='card-body py-0 px-3'>
            <h5 className='card-title mt-2'>{this.props.createBy}</h5>
            <p className='card-text mb-2'>{this.props.date}</p>

            <div className='border-top py-2'>
              <small className='text-muted'>{this.props.likeCount} Likes </small>
              <small className='text-muted'>{this.props.commentCount} Comments </small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Picturecard
