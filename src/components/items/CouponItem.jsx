import React, { Component, Fragment } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom'
import { Filters } from './'
// import '../../styles/NewStyles/CouponItem.scss'
import nike from '../../styles/images/logo__nike.png'
import iconPeople from '../../styles/images/people.svg'

class CouponItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isCopied : false
    };
  }
  render () {
    const { coupon } = this.props
    const site = this.props.site.length > 0 ? this.props.site[0]:false;;
    const { isCopied } = this.state;
    return (
      <Fragment>
          <div className="col-md-5 col-10 col-sm-6 mt-3 col-lg-3">
              <div className="coupon">
                  <div className="row justify-content-center">
                      { site &&
                        <div className="col-12">
                          <img className="mx-auto d-block img-fluid" src={ site.LogoUrl }alt="" />
                        </div>
                      }
                      <h4 className="col-12">{ coupon.Description }</h4>
                      <div className="col-12 d-flex justify-content-between align-items-center">
                          { coupon.Expires &&
                            <p className="days-left">{ parseInt((new Date(coupon.Expires) - new Date())/1000/60/60/24) }д. до окончания</p>
                          }
                          <p className="people text-center">{coupon.UsedCount}
                              <i className="fa fa-user-friends"></i>
                          </p>
                      </div>
                      <div className="container mt-3 d-flex justify-content-between align-items-center flex-nowrap">
                          <span className="bigdot" style={{ left: 0 }}></span>
                          <span className="bigdot" style={{ right: 0 }}></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                      </div>
                      <div className="container mt-2">
                          <div className="row d-flex align-items-center flex-wrap justify-content-between">
                              <div className="col-12 col-md-5 d-flex mt-2">
                                  { coupon.Amount && 
                                    <div className="discount text-center">{coupon.Amount}</div>
                                  }
                              </div>
                              <div className="col-12 col-md-7 mt-2">
                                  <button className="button coupon-btn" data-toggle="modal" data-target={ `#ModalCenter${ coupon.ID }` }>Открыть код</button>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
          <div className="modal fade" style={{ display:'none' }}id={ `ModalCenter${ coupon.ID}` } tabIndex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <button type="button" className="close ml-auto" data-dismiss="modal" aria-label="Закрыть">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center">
                                { site &&
                                  <div className="col-6">
                                    <img className="mx-auto d-block img-fluid" src={ site.LogoUrl }
                                        alt="" />
                                  </div>
                                }
                                <h4 className="col-9 text-center">{ coupon.Site }</h4>
                                <p className="col-10">{ coupon.Description }</p>
                            </div>
                            <div className="row">
                                <div className="coupon-modal">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6 col-12 text-center">
                                            Перейдите в магазин <a href={ `//${ site.Domain }` }>{ coupon.Site }</a> и вставьте код в корзине
                                        </div>
                                    </div>
                                    <div className="row justify-content-center ">
                                        <div className="col-md-6 col-12 d-flex flex-wrap justify-content-between">
                                            <div className="col-12 d-flex mt-2">
                                                <h6 className="text-center text-uppercase code">{ coupon.Code }</h6>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <CopyToClipboard text={ coupon.Code }
                                                    onCopy={() => this.setState({isCopied: true})}>
                                                  <button className="button copy-coupon"> { !isCopied ? 'Копировать' : 'Скопировано' }</button>
                                                </CopyToClipboard>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <a className="button coupon-btn text-center" target="_blank" href={ `//${ site.Domain }` }>Перейти на сайт</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Fragment>
    )
  }
}

export default CouponItem
