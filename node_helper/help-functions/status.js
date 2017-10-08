function statusChange(status, val, callback){
    if(!callback)console.log(status.name + ': _eventCurrentStatus = ' + val + ' (time: ' +  new Date(status.time).toLocaleString() + ') | oldvalue = ' + status.oldvalue + ' (oldtime: ' + new Date(status.oldtime).toLocaleString() + ')');
    else callback(status, val, callback);
};

function gl_create_status(n, c/*c - ОПЦИОНАЛЬНО*/) {
	let status = {
	    name: undefined,
	    eventCurrentStatus: undefined,
	    time: Date.parse(new Date()),
	    oldvalue: undefined,
	    oldtime: undefined,
	    get currentStatus(){return this.eventCurrentStatus;},
	    set currentStatus(val){
	    	this.oldvalue = this.eventCurrentStatus; 
	    	this.oldtime = this.time;
	    	this.eventCurrentStatus = val;
	    	this.time = Date.parse(new Date()); 
	    	if (!c){statusChange(this, val, false)}else{statusChange(this, val, c)};
	    }
	};

	global[n] = gl_inherit(status); 
	global[n].name = n;
}
global.gl_create_status = gl_create_status;

process.stdout.write('КОНТЕНТ ИЗ help-functions/status |');