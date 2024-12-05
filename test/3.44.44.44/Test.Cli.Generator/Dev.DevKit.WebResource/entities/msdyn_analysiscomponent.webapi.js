'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_analysiscomponentApi = function (e) {
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
		var _msdyn_analysiscomponent = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_analysiscomponentId: { a: 'msdyn_analysiscomponentid' },
			msdyn_AnalysisComponentType: { a: 'msdyn_analysiscomponenttype' },
			msdyn_AnalysisJobId: { b: 'msdyn_AnalysisJobId', a: '_msdyn_analysisjobid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob' },
			msdyn_ComponentId: { a: 'msdyn_componentid' },
			msdyn_ComponentName: { a: 'msdyn_componentname' },
			msdyn_ComponentType: { a: 'msdyn_componenttype' },
			msdyn_ComponentVersion: { a: 'msdyn_componentversion' },
			msdyn_ErrorCount: { a: 'msdyn_errorcount' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_RetryCount: { a: 'msdyn_retrycount' },
			msdyn_RuleFailCount: { a: 'msdyn_rulefailcount' },
			msdyn_RulePassCount: { a: 'msdyn_rulepasscount' },
			msdyn_RulePassRate: { a: 'msdyn_rulepassrate' },
			msdyn_sevcriticalcount: { a: 'msdyn_sevcriticalcount' },
			msdyn_sevhighcount: { a: 'msdyn_sevhighcount' },
			msdyn_sevlowcount: { a: 'msdyn_sevlowcount' },
			msdyn_sevmediumcount: { a: 'msdyn_sevmediumcount' },
			msdyn_SolutionHealthRuleSetId: { b: 'msdyn_SolutionHealthRuleSetId', a: '_msdyn_solutionhealthrulesetid_value', c: 'msdyn_solutionhealthrulesets', d: 'msdyn_solutionhealthruleset' },
			msdyn_SuggestionCount: { a: 'msdyn_suggestioncount' },
			msdyn_WarningCount: { a: 'msdyn_warningcount' },
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
		var msdyn_analysiscomponent = {};
		msdyn_analysiscomponent.ODataEntity = e;
		msdyn_analysiscomponent.FormattedValue = {};
		for (var field in _msdyn_analysiscomponent) {
			var a = _msdyn_analysiscomponent[field].a;
			var b = _msdyn_analysiscomponent[field].b;
			var c = _msdyn_analysiscomponent[field].c;
			var d = _msdyn_analysiscomponent[field].d;
			var g = _msdyn_analysiscomponent[field].g;
			var r = _msdyn_analysiscomponent[field].r;
			webApiField(msdyn_analysiscomponent, field, e, a, b, c, d, r, u, g);
		}
		msdyn_analysiscomponent.Entity = u;
		msdyn_analysiscomponent.EntityName = 'msdyn_analysiscomponent';
		msdyn_analysiscomponent.EntityCollectionName = 'msdyn_analysiscomponents';
		msdyn_analysiscomponent['@odata.etag'] = e['@odata.etag'];
		msdyn_analysiscomponent.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_analysiscomponent.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_analysiscomponent;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_analysiscomponent = {
		msdyn_AnalysisComponentType : {
			Component_Health: 192350001,
			Object_Health: 192350002,
			Organization_Health: 192350000
		},
		msdyn_ComponentType : {
			Configuration: 192350005,
			Entity: 192350001,
			Form: 192350003,
			Plugin: 192350004,
			Solution: 192350000,
			View: 192350002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Canceled: 2,
			Complete: 192350001,
			Completed_With_Exceptions: 192350003,
			Exception: 192350002,
			Pending: 1,
			Running: 192350000
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