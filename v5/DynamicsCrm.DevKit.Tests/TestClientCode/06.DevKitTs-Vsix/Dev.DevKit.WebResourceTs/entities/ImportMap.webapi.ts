/**
 * ImportMap.webapi.ts - ImportMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ImportMap
 * All fields return string representation of their values
 */
export interface IImportMapFormattedValue {
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly EntitiesPerFile: string;
	readonly ImportMapId: string;
	readonly ImportMapIdUnique: string;
	readonly ImportMapType: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly IsValidForImport: string;
	readonly IsWizardCreated: string;
	readonly MapCustomizations: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly SolutionId: string;
	readonly Source: string;
	readonly SourceType: string;
	readonly SourceUserIdentifierForSourceCRMUserLink: string;
	readonly SourceUserIdentifierForSourceDataSourceUserLink: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly SupportingSolutionId: string;
	readonly TargetEntity: string;
	readonly TargetUserIdentifierForSourceCRMUserLink: string;
}

/**
 * ImportMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IImportMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IImportMapFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the data map, such as the intended use or data source. */
	Description: string | null;
	/** Choose whether a data file can contain data for one or more record types. */
	EntitiesPerFile: number | null;
	/** Unique identifier of the data map. */
	ImportMapId: DevKit.Guid | null;
	/** Unique identifier of the ImortMap. */
	readonly ImportMapIdUnique: DevKit.Guid | null;
	/** Select the type of data map to distinguish out-of-the-box data maps from custom maps. */
	ImportMapType: number | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Information about whether the data map is valid for use with data import. */
	readonly IsValidForImport: boolean | null;
	/** Information about whether this data map was created by the Data Migration Manager. */
	IsWizardCreated: boolean | null;
	/** Customizations XML */
	MapCustomizations: string | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a descriptive name for the data map. */
	Name: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Business unit that owns the data map. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the data map. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the data map. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Type the name of the migration source that this data map is used for. */
	Source: string | null;
	/** Select the migration source type that this data map is used for. */
	SourceType: number | null;
	/** Source user value for source Microsoft Dynamics 365 user link. */
	SourceUserIdentifierForSourceCRMUserLink: string | null;
	/** Column in the source file that uniquely identifies a user. */
	SourceUserIdentifierForSourceDataSourceUserLink: string | null;
	/** Shows whether the data map is active or inactive. Inactive data maps are read-only and can't be edited. */
	StateCode: number | null;
	/** Select the data map's status. */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Select the name of the Microsoft Dynamics 365 record type that this data map is defined for. */
	readonly TargetEntity: number | null;
	/** Microsoft Dynamics 365 user. */
	TargetUserIdentifierForSourceCRMUserLink: string | null;
}

const ImportMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	EntitiesPerFile: { logicalName: 'entitiesperfile', type: 'Integer' },
	ImportMapId: { logicalName: 'importmapid' },
	ImportMapIdUnique: { logicalName: 'importmapidunique', readOnly: true },
	ImportMapType: { logicalName: 'importmaptype', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsValidForImport: { logicalName: 'isvalidforimport', readOnly: true, type: 'Boolean' },
	IsWizardCreated: { logicalName: 'iswizardcreated', type: 'Boolean' },
	MapCustomizations: { logicalName: 'mapcustomizations' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	Source: { logicalName: 'source' },
	SourceType: { logicalName: 'sourcetype', type: 'Integer' },
	SourceUserIdentifierForSourceCRMUserLink: { logicalName: 'sourceuseridentifierforsourcecrmuserlink' },
	SourceUserIdentifierForSourceDataSourceUserLink: { logicalName: 'sourceuseridentifierforsourcedatasourceuserlink' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TargetEntity: { logicalName: 'targetentity', readOnly: true, type: 'Integer' },
	TargetUserIdentifierForSourceCRMUserLink: { logicalName: 'targetuseridentifierforsourcecrmuserlink' },
};

/**
 * ImportMap WebApi class for early-bound style coding
 * Usage: const importMap = new ImportMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ImportMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IImportMapApi>(entity, 'importmap', 'importmaps', ImportMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ImportMapApi extends IImportMapApi { }
