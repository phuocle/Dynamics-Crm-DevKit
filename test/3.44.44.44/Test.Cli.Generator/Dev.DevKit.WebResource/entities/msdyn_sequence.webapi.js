﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_sequenceApi = function (e) {
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
		var _msdyn_sequence = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AnalyticsAvailable: { a: 'msdyn_analyticsavailable' },
			msdyn_analyticsversion: { a: 'msdyn_analyticsversion' },
			msdyn_assignsequencecondition: { a: 'msdyn_assignsequencecondition' },
			msdyn_assignsequencefieldname: { a: 'msdyn_assignsequencefieldname' },
			msdyn_assignsequencetype: { a: 'msdyn_assignsequencetype' },
			msdyn_cjodefinition: { a: 'msdyn_cjodefinition' },
			msdyn_cjodefinitionstate: { a: 'msdyn_cjodefinitionstate' },
			msdyn_definition: { a: 'msdyn_definition' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_iswaittimecomputationenabledatsequencelevel: { a: 'msdyn_iswaittimecomputationenabledatsequencelevel' },
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
			msdyn_template: { a: 'msdyn_template' },
			msdyn_totaltasks: { a: 'msdyn_totaltasks' },
			msdyn_Type: { a: 'msdyn_type' },
			msdyn_Version: { a: 'msdyn_version' },
			msdyn_VersionDescription: { a: 'msdyn_versiondescription' },
			msdyn_workflowid: { a: 'msdyn_workflowid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_sequence = {};
		msdyn_sequence.ODataEntity = e;
		msdyn_sequence.FormattedValue = {};
		for (var field in _msdyn_sequence) {
			var a = _msdyn_sequence[field].a;
			var b = _msdyn_sequence[field].b;
			var c = _msdyn_sequence[field].c;
			var d = _msdyn_sequence[field].d;
			var g = _msdyn_sequence[field].g;
			var r = _msdyn_sequence[field].r;
			webApiField(msdyn_sequence, field, e, a, b, c, d, r, u, g);
		}
		msdyn_sequence.Entity = u;
		msdyn_sequence.EntityName = 'msdyn_sequence';
		msdyn_sequence.EntityCollectionName = 'msdyn_sequences';
		msdyn_sequence['@odata.etag'] = e['@odata.etag'];
		msdyn_sequence.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_sequence.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
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
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_assignsequencetype : {
			AccessTeam: 3,
			CurrentUser: 4,
			OwnerTeam: 2,
			RecordField: 1,
			RecordOwner: 0
		},
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