import React, { Component } from 'react';

class Table_Items extends Component {
  EditUser = ()=>{
    this.props.getValueEdit();
    this.props.isEditUser();
  }
    delUser = ()=>{
     this.props.delUser(this.props.id);
    }
    render() {
        return (
            <tr>
                <td scope="row">{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.address}</td>
                <td>{this.props.level}</td>
                <td>
                  <div className="form-group">
                    <button  className="btn btn-primary" onClick={()=>this.EditUser()}><i className="fa fa-edit"> Sửa</i></button>
                    <button  className="btn btn-danger"><i className="fa fa-trash" onClick = {()=>this.delUser()}> Xóa</i></button>
                  </div>                        
                </td>
            </tr>
        );
    }
}

export default Table_Items;