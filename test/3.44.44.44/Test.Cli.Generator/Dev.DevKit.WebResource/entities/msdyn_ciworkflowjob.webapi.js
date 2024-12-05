'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ciworkflowjobApi = function (e) {
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
		var _msdyn_ciworkflowjob = {
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			msdyn_cancelledby: { a: 'msdyn_cancelledby' },
			msdyn_ciworkflowjobId: { a: 'msdyn_ciworkflowjobid' },
			msdyn_endtimestamp_UtcDateAndTime: { a: 'msdyn_endtimestamp' },
			msdyn_forcerunrequested: { a: 'msdyn_forcerunrequested' },
			msdyn_graphname: { a: 'msdyn_graphname' },
			msdyn_graphversion: { a: 'msdyn_graphversion' },
			msdyn_idlistserialized: { a: 'msdyn_idlistserialized' },
			msdyn_inputrefreshmode: { a: 'msdyn_inputrefreshmode' },
			msdyn_jobid: { a: 'msdyn_jobid' },
			msdyn_jobstatus: { a: 'msdyn_jobstatus' },
			msdyn_jobsubmissionkind: { a: 'msdyn_jobsubmissionkind' },
			msdyn_jobtype: { a: 'msdyn_jobtype' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_operationtype: { a: 'msdyn_operationtype' },
			msdyn_optionsserialized: { a: 'msdyn_optionsserialized' },
			msdyn_starttimestamp_UtcDateAndTime: { a: 'msdyn_starttimestamp' },
			msdyn_submittedby: { a: 'msdyn_submittedby' },
			msdyn_subtype: { a: 'msdyn_subtype' },
			msdyn_taskidsserialized: { a: 'msdyn_taskidsserialized' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_ciworkflowjob = {};
		msdyn_ciworkflowjob.ODataEntity = e;
		msdyn_ciworkflowjob.FormattedValue = {};
		for (var field in _msdyn_ciworkflowjob) {
			var a = _msdyn_ciworkflowjob[field].a;
			var b = _msdyn_ciworkflowjob[field].b;
			var c = _msdyn_ciworkflowjob[field].c;
			var d = _msdyn_ciworkflowjob[field].d;
			var g = _msdyn_ciworkflowjob[field].g;
			var r = _msdyn_ciworkflowjob[field].r;
			webApiField(msdyn_ciworkflowjob, field, e, a, b, c, d, r, u, g);
		}
		msdyn_ciworkflowjob.Entity = u;
		msdyn_ciworkflowjob.EntityName = 'msdyn_ciworkflowjob';
		msdyn_ciworkflowjob.EntityCollectionName = 'msdyn_ciworkflowjobs';
		msdyn_ciworkflowjob['@odata.etag'] = e['@odata.etag'];
		msdyn_ciworkflowjob.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ciworkflowjob.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ciworkflowjob;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ciworkflowjob = {
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