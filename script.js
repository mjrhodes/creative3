var app = new Vue({
    el: '#app',
    data: {
	newName:'',
	monday:false,
	tuesday:false,
	wednesday:false,
	thursday:false,
	friday:false,	
	schedules:{},
	employees:[],
	mondayWorkers:[],
	tuesdayWorkers:[],
	wednesdayWorkers:[],
	thursdayWorkers:[],
	fridayWorkers:[]
    },
    methods: {
	addEmployee: function() {
	    this.employees.push(this.newName);
	    this.schedules[this.newName] = [];
	    if(this.monday) this.schedules[this.newName].push("Monday");
	    if(this.tuesday) this.schedules[this.newName].push("Tuesday");
	    if(this.wednesday) this.schedules[this.newName].push("Wednesday");
	    if(this.thursday) this.schedules[this.newName].push("Thursday");
	    if(this.friday) this.schedules[this.newName].push("Friday");    
	    this.newName = '';
	    this.monday = false;
	    this.tuesday = false;
	    this.wednesday = false;
	    this.thursday = false;
	    this.friday = false;
	},
	clearAll: function() {
	    this.schedules = {};
	    this.employees = [];
	    this.mondayWorkers = [];
	    this.tuesdayWorkers = [];
	    this.wednesdayWorkers = [];
	    this.thursdayWorkers = [];
	    this.fridayWorkers = [];
	},
	generate: function() {
	    this.mondayWorkers = [];
	    this.tuesdayWorkers = [];
	    this.wednesdayWorkers = [];
	    this.thursdayWorkers = [];
	    this.fridayWorkers = [];
	    for(i = 0; i < this.employees.length; i++) {
		var name = this.employees[i];
		console.log(name);
		var list = this.schedules[name];
		if(list.includes("Monday")) this.mondayWorkers.push(name);
		if(list.includes("Tuesday")) this.tuesdayWorkers.push(name);
		if(list.includes("Wednesday")) this.wednesdayWorkers.push(name);
		if(list.includes("Thursday")) this.thursdayWorkers.push(name);
		if(list.includes("Friday")) this.fridayWorkers.push(name);
	    }
	}
    }
});
