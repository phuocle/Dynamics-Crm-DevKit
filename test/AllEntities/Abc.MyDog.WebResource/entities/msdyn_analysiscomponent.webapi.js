'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.msdyn_analysiscomponentApi = function (e) {
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
		var msdyn_analysiscomponent = {
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
		for (var field in msdyn_analysiscomponent) {
			var a = msdyn_analysiscomponent[field].a;
			var b = msdyn_analysiscomponent[field].b;
			var c = msdyn_analysiscomponent[field].c;
			var d = msdyn_analysiscomponent[field].d;
			var g = msdyn_analysiscomponent[field].g;
			var r = msdyn_analysiscomponent[field].r;
			msdyn_analysiscomponent[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_analysiscomponent.Entity = u;
		msdyn_analysiscomponent.EntityName = 'msdyn_analysiscomponent';
		msdyn_analysiscomponent.EntityCollectionName = 'msdyn_analysiscomponents';
		msdyn_analysiscomponent['@odata.etag'] = e['@odata.etag'];
		msdyn_analysiscomponent.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_analysiscomponent.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_analysiscomponent;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_analysiscomponent = {
		msdyn_AnalysisComponentType : {
			Component_Health: 192350001,
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