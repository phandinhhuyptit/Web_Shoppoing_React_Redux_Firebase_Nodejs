import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../Actions/ProjectActions';


class InformationAndStatistics extends Component {

    state = {

        Destription_Review: true

    }    
    Handle_Statistics_Item =() =>{

        if(this.props.DataProduct.Statistics){
          return Object.keys(this.props.DataProduct.Statistics).map((Key)=>{

               return (
                   <tr key ={Key}>
                       <td>{Key}</td>
                       <td>{this.props.DataProduct.Statistics[Key]}</td>
                   </tr>                    
               )
           });
        }
   }
    Handle_Destription_Review = (e) => {

        const State_Destription = e.target.getAttribute('data-destription');
        if (State_Destription === "Description") {

            this.setState({

                Destription_Review: true
            })
        }
        else {

            this.setState({

                Destription_Review: false

            })
        }
    }

    Handle_Show_Video = () => {
        this.props.on_Show_Video(true);
    }
    render() {
        let Content_Destription_Review, Content_Features_Of_Product,Content_Statistics_Of_Product;
        

        // Features Of Product
        if (this.props.DataProduct) {

            if (this.props.DataProduct.Information.Features) {

               setTimeout(
                Content_Features_Of_Product = this.props.DataProduct.Information.Features.map((ContentProduct, Key) => {

                    return (

                        <div key={Key}>
                            <p className="Title_Feature"> {ContentProduct.Title}</p>
                            <p>
                                {

                                    ContentProduct.Content

                                }
                            </p>
                            <img src={ContentProduct.Image} aria-hidden alt="Card image cap" />
                        </div>

                    )
                }) , 1000)

                 
            }
           else {

            setTimeout(

                Content_Features_Of_Product = <span className="text-center d-block" >------------------------------------------------</span>  

         ,1000)
           }
        }        
        //Statistics Of Product 
        if (this.props.DataProduct) {

            if (this.props.DataProduct.Statistics) {                

              setTimeout(

                  Content_Statistics_Of_Product = <table className="Statistic_table">
                      <tbody ref="Progress1" id="Progress1">
                          {

                              this.Handle_Statistics_Item()

                          }
                      </tbody>
                  </table>,1000)
          }
            else {
                // Async
                setTimeout(

                      Content_Statistics_Of_Product = <span className="text-center d-block" >------------------------------------------------</span>

               ,1000)               
 
            }
        } 

        if (this.state.Destription_Review) {

            Content_Destription_Review = <div className="Sub_Content_Destription">
                <h3>1.VIDEO REVIEW CHI TIẾT </h3>
                <div className="Wrap_Video">
                    <video autoPlay muted loop id="myVideo">
                        <source src="//cwsmgmt.corsair.com/responsive/videos/k70-low-profile-loop.mp4" type="video/mp4" />
                    </video>
                    <div className="Content_Video">
                        <h1 className="d-none d-sm-block ">{this.props.DataProduct.Name}</h1>
                        <p className="d-none d-sm-block "> TYPE ALL DAY. PLAY ALL NIGHT </p>
                        <p onClick={this.Handle_Show_Video} className="Button_Watch_Video">
                            WATCH VIDEO
                    </p>
                    </div>
                </div>
                <h3>2. TÍNH NĂNG NỔI BẬT</h3>

                    {
                            Content_Features_Of_Product
           
                    }                 

                <h3>3.THÔNG SỐ KĨ THUẬT</h3>
                    {

                        Content_Statistics_Of_Product
                    }
            </div>
        }
        else {

            Content_Destription_Review =<div className="Sub_Content_Review">
                <p>Không có đánh giá cho sản phẩm này.</p>
                <h4>Gửi Bình luận</h4>
                <form action>
                    <div className="form-group">
                        <label>Họ &amp; Tên:</label>
                        <input type="text" className="form-control" placeholder="Họ Tên" />
                    </div>
                    <div className="form-group">
                        <label>Nội Dung: </label>
                        <textarea className="form-control" rows={8} defaultValue={""} />
                    </div>
                    <span className="point">Cho điểm:</span>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue={1} />
                        <label className="form-check-label" htmlFor="inlineRadio1">Thất Vọng</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue={2} />
                        <label className="form-check-label" htmlFor="inlineRadio2">Chưa Tốt</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue={3} />
                        <label className="form-check-label" htmlFor="inlineRadio3">Chấp Nhận</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue={4} />
                        <label className="form-check-label" htmlFor="inlineRadio3">Tốt </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue={5} />
                        <label className="form-check-label" htmlFor="inlineRadio3">Yêu Thích</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Tiếp Tục</button>
                </form>
            </div>            
        }

        return (
            <div className="Destription_Review">
                <div className="container">
                    <div className="row">
                        <ul className="List_Menu">
                            <li >
                                <button onClick={(event) => this.Handle_Destription_Review(event)} data-destription={"Description"} type="button"className={`btn btn-outline-primary Detription ${this.state.Destription_Review ? 'Active_Destription_Or_Review': ''}`}>Mô Tả</button>
                            </li>
                            <li >
                                <button onClick={(event) => this.Handle_Destription_Review(event)} data-destription={"Review"} type="button" className={`btn btn-outline-primary Review ${!this.state.Destription_Review ? 'Active_Destription_Or_Review': ''}`}>Đánh Giá</button>
                            </li>
                        </ul>
                        <div className="Content_Destription_Review">

                                    {Content_Destription_Review}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {        

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        on_Show_Video: (Show_Video) => {
            dispatch(Action.Show_Video(Show_Video))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InformationAndStatistics)
