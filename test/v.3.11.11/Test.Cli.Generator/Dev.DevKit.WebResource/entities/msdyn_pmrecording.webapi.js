'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_pmrecordingApi = function (e) {
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
		var _msdyn_pmrecording = {
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
			msdyn_iterationid: { a: 'msdyn_iterationid' },
			msdyn_lasterrors: { a: 'msdyn_lasterrors' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_normalizedrecording: { a: 'msdyn_normalizedrecording' },
			msdyn_parenttask: { b: 'msdyn_parenttask', a: '_msdyn_parenttask_value', c: 'msdyn_pminferredtasks', d: 'msdyn_pminferredtask' },
			msdyn_pmrecordingId: { a: 'msdyn_pmrecordingid' },
			msdyn_publishingstatus: { a: 'msdyn_publishingstatus' },
			msdyn_sourceworkflow: { b: 'msdyn_sourceworkflow', a: '_msdyn_sourceworkflow_value', c: 'workflows', d: 'workflow' },
			msdyn_type: { a: 'msdyn_type' },
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
		var msdyn_pmrecording = {};
		msdyn_pmrecording.ODataEntity = e;
		msdyn_pmrecording.FormattedValue = {};
		for (var field in _msdyn_pmrecording) {
			var a = _msdyn_pmrecording[field].a;
			var b = _msdyn_pmrecording[field].b;
			var c = _msdyn_pmrecording[field].c;
			var d = _msdyn_pmrecording[field].d;
			var g = _msdyn_pmrecording[field].g;
			var r = _msdyn_pmrecording[field].r;
			webApiField(msdyn_pmrecording, field, e, a, b, c, d, r, u, g);
		}
		msdyn_pmrecording.Entity = u;
		msdyn_pmrecording.EntityName = 'msdyn_pmrecording';
		msdyn_pmrecording.EntityCollectionName = 'msdyn_pmrecordings';
		msdyn_pmrecording['@odata.etag'] = e['@odata.etag'];
		msdyn_pmrecording.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_pmrecording.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_pmrecording;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_pmrecording = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_publishingstatus : {
			NotIncluded: 192350000,
			Obsolete: 192350002,
			Published: 192350001
		},
		msdyn_type : {
			UiFlow: 192350000
		},
		OwnerIdType : {
		},
		statecode : {
			Complete: 2,
			Draft: 0,
			Failed: 3,
			Recorded: 1
		},
		statuscode : {
			Complete: 6,
			Draft: 1,
			Failed: 7,
			Imported: 4,
			Importing: 3,
			Queued: 2,
			Recorded: 5
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