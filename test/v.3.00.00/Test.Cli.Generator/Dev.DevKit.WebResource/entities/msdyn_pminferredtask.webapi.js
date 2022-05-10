'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_pminferredtaskApi = function (e) {
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
		var _msdyn_pminferredtask = {
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
			msdyn_analysisschedule: { a: 'msdyn_analysisschedule' },
			msdyn_automationdata: { a: 'msdyn_automationdata' },
			msdyn_automationstatus: { a: 'msdyn_automationstatus' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_inputdatabinding: { a: 'msdyn_inputdatabinding' },
			msdyn_isreportavailable: { a: 'msdyn_isreportavailable' },
			msdyn_iterationid: { a: 'msdyn_iterationid' },
			msdyn_lasterrors: { a: 'msdyn_lasterrors' },
			msdyn_lasterrorsreport: { a: 'msdyn_lasterrorsreport', r: true },
			msdyn_lastreportrefreshdate_TimezoneDateAndTime: { a: 'msdyn_lastreportrefreshdate' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_outputdata: { a: 'msdyn_outputdata' },
			msdyn_pminferredtaskId: { a: 'msdyn_pminferredtaskid' },
			msdyn_reportdata: { a: 'msdyn_reportdata' },
			msdyn_reportprovisioningstatus: { a: 'msdyn_reportprovisioningstatus' },
			msdyn_sharedrecordingmetadata: { a: 'msdyn_sharedrecordingmetadata' },
			msdyn_source: { a: 'msdyn_source' },
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
		var msdyn_pminferredtask = {};
		msdyn_pminferredtask.ODataEntity = e;
		msdyn_pminferredtask.FormattedValue = {};
		for (var field in _msdyn_pminferredtask) {
			var a = _msdyn_pminferredtask[field].a;
			var b = _msdyn_pminferredtask[field].b;
			var c = _msdyn_pminferredtask[field].c;
			var d = _msdyn_pminferredtask[field].d;
			var g = _msdyn_pminferredtask[field].g;
			var r = _msdyn_pminferredtask[field].r;
			webApiField(msdyn_pminferredtask, field, e, a, b, c, d, r, u, g);
		}
		msdyn_pminferredtask.Entity = u;
		msdyn_pminferredtask.EntityName = 'msdyn_pminferredtask';
		msdyn_pminferredtask.EntityCollectionName = 'msdyn_pminferredtasks';
		msdyn_pminferredtask['@odata.etag'] = e['@odata.etag'];
		msdyn_pminferredtask.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_pminferredtask.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_pminferredtask;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_pminferredtask = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_automationstatus : {
			Complete: 200000003,
			InProgress: 200000002,
			NotRecommended: 200000001,
			NotStarted: 200000000
		},
		msdyn_reportprovisioningstatus : {
			Failed: 193350003,
			NotStarted: 193350000,
			Provisioned: 193350002,
			Provisioning: 193350001
		},
		msdyn_source : {
			DataLake: 1,
			Recording: 0
		},
		OwnerIdType : {
		},
		statecode : {
			Done: 2,
			Draft: 0,
			Failed: 3,
			InProgress: 1
		},
		statuscode : {
			Analyzed: 4,
			AnalyzeFailed: 5,
			Analyzing: 2,
			DeleteFailed: 6,
			Deleting: 3,
			Draft: 0,
			Queued: 1
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