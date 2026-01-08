/**
 * SolutionComponentDefinition.webapi.ts - SolutionComponentDefinition WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SolutionComponentDefinition WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISolutionComponentDefinitionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISolutionComponentDefinitionApi, 'FormattedValue'>]: string };
	/** Boolean identifier for using deleting base layers. */
	AllowDeleteBaseSolutionRowAndFakeDelete: boolean | null;
	/** Whether this component allows Overwrite Customizations when update managed solution */
	AllowOverwriteCustomizations: boolean | null;
	/** Boolean identifier for a row that is marked as logically deleted in the Active solution and should be re-created back */
	AllowRecreateForLogicallyDeletedRow: boolean | null;
	/** Flag used to indicate whether this component always removes active customizations on uninstall */
	AlwaysRemoveActiveCustomizationsOnUninstall: boolean | null;
	/** Flag indicating whether the subcomponent can be added directly to the SolutionComponents table */
	CanBeAddedToSolutionComponents: boolean | null;
	/** Whether this component is hidden using an IsHidden managed property */
	CanBeHidden: boolean | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Path to component's XML node */
	ComponentXPath: string | null;
	/** Flag that indicates whether this component uses its descendent as its viewable component */
	DescendentIsViewableComponent: boolean | null;
	/** Group Parent Component Attribute Name */
	GroupParentComponentAttributeName: string | null;
	/** Group Parent Component Type */
	GroupParentComponentType: number | null;
	/** Boolean that indicates if the component has a renamable attribute */
	HasIsRenameableAttribute: boolean | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Is dependency disabled for the component */
	IsDependencyDisabled: boolean | null;
	/** Boolean that indicates if the component has user interface enabled */
	IsDisplayable: boolean | null;
	/** Boolean that indicates if the component is managed */
	IsManaged: boolean | null;
	/** Whether this component is either a mergeable component, or part of a mergeable component */
	IsMergeable: boolean | null;
	/** Boolean identifier for metadata components */
	IsMetadata: boolean | null;
	/** Whether this component is viewable in the SDK and UI */
	IsViewable: boolean | null;
	/** Label Type Code */
	LabelTypeCode: number | null;
	/** Name */
	Name: string | null;
	/** Object Type Code */
	ObjectTypeCode: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** The attribute name of the parent attribute */
	ParentAttributeName: string | null;
	/** Component Entity Logical Name */
	PrimaryEntityName: string | null;
	/** Remove Active Customizations Behavior. */
	RemoveActiveCustomizationsBehavior: number | null;
	/** Root Solution Component Type Name */
	RootAttributeName: string | null;
	/** Root Solution Component Type */
	RootComponent: number | null;
	/** Unique identifier of the solution component definition */
	SolutionComponentDefinitionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SolutionComponentDefinitionIdUnique: DevKit.Guid | null;
	/** Solution Component Type */
	SolutionComponentType: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Boolean identifier for forcing delete for solution update. */
	UseForceDeleteForSolutionUpdate: boolean | null;
	/** Boolean identifier for always forcing update. */
	UseForceUpdateAlways: boolean | null;
	/** Boolean identifier for using sentine rows. */
	UseSentinelRowInBaseSolution: boolean | null;
	/** The component type of the viewable descendent */
	ViewableDescendentComponentType: number | null;
}

const SolutionComponentDefinitionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AllowDeleteBaseSolutionRowAndFakeDelete: { logicalName: 'allowdeletebasesolutionrowandfakedelete', type: 'Boolean' },
	AllowOverwriteCustomizations: { logicalName: 'allowoverwritecustomizations', type: 'Boolean' },
	AllowRecreateForLogicallyDeletedRow: { logicalName: 'allowrecreateforlogicallydeletedrow', type: 'Boolean' },
	AlwaysRemoveActiveCustomizationsOnUninstall: { logicalName: 'alwaysremoveactivecustomizationsonuninstall', type: 'Boolean' },
	CanBeAddedToSolutionComponents: { logicalName: 'canbeaddedtosolutioncomponents', type: 'Boolean' },
	CanBeHidden: { logicalName: 'canbehidden', type: 'Boolean' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ComponentXPath: { logicalName: 'componentxpath' },
	DescendentIsViewableComponent: { logicalName: 'descendentisviewablecomponent', type: 'Boolean' },
	GroupParentComponentAttributeName: { logicalName: 'groupparentcomponentattributename' },
	GroupParentComponentType: { logicalName: 'groupparentcomponenttype', type: 'Integer' },
	HasIsRenameableAttribute: { logicalName: 'hasisrenameableattribute', type: 'Boolean' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsDependencyDisabled: { logicalName: 'isdependencydisabled', type: 'Boolean' },
	IsDisplayable: { logicalName: 'isdisplayable', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', type: 'Boolean' },
	IsMergeable: { logicalName: 'ismergeable', type: 'Boolean' },
	IsMetadata: { logicalName: 'ismetadata', type: 'Boolean' },
	IsViewable: { logicalName: 'isviewable', type: 'Boolean' },
	LabelTypeCode: { logicalName: 'labeltypecode', type: 'Integer' },
	Name: { logicalName: 'name' },
	ObjectTypeCode: { logicalName: 'objecttypecode', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ParentAttributeName: { logicalName: 'parentattributename' },
	PrimaryEntityName: { logicalName: 'primaryentityname' },
	RemoveActiveCustomizationsBehavior: { logicalName: 'removeactivecustomizationsbehavior', type: 'Integer' },
	RootAttributeName: { logicalName: 'rootattributename' },
	RootComponent: { logicalName: 'rootcomponent', type: 'Integer' },
	SolutionComponentDefinitionId: { logicalName: 'solutioncomponentdefinitionid' },
	SolutionComponentDefinitionIdUnique: { logicalName: 'solutioncomponentdefinitionidunique', readOnly: true },
	SolutionComponentType: { logicalName: 'solutioncomponenttype', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	UseForceDeleteForSolutionUpdate: { logicalName: 'useforcedeleteforsolutionupdate', type: 'Boolean' },
	UseForceUpdateAlways: { logicalName: 'useforceupdatealways', type: 'Boolean' },
	UseSentinelRowInBaseSolution: { logicalName: 'usesentinelrowinbasesolution', type: 'Boolean' },
	ViewableDescendentComponentType: { logicalName: 'viewabledescendentcomponenttype', type: 'Integer' },
};

/**
 * SolutionComponentDefinition WebApi class for early-bound style coding
 * Usage: const solutionComponentDefinition = new SolutionComponentDefinitionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SolutionComponentDefinitionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISolutionComponentDefinitionApi>(entity, 'solutioncomponentdefinition', 'solutioncomponentdefinitions', SolutionComponentDefinitionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SolutionComponentDefinitionApi extends ISolutionComponentDefinitionApi { }
