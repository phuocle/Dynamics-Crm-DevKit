'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_sequenceApi = function (e) {
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
		var msdyn_sequence = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_cjodefinition: { a: 'msdyn_cjodefinition' },
			msdyn_cjodefinitionstate: { a: 'msdyn_cjodefinitionstate' },
			msdyn_definition: { a: 'msdyn_definition' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_maxstepcount: { a: 'msdyn_maxstepcount' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_orchestratorversion: { a: 'msdyn_orchestratorversion' },
			msdyn_ParentSequence: { b: 'msdyn_ParentSequence', a: '_msdyn_parentsequence_value', c: 'msdyn_sequences', d: 'msdyn_sequence' },
			msdyn_regardingentitydisplayname: { a: 'msdyn_regardingentitydisplayname' },
			msdyn_regardingEntityName: { a: 'msdyn_regardingentityname' },
			msdyn_SequenceExitCriterion: { a: 'msdyn_sequenceexitcriterion' },
			msdyn_sequenceId: { a: 'msdyn_sequenceid' },
			msdyn_SequenceRecords: { a: 'msdyn_sequencerecords', r: true },
			msdyn_SequenceStats180d: { a: 'msdyn_SequenceStats180d' },
			msdyn_SequenceStats1y: { a: 'msdyn_SequenceStats1y' },
			msdyn_SequenceStats2y: { a: 'msdyn_SequenceStats2y' },
			msdyn_SequenceStats30d: { a: 'msdyn_SequenceStats30d' },
			msdyn_SequenceStats90d: { a: 'msdyn_SequenceStats90d' },
			msdyn_totaltasks: { a: 'msdyn_totaltasks' },
			msdyn_Type: { a: 'msdyn_type' },
			msdyn_Version: { a: 'msdyn_version' },
			msdyn_VersionDescription: { a: 'msdyn_versiondescription' },
			msdyn_workflowid: { a: 'msdyn_workflowid' },
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
		for (var field in msdyn_sequence) {
			var a = msdyn_sequence[field].a;
			var b = msdyn_sequence[field].b;
			var c = msdyn_sequence[field].c;
			var d = msdyn_sequence[field].d;
			var g = msdyn_sequence[field].g;
			var r = msdyn_sequence[field].r;
			msdyn_sequence[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_sequence.Entity = u;
		msdyn_sequence.EntityName = 'msdyn_sequence';
		msdyn_sequence.EntityCollectionName = 'msdyn_sequences';
		msdyn_sequence['@odata.etag'] = e['@odata.etag'];
		msdyn_sequence.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_sequence.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_sequence;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_sequence = {
		msdyn_orchestratorversion : {
			V1: 1,
			V2: 2
		},
		msdyn_Type : {
			Activation: 1,
			Definition: 0
		},
		statecode : {
			Active: 1,
			Inactive: 0
		},
		statuscode : {
			Active: 2,
			Inactive: 1,
			Revision: 3
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