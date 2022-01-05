'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_sequencetargetApi = function (e) {
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
		var msdyn_sequencetarget = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_appliedsequenceinstance: { b: 'msdyn_appliedsequenceinstance', a: '_msdyn_appliedsequenceinstance_value', c: 'msdyn_sequences', d: 'msdyn_sequence' },
			msdyn_currentstepcount: { a: 'msdyn_currentstepcount' },
			msdyn_currentstepname: { a: 'msdyn_currentstepname' },
			msdyn_currentstepsubtype: { a: 'msdyn_currentstepsubtype' },
			msdyn_currentsteptype: { a: 'msdyn_currentsteptype' },
			msdyn_deactivatereason: { a: 'msdyn_deactivatereason' },
			msdyn_msflowrunid: { a: 'msdyn_msflowrunid' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_parentsequence: { b: 'msdyn_parentsequence', a: '_msdyn_parentsequence_value', c: 'msdyn_sequences', d: 'msdyn_sequence' },
			msdyn_ParentSequenceVersion: { a: 'msdyn_parentsequenceversion' },
			msdyn_regarding: { a: 'msdyn_regarding' },
			msdyn_segment: { b: 'msdyn_segment', a: '_msdyn_segment_value', c: 'msdyn_segments', d: 'msdyn_segment' },
			msdyn_sequencetargetId: { a: 'msdyn_sequencetargetid' },
			msdyn_sequencetargetuniquekey: { a: 'msdyn_sequencetargetuniquekey' },
			msdyn_target: { b: 'msdyn_target', a: '_msdyn_target_value', c: 'accounts', d: 'account' },
			msdyn_target: { b: 'msdyn_target', a: '_msdyn_target_value', c: 'contacts', d: 'contact' },
			msdyn_target: { b: 'msdyn_target', a: '_msdyn_target_value', c: 'leads', d: 'lead' },
			msdyn_target: { b: 'msdyn_target', a: '_msdyn_target_value', c: 'opportunities', d: 'opportunity' },
			msdyn_totalstepcount: { a: 'msdyn_totalstepcount' },
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
		for (var field in msdyn_sequencetarget) {
			var a = msdyn_sequencetarget[field].a;
			var b = msdyn_sequencetarget[field].b;
			var c = msdyn_sequencetarget[field].c;
			var d = msdyn_sequencetarget[field].d;
			var g = msdyn_sequencetarget[field].g;
			var r = msdyn_sequencetarget[field].r;
			msdyn_sequencetarget[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_sequencetarget.Entity = u;
		msdyn_sequencetarget.EntityName = 'msdyn_sequencetarget';
		msdyn_sequencetarget.EntityCollectionName = 'msdyn_sequencetargets';
		msdyn_sequencetarget['@odata.etag'] = e['@odata.etag'];
		msdyn_sequencetarget.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_sequencetarget.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_sequencetarget;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.msdyn_sequencetarget = {
			msdyn_currentstepsubtype : {
				Default: 0,
				LinkedInConnect: 3,
				LinkedInGetIntroduced: 2,
				LinkedInMail: 4,
				LinkedInResearch: 1
			},
			msdyn_currentsteptype : {
				Auto_action: 4,
				Automated_Email: 3,
				Email: 4202,
				LinkedIn_action: 5,
				Phone_call: 4210,
				Simple_Condition: 1,
				Task: 4212,
				Wait: 0
			},
			msdyn_deactivatereason : {
				Exit_Criterion_Met: 3,
				Parent_Sequence_Deactivated: 1,
				Regarding_Entity_Deactivated: 2,
				User_Disconnected: 0
			},
			statecode : {
				Active: 0,
				Inactive: 1
			},
			statuscode : {
				Completed: 3,
				Connected: 2,
				Connecting: 1,
				Disconnected: 5,
				Error: 4
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