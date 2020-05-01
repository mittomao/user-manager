import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
    }
    hienthiNut = ()=>{
        if(this.props.trangThaiForm === true)
        {
            return <button className="btn w-100 btn-secondary mb-3" onClick = {()=>this.props.changeNut()}>Close</button>
        }
        else
        {
            return <button className="btn w-100 btn-primary mb-3" onClick = {()=>this.props.changeNut()} >ADD USER</button>
        }
    }
    render() {
        return (
            <div>
                <form>
                <div className="form-inline mt-4 mb-4">
                    <label >Nhập Từ Khóa</label>
                    <input type="text" className="form-control mr-3 ml-3" onChange = {this.props.layTuKhoa}/>
                    {/* <input type="submit"   className = "btn btn-primary" value = "Search" /> */}
                    {/* onClick ={this.props.chuyenTuKhoa} */}
                </div>
             </form>
             {this.hienthiNut()}
            </div>
            
        );
    }
}

export default Search;