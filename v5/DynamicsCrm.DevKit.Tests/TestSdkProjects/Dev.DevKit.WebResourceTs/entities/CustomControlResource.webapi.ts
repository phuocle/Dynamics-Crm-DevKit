/**
 * CustomControlResource.webapi.ts - CustomControlResource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * CustomControlResource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ICustomControlResourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ICustomControlResourceApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the custom control. */
	CustomControlId: DevKit.Guid | null;
	/** Unique identifier of the Custom Control Resource. */
	CustomControlResourceId: DevKit.Guid | null;
	/** For internal use only. */
	readonly CustomControlResourceIdUnique: DevKit.Guid | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the custom control resource. */
	Name: string | null;
	/** Unique identifier of the organization associated with the web resource. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	Version: string | null;
	/** Version number of the Custom Control Resource. */
	readonly VersionNumber: number | null;
	/** For internal use only. */
	VersionRequirement: string | null;
	/** Unique identifier of the web resource. */
	WebResourceId: DevKit.Guid | null;
}

const CustomControlResourceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomControlId: { logicalName: 'customcontrolid' },
	CustomControlResourceId: { logicalName: 'customcontrolresourceid' },
	CustomControlResourceIdUnique: { logicalName: 'customcontrolresourceidunique', readOnly: true },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Version: { logicalName: 'version' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	VersionRequirement: { logicalName: 'versionrequirement' },
	WebResourceId: { logicalName: 'webresourceid' },
};

/**
 * CustomControlResource WebApi class for early-bound style coding
 * Usage: const customControlResource = new CustomControlResourceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class CustomControlResourceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ICustomControlResourceApi>(entity, 'customcontrolresource', 'customcontrolresources', CustomControlResourceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface CustomControlResourceApi extends ICustomControlResourceApi { }
