'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.MsGraphResourceToSubscriptionApi = function (e) {
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
		var _msgraphresourcetosubscription = {
			CreatedInGraphOn_TimezoneDateAndTime: { a: 'createdingraphon' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			MsGraphResourceToSubscriptionId: { a: 'msgraphresourcetosubscriptionid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			ResourceId: { a: 'resourceid' },
			ResourceType: { a: 'resourcetype' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SubscriptionId: { a: 'subscriptionid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msgraphresourcetosubscription = {};
		msgraphresourcetosubscription.ODataEntity = e;
		msgraphresourcetosubscription.FormattedValue = {};
		for (var field in _msgraphresourcetosubscription) {
			var a = _msgraphresourcetosubscription[field].a;
			var b = _msgraphresourcetosubscription[field].b;
			var c = _msgraphresourcetosubscription[field].c;
			var d = _msgraphresourcetosubscription[field].d;
			var g = _msgraphresourcetosubscription[field].g;
			var r = _msgraphresourcetosubscription[field].r;
			webApiField(msgraphresourcetosubscription, field, e, a, b, c, d, r, u, g);
		}
		msgraphresourcetosubscription.Entity = u;
		msgraphresourcetosubscription.EntityName = 'msgraphresourcetosubscription';
		msgraphresourcetosubscription.EntityCollectionName = 'msgraphresourcetosubscriptions';
		msgraphresourcetosubscription['@odata.etag'] = e['@odata.etag'];
		msgraphresourcetosubscription.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msgraphresourcetosubscription.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msgraphresourcetosubscription;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.MsGraphResourceToSubscription = {
		ResourceType : {
			Tin_nhan_tro_chuyen_tren_Teams: 0
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