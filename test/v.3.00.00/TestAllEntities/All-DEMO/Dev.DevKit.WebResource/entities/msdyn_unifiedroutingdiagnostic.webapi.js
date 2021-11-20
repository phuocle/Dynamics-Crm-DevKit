'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_unifiedroutingdiagnosticApi = function (e) {
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
		var msdyn_unifiedroutingdiagnostic = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_completedon_UtcDateAndTime: { a: 'msdyn_completedon' },
			msdyn_decisionrulesetid: { b: 'msdyn_decisionrulesetid', a: '_msdyn_decisionrulesetid_value', c: 'msdyn_decisionrulesets', d: 'msdyn_decisionruleset' },
			msdyn_evaluation: { a: 'msdyn_evaluation' },
			msdyn_inputdata: { a: 'msdyn_inputdata' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ocliveworkitemid: { b: 'msdyn_ocliveworkitemid', a: '_msdyn_ocliveworkitemid_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			msdyn_outputdata: { a: 'msdyn_outputdata' },
			msdyn_ruletype: { a: 'msdyn_ruletype' },
			msdyn_sequencenumber: { a: 'msdyn_sequencenumber' },
			msdyn_startedon_UtcDateAndTime: { a: 'msdyn_startedon' },
			msdyn_targetobject_msdyn_ocliveworkitem: { b: 'msdyn_targetobject_msdyn_ocliveworkitem', a: '_msdyn_targetobject_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			msdyn_targetobject_queueitem: { b: 'msdyn_targetobject_queueitem', a: '_msdyn_targetobject_value', c: 'queueitems', d: 'queueitem' },
			msdyn_unifiedroutingdiagnosticId: { a: 'msdyn_unifiedroutingdiagnosticid' },
			msdyn_unifiedroutingrunid: { b: 'msdyn_unifiedroutingrunid', a: '_msdyn_unifiedroutingrunid_value', c: 'msdyn_unifiedroutingruns', d: 'msdyn_unifiedroutingrun' },
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
		for (var field in msdyn_unifiedroutingdiagnostic) {
			var a = msdyn_unifiedroutingdiagnostic[field].a;
			var b = msdyn_unifiedroutingdiagnostic[field].b;
			var c = msdyn_unifiedroutingdiagnostic[field].c;
			var d = msdyn_unifiedroutingdiagnostic[field].d;
			var g = msdyn_unifiedroutingdiagnostic[field].g;
			var r = msdyn_unifiedroutingdiagnostic[field].r;
			msdyn_unifiedroutingdiagnostic[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_unifiedroutingdiagnostic.Entity = u;
		msdyn_unifiedroutingdiagnostic.EntityName = 'msdyn_unifiedroutingdiagnostic';
		msdyn_unifiedroutingdiagnostic.EntityCollectionName = 'msdyn_unifiedroutingdiagnostics';
		msdyn_unifiedroutingdiagnostic['@odata.etag'] = e['@odata.etag'];
		msdyn_unifiedroutingdiagnostic.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_unifiedroutingdiagnostic.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_unifiedroutingdiagnostic;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.msdyn_unifiedroutingdiagnostic = {
			msdyn_ruletype : {
				Assignment: 6,
				Assignment_Selection_Criteria: 9,
				Demand_Classification: 1,
				Intake: 11,
				ML: 4,
				Prioritization: 5,
				Route_To_Queue: 2,
				Skill_Identification: 3
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