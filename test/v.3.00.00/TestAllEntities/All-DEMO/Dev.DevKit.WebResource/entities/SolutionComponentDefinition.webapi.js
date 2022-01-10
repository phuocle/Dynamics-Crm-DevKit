'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SolutionComponentDefinitionApi = function (e) {
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
		var solutioncomponentdefinition = {
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
		for (var field in solutioncomponentdefinition) {
			var a = solutioncomponentdefinition[field].a;
			var b = solutioncomponentdefinition[field].b;
			var c = solutioncomponentdefinition[field].c;
			var d = solutioncomponentdefinition[field].d;
			var g = solutioncomponentdefinition[field].g;
			var r = solutioncomponentdefinition[field].r;
			solutioncomponentdefinition[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		solutioncomponentdefinition.Entity = u;
		solutioncomponentdefinition.EntityName = 'solutioncomponentdefinition';
		solutioncomponentdefinition.EntityCollectionName = 'solutioncomponentdefinitions';
		solutioncomponentdefinition['@odata.etag'] = e['@odata.etag'];
		solutioncomponentdefinition.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		solutioncomponentdefinition.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
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
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		RemoveActiveCustomizationsBehavior : {
			Cascade: 2,
			No_Cascade: 1,
			None: 0
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