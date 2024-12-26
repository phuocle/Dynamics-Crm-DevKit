'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_entityrefreshhistoryApi = function (e) {
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
		var _msdyn_entityrefreshhistory = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_DataflowHistoryLookup: { b: 'msdyn_dataflowhistorylookup', a: '_msdyn_dataflowhistorylookup_value', c: 'msdyn_dataflowrefreshhistories', d: 'msdyn_dataflowrefreshhistory' },
			msdyn_DataflowId: { a: 'msdyn_dataflowid' },
			msdyn_DataflowName: { a: 'msdyn_dataflowname' },
			msdyn_EndTime_UtcDateAndTime: { a: 'msdyn_endtime' },
			msdyn_EntityName: { a: 'msdyn_entityname' },
			msdyn_entityrefreshhistoryId: { a: 'msdyn_entityrefreshhistoryid' },
			msdyn_ErrorCount: { a: 'msdyn_errorcount' },
			msdyn_ErrorInfoErrorCode: { a: 'msdyn_errorinfoerrorcode' },
			msdyn_ErrorInfoErrorMessage: { a: 'msdyn_errorinfoerrormessage' },
			msdyn_ErrorInfoEvaluationResultJson: { a: 'msdyn_errorinfoevaluationresultjson' },
			msdyn_ErrorInfoEvaluationResultJsonMemo: { a: 'msdyn_errorinfoevaluationresultjsonmemo' },
			msdyn_ErrorInfoLoadToCdsErrorInfoJson: { a: 'msdyn_errorinfoloadtocdserrorinfojson' },
			msdyn_ErrorInfoLoadToCdsErrorInfoJsonMemo: { a: 'msdyn_errorinfoloadtocdserrorinfojsonmemo' },
			msdyn_InsertCount: { a: 'msdyn_insertcount' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_RefreshStatus: { a: 'msdyn_refreshstatus' },
			msdyn_StartTime_UtcDateAndTime: { a: 'msdyn_starttime' },
			msdyn_TransactionId: { a: 'msdyn_transactionid' },
			msdyn_UpsertCount: { a: 'msdyn_upsertcount' },
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
		var msdyn_entityrefreshhistory = {};
		msdyn_entityrefreshhistory.ODataEntity = e;
		msdyn_entityrefreshhistory.FormattedValue = {};
		for (var field in _msdyn_entityrefreshhistory) {
			var a = _msdyn_entityrefreshhistory[field].a;
			var b = _msdyn_entityrefreshhistory[field].b;
			var c = _msdyn_entityrefreshhistory[field].c;
			var d = _msdyn_entityrefreshhistory[field].d;
			var g = _msdyn_entityrefreshhistory[field].g;
			var r = _msdyn_entityrefreshhistory[field].r;
			webApiField(msdyn_entityrefreshhistory, field, e, a, b, c, d, r, u, g);
		}
		msdyn_entityrefreshhistory.Entity = u;
		msdyn_entityrefreshhistory.EntityName = 'msdyn_entityrefreshhistory';
		msdyn_entityrefreshhistory.EntityCollectionName = 'msdyn_entityrefreshhistories';
		msdyn_entityrefreshhistory['@odata.etag'] = e['@odata.etag'];
		msdyn_entityrefreshhistory.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_entityrefreshhistory.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_entityrefreshhistory;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_entityrefreshhistory = {
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