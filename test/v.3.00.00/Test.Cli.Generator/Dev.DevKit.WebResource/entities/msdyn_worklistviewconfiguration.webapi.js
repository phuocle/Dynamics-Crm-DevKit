'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_worklistviewconfigurationApi = function (e) {
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
		var _msdyn_worklistviewconfiguration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_defaultsortconfiguration: { a: 'msdyn_defaultsortconfiguration' },
			msdyn_entityconfiguration: { a: 'msdyn_entityconfiguration' },
			msdyn_filterconfiguration: { a: 'msdyn_filterconfiguration' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_salesaccelerationsettingsid: { b: 'msdyn_salesaccelerationsettingsid', a: '_msdyn_salesaccelerationsettingsid_value', c: 'msdyn_salesaccelerationsettingses', d: 'msdyn_salesaccelerationsettings' },
			msdyn_securityrolelist: { a: 'msdyn_securityrolelist' },
			msdyn_tagsconfiguration: { a: 'msdyn_tagsconfiguration' },
			msdyn_viewtype: { a: 'msdyn_viewtype' },
			msdyn_worklistviewconfigurationId: { a: 'msdyn_worklistviewconfigurationid' },
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
		var msdyn_worklistviewconfiguration = {};
		msdyn_worklistviewconfiguration.ODataEntity = e;
		msdyn_worklistviewconfiguration.FormattedValue = {};
		for (var field in _msdyn_worklistviewconfiguration) {
			var a = _msdyn_worklistviewconfiguration[field].a;
			var b = _msdyn_worklistviewconfiguration[field].b;
			var c = _msdyn_worklistviewconfiguration[field].c;
			var d = _msdyn_worklistviewconfiguration[field].d;
			var g = _msdyn_worklistviewconfiguration[field].g;
			var r = _msdyn_worklistviewconfiguration[field].r;
			webApiField(msdyn_worklistviewconfiguration, field, e, a, b, c, d, r, u, g);
		}
		msdyn_worklistviewconfiguration.Entity = u;
		msdyn_worklistviewconfiguration.EntityName = 'msdyn_worklistviewconfiguration';
		msdyn_worklistviewconfiguration.EntityCollectionName = 'msdyn_worklistviewconfigurations';
		msdyn_worklistviewconfiguration['@odata.etag'] = e['@odata.etag'];
		msdyn_worklistviewconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_worklistviewconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_worklistviewconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_worklistviewconfiguration = {
		msdyn_viewtype : {
			Sequence: 0,
			Suggestion: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 1,
			Published: 2
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