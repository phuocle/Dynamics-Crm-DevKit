'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_bpf_2c5fe86acc8b414b8322ae571000c799Api = function (e) {
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
		var _msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 = {
			ActiveStageId: { b: 'activestageid', a: '_activestageid_value', c: 'processstages', d: 'processstage' },
			ActiveStageStartedOn_UtcDateOnly: { a: 'activestagestartedon' },
			bpf_Duration: { a: 'bpf_duration', r: true },
			bpf_msdyn_purchaseorderbillid: { b: 'bpf_msdyn_purchaseorderbillid', a: '_bpf_msdyn_purchaseorderbillid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			bpf_msdyn_purchaseorderid: { b: 'bpf_msdyn_purchaseorderid', a: '_bpf_msdyn_purchaseorderid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			bpf_msdyn_purchaseorderreceiptid: { b: 'bpf_msdyn_purchaseorderreceiptid', a: '_bpf_msdyn_purchaseorderreceiptid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			bpf_name: { a: 'bpf_name' },
			BusinessProcessFlowInstanceId: { a: 'businessprocessflowinstanceid' },
			CompletedOn_UtcDateOnly: { a: 'completedon' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			ProcessId: { b: 'processid', a: '_processid_value', c: 'workflows', d: 'workflow' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 = {};
		msdyn_bpf_2c5fe86acc8b414b8322ae571000c799.ODataEntity = e;
		msdyn_bpf_2c5fe86acc8b414b8322ae571000c799.FormattedValue = {};
		for (var field in _msdyn_bpf_2c5fe86acc8b414b8322ae571000c799) {
			var a = _msdyn_bpf_2c5fe86acc8b414b8322ae571000c799[field].a;
			var b = _msdyn_bpf_2c5fe86acc8b414b8322ae571000c799[field].b;
			var c = _msdyn_bpf_2c5fe86acc8b414b8322ae571000c799[field].c;
			var d = _msdyn_bpf_2c5fe86acc8b414b8322ae571000c799[field].d;
			var g = _msdyn_bpf_2c5fe86acc8b414b8322ae571000c799[field].g;
			var r = _msdyn_bpf_2c5fe86acc8b414b8322ae571000c799[field].r;
			webApiField(msdyn_bpf_2c5fe86acc8b414b8322ae571000c799, field, e, a, b, c, d, r, u, g);
		}
		msdyn_bpf_2c5fe86acc8b414b8322ae571000c799.Entity = u;
		msdyn_bpf_2c5fe86acc8b414b8322ae571000c799.EntityName = 'msdyn_bpf_2c5fe86acc8b414b8322ae571000c799';
		msdyn_bpf_2c5fe86acc8b414b8322ae571000c799.EntityCollectionName = 'msdyn_bpf_2c5fe86acc8b414b8322ae571000c799s';
		msdyn_bpf_2c5fe86acc8b414b8322ae571000c799['@odata.etag'] = e['@odata.etag'];
		msdyn_bpf_2c5fe86acc8b414b8322ae571000c799.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_bpf_2c5fe86acc8b414b8322ae571000c799.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_bpf_2c5fe86acc8b414b8322ae571000c799;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Aborted: 3,
			Active: 1,
			Finished: 2
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