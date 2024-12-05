'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ciworkflowtaskApi = function (e) {
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
		var _msdyn_ciworkflowtask = {
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			msdyn_additionalinfosserialized: { a: 'msdyn_additionalinfosserialized' },
			msdyn_cierrorserialized: { a: 'msdyn_cierrorserialized' },
			msdyn_cierrorsserialized: { a: 'msdyn_cierrorsserialized' },
			msdyn_ciworkflowtaskId: { a: 'msdyn_ciworkflowtaskid' },
			msdyn_endtimestamp_UtcDateAndTime: { a: 'msdyn_endtimestamp' },
			msdyn_friendlyname: { a: 'msdyn_friendlyname' },
			msdyn_graphname: { a: 'msdyn_graphname' },
			msdyn_graphversion: { a: 'msdyn_graphversion' },
			msdyn_identifier: { a: 'msdyn_identifier' },
			msdyn_inputdataserialized: { a: 'msdyn_inputdataserialized' },
			msdyn_jobidsserialized: { a: 'msdyn_jobidsserialized' },
			msdyn_jobtype: { a: 'msdyn_jobtype' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_nodename: { a: 'msdyn_nodename' },
			msdyn_nodeversion: { a: 'msdyn_nodeversion' },
			msdyn_operationtype: { a: 'msdyn_operationtype' },
			msdyn_outputdataserialized: { a: 'msdyn_outputdataserialized' },
			msdyn_selectionreasoncode: { a: 'msdyn_selectionreasoncode' },
			msdyn_selectionreasondetails: { a: 'msdyn_selectionreasondetails' },
			msdyn_starttimestamp_UtcDateAndTime: { a: 'msdyn_starttimestamp' },
			msdyn_submittedtimestamp_UtcDateAndTime: { a: 'msdyn_submittedtimestamp' },
			msdyn_subtype: { a: 'msdyn_subtype' },
			msdyn_taskid: { a: 'msdyn_taskid' },
			msdyn_taskstatus: { a: 'msdyn_taskstatus' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_ciworkflowtask = {};
		msdyn_ciworkflowtask.ODataEntity = e;
		msdyn_ciworkflowtask.FormattedValue = {};
		for (var field in _msdyn_ciworkflowtask) {
			var a = _msdyn_ciworkflowtask[field].a;
			var b = _msdyn_ciworkflowtask[field].b;
			var c = _msdyn_ciworkflowtask[field].c;
			var d = _msdyn_ciworkflowtask[field].d;
			var g = _msdyn_ciworkflowtask[field].g;
			var r = _msdyn_ciworkflowtask[field].r;
			webApiField(msdyn_ciworkflowtask, field, e, a, b, c, d, r, u, g);
		}
		msdyn_ciworkflowtask.Entity = u;
		msdyn_ciworkflowtask.EntityName = 'msdyn_ciworkflowtask';
		msdyn_ciworkflowtask.EntityCollectionName = 'msdyn_ciworkflowtasks';
		msdyn_ciworkflowtask['@odata.etag'] = e['@odata.etag'];
		msdyn_ciworkflowtask.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ciworkflowtask.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ciworkflowtask;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ciworkflowtask = {
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