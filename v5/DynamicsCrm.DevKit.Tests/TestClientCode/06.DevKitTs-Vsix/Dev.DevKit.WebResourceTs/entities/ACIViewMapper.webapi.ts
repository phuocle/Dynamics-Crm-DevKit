/**
 * ACIViewMapper.webapi.ts - ACIViewMapper WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ACIViewMapper
 * All fields return string representation of their values
 */
export interface IACIViewMapperFormattedValue {
	readonly ACIViewMapperId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly statecode: string;
	readonly StatusCode: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
	readonly ViewName: string;
	readonly WebApplicationEndPoint: string;
}

/**
 * ACIViewMapper WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IACIViewMapperApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IACIViewMapperFormattedValue;
	/** Unique identifier for entity instances */
	ACIViewMapperId: DevKit.Guid | null;
	/** Unique identifier of the user who created the display string. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the display string was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the displaystring. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the user who last modified the display string. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the display string was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the displaystring. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the display string. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Status of the ACIViewMapper */
	readonly statecode: number | null;
	/** Reason for the status of the Unit Group. */
	StatusCode: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
	/** View Name */
	ViewName: string | null;
	/** End point of web application */
	WebApplicationEndPoint: string | null;
}

const ACIViewMapperFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ACIViewMapperId: { logicalName: 'aciviewmapperid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	statecode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	ViewName: { logicalName: 'viewname' },
	WebApplicationEndPoint: { logicalName: 'webapplicationendpoint' },
};

/**
 * ACIViewMapper WebApi class for early-bound style coding
 * Usage: const aCIViewMapper = new ACIViewMapperApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ACIViewMapperApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IACIViewMapperApi>(entity, 'aciviewmapper', 'aciviewmappers', ACIViewMapperFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ACIViewMapperApi extends IACIViewMapperApi { }
