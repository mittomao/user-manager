import React, { Component } from 'react';

class EditUser extends Component {
    // Nhan Dc 1 props.dataUserEdit
    // ta Bat Dau Truyen Tham SO Vao Caca The input DUa vao data tu props
   constructor(props) {
       super(props);
       this.state = {
           id : this.props.dataUserEdit.id,
           name : this.props.dataUserEdit.name,
           address : this.props.dataUserEdit.address,
           level : this.props.dataUserEdit.level
       }
   }
   
    
     saveEditUser = () => {
         var itemSave = {};
         itemSave.id = this.state.id;
         itemSave.name= this.state.name;
         itemSave.address= this.state.address;
         itemSave.level = this.state.level;
        this.props.isEditUser();
        this.props.funcEditUser(itemSave);
        console.log(this.state);
     } 
     getTextEdit = (event)=>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
          //   mang name hien tai chua cac state.id ,name
        });
    }
   
    render() {
        return (
            <div className="col mt-4 ">
            <form className = "card border-primary pl-3 pr-3">
                <h4 className="text-center">Edit User</h4>
                <hr/>
                <div className="form-group ">
                   
                   <input defaultValue = {this.props.dataUserEdit.id} type="text" name = "id" className="form-control" placeholder = "ID" onChange = {(event)=>this.getTextEdit(event)}/>
               </div>
                <div className="form-group ">
                   
                    <input type="text" defaultValue = {this.props.dataUserEdit.name} name = "name" className="form-control" placeholder = "Name" onChange = {(event)=>this.getTextEdit(event)}/>
                </div>
                <div className="form-group ">
                   
                    <input type="text" defaultValue = {this.props.dataUserEdit.address} name = "address"  className="form-control" placeholder = "Address" onChange = {(event)=>this.getTextEdit(event)}/>
                </div>
                <div className="form-group ">
                     
                     <select className="form-control" name="level" id="" defaultValue = {this.props.dataUserEdit.level} onChange = {(event)=>this.getTextEdit(event)}>
                       <option value={0}>Chọn Level</option>
                       <option value={1}>Admin</option>
                       <option value = {2}>Personnel</option>
                       <option value = {3}>Customer</option>
                     </select>
                  
                </div>
                <div className="form-group p-3"> 
                    <input type="button" className="btn btn-block btn-outline-primary" defaultValue=" + Edit" 
                   onClick={()=>this.saveEditUser()}/>
                   {/*   */}
                </div>
            </form>
            </div>
        );
    }
}

export default EditUser;