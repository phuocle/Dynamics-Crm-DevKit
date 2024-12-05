'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_activityanalysisconfigApi = function (e) {
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
		var _msdyn_activityanalysisconfig = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_activityanalysisconfigId: { a: 'msdyn_activityanalysisconfigid' },
			msdyn_communicationfrequency: { a: 'msdyn_communicationfrequency' },
			msdyn_currentstatus: { a: 'msdyn_currentstatus' },
			msdyn_datasource: { a: 'msdyn_datasource' },
			msdyn_emailweight: { a: 'msdyn_emailweight' },
			msdyn_exchangemarsstatus: { a: 'msdyn_exchangemarsstatus' },
			msdyn_healthfeaturestatus: { a: 'msdyn_healthfeaturestatus' },
			msdyn_ignoreexchangeoptincheck: { a: 'msdyn_ignoreexchangeoptincheck' },
			msdyn_inmailweight: { a: 'msdyn_inmailweight' },
			msdyn_isaprilpreviewenabled: { a: 'msdyn_isaprilpreviewenabled' },
			msdyn_islinkedinenabled: { a: 'msdyn_islinkedinenabled' },
			msdyn_isorgsettingenable: { a: 'msdyn_isorgsettingenable' },
			msdyn_linkedinstatus: { a: 'msdyn_linkedinstatus' },
			msdyn_meetingweight: { a: 'msdyn_meetingweight' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_oneclickactivityanalysisprovisioning: { a: 'msdyn_oneclickactivityanalysisprovisioning' },
			msdyn_orgtypesuffix: { a: 'msdyn_orgtypesuffix' },
			msdyn_otheractivites: { a: 'msdyn_otheractivites' },
			msdyn_overflowentitylist: { a: 'msdyn_overflowentitylist' },
			msdyn_phonecallweight: { a: 'msdyn_phonecallweight' },
			msdyn_taskweight: { a: 'msdyn_taskweight' },
			msdyn_timelineactivites: { a: 'msdyn_timelineactivites' },
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
		var msdyn_activityanalysisconfig = {};
		msdyn_activityanalysisconfig.ODataEntity = e;
		msdyn_activityanalysisconfig.FormattedValue = {};
		for (var field in _msdyn_activityanalysisconfig) {
			var a = _msdyn_activityanalysisconfig[field].a;
			var b = _msdyn_activityanalysisconfig[field].b;
			var c = _msdyn_activityanalysisconfig[field].c;
			var d = _msdyn_activityanalysisconfig[field].d;
			var g = _msdyn_activityanalysisconfig[field].g;
			var r = _msdyn_activityanalysisconfig[field].r;
			webApiField(msdyn_activityanalysisconfig, field, e, a, b, c, d, r, u, g);
		}
		msdyn_activityanalysisconfig.Entity = u;
		msdyn_activityanalysisconfig.EntityName = 'msdyn_activityanalysisconfig';
		msdyn_activityanalysisconfig.EntityCollectionName = 'msdyn_activityanalysisconfigs';
		msdyn_activityanalysisconfig['@odata.etag'] = e['@odata.etag'];
		msdyn_activityanalysisconfig.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_activityanalysisconfig.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_activityanalysisconfig;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_activityanalysisconfig = {
		msdyn_communicationfrequency : {
			Once_a_day: 1,
			Once_a_month: 5,
			Once_a_week: 3,
			Once_every_couple_of_weeks: 4,
			Once_every_few_days: 2
		},
		msdyn_currentstatus : {
			ActivationCompleted: 3,
			ActivationFailed: 4,
			ActivationInProgress: 2,
			DeactivationCompleted: 6,
			DeactivationFailed: 7,
			DeactivationInProgress: 5,
			None: 1
		},
		msdyn_datasource : {
			Both: 3,
			CRM: 1,
			MARS: 2
		},
		msdyn_exchangemarsstatus : {
			ActivationCompleted: 3,
			ActivationFailed: 4,
			ActivationFailedDueToOptin_401: 401,
			ActivationFailedDueToOptin_5: 5,
			ActivationFailedDueToOptinAccess: 402,
			ActivationInProgress: 2,
			DeactivationCompleted: 7,
			DeactivationInProgress: 6,
			None: 1
		},
		msdyn_healthfeaturestatus : {
			Disabled: 2,
			Enabled: 1
		},
		msdyn_linkedinstatus : {
			ActivationCompleted: 3,
			ActivationFailed: 4,
			ActivationInProgress: 2,
			DeactivationCompleted: 6,
			DeactivationFailed: 7,
			DeactivationInProgress: 5,
			None: 1,
			UpgradeFailed: 10,
			UpgradeInProgress: 9,
			UpgradePending: 8,
			UpgradeSucceeded: 11
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