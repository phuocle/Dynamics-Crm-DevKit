'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_digitalsellingactivetaskApi = function (e) {
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
		var _msdyn_digitalsellingactivetask = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_correlationid: { a: 'msdyn_correlationid' },
			msdyn_currentstate: { a: 'msdyn_currentstate' },
			msdyn_customapiname: { a: 'msdyn_customapiname' },
			msdyn_digitalsellingactivetaskId: { a: 'msdyn_digitalsellingactivetaskid' },
			msdyn_entitytype: { a: 'msdyn_entitytype' },
			msdyn_inputparameters: { a: 'msdyn_inputparameters' },
			msdyn_inputtime_UtcDateAndTime: { a: 'msdyn_inputtime' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_recordid: { a: 'msdyn_recordid' },
			msdyn_retentiontimeindays: { a: 'msdyn_retentiontimeindays' },
			msdyn_tasktype: { a: 'msdyn_tasktype' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_digitalsellingactivetask = {};
		msdyn_digitalsellingactivetask.ODataEntity = e;
		msdyn_digitalsellingactivetask.FormattedValue = {};
		for (var field in _msdyn_digitalsellingactivetask) {
			var a = _msdyn_digitalsellingactivetask[field].a;
			var b = _msdyn_digitalsellingactivetask[field].b;
			var c = _msdyn_digitalsellingactivetask[field].c;
			var d = _msdyn_digitalsellingactivetask[field].d;
			var g = _msdyn_digitalsellingactivetask[field].g;
			var r = _msdyn_digitalsellingactivetask[field].r;
			webApiField(msdyn_digitalsellingactivetask, field, e, a, b, c, d, r, u, g);
		}
		msdyn_digitalsellingactivetask.Entity = u;
		msdyn_digitalsellingactivetask.EntityName = 'msdyn_digitalsellingactivetask';
		msdyn_digitalsellingactivetask.EntityCollectionName = 'msdyn_digitalsellingactivetasks';
		msdyn_digitalsellingactivetask['@odata.etag'] = e['@odata.etag'];
		msdyn_digitalsellingactivetask.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_digitalsellingactivetask.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_digitalsellingactivetask;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_digitalsellingactivetask = {
		msdyn_currentstate : {
			In_Progress: 2,
			New: 1
		},
		msdyn_tasktype : {
			CapacityDecrement: 3,
			CapacityIncrement: 2,
			ForceRoute: 6,
			None: 0,
			ReAssignment: 4,
			ReSegmentation: 5,
			Segmentation: 1
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