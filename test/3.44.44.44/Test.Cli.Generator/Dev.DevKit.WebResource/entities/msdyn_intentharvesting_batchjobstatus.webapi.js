'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_intentharvesting_batchjobstatusApi = function (e) {
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
		var _msdyn_intentharvesting_batchjobstatus = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_batchjob_package_id: { a: 'msdyn_batchjob_package_id' },
			msdyn_intentharvesting_batchjobstatusId: { a: 'msdyn_intentharvesting_batchjobstatusid' },
			msdyn_job_status_details: { a: 'msdyn_job_status_details' },
			msdyn_jobstatus: { a: 'msdyn_jobstatus' },
			msdyn_jobtype: { a: 'msdyn_jobtype' },
			msdyn_last_successful_run_UtcDateAndTime: { a: 'msdyn_last_successful_run' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_records_processed: { a: 'msdyn_records_processed' },
			msdyn_run_frequency: { a: 'msdyn_run_frequency' },
			msdyn_runconfiguration: { a: 'msdyn_runconfiguration' },
			msdyn_target_entity_name: { a: 'msdyn_target_entity_name' },
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
		var msdyn_intentharvesting_batchjobstatus = {};
		msdyn_intentharvesting_batchjobstatus.ODataEntity = e;
		msdyn_intentharvesting_batchjobstatus.FormattedValue = {};
		for (var field in _msdyn_intentharvesting_batchjobstatus) {
			var a = _msdyn_intentharvesting_batchjobstatus[field].a;
			var b = _msdyn_intentharvesting_batchjobstatus[field].b;
			var c = _msdyn_intentharvesting_batchjobstatus[field].c;
			var d = _msdyn_intentharvesting_batchjobstatus[field].d;
			var g = _msdyn_intentharvesting_batchjobstatus[field].g;
			var r = _msdyn_intentharvesting_batchjobstatus[field].r;
			webApiField(msdyn_intentharvesting_batchjobstatus, field, e, a, b, c, d, r, u, g);
		}
		msdyn_intentharvesting_batchjobstatus.Entity = u;
		msdyn_intentharvesting_batchjobstatus.EntityName = 'msdyn_intentharvesting_batchjobstatus';
		msdyn_intentharvesting_batchjobstatus.EntityCollectionName = 'msdyn_intentharvesting_batchjobstatuses';
		msdyn_intentharvesting_batchjobstatus['@odata.etag'] = e['@odata.etag'];
		msdyn_intentharvesting_batchjobstatus.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_intentharvesting_batchjobstatus.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_intentharvesting_batchjobstatus;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_intentharvesting_batchjobstatus = {
		msdyn_jobstatus : {
			Failed: 192350001,
			Inprogress: 192350000,
			Pending: 192350003,
			Success: 192350002
		},
		msdyn_jobtype : {
			Default: 192350000,
			Simulation: 192350001
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