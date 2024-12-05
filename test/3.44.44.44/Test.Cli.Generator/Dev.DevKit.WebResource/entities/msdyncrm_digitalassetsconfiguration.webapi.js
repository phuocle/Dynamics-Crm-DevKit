'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_digitalassetsconfigurationApi = function (e) {
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
		var _msdyncrm_digitalassetsconfiguration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_configcacheexpirationdate_UtcDateAndTime: { a: 'msdyncrm_configcacheexpirationdate' },
			msdyncrm_ConfigCacheExpirationPeriodInMs: { a: 'msdyncrm_configcacheexpirationperiodinms' },
			msdyncrm_default: { a: 'msdyncrm_default' },
			msdyncrm_digitalassetsconfigurationId: { a: 'msdyncrm_digitalassetsconfigurationid' },
			msdyncrm_DiscoveryEndpointUrl: { a: 'msdyncrm_discoveryendpointurl' },
			msdyncrm_httptimeout: { a: 'msdyncrm_httptimeout' },
			msdyncrm_IsCxpFlowEnabled: { a: 'msdyncrm_iscxpflowenabled' },
			msdyncrm_IsInstallComplete: { a: 'msdyncrm_isinstallcomplete' },
			msdyncrm_librarystatus: { a: 'msdyncrm_librarystatus' },
			msdyncrm_maxretryattempts: { a: 'msdyncrm_maxretryattempts' },
			msdyncrm_migrationstatus: { a: 'msdyncrm_migrationstatus' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_organization_config: { a: 'msdyncrm_organization_config' },
			msdyncrm_tokenauthenticationresource: { a: 'msdyncrm_tokenauthenticationresource' },
			msdyncrm_UseBasicAuth: { a: 'msdyncrm_usebasicauth' },
			msdyncrm_usedlibrary: { a: 'msdyncrm_usedlibrary' },
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
		var msdyncrm_digitalassetsconfiguration = {};
		msdyncrm_digitalassetsconfiguration.ODataEntity = e;
		msdyncrm_digitalassetsconfiguration.FormattedValue = {};
		for (var field in _msdyncrm_digitalassetsconfiguration) {
			var a = _msdyncrm_digitalassetsconfiguration[field].a;
			var b = _msdyncrm_digitalassetsconfiguration[field].b;
			var c = _msdyncrm_digitalassetsconfiguration[field].c;
			var d = _msdyncrm_digitalassetsconfiguration[field].d;
			var g = _msdyncrm_digitalassetsconfiguration[field].g;
			var r = _msdyncrm_digitalassetsconfiguration[field].r;
			webApiField(msdyncrm_digitalassetsconfiguration, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_digitalassetsconfiguration.Entity = u;
		msdyncrm_digitalassetsconfiguration.EntityName = 'msdyncrm_digitalassetsconfiguration';
		msdyncrm_digitalassetsconfiguration.EntityCollectionName = 'msdyncrm_digitalassetsconfigurations';
		msdyncrm_digitalassetsconfiguration['@odata.etag'] = e['@odata.etag'];
		msdyncrm_digitalassetsconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_digitalassetsconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_digitalassetsconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_digitalassetsconfiguration = {
		msdyncrm_librarystatus : {
			Failed: 270100004,
			Installing: 270100002,
			Ready: 270100001,
			Uninstalling: 270100003,
			Unknown: 270100000
		},
		msdyncrm_migrationstatus : {
			Completed: 270100001,
			Unknown: 270100000
		},
		msdyncrm_usedlibrary : {
			CMS: 270100002,
			DigitalAssets: 270100001,
			Unknown: 270100000
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