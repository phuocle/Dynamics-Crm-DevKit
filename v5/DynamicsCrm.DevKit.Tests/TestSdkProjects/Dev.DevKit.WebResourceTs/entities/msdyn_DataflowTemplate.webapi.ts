/**
 * msdyn_DataflowTemplate.webapi.ts - msdyn_DataflowTemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_DataflowTemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_DataflowTemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_DataflowTemplateApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Template category */
	msdyn_Category: string | null;
	/** The template configuration */
	msdyn_Configuration: string | null;
	/** Unique identifier for entity instances */
	msdyn_DataflowTemplateId: DevKit.Guid | null;
	/** Description of template */
	msdyn_Description: string | null;
	/** URL to help document */
	msdyn_HelpLink: string | null;
	/** Indicates if template is disabled */
	msdyn_IsDisabled: boolean | null;
	/** The mashup document */
	msdyn_MashupDocument: string | null;
	/** The dataflow template icon */
	msdyn_TemplateIcon: string | null;
	readonly msdyn_TemplateIconId: DevKit.Guid | null;
	/** The template name */
	msdyn_TemplateName: string | null;
	/** The template state */
	msdyn_TemplateState: number | null;
	/** The template version */
	msdyn_TemplateVersion: string | null;
	/** The unique name of the dataflow template */
	msdyn_UniqueName: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Dataflow Template */
	statecode: number | null;
	/** Reason for the status of the Dataflow Template */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_DataflowTemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_Category: { logicalName: 'msdyn_category' },
	msdyn_Configuration: { logicalName: 'msdyn_configuration' },
	msdyn_DataflowTemplateId: { logicalName: 'msdyn_dataflowtemplateid' },
	msdyn_Description: { logicalName: 'msdyn_description' },
	msdyn_HelpLink: { logicalName: 'msdyn_helplink' },
	msdyn_IsDisabled: { logicalName: 'msdyn_isdisabled', type: 'Boolean' },
	msdyn_MashupDocument: { logicalName: 'msdyn_mashupdocument' },
	msdyn_TemplateIcon: { logicalName: 'msdyn_templateicon' },
	msdyn_TemplateIconId: { logicalName: 'msdyn_templateiconid', readOnly: true },
	msdyn_TemplateName: { logicalName: 'msdyn_templatename' },
	msdyn_TemplateState: { logicalName: 'msdyn_templatestate', type: 'Integer' },
	msdyn_TemplateVersion: { logicalName: 'msdyn_templateversion' },
	msdyn_UniqueName: { logicalName: 'msdyn_uniquename' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_DataflowTemplate WebApi class for early-bound style coding
 * Usage: const msdyn_DataflowTemplate = new msdyn_DataflowTemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_DataflowTemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_DataflowTemplateApi>(entity, 'msdyn_dataflowtemplate', 'msdyn_dataflowtemplates', msdyn_DataflowTemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_DataflowTemplateApi extends Imsdyn_DataflowTemplateApi { }
