import React, { Component } from 'react';
import Table_Items from './Table_Items';
class Table_Data extends Component {
    render() {  
        return (
          <div className="col">
            <table className="table  w-100 table-fluid table-bordered table-hover">
            <thead className="thead-inverse">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Quyền Quản Trị</th>
                <th>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              
              {
              this.props.chuyenTuKhoa.map((value,key)=>{
                  //this.props.delUser tu Main
                  return(
                    <Table_Items
                    delUser = {(idUserDel)=>this.props.delUser(idUserDel)}
                    key = {key}
                    id = {value.id}
                    name = {value.name}
                    address = {value.address}
                    level = {value.level}
                    getValueEdit = {(user)=>this.props.getValueEdit(value)} 
                    isEditUser = {()=>this.props.isEditUser()}// Chuyen thang props tu main js xg data item
                    ></Table_Items>
                  )          
              })}
            </tbody>
          </table>
          </div>
        );
    }
}

export default Table_Data;