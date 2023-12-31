'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_decisionrulesetApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _msdyn_decisionruleset = {
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
			msdyn_aibmodelid: { b: 'msdyn_aibmodelid', a: '_msdyn_aibmodelid_value', c: 'msdyn_aimodels', d: 'msdyn_aimodel' },
			msdyn_authoringmode: { a: 'msdyn_authoringmode' },
			msdyn_decisionrulesetId: { a: 'msdyn_decisionrulesetid' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_inputcontractid: { b: 'msdyn_inputcontractid', a: '_msdyn_inputcontractid_value', c: 'msdyn_decisioncontracts', d: 'msdyn_decisioncontract' },
			msdyn_isinputcollection: { a: 'msdyn_isinputcollection' },
			msdyn_mlmodeltype: { a: 'msdyn_mlmodeltype' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_outputcontractid: { b: 'msdyn_outputcontractid', a: '_msdyn_outputcontractid_value', c: 'msdyn_decisioncontracts', d: 'msdyn_decisioncontract' },
			msdyn_rulesetdefinition: { a: 'msdyn_rulesetdefinition' },
			msdyn_rulesettype: { a: 'msdyn_rulesettype' },
			msdyn_UniqueName: { a: 'msdyn_uniquename' },
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
		var msdyn_decisionruleset = {};
		msdyn_decisionruleset.ODataEntity = e;
		msdyn_decisionruleset.FormattedValue = {};
		for (var field in _msdyn_decisionruleset) {
			var a = _msdyn_decisionruleset[field].a;
			var b = _msdyn_decisionruleset[field].b;
			var c = _msdyn_decisionruleset[field].c;
			var d = _msdyn_decisionruleset[field].d;
			var g = _msdyn_decisionruleset[field].g;
			var r = _msdyn_decisionruleset[field].r;
			webApiField(msdyn_decisionruleset, field, e, a, b, c, d, r, u, g);
		}
		msdyn_decisionruleset.Entity = u;
		msdyn_decisionruleset.EntityName = 'msdyn_decisionruleset';
		msdyn_decisionruleset.EntityCollectionName = 'msdyn_decisionrulesets';
		msdyn_decisionruleset['@odata.etag'] = e['@odata.etag'];
		msdyn_decisionruleset.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_decisionruleset.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_decisionruleset;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_decisionruleset = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_authoringmode : {
			Decision_list: 192350000
		},
		msdyn_mlmodeltype : {
			Effort_based: 192350002,
			Sentiment_based: 192350001,
			Skill_based: 192350000
		},
		msdyn_rulesettype : {
			Declarative: 192350000,
			ML_model_based: 192350001
		},
		OwnerIdType : {
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