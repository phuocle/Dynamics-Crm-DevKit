'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_delaydurationactivityApi = function (e) {
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
		var _msdyncrm_delaydurationactivity = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_automateschedule: { a: 'msdyncrm_automateschedule' },
			msdyncrm_delaydurationactivityId: { a: 'msdyncrm_delaydurationactivityid' },
			msdyncrm_description: { a: 'msdyncrm_description' },
			msdyncrm_durationamount: { a: 'msdyncrm_durationamount' },
			msdyncrm_durationunit: { a: 'msdyncrm_durationunit' },
			msdyncrm_expiration: { a: 'msdyncrm_expiration' },
			msdyncrm_expirationdate_UtcDateAndTime: { a: 'msdyncrm_expirationdate' },
			msdyncrm_insightsdata: { a: 'msdyncrm_insightsdata' },
			msdyncrm_manualschedulerdisabled: { a: 'msdyncrm_manualschedulerdisabled' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_permitteddays: { a: 'msdyncrm_permitteddays', g: true },
			msdyncrm_permittedtimeend_UtcDateAndTime: { a: 'msdyncrm_permittedtimeend' },
			msdyncrm_permittedtimestart_UtcDateAndTime: { a: 'msdyncrm_permittedtimestart' },
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
		var msdyncrm_delaydurationactivity = {};
		msdyncrm_delaydurationactivity.ODataEntity = e;
		msdyncrm_delaydurationactivity.FormattedValue = {};
		for (var field in _msdyncrm_delaydurationactivity) {
			var a = _msdyncrm_delaydurationactivity[field].a;
			var b = _msdyncrm_delaydurationactivity[field].b;
			var c = _msdyncrm_delaydurationactivity[field].c;
			var d = _msdyncrm_delaydurationactivity[field].d;
			var g = _msdyncrm_delaydurationactivity[field].g;
			var r = _msdyncrm_delaydurationactivity[field].r;
			webApiField(msdyncrm_delaydurationactivity, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_delaydurationactivity.Entity = u;
		msdyncrm_delaydurationactivity.EntityName = 'msdyncrm_delaydurationactivity';
		msdyncrm_delaydurationactivity.EntityCollectionName = 'msdyncrm_delaydurationactivities';
		msdyncrm_delaydurationactivity['@odata.etag'] = e['@odata.etag'];
		msdyncrm_delaydurationactivity.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_delaydurationactivity.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_delaydurationactivity;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_delaydurationactivity = {
		msdyncrm_durationunit : {
			Day: 192350002,
			Hour: 192350001,
			Month: 192350004,
			Week: 192350003
		},
		msdyncrm_permitteddays : {
			Friday: 192350004,
			Monday: 192350000,
			Saturday: 192350005,
			Sunday: 192350006,
			Thursday: 192350003,
			Tuesday: 192350001,
			Wednesday: 192350002
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