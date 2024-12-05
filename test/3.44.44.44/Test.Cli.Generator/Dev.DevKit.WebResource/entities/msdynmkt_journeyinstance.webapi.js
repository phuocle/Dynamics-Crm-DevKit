'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_journeyinstanceApi = function (e) {
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
		var _msdynmkt_journeyinstance = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_baseversionjourneyid: { a: 'msdynmkt_baseversionjourneyid' },
			msdynmkt_eventuniqueidentifier: { a: 'msdynmkt_eventuniqueidentifier' },
			msdynmkt_journeydefinitionid: { a: 'msdynmkt_journeydefinitionid' },
			msdynmkt_journeyinstanceId: { a: 'msdynmkt_journeyinstanceid' },
			msdynmkt_journeyinstancestate: { a: 'msdynmkt_journeyinstancestate' },
			msdynmkt_journeyinstancetype: { a: 'msdynmkt_journeyinstancetype' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_targetentity: { a: 'msdynmkt_targetentity' },
			msdynmkt_targetid: { a: 'msdynmkt_targetid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_journeyinstance = {};
		msdynmkt_journeyinstance.ODataEntity = e;
		msdynmkt_journeyinstance.FormattedValue = {};
		for (var field in _msdynmkt_journeyinstance) {
			var a = _msdynmkt_journeyinstance[field].a;
			var b = _msdynmkt_journeyinstance[field].b;
			var c = _msdynmkt_journeyinstance[field].c;
			var d = _msdynmkt_journeyinstance[field].d;
			var g = _msdynmkt_journeyinstance[field].g;
			var r = _msdynmkt_journeyinstance[field].r;
			webApiField(msdynmkt_journeyinstance, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_journeyinstance.Entity = u;
		msdynmkt_journeyinstance.EntityName = 'msdynmkt_journeyinstance';
		msdynmkt_journeyinstance.EntityCollectionName = 'msdynmkt_journeyinstances';
		msdynmkt_journeyinstance['@odata.etag'] = e['@odata.etag'];
		msdynmkt_journeyinstance.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_journeyinstance.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_journeyinstance;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_journeyinstance = {
		msdynmkt_journeyinstancestate : {
			CancelledByActionFailure: 534121005,
			CancelledByExitEvent: 534121002,
			CancelledByJourneyStopped: 534121004,
			CancelledBySupressionSegment: 534121003,
			Completed: 534121001,
			Inprogress: 534121000
		},
		msdynmkt_journeyinstancetype : {
			Event: 534120000,
			Scheduled: 534120001
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