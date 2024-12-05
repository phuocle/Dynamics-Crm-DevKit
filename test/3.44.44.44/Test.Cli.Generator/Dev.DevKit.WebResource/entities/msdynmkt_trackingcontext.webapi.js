'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_trackingcontextApi = function (e) {
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
		var _msdynmkt_trackingcontext = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_businessunitid: { a: 'msdynmkt_businessunitid' },
			msdynmkt_channeldefinitionid: { a: 'msdynmkt_channeldefinitionid' },
			msdynmkt_channeltype: { a: 'msdynmkt_channeltype' },
			msdynmkt_contactpoint: { a: 'msdynmkt_contactpoint' },
			msdynmkt_contexttype: { a: 'msdynmkt_contexttype' },
			msdynmkt_customerjourneyid: { a: 'msdynmkt_customerjourneyid' },
			msdynmkt_customerjourneyinstanceid: { a: 'msdynmkt_customerjourneyinstanceid' },
			msdynmkt_customerjourneytype: { a: 'msdynmkt_customerjourneytype' },
			msdynmkt_customerjourneyversion: { a: 'msdynmkt_customerjourneyversion' },
			msdynmkt_emaildelivered: { a: 'msdynmkt_trackingcontext_emaildelivered' },
			msdynmkt_entityid: { a: 'msdynmkt_entityid' },
			msdynmkt_entitytype: { a: 'msdynmkt_entitytype' },
			msdynmkt_identityid: { a: 'msdynmkt_identityid' },
			msdynmkt_journeyactivityid: { a: 'msdynmkt_journeyactivityid' },
			msdynmkt_jsondata: { a: 'msdynmkt_jsondata' },
			msdynmkt_linkfriendlyname: { a: 'msdynmkt_linkfriendlyname' },
			msdynmkt_links: { a: 'msdynmkt_links' },
			msdynmkt_messagetemplateid: { a: 'msdynmkt_messagetemplateid' },
			msdynmkt_messagetemplateversion: { a: 'msdynmkt_messagetemplateversion' },
			msdynmkt_messagevariationindexes: { a: 'msdynmkt_messagevariationindexes' },
			msdynmkt_messagevariationname: { a: 'msdynmkt_messagevariationname' },
			msdynmkt_profileid: { a: 'msdynmkt_profileid' },
			msdynmkt_sender: { a: 'msdynmkt_sender' },
			msdynmkt_targeturl: { a: 'msdynmkt_targeturl' },
			msdynmkt_trackingcontextId: { a: 'msdynmkt_trackingcontextid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_trackingcontext = {};
		msdynmkt_trackingcontext.ODataEntity = e;
		msdynmkt_trackingcontext.FormattedValue = {};
		for (var field in _msdynmkt_trackingcontext) {
			var a = _msdynmkt_trackingcontext[field].a;
			var b = _msdynmkt_trackingcontext[field].b;
			var c = _msdynmkt_trackingcontext[field].c;
			var d = _msdynmkt_trackingcontext[field].d;
			var g = _msdynmkt_trackingcontext[field].g;
			var r = _msdynmkt_trackingcontext[field].r;
			webApiField(msdynmkt_trackingcontext, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_trackingcontext.Entity = u;
		msdynmkt_trackingcontext.EntityName = 'msdynmkt_trackingcontext';
		msdynmkt_trackingcontext.EntityCollectionName = 'msdynmkt_trackingcontexts';
		msdynmkt_trackingcontext['@odata.etag'] = e['@odata.etag'];
		msdynmkt_trackingcontext.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_trackingcontext.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_trackingcontext;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_trackingcontext = {
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