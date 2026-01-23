/**
 * msdyn_CopilotInteractions.webapi.ts - msdyn_CopilotInteractions WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_CopilotInteractions WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_CopilotInteractionsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_CopilotInteractionsApi, 'FormattedValue'>]: string };
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
	/** Key/value pairs describing the app so far. */
	msdyn_Context: string | null;
	/** Unique identifier for entity instances */
	msdyn_CopilotInteractionsId: DevKit.Guid | null;
	/** Name of the copilot that generated the result based on the context/query. */
	msdyn_CopilotName: string | null;
	/** Unique id of the customer. */
	msdyn_CustomerId: string | null;
	/** Version number of the engine that performed the row update to the Copilot Interactions table. */
	msdyn_EngineVersion: string | null;
	/** Name */
	msdyn_Name: string | null;
	/** User outcome as a result from copilot interaction. */
	msdyn_Outcome: string | null;
	/** Result from copilot interaction. */
	msdyn_Result: string | null;
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
	/** Status of the Copilot Interactions */
	statecode: number | null;
	/** Reason for the status of the Copilot Interactions */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_CopilotInteractionsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_Context: { logicalName: 'msdyn_context' },
	msdyn_CopilotInteractionsId: { logicalName: 'msdyn_copilotinteractionsid' },
	msdyn_CopilotName: { logicalName: 'msdyn_copilotname' },
	msdyn_CustomerId: { logicalName: 'msdyn_customerid' },
	msdyn_EngineVersion: { logicalName: 'msdyn_engineversion' },
	msdyn_Name: { logicalName: 'msdyn_name' },
	msdyn_Outcome: { logicalName: 'msdyn_outcome' },
	msdyn_Result: { logicalName: 'msdyn_result' },
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
 * msdyn_CopilotInteractions WebApi class for early-bound style coding
 * Usage: const msdyn_CopilotInteractions = new msdyn_CopilotInteractionsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_CopilotInteractionsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_CopilotInteractionsApi>(entity, 'msdyn_copilotinteractions', 'msdyn_copilotinteractionses', msdyn_CopilotInteractionsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_CopilotInteractionsApi extends Imsdyn_CopilotInteractionsApi { }
