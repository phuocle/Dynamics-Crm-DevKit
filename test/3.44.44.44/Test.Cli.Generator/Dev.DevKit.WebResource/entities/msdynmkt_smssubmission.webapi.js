'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_smssubmissionApi = function (e) {
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
		var _msdynmkt_smssubmission = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_direction: { a: 'msdynmkt_direction' },
			msdynmkt_organizationcontactpoint: { a: 'msdynmkt_organizationcontactpoint' },
			msdynmkt_profileid: { a: 'msdynmkt_profileid' },
			msdynmkt_profiletype: { a: 'msdynmkt_profiletype' },
			msdynmkt_smssubmissionId: { a: 'msdynmkt_smssubmissionid' },
			msdynmkt_text: { a: 'msdynmkt_text' },
			msdynmkt_trackingcontextid: { b: 'msdynmkt_trackingcontextid', a: '_msdynmkt_trackingcontextid_value', c: 'msdynmkt_trackingcontexts', d: 'msdynmkt_trackingcontext' },
			msdynmkt_usercontactpoint: { a: 'msdynmkt_usercontactpoint' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_smssubmission = {};
		msdynmkt_smssubmission.ODataEntity = e;
		msdynmkt_smssubmission.FormattedValue = {};
		for (var field in _msdynmkt_smssubmission) {
			var a = _msdynmkt_smssubmission[field].a;
			var b = _msdynmkt_smssubmission[field].b;
			var c = _msdynmkt_smssubmission[field].c;
			var d = _msdynmkt_smssubmission[field].d;
			var g = _msdynmkt_smssubmission[field].g;
			var r = _msdynmkt_smssubmission[field].r;
			webApiField(msdynmkt_smssubmission, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_smssubmission.Entity = u;
		msdynmkt_smssubmission.EntityName = 'msdynmkt_smssubmission';
		msdynmkt_smssubmission.EntityCollectionName = 'msdynmkt_smssubmissions';
		msdynmkt_smssubmission['@odata.etag'] = e['@odata.etag'];
		msdynmkt_smssubmission.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_smssubmission.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_smssubmission;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_smssubmission = {
		msdynmkt_direction : {
			Inbound: 534130001,
			Outbound: 534130000
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