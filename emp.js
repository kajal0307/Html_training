var events=require("events");
var util=require('util');
var Employee=function(name){
    this.name=name;

}
util.inherits(Employee,events.EventEmitter);
var p=new Employee('kajal');
p.on('emp',function(eid,esal,desig){
    console.log(p.name+' Eid='+eid+'salary='+esal+' Designation='+desig)
});
p.emit('emp',1,7000,"Manager");
var r=new Employee('abc');
r.on('emp',function(eid,esal,desig){
    console.log(r.name+' Eid='+eid+'salary='+esal+' Designation='+desig)
});
r.emit('emp',2,15000,"Manager");
