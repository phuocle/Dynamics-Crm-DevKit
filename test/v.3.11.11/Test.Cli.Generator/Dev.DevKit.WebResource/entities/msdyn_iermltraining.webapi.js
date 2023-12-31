'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_iermltrainingApi = function (e) {
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
		var _msdyn_iermltraining = {
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
			msdyn_errordetails: { a: 'msdyn_errordetails' },
			msdyn_iermlmodelid: { b: 'msdyn_iermlmodelid', a: '_msdyn_iermlmodelid_value', c: 'msdyn_iermlmodels', d: 'msdyn_iermlmodel' },
			msdyn_iermltrainingId: { a: 'msdyn_iermltrainingid' },
			msdyn_mltrainingstatus: { a: 'msdyn_mltrainingstatus' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_publishaiconfiguration: { b: 'msdyn_publishaiconfiguration', a: '_msdyn_publishaiconfiguration_value', c: 'msdyn_aiconfigurations', d: 'msdyn_aiconfiguration' },
			msdyn_publishedon_UtcDateAndTime: { a: 'msdyn_publishedon' },
			msdyn_trainaiconfiguration: { b: 'msdyn_trainaiconfiguration', a: '_msdyn_trainaiconfiguration_value', c: 'msdyn_aiconfigurations', d: 'msdyn_aiconfiguration' },
			msdyn_trainedon_UtcDateAndTime: { a: 'msdyn_trainedon' },
			msdyn_trainingdatacount: { a: 'msdyn_trainingdatacount' },
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
		var msdyn_iermltraining = {};
		msdyn_iermltraining.ODataEntity = e;
		msdyn_iermltraining.FormattedValue = {};
		for (var field in _msdyn_iermltraining) {
			var a = _msdyn_iermltraining[field].a;
			var b = _msdyn_iermltraining[field].b;
			var c = _msdyn_iermltraining[field].c;
			var d = _msdyn_iermltraining[field].d;
			var g = _msdyn_iermltraining[field].g;
			var r = _msdyn_iermltraining[field].r;
			webApiField(msdyn_iermltraining, field, e, a, b, c, d, r, u, g);
		}
		msdyn_iermltraining.Entity = u;
		msdyn_iermltraining.EntityName = 'msdyn_iermltraining';
		msdyn_iermltraining.EntityCollectionName = 'msdyn_iermltrainings';
		msdyn_iermltraining['@odata.etag'] = e['@odata.etag'];
		msdyn_iermltraining.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_iermltraining.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_iermltraining;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_iermltraining = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_mltrainingstatus : {
			Draft: 192350000,
			Loading_Data: 326340008,
			Publish_completed: 326340003,
			Publish_config_created: 326340007,
			Publish_failed: 326340002,
			Publish_in_progress: 326340000,
			Train_config_created: 326340001,
			Training_completed: 326340006,
			Training_failed: 326340004,
			Training_in_progress: 326340005
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