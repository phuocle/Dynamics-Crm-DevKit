'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SolutionApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var property = {};
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return EMPTY_STRING;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return EMPTY_STRING;
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
					value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(property, 'FormattedValue', {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(property, 'Value', {
					get: getValue
				});
			}
			else {
				Object.defineProperty(property, 'Value', {
					get: getValue,
					set: setValue
				});
			}
			return property;
		}
		var solution = {
			ConfigurationPageId: { b: 'configurationpageid', a: '_configurationpageid_value', c: 'webresources', d: 'webresource' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			FileId: { a: 'fileid', r: true },
			FriendlyName: { a: 'friendlyname' },
			InstalledOn_UtcDateOnly: { a: 'installedon', r: true },
			IsApiManaged: { a: 'isapimanaged', r: true },
			IsInternal: { a: 'isinternal', r: true },
			IsManaged: { a: 'ismanaged', r: true },
			IsVisible: { a: 'isvisible', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			ParentSolutionId: { b: 'parentsolutionid', a: '_parentsolutionid_value', c: 'solutions', d: 'solution', r: true },
			PinpointAssetId: { a: 'pinpointassetid', r: true },
			PinpointPublisherId: { a: 'pinpointpublisherid', r: true },
			PinpointSolutionDefaultLocale: { a: 'pinpointsolutiondefaultlocale', r: true },
			PinpointSolutionId: { a: 'pinpointsolutionid', r: true },
			PublisherId: { b: 'publisherid', a: '_publisherid_value', c: 'publishers', d: 'publisher' },
			SolutionId: { a: 'solutionid' },
			SolutionPackageVersion: { a: 'solutionpackageversion' },
			SolutionType: { a: 'solutiontype' },
			TemplateSuffix: { a: 'templatesuffix' },
			Thumbprint: { a: 'thumbprint' },
			UniqueName: { a: 'uniquename' },
			UpdatedOn_UtcDateAndTime: { a: 'updatedon', r: true },
			UpgradeInfo: { a: 'upgradeinfo', r: true },
			Version: { a: 'version' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in solution) {
			var a = solution[field].a;
			var b = solution[field].b;
			var c = solution[field].c;
			var d = solution[field].d;
			var g = solution[field].g;
			var r = solution[field].r;
			solution[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		solution.Entity = u;
		solution.EntityName = 'solution';
		solution.EntityCollectionName = 'solutions';
		solution['@odata.etag'] = e['@odata.etag'];
		solution.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		solution.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return solution;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Solution = {
		SolutionType : {
			Internal: 2,
			None: 0,
			Snapshot: 1
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