'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_taskactivitymarketingtemplateApi = function (e) {
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
		var _msdyncrm_taskactivitymarketingtemplate = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_description: { a: 'msdyncrm_description' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_prioritycode: { a: 'msdyncrm_prioritycode' },
			msdyncrm_scheduleddurationminutes: { a: 'msdyncrm_scheduleddurationminutes' },
			msdyncrm_scheduletype: { a: 'msdyncrm_scheduletype' },
			msdyncrm_startdate_DateOnly: { a: 'msdyncrm_startdate' },
			msdyncrm_startdelay: { a: 'msdyncrm_startdelay' },
			msdyncrm_starttimehour: { a: 'msdyncrm_starttimehour' },
			msdyncrm_starttimeminute: { a: 'msdyncrm_starttimeminute' },
			msdyncrm_subject: { a: 'msdyncrm_subject' },
			msdyncrm_taskactivitymarketingtemplateId: { a: 'msdyncrm_taskactivitymarketingtemplateid' },
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
		var msdyncrm_taskactivitymarketingtemplate = {};
		msdyncrm_taskactivitymarketingtemplate.ODataEntity = e;
		msdyncrm_taskactivitymarketingtemplate.FormattedValue = {};
		for (var field in _msdyncrm_taskactivitymarketingtemplate) {
			var a = _msdyncrm_taskactivitymarketingtemplate[field].a;
			var b = _msdyncrm_taskactivitymarketingtemplate[field].b;
			var c = _msdyncrm_taskactivitymarketingtemplate[field].c;
			var d = _msdyncrm_taskactivitymarketingtemplate[field].d;
			var g = _msdyncrm_taskactivitymarketingtemplate[field].g;
			var r = _msdyncrm_taskactivitymarketingtemplate[field].r;
			webApiField(msdyncrm_taskactivitymarketingtemplate, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_taskactivitymarketingtemplate.Entity = u;
		msdyncrm_taskactivitymarketingtemplate.EntityName = 'msdyncrm_taskactivitymarketingtemplate';
		msdyncrm_taskactivitymarketingtemplate.EntityCollectionName = 'msdyncrm_taskactivitymarketingtemplates';
		msdyncrm_taskactivitymarketingtemplate['@odata.etag'] = e['@odata.etag'];
		msdyncrm_taskactivitymarketingtemplate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_taskactivitymarketingtemplate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_taskactivitymarketingtemplate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_taskactivitymarketingtemplate = {
		msdyncrm_prioritycode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		msdyncrm_scheduletype : {
			Delay_in_days: 1,
			Fixed_date: 0
		},
		msdyncrm_starttimehour : {
			_00: 0,
			_01: 1,
			_02: 2,
			_03: 3,
			_04: 4,
			_05: 5,
			_06: 6,
			_07: 7,
			_08: 8,
			_09: 9,
			_10: 10,
			_11: 11,
			_12: 12,
			_13: 13,
			_14: 14,
			_15: 15,
			_16: 16,
			_17: 17,
			_18: 18,
			_19: 19,
			_20: 20,
			_21: 21,
			_22: 22,
			_23: 23
		},
		msdyncrm_starttimeminute : {
			_00: 0,
			_15: 15,
			_30: 30,
			_45: 45
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