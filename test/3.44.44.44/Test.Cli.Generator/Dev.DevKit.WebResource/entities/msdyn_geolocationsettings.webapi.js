'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_geolocationsettingsApi = function (e) {
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
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
		var _msdyn_geolocationsettings = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_BeaconConfiguration: { a: 'msdyn_beaconconfiguration' },
			msdyn_EnableLocationTracking: { a: 'msdyn_enablelocationtracking' },
			msdyn_fridayendtime_TimezoneDateAndTime: { a: 'msdyn_fridayendtime' },
			msdyn_fridaystarttime_TimezoneDateAndTime: { a: 'msdyn_fridaystarttime' },
			msdyn_geolocationsettingsId: { a: 'msdyn_geolocationsettingsid' },
			msdyn_mondayendtime_TimezoneDateAndTime: { a: 'msdyn_mondayendtime' },
			msdyn_mondaystarttime_TimezoneDateAndTime: { a: 'msdyn_mondaystarttime' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_refreshIntervalSeconds: { a: 'msdyn_refreshintervalseconds' },
			msdyn_saturdayendtime_TimezoneDateAndTime: { a: 'msdyn_saturdayendtime' },
			msdyn_saturdaystarttime_TimezoneDateAndTime: { a: 'msdyn_saturdaystarttime' },
			msdyn_sundayendtime_TimezoneDateAndTime: { a: 'msdyn_sundayendtime' },
			msdyn_sundaystarttime_TimezoneDateAndTime: { a: 'msdyn_sundaystarttime' },
			msdyn_thursdayendtime_TimezoneDateAndTime: { a: 'msdyn_thursdayendtime' },
			msdyn_thursdaystarttime_TimezoneDateAndTime: { a: 'msdyn_thursdaystarttime' },
			msdyn_tuesdayendtime_TimezoneDateAndTime: { a: 'msdyn_tuesdayendtime' },
			msdyn_tuesdaystarttime_TimezoneDateAndTime: { a: 'msdyn_tuesdaystarttime' },
			msdyn_wednesdayendtime_TimezoneDateAndTime: { a: 'msdyn_wednesdayendtime' },
			msdyn_wednesdaystarttime_TimezoneDateAndTime: { a: 'msdyn_wednesdaystarttime' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_geolocationsettings = {};
		msdyn_geolocationsettings.ODataEntity = e;
		msdyn_geolocationsettings.FormattedValue = {};
		for (var field in _msdyn_geolocationsettings) {
			var a = _msdyn_geolocationsettings[field].a;
			var b = _msdyn_geolocationsettings[field].b;
			var c = _msdyn_geolocationsettings[field].c;
			var d = _msdyn_geolocationsettings[field].d;
			var g = _msdyn_geolocationsettings[field].g;
			var r = _msdyn_geolocationsettings[field].r;
			webApiField(msdyn_geolocationsettings, field, e, a, b, c, d, r, u, g);
		}
		msdyn_geolocationsettings.Entity = u;
		msdyn_geolocationsettings.EntityName = 'msdyn_geolocationsettings';
		msdyn_geolocationsettings.EntityCollectionName = 'msdyn_geolocationsettingses';
		msdyn_geolocationsettings['@odata.etag'] = e['@odata.etag'];
		msdyn_geolocationsettings.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_geolocationsettings.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_geolocationsettings;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_geolocationsettings = {
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