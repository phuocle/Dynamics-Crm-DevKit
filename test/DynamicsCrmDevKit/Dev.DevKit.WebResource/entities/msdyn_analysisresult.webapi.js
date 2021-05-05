'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_analysisresultApi = function (e) {
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
		var msdyn_analysisresult = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AnalysisComponentId: { b: 'msdyn_AnalysisComponentId', a: '_msdyn_analysiscomponentid_value', c: 'msdyn_analysiscomponents', d: 'msdyn_analysiscomponent' },
			msdyn_AnalysisComponentType: { a: 'msdyn_analysiscomponenttype' },
			msdyn_AnalysisJobId: { b: 'msdyn_AnalysisJobId', a: '_msdyn_analysisjobid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob' },
			msdyn_analysisresultId: { a: 'msdyn_analysisresultid' },
			msdyn_Category: { a: 'msdyn_category' },
			msdyn_ComponentType: { a: 'msdyn_componenttype' },
			msdyn_EntityName: { a: 'msdyn_entityname' },
			msdyn_FileUri: { a: 'msdyn_fileuri' },
			msdyn_HasResolution: { a: 'msdyn_hasresolution' },
			msdyn_helplink: { a: 'msdyn_helplink' },
			msdyn_Level: { a: 'msdyn_level' },
			msdyn_Line: { a: 'msdyn_line' },
			msdyn_Member: { a: 'msdyn_member' },
			msdyn_Message: { a: 'msdyn_message' },
			msdyn_MessageArguments: { a: 'msdyn_messagearguments' },
			msdyn_MessageId: { a: 'msdyn_messageid' },
			msdyn_Module: { a: 'msdyn_module' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_RepairIssueType: { a: 'msdyn_repairissuetype' },
			msdyn_ReturnStatus: { a: 'msdyn_returnstatus' },
			msdyn_RuleId: { a: 'msdyn_ruleid' },
			msdyn_RuleReferenceUri: { a: 'msdyn_rulereferenceuri' },
			msdyn_Severity: { a: 'msdyn_severity' },
			msdyn_Snippet: { a: 'msdyn_snippet' },
			msdyn_SolutionHealthMessage: { a: 'msdyn_solutionhealthmessage' },
			msdyn_Type: { a: 'msdyn_type' },
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
		for (var field in msdyn_analysisresult) {
			var a = msdyn_analysisresult[field].a;
			var b = msdyn_analysisresult[field].b;
			var c = msdyn_analysisresult[field].c;
			var d = msdyn_analysisresult[field].d;
			var g = msdyn_analysisresult[field].g;
			var r = msdyn_analysisresult[field].r;
			msdyn_analysisresult[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_analysisresult.Entity = u;
		msdyn_analysisresult.EntityName = 'msdyn_analysisresult';
		msdyn_analysisresult.EntityCollectionName = 'msdyn_analysisresults';
		msdyn_analysisresult['@odata.etag'] = e['@odata.etag'];
		msdyn_analysisresult.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_analysisresult.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_analysisresult;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_analysisresult = {
		msdyn_AnalysisComponentType : {
			Component_Health: 192350001,
			Organization_Health: 192350000
		},
		msdyn_Category : {
			Accessibility: 192350008,
			Design: 192350004,
			Maintainability: 192350006,
			Online_Migration: 192350005,
			Performance: 192350000,
			Security: 192350003,
			Supportability: 192350007,
			Upgrade_Readiness: 192350001,
			Usage: 192350002
		},
		msdyn_ComponentType : {
			Configuration: 192350002,
			Plug_In: 192350001,
			Web_Resources: 192350000
		},
		msdyn_Level : {
			Error: 192350000,
			Warning: 192350001
		},
		msdyn_ReturnStatus : {
			Config_Error: 192350002,
			Error: 192350005,
			Fail: 192350001,
			Pass: 192350000,
			Resolved: 192350003,
			Suggestion: 192350006,
			Warning: 192350004
		},
		msdyn_Severity : {
			Critical: 192350003,
			High: 192350002,
			Low: 192350000,
			Medium: 192350001
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