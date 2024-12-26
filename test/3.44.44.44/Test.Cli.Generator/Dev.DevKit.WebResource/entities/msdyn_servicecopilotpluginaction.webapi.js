'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_servicecopilotpluginactionApi = function (e) {
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
		var _msdyn_servicecopilotpluginaction = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_actionuniquename: { a: 'msdyn_actionuniquename' },
			msdyn_aipluginoperationid: { b: 'msdyn_aipluginoperationid', a: '_msdyn_aipluginoperationid_value', c: 'aipluginoperations', d: 'aipluginoperation' },
			msdyn_botcomponentid: { b: 'msdyn_botcomponentid', a: '_msdyn_botcomponentid_value', c: 'botcomponents', d: 'botcomponent' },
			msdyn_connectorname: { a: 'msdyn_connectorname' },
			msdyn_lastactionsynctime_UtcDateOnly: { a: 'msdyn_lastactionsynctime' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_parameterconfiguration: { a: 'msdyn_parameterconfiguration' },
			msdyn_parameterconfigurationpendingpublish: { a: 'msdyn_parameterconfigurationpendingpublish' },
			msdyn_servicecopilotpluginactionId: { a: 'msdyn_servicecopilotpluginactionid' },
			msdyn_servicecopilotpluginid: { b: 'msdyn_servicecopilotpluginid', a: '_msdyn_servicecopilotpluginid_value', c: 'msdyn_servicecopilotplugins', d: 'msdyn_servicecopilotplugin' },
			msdyn_status: { a: 'msdyn_status' },
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
		var msdyn_servicecopilotpluginaction = {};
		msdyn_servicecopilotpluginaction.ODataEntity = e;
		msdyn_servicecopilotpluginaction.FormattedValue = {};
		for (var field in _msdyn_servicecopilotpluginaction) {
			var a = _msdyn_servicecopilotpluginaction[field].a;
			var b = _msdyn_servicecopilotpluginaction[field].b;
			var c = _msdyn_servicecopilotpluginaction[field].c;
			var d = _msdyn_servicecopilotpluginaction[field].d;
			var g = _msdyn_servicecopilotpluginaction[field].g;
			var r = _msdyn_servicecopilotpluginaction[field].r;
			webApiField(msdyn_servicecopilotpluginaction, field, e, a, b, c, d, r, u, g);
		}
		msdyn_servicecopilotpluginaction.Entity = u;
		msdyn_servicecopilotpluginaction.EntityName = 'msdyn_servicecopilotpluginaction';
		msdyn_servicecopilotpluginaction.EntityCollectionName = 'msdyn_servicecopilotpluginactions';
		msdyn_servicecopilotpluginaction['@odata.etag'] = e['@odata.etag'];
		msdyn_servicecopilotpluginaction.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_servicecopilotpluginaction.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_servicecopilotpluginaction;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_servicecopilotpluginaction = {
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