'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.msdyn_analysisresultApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _msdyn_analysisresult = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AnalysisComponentId: { b: 'msdyn_AnalysisComponentId', a: '_msdyn_analysiscomponentid_value', c: 'msdyn_analysiscomponents', d: 'msdyn_analysiscomponent' },
			msdyn_AnalysisComponentType: { a: 'msdyn_analysiscomponenttype', g: 'Integer' },
			msdyn_AnalysisJobId: { b: 'msdyn_AnalysisJobId', a: '_msdyn_analysisjobid_value', c: 'msdyn_analysisjobs', d: 'msdyn_analysisjob' },
			msdyn_analysisresultId: { a: 'msdyn_analysisresultid' },
			msdyn_Category: { a: 'msdyn_category', g: 'Integer' },
			msdyn_ComponentType: { a: 'msdyn_componenttype', g: 'Integer' },
			msdyn_EntityName: { a: 'msdyn_entityname' },
			msdyn_FileUri: { a: 'msdyn_fileuri' },
			msdyn_HasResolution: { a: 'msdyn_hasresolution', g: 'Boolean' },
			msdyn_helplink: { a: 'msdyn_helplink' },
			msdyn_Level: { a: 'msdyn_level', g: 'Integer' },
			msdyn_Line: { a: 'msdyn_line', g: 'Integer' },
			msdyn_Member: { a: 'msdyn_member' },
			msdyn_Message: { a: 'msdyn_message' },
			msdyn_MessageArguments: { a: 'msdyn_messagearguments' },
			msdyn_MessageId: { a: 'msdyn_messageid' },
			msdyn_Module: { a: 'msdyn_module' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_RepairIssueType: { a: 'msdyn_repairissuetype' },
			msdyn_ReturnStatus: { a: 'msdyn_returnstatus', g: 'Integer' },
			msdyn_RuleId: { a: 'msdyn_ruleid' },
			msdyn_RuleReferenceUri: { a: 'msdyn_rulereferenceuri' },
			msdyn_Severity: { a: 'msdyn_severity', g: 'Integer' },
			msdyn_Snippet: { a: 'msdyn_snippet' },
			msdyn_SolutionHealthMessage: { a: 'msdyn_solutionhealthmessage' },
			msdyn_Type: { a: 'msdyn_type' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const msdyn_analysisresult = {};
		msdyn_analysisresult.ODataEntity = e;
		msdyn_analysisresult.FormattedValue = {};
		for (const field in _msdyn_analysisresult) {
			const fieldConfig = _msdyn_analysisresult[field];
			webApiField(msdyn_analysisresult, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		msdyn_analysisresult.Entity = u;
		msdyn_analysisresult.EntityName = 'msdyn_analysisresult';
		msdyn_analysisresult.EntityCollectionName = 'msdyn_analysisresults';
		msdyn_analysisresult['@odata.etag'] = e?.['@odata.etag'];
		msdyn_analysisresult.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		msdyn_analysisresult.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return msdyn_analysisresult;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_analysisresult = {
		msdyn_AnalysisComponentType: { Component_Health: 192350001, Organization_Health: 192350000 },
		msdyn_Category: { Accessibility: 192350008, Design: 192350004, Licensing: 192350009, Maintainability: 192350006, Online_Migration: 192350005, Performance: 192350000, Security: 192350003, Supportability: 192350007, Upgrade_Readiness: 192350001, Usage: 192350002 },
		msdyn_ComponentType: { Configuration: 192350002, Plug_In: 192350001, Web_Resources: 192350000 },
		msdyn_Level: { Error: 192350000, Warning: 192350001 },
		msdyn_ReturnStatus: { Config_Error: 192350002, Error: 192350005, Fail: 192350001, Pass: 192350000, Resolved: 192350003, Suggestion: 192350006, Warning: 192350004 },
		msdyn_Severity: { Critical: 192350003, High: 192350002, Low: 192350000, Medium: 192350001 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));