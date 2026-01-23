/**
 * msdyn_qna.webapi.ts - msdyn_qna WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_qna WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_qnaApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_qnaApi, 'FormattedValue'>]: string };
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
	/** Logical Name of the attribute from the source entity */
	msdyn_AttributeName: string | null;
	/** Chunk Id of the chunk */
	msdyn_ChunkId: string | null;
	/** Logical Name of the source entity */
	msdyn_EntityName: string | null;
	/** Unique identifier for entity instances */
	msdyn_qnaId: DevKit.Guid | null;
	/** QnA generated for the given chunk */
	msdyn_QnAText: string | null;
	/** Question generated for the given chunk */
	msdyn_Question: string | null;
	/** Rank */
	msdyn_Rank: number | null;
	/** Record id of the document from which QnA was generated */
	msdyn_RecordId: string | null;
	/** Version of the record on which the QnA was generated */
	msdyn_RecordVersion: string | null;
	/** Reference count */
	msdyn_ReferenceCount: number | null;
	/** Version */
	msdyn_Version: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Status of the QnA record */
	statecode: number | null;
	/** Reason for the status of the QnA record */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_qnaFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AttributeName: { logicalName: 'msdyn_attributename' },
	msdyn_ChunkId: { logicalName: 'msdyn_chunkid' },
	msdyn_EntityName: { logicalName: 'msdyn_entityname' },
	msdyn_qnaId: { logicalName: 'msdyn_qnaid' },
	msdyn_QnAText: { logicalName: 'msdyn_qnatext' },
	msdyn_Question: { logicalName: 'msdyn_question' },
	msdyn_Rank: { logicalName: 'msdyn_rank', type: 'Integer' },
	msdyn_RecordId: { logicalName: 'msdyn_recordid' },
	msdyn_RecordVersion: { logicalName: 'msdyn_recordversion' },
	msdyn_ReferenceCount: { logicalName: 'msdyn_referencecount', type: 'Integer' },
	msdyn_Version: { logicalName: 'msdyn_version', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_qna WebApi class for early-bound style coding
 * Usage: const msdyn_qna = new msdyn_qnaApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_qnaApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_qnaApi>(entity, 'msdyn_qna', 'msdyn_qnas', msdyn_qnaFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_qnaApi extends Imsdyn_qnaApi { }
