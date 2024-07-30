'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SolutionComponentDefinitionApi = function (e) {
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
		var _solutioncomponentdefinition = {
			AllowDeleteBaseSolutionRowAndFakeDelete: { a: 'allowdeletebasesolutionrowandfakedelete' },
			AllowOverwriteCustomizations: { a: 'allowoverwritecustomizations' },
			AllowRecreateForLogicallyDeletedRow: { a: 'allowrecreateforlogicallydeletedrow' },
			AlwaysRemoveActiveCustomizationsOnUninstall: { a: 'alwaysremoveactivecustomizationsonuninstall' },
			CanBeAddedToSolutionComponents: { a: 'canbeaddedtosolutioncomponents' },
			CanBeHidden: { a: 'canbehidden' },
			ComponentState: { a: 'componentstate', r: true },
			ComponentXPath: { a: 'componentxpath' },
			DescendentIsViewableComponent: { a: 'descendentisviewablecomponent' },
			GroupParentComponentAttributeName: { a: 'groupparentcomponentattributename' },
			GroupParentComponentType: { a: 'groupparentcomponenttype' },
			HasIsRenameableAttribute: { a: 'hasisrenameableattribute' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IntroducedVersion: { a: 'introducedversion' },
			IsDependencyDisabled: { a: 'isdependencydisabled' },
			IsDisplayable: { a: 'isdisplayable' },
			IsManaged: { a: 'ismanaged' },
			IsMergeable: { a: 'ismergeable' },
			IsMetadata: { a: 'ismetadata' },
			IsViewable: { a: 'isviewable' },
			LabelTypeCode: { a: 'labeltypecode' },
			Name: { a: 'name' },
			ObjectTypeCode: { a: 'objecttypecode' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			ParentAttributeName: { a: 'parentattributename' },
			PrimaryEntityName: { a: 'primaryentityname' },
			RemoveActiveCustomizationsBehavior: { a: 'removeactivecustomizationsbehavior' },
			RootAttributeName: { a: 'rootattributename' },
			RootComponent: { a: 'rootcomponent' },
			SolutionComponentDefinitionId: { a: 'solutioncomponentdefinitionid' },
			SolutionComponentDefinitionIdUnique: { a: 'solutioncomponentdefinitionidunique', r: true },
			SolutionComponentType: { a: 'solutioncomponenttype' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			UseForceDeleteForSolutionUpdate: { a: 'useforcedeleteforsolutionupdate' },
			UseForceUpdateAlways: { a: 'useforceupdatealways' },
			UseSentinelRowInBaseSolution: { a: 'usesentinelrowinbasesolution' },
			ViewableDescendentComponentType: { a: 'viewabledescendentcomponenttype' }
		};
		if (e === undefined) e = {};
		var u = {};
		var solutioncomponentdefinition = {};
		solutioncomponentdefinition.ODataEntity = e;
		solutioncomponentdefinition.FormattedValue = {};
		for (var field in _solutioncomponentdefinition) {
			var a = _solutioncomponentdefinition[field].a;
			var b = _solutioncomponentdefinition[field].b;
			var c = _solutioncomponentdefinition[field].c;
			var d = _solutioncomponentdefinition[field].d;
			var g = _solutioncomponentdefinition[field].g;
			var r = _solutioncomponentdefinition[field].r;
			webApiField(solutioncomponentdefinition, field, e, a, b, c, d, r, u, g);
		}
		solutioncomponentdefinition.Entity = u;
		solutioncomponentdefinition.EntityName = 'solutioncomponentdefinition';
		solutioncomponentdefinition.EntityCollectionName = 'solutioncomponentdefinitions';
		solutioncomponentdefinition['@odata.etag'] = e['@odata.etag'];
		solutioncomponentdefinition.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		solutioncomponentdefinition.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return solutioncomponentdefinition;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SolutionComponentDefinition = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		RemoveActiveCustomizationsBehavior : {
			Khong: 0,
			Khong_phan_tang: 1,
			Phan_tang: 2
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