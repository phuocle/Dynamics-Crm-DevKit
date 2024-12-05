'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_salescopilotinsightApi = function (e) {
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
		var _msdyn_salescopilotinsight = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_activityid_appointment: { b: 'msdyn_activityid_appointment', a: '_msdyn_activityid_value', c: 'appointments', d: 'appointment' },
			msdyn_activityid_email: { b: 'msdyn_activityid_email', a: '_msdyn_activityid_value', c: 'emails', d: 'email' },
			msdyn_activityid_phonecall: { b: 'msdyn_activityid_phonecall', a: '_msdyn_activityid_value', c: 'phonecalls', d: 'phonecall' },
			msdyn_activityid_task: { b: 'msdyn_activityid_task', a: '_msdyn_activityid_value', c: 'tasks', d: 'task' },
			msdyn_ctatype: { a: 'msdyn_ctatype' },
			msdyn_duedate_UtcDateAndTime: { a: 'msdyn_duedate' },
			msdyn_insighttext: { a: 'msdyn_insighttext' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_salescopilotinsightId: { a: 'msdyn_salescopilotinsightid' },
			msdyn_targetentityid_account: { b: 'msdyn_targetentityid_account', a: '_msdyn_targetentityid_value', c: 'accounts', d: 'account' },
			msdyn_targetentityid_contact: { b: 'msdyn_targetentityid_contact', a: '_msdyn_targetentityid_value', c: 'contacts', d: 'contact' },
			msdyn_targetentityid_lead: { b: 'msdyn_targetentityid_lead', a: '_msdyn_targetentityid_value', c: 'leads', d: 'lead' },
			msdyn_targetentityid_opportunity: { b: 'msdyn_targetentityid_opportunity', a: '_msdyn_targetentityid_value', c: 'opportunities', d: 'opportunity' },
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
		var msdyn_salescopilotinsight = {};
		msdyn_salescopilotinsight.ODataEntity = e;
		msdyn_salescopilotinsight.FormattedValue = {};
		for (var field in _msdyn_salescopilotinsight) {
			var a = _msdyn_salescopilotinsight[field].a;
			var b = _msdyn_salescopilotinsight[field].b;
			var c = _msdyn_salescopilotinsight[field].c;
			var d = _msdyn_salescopilotinsight[field].d;
			var g = _msdyn_salescopilotinsight[field].g;
			var r = _msdyn_salescopilotinsight[field].r;
			webApiField(msdyn_salescopilotinsight, field, e, a, b, c, d, r, u, g);
		}
		msdyn_salescopilotinsight.Entity = u;
		msdyn_salescopilotinsight.EntityName = 'msdyn_salescopilotinsight';
		msdyn_salescopilotinsight.EntityCollectionName = 'msdyn_salescopilotinsights';
		msdyn_salescopilotinsight['@odata.etag'] = e['@odata.etag'];
		msdyn_salescopilotinsight.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_salescopilotinsight.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_salescopilotinsight;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_salescopilotinsight = {
		msdyn_activityidIdType : {
		},
		msdyn_ctatype : {
			Account_Catch_Up: 8,
			Email_Follow_Up: 2,
			Email_Reminder: 1,
			Lead_Catch_Up: 9,
			Meeting_Follow_Up: 6,
			Meeting_Reminder: 5,
			Opportunity_Catch_Up: 7,
			Phone_Call_Follow_Up: 4,
			Phone_Call_Reminder: 3
		},
		msdyn_targetentityidIdType : {
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