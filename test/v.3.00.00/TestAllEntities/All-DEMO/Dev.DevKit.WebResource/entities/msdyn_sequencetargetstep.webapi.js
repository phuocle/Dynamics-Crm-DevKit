'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_sequencetargetstepApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var property = {};
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return EMPTY_STRING;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return EMPTY_STRING;
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
					value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(property, 'FormattedValue', {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(property, 'Value', {
					get: getValue
				});
			}
			else {
				Object.defineProperty(property, 'Value', {
					get: getValue,
					set: setValue
				});
			}
			return property;
		}
		var msdyn_sequencetargetstep = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_completedon_UtcDateAndTime: { a: 'msdyn_completedon' },
			msdyn_convertedtomanualfrom: { a: 'msdyn_convertedtomanualfrom' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_duetime_UtcDateAndTime: { a: 'msdyn_duetime' },
			msdyn_errorstate: { a: 'msdyn_errorstate' },
			msdyn_linkedactivityid: { a: 'msdyn_linkedactivityid' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_operationparameter: { a: 'msdyn_operationparameter' },
			msdyn_sequenceduetime_UtcDateAndTime: { a: 'msdyn_sequenceduetime' },
			msdyn_sequencestepId: { a: 'msdyn_sequencestepid' },
			msdyn_sequencetarget: { b: 'msdyn_sequencetarget', a: '_msdyn_sequencetarget_value', c: 'msdyn_sequencetargets', d: 'msdyn_sequencetarget' },
			msdyn_sequencetargetstepId: { a: 'msdyn_sequencetargetstepid' },
			msdyn_subtype: { a: 'msdyn_subtype' },
			msdyn_type: { a: 'msdyn_type' },
			msdyn_waitstate: { a: 'msdyn_waitstate' },
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
		for (var field in msdyn_sequencetargetstep) {
			var a = msdyn_sequencetargetstep[field].a;
			var b = msdyn_sequencetargetstep[field].b;
			var c = msdyn_sequencetargetstep[field].c;
			var d = msdyn_sequencetargetstep[field].d;
			var g = msdyn_sequencetargetstep[field].g;
			var r = msdyn_sequencetargetstep[field].r;
			msdyn_sequencetargetstep[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_sequencetargetstep.Entity = u;
		msdyn_sequencetargetstep.EntityName = 'msdyn_sequencetargetstep';
		msdyn_sequencetargetstep.EntityCollectionName = 'msdyn_sequencetargetsteps';
		msdyn_sequencetargetstep['@odata.etag'] = e['@odata.etag'];
		msdyn_sequencetargetstep.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_sequencetargetstep.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_sequencetargetstep;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_sequencetargetstep = {
		msdyn_convertedtomanualfrom : {
			Auto_action: 4,
			Automated_Email: 3,
			Email: 4202,
			LinkedIn_action: 5,
			Phone_call: 4210,
			Simple_Condition: 1,
			Task: 4212,
			Wait: 0
		},
		msdyn_errorstate : {
			Field_update_failed: 1,
			NA: 0
		},
		msdyn_subtype : {
			Default: 0,
			LinkedInConnect: 3,
			LinkedInGetIntroduced: 2,
			LinkedInMail: 4,
			LinkedInResearch: 1
		},
		msdyn_type : {
			Auto_action: 4,
			Automated_Email: 3,
			Email: 4202,
			LinkedIn_action: 5,
			Phone_call: 4210,
			Simple_Condition: 1,
			Task: 4212,
			Wait: 0
		},
		msdyn_waitstate : {
			NA: 0,
			Skipped: 2,
			Waiting: 1,
			Waiting_for_update: 3
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Cancelled: 4,
			Completed: 2,
			Open: 1,
			Skipped: 3
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