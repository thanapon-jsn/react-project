import React from 'react'

class Picturecard extends React.Component {
  render () {
    return (
      <article className='container'>
        <div className='row pt-4'>

          <div className='col-sm-6 col-md-3'>
            <div className='card mb-3'>
              <img class='card-img-top' src={this.props.image} height='230px' />
              <div className='card-body py-0 px-3'>
                <h5 className='card-title mt-2'>Panda</h5>
                <p className='card-text mb-2'>2018-07-07</p>

                <div className='border-top py-2'>
                  <small className='text-muted'>21 Likes</small>
                  <small className='text-muted'>2 Comments</small>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-3'>
            <div className='card mb-3'>
              <img class='card-img-top' src={this.props.image} height='230px' />
              <div className='card-body py-0 px-3'>
                <h5 className='card-title mt-2'>Panda</h5>
                <p className='card-text mb-2'>2018-07-07</p>

                <div className='border-top py-2'>
                  <small className='text-muted'>21 Likes</small>
                  <small className='text-muted'>2 Comments</small>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-3'>
            <div className='card mb-3'>
              <img class='card-img-top' src={this.props.image} height='230px' />
              <div className='card-body py-0 px-3'>
                <h5 className='card-title mt-2'>Panda</h5>
                <p className='card-text mb-2'>2018-07-07</p>

                <div className='border-top py-2'>
                  <small className='text-muted'>21 Likes</small>
                  <small className='text-muted'>2 Comments</small>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-3'>
            <div className='card mb-3'>
              <img class='card-img-top' src={this.props.image} height='230px' />
              <div className='card-body py-0 px-3'>
                <h5 className='card-title mt-2'>Panda</h5>
                <p className='card-text mb-2'>2018-07-07</p>

                <div className='border-top py-2'>
                  <small className='text-muted'>21 Likes</small>
                  <small className='text-muted'>2 Comments</small>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-3'>
            <div className='card mb-3'>
              <img class='card-img-top' src={this.props.image} height='230px' />
              <div className='card-body py-0 px-3'>
                <h5 className='card-title mt-2'>Panda</h5>
                <p className='card-text mb-2'>2018-07-07</p>

                <div className='border-top py-2'>
                  <small className='text-muted'>21 Likes</small>
                  <small className='text-muted'>2 Comments</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>
    )
  }
}

export default Picturecard
