import React, { Component } from 'react';
import EditUser from './EditUser';
var itemSaveInfo = {};
class Add_User extends Component {
   
    constructor(props) {
      
        super(props);
        this.state = {
            itemSaveInfo : {}
        }
    }
 
      getText = (event)=>{
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
          [name]: value
        //   mang name hien tai chua cac state.id ,name
      });
        //Dong goi Du Lieu Vao Doi tuong
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.address = this.state.address;
        // item.level = this.state.level;
        // console.log(item);
        }
//   props.isEditUser
// prop.dataUserEdit
        // funcEditUser =  (itemSave)=>{
        //     this.setState({
        //         itemSaveInfo : itemSave
        //     })
        // }
        isShowFormEdit = ()=>{
        if(this.props.editUserStatus === true)
        {
            return <EditUser isEditUser = {()=>this.props.isEditUser()}
            dataUserEdit = {this.props.dataUserEdit} // chuyen du lieu trung gian giau Main Va EditUser
            funcEditUser = {(itemSave)=>this.props.funcEditUser(itemSave)}/>
        }
    }
    displayForm = ()=>
    {
        if(this.props.trangThaiForm === true)
        {
            return (
                <div className="col mt-4 ">
            <form className = "card border-primary pl-3 pr-3">
                <h4 className="text-center">Thêm User</h4>
                <hr/>
                <div className="form-group ">
                   
                   <input type="text" name = "id" className="form-control" placeholder = "ID" onChange = {(event)=>{this.getText(event)}}/>
               </div>
                <div className="form-group ">
                   
                    <input type="text" name = "name" className="form-control" placeholder = "Name" onChange = {(event)=>{this.getText(event)}}/>
                </div>
                <div className="form-group ">
                   
                    <input type="text" name = "address"  className="form-control" placeholder = "Address" onChange = {(event)=>{this.getText(event)}}/>
                </div>
                <div className="form-group ">
                     
                     <select className="form-control" name="level" id="" onChange = {(event)=>{this.getText(event)}}>
                       <option value={0}>Chọn Level</option>
                       <option value={1}>Admin</option>
                       <option value = {2}>Personnel</option>
                       <option value = {3}>Customer</option>
                     </select>
                  
                </div>
                <div className="form-group p-3"> 
                    <input type="reset" className="btn btn-block btn-outline-primary" defaultValue=" + ADD" onClick = {(id,name,address,level)=>{this.props.addNewUser(this.state.id,this.state.name,this.state.address,this.state.level)}}/>
                </div>
            </form>
            </div>
            )
         }
         
    }
    render() {
        return (
            <div>
                {this.displayForm()}
                {this.isShowFormEdit()}
            </div>
        );
    }
}

export default Add_User;