/**
 * textdatarecordsindexingstatus.webapi.ts - textdatarecordsindexingstatus WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for textdatarecordsindexingstatus
 * All fields return string representation of their values
 */
export interface ItextdatarecordsindexingstatusFormattedValue {
	readonly AttributeName: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly EntityName2: string;
	readonly ImportSequenceNumber: string;
	readonly IndexingStatus: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly ObjectTypeCode: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly PartitionId: string;
	readonly RecordCreatedOnInCrm: string;
	readonly RecordId: string;
	readonly RecordModifiedOnInCrm: string;
	readonly RecordSizeInBytesInCrm: string;
	readonly RecordSizeInBytesInTextDataIndex: string;
	readonly RecordVersionNumber: string;
	readonly TextDataIndexName: string;
	readonly textdatarecordsindexingstatusId: string;
	readonly TTLInSeconds: string;
	readonly VersionNumber: string;
}

/**
 * textdatarecordsindexingstatus WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ItextdatarecordsindexingstatusApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ItextdatarecordsindexingstatusFormattedValue;
	/** Attribute name. */
	AttributeName: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Entity name that identifies which entity does this record belong to. */
	EntityName2: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unstructured / Text data indexing status of entity - attribute - recordId combination. */
	IndexingStatus: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the record. */
	Name: string | null;
	/** Object type code of the entity that identifies which entity does this record belong to. */
	ObjectTypeCode: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Created on of the record in CRM / Dataverse. */
	RecordCreatedOnInCrm: string | null;
	/** Record Id */
	RecordId: string | null;
	/** Modified on of the record in CRM / Dataverse. */
	RecordModifiedOnInCrm: string | null;
	/** Size of record in bytes in CRM */
	RecordSizeInBytesInCrm: number | null;
	/** Size of record in bytes in Unstructured / Text data search index */
	RecordSizeInBytesInTextDataIndex: number | null;
	/** Version number of the record. */
	RecordVersionNumber: number | null;
	/** Unstructured / Text data index name. */
	TextDataIndexName: string | null;
	/** Unique identifier for TextDataRecordsIndexingStatus */
	textdatarecordsindexingstatusId: DevKit.Guid | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const textdatarecordsindexingstatusFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttributeName: { logicalName: 'attributename' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityName2: { logicalName: 'entityname' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IndexingStatus: { logicalName: 'indexingstatus' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	ObjectTypeCode: { logicalName: 'objecttypecode', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	RecordCreatedOnInCrm: { logicalName: 'recordcreatedonincrm' },
	RecordId: { logicalName: 'recordid' },
	RecordModifiedOnInCrm: { logicalName: 'recordmodifiedonincrm' },
	RecordSizeInBytesInCrm: { logicalName: 'recordsizeinbytesincrm', type: 'Integer' },
	RecordSizeInBytesInTextDataIndex: { logicalName: 'recordsizeinbytesintextdataindex', type: 'Integer' },
	RecordVersionNumber: { logicalName: 'recordversionnumber', type: 'Integer' },
	TextDataIndexName: { logicalName: 'textdataindexname' },
	textdatarecordsindexingstatusId: { logicalName: 'textdatarecordsindexingstatusid' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * textdatarecordsindexingstatus WebApi class for early-bound style coding
 * Usage: const textdatarecordsindexingstatus = new textdatarecordsindexingstatusApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class textdatarecordsindexingstatusApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ItextdatarecordsindexingstatusApi>(entity, 'textdatarecordsindexingstatus', 'textdatarecordsindexingstatuses', textdatarecordsindexingstatusFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface textdatarecordsindexingstatusApi extends ItextdatarecordsindexingstatusApi { }
