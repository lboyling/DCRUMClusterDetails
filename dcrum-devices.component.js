'use strict';
angular.
  module('dcrum-devices').
  component('dcrumdevicelist', {
    templateUrl: "dcrum-devices.template.html",
	//template: '<p>Total number of devices: {{$ctrl.devices.length}}</p>',
	
	controller: function dcrumdevicelistController () {
	  this.devices = [
		{
		  name: 'CAS Server 1',
		  hostname: 'pointman.mynetgear.com',
		  ip: '192.168.2.103',
		  port: '443',
		  type: 'CAS',
		  version: '17.0.2.44',
		  secureConn: true,
		  id:1
		},
		{
		  name: 'ADS Server 1',
		  hostname: 'pointman.mynetgear.com',
		  ip: '192.168.2.103',
		  port: '444',
		  type: 'ADS',
		  version: '17.0.2.44',
		  secureConn: false,
		  id:3
		},
		{
		  name: 'AMD Server 1',
		  hostname: 'pointman.mynetgear.com',
		  ip: '192.168.2.113',
		  port: '443',
		  type: 'AMD',
		  version: '17.0.2.49',
		  secureConn: true,
		  id:6
		}
		];
		this.deviceIncludes = [];
    
		this.includeDevice = function(type) {
        var i = $.inArray(type, this.deviceIncludes);
        if (i > -1) {
            scope.deviceIncludes.splice(i, 1);
        } else {
            scope.deviceIncludes.push(type);
        }
		
		this.deviceFilter = function(device) {
        if (this.deviceIncludes.length > 0) {
            if ($.inArray(device.type, this.deviceIncludes < 0))
                return;
			
        }
        
        return device;
		}
		
		
    }
	}
	
});