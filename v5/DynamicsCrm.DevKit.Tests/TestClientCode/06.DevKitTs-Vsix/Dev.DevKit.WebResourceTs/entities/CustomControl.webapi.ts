/**
 * CustomControl.webapi.ts - CustomControl WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for CustomControl
 * All fields return string representation of their values
 */
export interface ICustomControlFormattedValue {
	readonly AuthoringManifest: string;
	readonly ClientJson: string;
	readonly CompatibleDataTypes: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CustomControlId: string;
	readonly CustomControlIdUnique: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly Manifest: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SolutionId: string;
	readonly SupportedPlatform: string;
	readonly SupportingSolutionId: string;
	readonly Version: string;
	readonly VersionNumber: string;
}

/**
 * CustomControl WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ICustomControlApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ICustomControlFormattedValue;
	/** Authoring Manifest of the CustomControl. */
	AuthoringManifest: string | null;
	/** Custom control data in JSON format. */
	ClientJson: string | null;
	/** Compatible Data Types For Custom Controls */
	CompatibleDataTypes: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the Custom Control for the Microsoft Dynamics 365. */
	CustomControlId: DevKit.Guid | null;
	/** For internal use only. */
	readonly CustomControlIdUnique: DevKit.Guid | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	readonly IsManaged: boolean | null;
	/** Manifest of the CustomControl. */
	Manifest: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the custom control. */
	Name: string | null;
	/** Unique identifier of the organization associated with the custom control. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Supported platforms of the CustomControl. */
	SupportedPlatform: string | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	Version: string | null;
	/** Version number of the Custom Control. */
	readonly VersionNumber: number | null;
}

const CustomControlFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AuthoringManifest: { logicalName: 'authoringmanifest' },
	ClientJson: { logicalName: 'clientjson' },
	CompatibleDataTypes: { logicalName: 'compatibledatatypes' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomControlId: { logicalName: 'customcontrolid' },
	CustomControlIdUnique: { logicalName: 'customcontrolidunique', readOnly: true },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	Manifest: { logicalName: 'manifest' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportedPlatform: { logicalName: 'supportedplatform' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Version: { logicalName: 'version' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * CustomControl WebApi class for early-bound style coding
 * Usage: const customControl = new CustomControlApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class CustomControlApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ICustomControlApi>(entity, 'customcontrol', 'customcontrols', CustomControlFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface CustomControlApi extends ICustomControlApi { }
