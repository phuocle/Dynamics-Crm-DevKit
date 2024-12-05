'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_workflowresumemapApi = function (e) {
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
		var _msdynmkt_workflowresumemap = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_eventdata: { a: 'msdynmkt_eventdata' },
			msdynmkt_eventname: { a: 'msdynmkt_eventname' },
			msdynmkt_isseriestile: { a: 'msdynmkt_isseriestile' },
			msdynmkt_journeydefinitionid: { a: 'msdynmkt_journeydefinitionid' },
			msdynmkt_journeyinstanceid: { a: 'msdynmkt_journeyinstanceid' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_resultstatus: { a: 'msdynmkt_resultstatus' },
			msdynmkt_resumecriteria: { a: 'msdynmkt_resumecriteria' },
			msdynmkt_targetentity: { a: 'msdynmkt_targetentity' },
			msdynmkt_targetid: { a: 'msdynmkt_targetid' },
			msdynmkt_workflowresumemapId: { a: 'msdynmkt_workflowresumemapid' },
			msdynmkt_workflowresumeurl: { a: 'msdynmkt_workflowresumeurl' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_workflowresumemap = {};
		msdynmkt_workflowresumemap.ODataEntity = e;
		msdynmkt_workflowresumemap.FormattedValue = {};
		for (var field in _msdynmkt_workflowresumemap) {
			var a = _msdynmkt_workflowresumemap[field].a;
			var b = _msdynmkt_workflowresumemap[field].b;
			var c = _msdynmkt_workflowresumemap[field].c;
			var d = _msdynmkt_workflowresumemap[field].d;
			var g = _msdynmkt_workflowresumemap[field].g;
			var r = _msdynmkt_workflowresumemap[field].r;
			webApiField(msdynmkt_workflowresumemap, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_workflowresumemap.Entity = u;
		msdynmkt_workflowresumemap.EntityName = 'msdynmkt_workflowresumemap';
		msdynmkt_workflowresumemap.EntityCollectionName = 'msdynmkt_workflowresumemaps';
		msdynmkt_workflowresumemap['@odata.etag'] = e['@odata.etag'];
		msdynmkt_workflowresumemap.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_workflowresumemap.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_workflowresumemap;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_workflowresumemap = {
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