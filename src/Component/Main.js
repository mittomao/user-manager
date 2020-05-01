import React, { Component } from 'react';
import Search from './Search';
import Add_User from './Add_User';
import Table_Data from './Table_Data';
import dataJson from './Data.json';
class Main extends Component {
    constructor(props) {  
        super(props);
        this.state = (
            {
                trangThaiForm : false,
                tukhoa : "",
                dt :dataJson,
                editUserStatus :false,
                dataUserEdit : {}
            }
        )
    }

componentWillMount() {
   if(localStorage.getItem("userData")===null)
   {
       localStorage.setItem("userData",JSON.stringify(dataJson));
   }
   else
   {
        this.setState({
            dt : JSON.parse(localStorage.getItem("userData"))
        })
   }
}

    // Xoa User
        funcDelUser = (idUserDel)=>{
            var qs = window.confirm("Ban Co Muon Xoa Khong");
            if(qs === true)
            {
                var dataAfterDel = this.state.dt.filter(item => item.id!==idUserDel);
                   
                this.setState({
                    dt : dataAfterDel
                })
                localStorage.setItem("userData",JSON.stringify(dataAfterDel))
                
            }
            else
            {
                alert("Bye Bye");
            }
            
            // var arr = [1,2,3,4];
            // var x = 3;
            // var brr = arr.filter(item => item!=x);
            // console.log(brr)
        }
        doiTrangThai=()=>{
        this.setState({
            trangThaiForm : !this.state.trangThaiForm
        })
        
    }
    
    layTuKhoa = (event)=>{
      this.setState({
          tukhoa : event.target.value
      })
    }
 
    // Add Data 
    addNewUser = (id,name,address,level)=>{
        // dong goi vao 1 doi tuongitem de gui di 
        var item = {};
        item.id = id;
        item.name = name;
        item.address = address;
        item.level = level;

        var items = this.state.dt; // gans du lieu hienco vao dt items
        items.push(item);
        this.setState({
            dt : items
        });
        localStorage.setItem("userData",JSON.stringify(items));

        // console.log("Da Ket Noi")
        // console.log(this.state.dt);
    }
//Sua Thong tin
    funcEditUser = (itemSave)=>{
    // dong goi vao 1 doi tuongitem de gui di 
    console.log(this.state.dt);
    
    console.log(itemSave);
      this.state.dt.forEach((value)=>{
          if(value.id === itemSave.id)
          {
            value.name = itemSave.name;
            value.address = itemSave.address;
            value.level = itemSave.level;
          }
        localStorage.setItem("userData",JSON.stringify(this.state.dt));
         
      })
      //console.log(itemSave);
 // gans du lieu hienco vao dt items
    
    //console.log(this.state.dt);
}
    // Ket Noi VOi Table_Data , Lay Dc thong tin Can Sua

    getValueEdit = (user)=>{
     this.setState({
         dataUserEdit : user //chuyen du lieu khi edit vao 1 state de chuyen xuong add user
     })
    //    console.log(this.state.dataUserEdit)
    }
    // KEt Noi Voi Form Edit User Thong Qua props

     isChangeEditUser = () => {
         this.setState({
             editUserStatus : !this.state.editUserStatus
         })
     } 
    render() {
       console.log(dataJson);
       console.log(this.state.dt);
       // tim kiem
         var ketqua = [];
          this.state.dt.forEach((item)=>{
            if(item.name.indexOf(this.state.tukhoa) !==-1)
            {
                ketqua.push(item);
            }
        })

        return (
            
            <div>
                <Search changeNut = {()=>this.doiTrangThai()} trangThaiForm = {this.state.trangThaiForm}
                   layTuKhoa = {(event)=>this.layTuKhoa(event)}
                
                ></Search>
            <div className="row ">
                    <Table_Data chuyenTuKhoa = {ketqua} 
                     getValueEdit = {(user)=>this.getValueEdit(user)}
                     isEditUser = {()=>this.isChangeEditUser()}
                     delUser = {(idUserDel)=>this.funcDelUser(idUserDel)}
                    ></Table_Data>

                    <Add_User 
                    trangThaiForm = {this.state.trangThaiForm}
                    addNewUser = {(id,name,address,level)=>{this.addNewUser(id,name,address,level)}}
                    editUserStatus = {this.state.editUserStatus}
                    isEditUser = {()=>this.isChangeEditUser()}
                    dataUserEdit = {this.state.dataUserEdit}
                    funcEditUser = {(itemSave)=>this.funcEditUser(itemSave)}
                    >   
                    </Add_User>  
            </div>
            </div>
        );
    }
}
export default Main;