'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_flow_approvalstepApi = function (e) {
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
		var _msdyn_flow_approvalstep = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_flow_approvalstep_approval: { b: 'msdyn_flow_approvalstep_approval', a: '_msdyn_flow_approvalstep_approval_value', c: 'msdyn_flow_approvals', d: 'msdyn_flow_approval' },
			msdyn_flow_approvalstep_approvalid: { a: 'msdyn_flow_approvalstep_approvalid' },
			msdyn_flow_approvalstep_model_msdyn_flow_actionapprovalmodel: { b: 'msdyn_flow_approvalstep_model_msdyn_flow_actionapprovalmodel', a: '_msdyn_flow_approvalstep_model_value', c: 'msdyn_flow_actionapprovalmodels', d: 'msdyn_flow_actionapprovalmodel' },
			msdyn_flow_approvalstep_model_msdyn_flow_awaitallactionapprovalmodel: { b: 'msdyn_flow_approvalstep_model_msdyn_flow_awaitallactionapprovalmodel', a: '_msdyn_flow_approvalstep_model_value', c: 'msdyn_flow_awaitallactionapprovalmodels', d: 'msdyn_flow_awaitallactionapprovalmodel' },
			msdyn_flow_approvalstep_model_msdyn_flow_awaitallapprovalmodel: { b: 'msdyn_flow_approvalstep_model_msdyn_flow_awaitallapprovalmodel', a: '_msdyn_flow_approvalstep_model_value', c: 'msdyn_flow_awaitallapprovalmodels', d: 'msdyn_flow_awaitallapprovalmodel' },
			msdyn_flow_approvalstep_model_msdyn_flow_basicapprovalmodel: { b: 'msdyn_flow_approvalstep_model_msdyn_flow_basicapprovalmodel', a: '_msdyn_flow_approvalstep_model_value', c: 'msdyn_flow_basicapprovalmodels', d: 'msdyn_flow_basicapprovalmodel' },
			msdyn_flow_approvalstep_modeltype: { a: 'msdyn_flow_approvalstep_modeltype' },
			msdyn_flow_approvalstep_number: { a: 'msdyn_flow_approvalstep_number' },
			msdyn_flow_approvalstep_result: { a: 'msdyn_flow_approvalstep_result' },
			msdyn_flow_approvalstep_stage: { a: 'msdyn_flow_approvalstep_stage' },
			msdyn_flow_approvalstepId: { a: 'msdyn_flow_approvalstepid' },
			msdyn_Name: { a: 'msdyn_name' },
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
		var msdyn_flow_approvalstep = {};
		msdyn_flow_approvalstep.ODataEntity = e;
		msdyn_flow_approvalstep.FormattedValue = {};
		for (var field in _msdyn_flow_approvalstep) {
			var a = _msdyn_flow_approvalstep[field].a;
			var b = _msdyn_flow_approvalstep[field].b;
			var c = _msdyn_flow_approvalstep[field].c;
			var d = _msdyn_flow_approvalstep[field].d;
			var g = _msdyn_flow_approvalstep[field].g;
			var r = _msdyn_flow_approvalstep[field].r;
			webApiField(msdyn_flow_approvalstep, field, e, a, b, c, d, r, u, g);
		}
		msdyn_flow_approvalstep.Entity = u;
		msdyn_flow_approvalstep.EntityName = 'msdyn_flow_approvalstep';
		msdyn_flow_approvalstep.EntityCollectionName = 'msdyn_flow_approvalsteps';
		msdyn_flow_approvalstep['@odata.etag'] = e['@odata.etag'];
		msdyn_flow_approvalstep.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_flow_approvalstep.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_flow_approvalstep;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_flow_approvalstep = {
		msdyn_flow_approvalstep_modelIdType : {
		},
		msdyn_flow_approvalstep_stage : {
			Basic: 192350001,
			Complete: 192351000,
			Not_Specified: 192350000
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