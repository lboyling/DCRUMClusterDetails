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
		  id:1,
		  servicetag: "GXBAC"
		},
		{
		  name: 'RUM Console',
		  hostname: 'pointman.mynetgear.com',
		  ip: '192.168.2.103',
		  port: '4183',
		  type: 'Console',
		  version: '17.0.2.29',
		  secureConn: true,
		  id:0
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
		this.testitem = 
		{
		  name: 'AMD Server 1',
		  hostname: 'pointman.mynetgear.com',
		  ip: '192.168.2.113',
		  port: '443',
		  type: 'AMD',
		  version: '17.0.2.49',
		  secureConn: true,
		  id:6
		};
		for (var j=3; j<15; j++) {
			var testitem = 
				{
				  name: 'AMD Server ' + j,
				  hostname: 'pointman.mynetgear.com',
				  ip: '192.168.2.113',
				  port: 443 + j,
				  type: 'AMD',
				  version: '17.0.2.49',
				  secureConn: true,
				  id: j
				};
			
			this.devices.push(testitem);
		};
		this.clusterName = "Home Lab Environment"
		
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
	
}).filter('highlight', function($sce) {
		return function(text, phrase) {
		  if (phrase) {
			text = text.replace(new RegExp('(' + phrase + ')', 'gi'),
			  '<span class="highlighted">$1</span>');
		  }
		  return $sce.trustAsHtml(text)
		}
	  });