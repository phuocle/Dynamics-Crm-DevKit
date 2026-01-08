/**
 * ApplicationFile.webapi.ts - ApplicationFile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ApplicationFile
 * All fields return string representation of their values
 */
export interface IApplicationFileFormattedValue {
	readonly Body: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly FileId: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly VersionNumber: string;
}

/**
 * ApplicationFile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IApplicationFileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IApplicationFileFormattedValue;
	/** Body of application file */
	Body: string | null;
	/** Unique identifier of the user who created the application file. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the application file was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the applicationfile. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for application file instances */
	FileId: DevKit.Guid | null;
	/** Unique identifier of the user who last modified the application file. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the application file was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the applicationfile. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** File name */
	Name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const ApplicationFileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Body: { logicalName: 'body' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	FileId: { logicalName: 'fileid' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ApplicationFile WebApi class for early-bound style coding
 * Usage: const applicationFile = new ApplicationFileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ApplicationFileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IApplicationFileApi>(entity, 'applicationfile', 'applicationfiles', ApplicationFileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ApplicationFileApi extends IApplicationFileApi { }
