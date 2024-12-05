'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_workstreamhmmigrationstatusApi = function (e) {
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
		var _msdyn_workstreamhmmigrationstatus = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_errorcode: { a: 'msdyn_errorcode' },
			msdyn_errordescription: { a: 'msdyn_errordescription' },
			msdyn_errortype: { a: 'msdyn_errortype' },
			msdyn_liveworkstreamid: { b: 'msdyn_liveworkstreamid', a: '_msdyn_liveworkstreamid_value', c: 'msdyn_liveworkstreams', d: 'msdyn_liveworkstream' },
			msdyn_migrationlogjson: { a: 'msdyn_migrationlogjson' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_newvaluejson: { a: 'msdyn_newvaluejson' },
			msdyn_operationtype: { a: 'msdyn_operationtype' },
			msdyn_originalvaluejson: { a: 'msdyn_originalvaluejson' },
			msdyn_status: { a: 'msdyn_status' },
			msdyn_validationstatus: { a: 'msdyn_validationstatus' },
			msdyn_workstreamhmmigrationstatusId: { a: 'msdyn_workstreamhmmigrationstatusid' },
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
		var msdyn_workstreamhmmigrationstatus = {};
		msdyn_workstreamhmmigrationstatus.ODataEntity = e;
		msdyn_workstreamhmmigrationstatus.FormattedValue = {};
		for (var field in _msdyn_workstreamhmmigrationstatus) {
			var a = _msdyn_workstreamhmmigrationstatus[field].a;
			var b = _msdyn_workstreamhmmigrationstatus[field].b;
			var c = _msdyn_workstreamhmmigrationstatus[field].c;
			var d = _msdyn_workstreamhmmigrationstatus[field].d;
			var g = _msdyn_workstreamhmmigrationstatus[field].g;
			var r = _msdyn_workstreamhmmigrationstatus[field].r;
			webApiField(msdyn_workstreamhmmigrationstatus, field, e, a, b, c, d, r, u, g);
		}
		msdyn_workstreamhmmigrationstatus.Entity = u;
		msdyn_workstreamhmmigrationstatus.EntityName = 'msdyn_workstreamhmmigrationstatus';
		msdyn_workstreamhmmigrationstatus.EntityCollectionName = 'msdyn_workstreamhmmigrationstatuses';
		msdyn_workstreamhmmigrationstatus['@odata.etag'] = e['@odata.etag'];
		msdyn_workstreamhmmigrationstatus.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_workstreamhmmigrationstatus.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_workstreamhmmigrationstatus;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_workstreamhmmigrationstatus = {
		msdyn_errortype : {
			Critical: 192350002,
			None: 192350000,
			Warning: 192350001
		},
		msdyn_operationtype : {
			None: 192350000,
			Revert: 192350002,
			Update: 192350001
		},
		msdyn_status : {
			Complete: 192350002,
			Failed: 192350003,
			In_progress: 192350001,
			None: 192350000
		},
		msdyn_validationstatus : {
			Failed: 192350002,
			In_progress: 192350003,
			Not_tested: 192350000,
			Passed: 192350001
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