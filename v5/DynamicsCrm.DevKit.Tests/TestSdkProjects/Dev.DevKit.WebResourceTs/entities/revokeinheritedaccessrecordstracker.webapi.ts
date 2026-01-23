/**
 * revokeinheritedaccessrecordstracker.webapi.ts - revokeinheritedaccessrecordstracker WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * revokeinheritedaccessrecordstracker WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IrevokeinheritedaccessrecordstrackerApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IrevokeinheritedaccessrecordstrackerApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** RecordsAttachment */
	readonly RecordsAttachment_name: string | null;
	/** RecordsJson */
	RecordsJson: string | null;
	RelationshipName: string | null;
	/** The name of the custom entity. */
	revokeinheritedaccessrecordstracker2: string | null;
	/** Unique identifier for entity instances */
	revokeinheritedaccessrecordstrackerId: DevKit.Guid | null;
	/** Status of the RevokeInheritedAccessRecordsTracker */
	statecode: number | null;
	/** Reason for the status of the RevokeInheritedAccessRecordsTracker */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** TotalRecords */
	TotalRecords: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const revokeinheritedaccessrecordstrackerFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	RecordsAttachment_name: { logicalName: 'recordsattachment', readOnly: true },
	RecordsJson: { logicalName: 'recordsjson' },
	RelationshipName: { logicalName: 'relationshipname' },
	revokeinheritedaccessrecordstracker2: { logicalName: 'revokeinheritedaccessrecordstracker' },
	revokeinheritedaccessrecordstrackerId: { logicalName: 'revokeinheritedaccessrecordstrackerid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TotalRecords: { logicalName: 'totalrecords', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * revokeinheritedaccessrecordstracker WebApi class for early-bound style coding
 * Usage: const revokeinheritedaccessrecordstracker = new revokeinheritedaccessrecordstrackerApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class revokeinheritedaccessrecordstrackerApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IrevokeinheritedaccessrecordstrackerApi>(entity, 'revokeinheritedaccessrecordstracker', 'revokeinheritedaccessrecordstrackers', revokeinheritedaccessrecordstrackerFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface revokeinheritedaccessrecordstrackerApi extends IrevokeinheritedaccessrecordstrackerApi { }
