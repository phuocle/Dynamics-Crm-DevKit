'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_connectordatasourceApi = function (e) {
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
		var _msdyn_connectordatasource = {
			msdyn_appsenvironment: { a: 'msdyn_appsenvironment' },
			msdyn_clientid: { a: 'msdyn_clientid' },
			msdyn_clientsecret: { a: 'msdyn_clientsecret' },
			msdyn_connectionreference: { a: 'msdyn_connectionreference' },
			msdyn_ConnectionReferenceId: { b: 'msdyn_ConnectionReferenceId', a: '_msdyn_connectionreferenceid_value', c: 'connectionreferences', d: 'connectionreference' },
			msdyn_connectordatasourceId: { a: 'msdyn_connectordatasourceid' },
			msdyn_connectortype: { a: 'msdyn_connectortype' },
			msdyn_dataset_unresolvedvalue: { a: 'msdyn_dataset_unresolvedvalue' },
			msdyn_dataset_value: { a: 'msdyn_dataset_value' },
			msdyn_hasacling: { a: 'msdyn_hasacling' },
			msdyn_host: { a: 'msdyn_host' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_resource: { a: 'msdyn_resource' },
			msdyn_tenant: { a: 'msdyn_tenant' },
			msdyn_userauth: { a: 'msdyn_userauth' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_connectordatasource = {};
		msdyn_connectordatasource.ODataEntity = e;
		msdyn_connectordatasource.FormattedValue = {};
		for (var field in _msdyn_connectordatasource) {
			var a = _msdyn_connectordatasource[field].a;
			var b = _msdyn_connectordatasource[field].b;
			var c = _msdyn_connectordatasource[field].c;
			var d = _msdyn_connectordatasource[field].d;
			var g = _msdyn_connectordatasource[field].g;
			var r = _msdyn_connectordatasource[field].r;
			webApiField(msdyn_connectordatasource, field, e, a, b, c, d, r, u, g);
		}
		msdyn_connectordatasource.Entity = u;
		msdyn_connectordatasource.EntityName = 'msdyn_connectordatasource';
		msdyn_connectordatasource.EntityCollectionName = 'msdyn_connectordatasources';
		msdyn_connectordatasource['@odata.etag'] = e['@odata.etag'];
		msdyn_connectordatasource.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_connectordatasource.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_connectordatasource;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_connectordatasource = {
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