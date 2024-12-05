'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.PluginAssemblyApi = function (e) {
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
		var _pluginassembly = {
			AuthType: { a: 'authtype' },
			ComponentState: { a: 'componentstate', r: true },
			Content: { a: 'content' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Culture: { a: 'culture' },
			CustomizationLevel: { a: 'customizationlevel', r: true },
			Description: { a: 'description' },
			IntroducedVersion: { a: 'introducedversion' },
			IsCustomizable: { a: 'iscustomizable' },
			IsHidden: { a: 'ishidden' },
			IsManaged: { a: 'ismanaged', r: true },
			IsolationMode: { a: 'isolationmode' },
			IsPasswordSet: { a: 'ispasswordset', r: true },
			Major: { a: 'major', r: true },
			ManagedIdentityId: { b: 'managedidentityid', a: '_managedidentityid_value', c: 'managedidentities', d: 'managedidentity' },
			Minor: { a: 'minor', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			PackageId: { b: 'packageid', a: '_packageid_value', c: 'pluginpackages', d: 'pluginpackage' },
			Password: { a: 'password' },
			Path: { a: 'path' },
			PluginAssemblyId: { a: 'pluginassemblyid' },
			PluginAssemblyIdUnique: { a: 'pluginassemblyidunique', r: true },
			PublicKeyToken: { a: 'publickeytoken' },
			SolutionId: { a: 'solutionid', r: true },
			SourceHash: { a: 'sourcehash' },
			SourceType: { a: 'sourcetype' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			Url: { a: 'url' },
			UserName: { a: 'username' },
			Version: { a: 'version' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var pluginassembly = {};
		pluginassembly.ODataEntity = e;
		pluginassembly.FormattedValue = {};
		for (var field in _pluginassembly) {
			var a = _pluginassembly[field].a;
			var b = _pluginassembly[field].b;
			var c = _pluginassembly[field].c;
			var d = _pluginassembly[field].d;
			var g = _pluginassembly[field].g;
			var r = _pluginassembly[field].r;
			webApiField(pluginassembly, field, e, a, b, c, d, r, u, g);
		}
		pluginassembly.Entity = u;
		pluginassembly.EntityName = 'pluginassembly';
		pluginassembly.EntityCollectionName = 'pluginassemblies';
		pluginassembly['@odata.etag'] = e['@odata.etag'];
		pluginassembly.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		pluginassembly.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return pluginassembly;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PluginAssembly = {
		AuthType : {
			BasicAuth: 0
		},
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		IsolationMode : {
			External: 3,
			None: 1,
			Sandbox: 2
		},
		SourceType : {
			AzureWebApp: 3,
			Database: 0,
			Disk: 1,
			File_Store: 4,
			Normal: 2
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