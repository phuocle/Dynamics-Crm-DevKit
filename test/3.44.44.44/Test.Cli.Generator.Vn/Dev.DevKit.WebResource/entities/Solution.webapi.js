'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SolutionApi = function (e) {
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
		var _solution = {
			ConfigurationPageId: { b: 'configurationpageid', a: '_configurationpageid_value', c: 'webresources', d: 'webresource' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			FileId_name: { a: 'fileid', r: true },
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
		var solution = {};
		solution.ODataEntity = e;
		solution.FormattedValue = {};
		for (var field in _solution) {
			var a = _solution[field].a;
			var b = _solution[field].b;
			var c = _solution[field].c;
			var d = _solution[field].d;
			var g = _solution[field].g;
			var r = _solution[field].r;
			webApiField(solution, field, e, a, b, c, d, r, u, g);
		}
		solution.Entity = u;
		solution.EntityName = 'solution';
		solution.EntityCollectionName = 'solutions';
		solution['@odata.etag'] = e['@odata.etag'];
		solution.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		solution.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
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
			Anh_chup_nhanh: 1,
			Khong_co: 0,
			Noi_bo: 2
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