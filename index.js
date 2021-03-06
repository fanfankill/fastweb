//入口文件
const express=require('express')
const router=require('./router.js')
const app=express()
const path=require('path')

//数据库测试完成 7.23版本更新

//启动静态资源服务
app.use(express.static( 'public'));

//引入socket.io
var server=app.listen(3002)

//放用户

var io=require('socket.io').listen(server)

const users=[]
let count=0
io.on('connection',function(socket){
  console.log("新用户加入房间");
  console.log(count++);
  //监听Login事件
  socket.on('login',(data)=>{
          // console.log(data);
      //放数据,顺便增加唯一id  
      data.id=socket.id
      if(users.some(v=>{ return v.adminid==data.adminid}) || !data.adminid)
      {
        console.log('已经进入');
        io.emit('loginback',{...data,users,flag:0})
      }else{
        console.log('ww');
      users.push({...data})
      console.log(users);
      io.emit('loginback',{...data,users,flag:1})
      // console.log(users.length);

      // console.log('id是'+socket.id);
      //所有人广播
      }
  })

  //修改存放的头像和姓名
  socket.on('changemes',data=>{
    //每次修改信息后就应该发送请求过来
    //这时候根据socket的Id来修改我们的信息
    users.forEach((value,index)=>{
      console.log(socket.id);
      if(value.id==socket.id){
        console.log('我改了他的名字和Img');
        value.img=data.img
        value.adminname=data.adminname
      }
      console.log(users);
    })
    
    console.log(data);
  })

  //接受消息
  socket.on('client',data2=>{
      // console.log(data2.value);
      data2.users=users.find(u=>u.id==socket.id)
      // console.log(data2.users);
      socket.broadcast.emit('sendmes',data2)
  })

  socket.on('disconnect',function(){
    console.log(users);
    let data={}
    let index
     users.forEach((u,i)=>{
       console.log(u);
       if(u.id==socket.id)
       {
          console.log('我找到了'+i);
          data=u
          index=i
       }
     })
     console.log(data,index);
    console.log(data.adminname+'离开');
    //需要把数组中这个人移除
    console.log('删除前'+users.length);
    users.splice(index,1)
    console.log('删除后'+users.length);
    io.emit('somelive',{...data,users})
  })
  
})


//处理请求参数
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



//设置跨域请求
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });


//启动服务器
//配置路由
app.use(router);
//监听端口


app.listen(3000,()=>{
    console.log('服务器启动成功 端口为3000');
})
