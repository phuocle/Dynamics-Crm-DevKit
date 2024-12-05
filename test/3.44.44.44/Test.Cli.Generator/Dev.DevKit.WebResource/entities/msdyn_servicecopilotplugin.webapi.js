'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_servicecopilotpluginApi = function (e) {
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
		var _msdyn_servicecopilotplugin = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			LastPublishSuccessOn_UtcDateAndTime: { a: 'msdyn_lastpublishsuccesson' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_aipluginid: { b: 'msdyn_aipluginid', a: '_msdyn_aipluginid_value', c: 'aiplugins', d: 'aiplugin' },
			msdyn_analyticsenabled: { a: 'msdyn_analyticsenabled' },
			msdyn_authmode: { a: 'msdyn_authmode' },
			msdyn_botcomponentid: { b: 'msdyn_botcomponentid', a: '_msdyn_botcomponentid_value', c: 'botcomponents', d: 'botcomponent' },
			msdyn_connectionidpendingpublish: { a: 'msdyn_connectionidpendingpublish' },
			msdyn_customconnectorcontext: { a: 'msdyn_customconnectorcontext' },
			msdyn_ispublishpending: { a: 'msdyn_ispublishpending' },
			msdyn_lastbappluginsynctime_UtcDateOnly: { a: 'msdyn_lastbappluginsynctime' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_needsrolecheck: { a: 'msdyn_needsrolecheck' },
			msdyn_parameterconfiguration: { a: 'msdyn_parameterconfiguration' },
			msdyn_plugindescription: { a: 'msdyn_plugindescription' },
			msdyn_pluginname: { a: 'msdyn_pluginname' },
			msdyn_plugintype: { a: 'msdyn_plugintype' },
			msdyn_pluginuniquename: { a: 'msdyn_pluginuniquename' },
			msdyn_servicecopilotpluginId: { a: 'msdyn_servicecopilotpluginid' },
			msdyn_skipgptresponse: { a: 'msdyn_skipgptresponse' },
			msdyn_status: { a: 'msdyn_status' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PublishInitiatedOn_UtcDateAndTime: { a: 'msdyn_publishinitiatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_servicecopilotplugin = {};
		msdyn_servicecopilotplugin.ODataEntity = e;
		msdyn_servicecopilotplugin.FormattedValue = {};
		for (var field in _msdyn_servicecopilotplugin) {
			var a = _msdyn_servicecopilotplugin[field].a;
			var b = _msdyn_servicecopilotplugin[field].b;
			var c = _msdyn_servicecopilotplugin[field].c;
			var d = _msdyn_servicecopilotplugin[field].d;
			var g = _msdyn_servicecopilotplugin[field].g;
			var r = _msdyn_servicecopilotplugin[field].r;
			webApiField(msdyn_servicecopilotplugin, field, e, a, b, c, d, r, u, g);
		}
		msdyn_servicecopilotplugin.Entity = u;
		msdyn_servicecopilotplugin.EntityName = 'msdyn_servicecopilotplugin';
		msdyn_servicecopilotplugin.EntityCollectionName = 'msdyn_servicecopilotplugins';
		msdyn_servicecopilotplugin['@odata.etag'] = e['@odata.etag'];
		msdyn_servicecopilotplugin.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_servicecopilotplugin.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_servicecopilotplugin;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_servicecopilotplugin = {
		msdyn_authmode : {
			Invoker: 0,
			Maker: 1
		},
		msdyn_plugintype : {
			Connector: 2,
			CustomConnector: 1,
			Dataverse: 0
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