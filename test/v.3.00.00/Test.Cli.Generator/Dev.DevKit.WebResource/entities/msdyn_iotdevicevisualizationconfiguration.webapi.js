'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_iotdevicevisualizationconfigurationApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
				}
				if (isMultiOptionSet) {
					return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
				}
				return entity[logicalName + f];
			};
			var getValue = function () {
				if (entity[logicalName] === undefined || entity[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName];
					}
					return null;
				}
				if (isMultiOptionSet) {
					return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
				}
				return entity[logicalName];
			};
			var setValue = function (value) {
				if (isMultiOptionSet) value = value.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _msdyn_iotdevicevisualizationconfiguration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_actionname: { a: 'msdyn_actionname' },
			msdyn_Aggregation: { a: 'msdyn_aggregation' },
			msdyn_DeviceEvent: { a: 'msdyn_deviceevent' },
			msdyn_IoTDevice: { b: 'msdyn_IoTDevice', a: '_msdyn_iotdevice_value', c: 'msdyn_iotdevices', d: 'msdyn_iotdevice' },
			msdyn_IoTDeviceCategory: { b: 'msdyn_IoTDeviceCategory', a: '_msdyn_iotdevicecategory_value', c: 'msdyn_iotdevicecategories', d: 'msdyn_iotdevicecategory' },
			msdyn_iotdevicevisualizationconfigurationId: { a: 'msdyn_iotdevicevisualizationconfigurationid' },
			msdyn_Measurement: { b: 'msdyn_Measurement', a: '_msdyn_measurement_value', c: 'msdyn_iotpropertydefinitions', d: 'msdyn_iotpropertydefinition' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_Position: { a: 'msdyn_position' },
			msdyn_TimeRangeType: { a: 'msdyn_timerangetype' },
			msdyn_TimeRangeValue: { a: 'msdyn_timerangevalue' },
			msdyn_VisualizationConfigurationType: { a: 'msdyn_visualizationconfigurationtype' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_iotdevicevisualizationconfiguration = {};
		msdyn_iotdevicevisualizationconfiguration.ODataEntity = e;
		msdyn_iotdevicevisualizationconfiguration.FormattedValue = {};
		for (var field in _msdyn_iotdevicevisualizationconfiguration) {
			var a = _msdyn_iotdevicevisualizationconfiguration[field].a;
			var b = _msdyn_iotdevicevisualizationconfiguration[field].b;
			var c = _msdyn_iotdevicevisualizationconfiguration[field].c;
			var d = _msdyn_iotdevicevisualizationconfiguration[field].d;
			var g = _msdyn_iotdevicevisualizationconfiguration[field].g;
			var r = _msdyn_iotdevicevisualizationconfiguration[field].r;
			webApiField(msdyn_iotdevicevisualizationconfiguration, field, e, a, b, c, d, r, u, g);
		}
		msdyn_iotdevicevisualizationconfiguration.Entity = u;
		msdyn_iotdevicevisualizationconfiguration.EntityName = 'msdyn_iotdevicevisualizationconfiguration';
		msdyn_iotdevicevisualizationconfiguration.EntityCollectionName = 'msdyn_iotdevicevisualizationconfigurations';
		msdyn_iotdevicevisualizationconfiguration['@odata.etag'] = e['@odata.etag'];
		msdyn_iotdevicevisualizationconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_iotdevicevisualizationconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_iotdevicevisualizationconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_iotdevicevisualizationconfiguration = {
		msdyn_Aggregation : {
			Avg: 192350001,
			Count: 192350005,
			Max: 192350003,
			Min: 192350002,
			None: 192350000,
			Sum: 192350004
		},
		msdyn_DeviceEvent : {
			Case: 192350001,
			IoT_Alert: 192350000,
			Work_Order: 192350002
		},
		msdyn_TimeRangeType : {
			Days: 192350001,
			Hours: 192350000,
			Latest: 192350002
		},
		msdyn_VisualizationConfigurationType : {
			Configuration_1: 192350000,
			Configuration_2: 192350001,
			Configuration_3: 192350002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));