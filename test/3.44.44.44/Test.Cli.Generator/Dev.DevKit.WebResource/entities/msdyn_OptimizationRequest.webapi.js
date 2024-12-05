'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_OptimizationRequestApi = function (e) {
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
		var _msdyn_optimizationrequest = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser' },
			CreatedOn_UtcDateAndTime: { a: 'createdon' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser' },
			msdyn_ApplyOperationId: { a: 'msdyn_applyoperationid' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_OptimizationErrors: { a: 'msdyn_optimizationerrors' },
			msdyn_OptimizationRequestId: { a: 'msdyn_optimizationrequestid' },
			msdyn_OptimizationStatus: { a: 'msdyn_optimizationstatus' },
			msdyn_OptimizationType: { a: 'msdyn_optimizationtype' },
			msdyn_Snapshot: { a: 'msdyn_snapshot' },
			msdyn_SuggestedSchedule: { a: 'msdyn_suggestedschedule' },
			msdyn_UssOptimizationId: { a: 'msdyn_ussoptimizationid' },
			msdyn_UssSnapshot: { a: 'msdyn_usssnapshot' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team' },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser' },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_optimizationrequest = {};
		msdyn_optimizationrequest.ODataEntity = e;
		msdyn_optimizationrequest.FormattedValue = {};
		for (var field in _msdyn_optimizationrequest) {
			var a = _msdyn_optimizationrequest[field].a;
			var b = _msdyn_optimizationrequest[field].b;
			var c = _msdyn_optimizationrequest[field].c;
			var d = _msdyn_optimizationrequest[field].d;
			var g = _msdyn_optimizationrequest[field].g;
			var r = _msdyn_optimizationrequest[field].r;
			webApiField(msdyn_optimizationrequest, field, e, a, b, c, d, r, u, g);
		}
		msdyn_optimizationrequest.Entity = u;
		msdyn_optimizationrequest.EntityName = 'msdyn_optimizationrequest';
		msdyn_optimizationrequest.EntityCollectionName = 'msdyn_optimizationrequests';
		msdyn_optimizationrequest['@odata.etag'] = e['@odata.etag'];
		msdyn_optimizationrequest.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_optimizationrequest.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_optimizationrequest;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_OptimizationRequest = {
		msdyn_OptimizationStatus : {
			Canceled: 772020003,
			Failed: 772020002,
			Running: 772020000,
			Succeeded: 772020001
		},
		msdyn_OptimizationType : {
			Single_Resource_Optimization: 772020000
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