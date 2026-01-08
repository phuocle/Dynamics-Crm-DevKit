/**
 * PowerPagesSiteAIFeedback.webapi.ts - PowerPagesSiteAIFeedback WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PowerPagesSiteAIFeedback WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPowerPagesSiteAIFeedbackApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPowerPagesSiteAIFeedbackApi, 'FormattedValue'>]: string };
	/** Contact */
	Contact: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Feedback */
	Feedback: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name */
	Name: string | null;
	/** Origin */
	Origin: string | null;
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
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Unique identifier for entity instances */
	PowerPagesSiteAIFeedbackId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	PowerPagesSiteAIFeedbackName: DevKit.Guid | null;
	/** Reason for down */
	Reason: string | null;
	/** Response */
	Response: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** User Prompt */
	UserPrompt: string | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** Website Domain */
	WebsiteDomain: string | null;
	/** Website Id */
	WebsiteId: string | null;
}

const PowerPagesSiteAIFeedbackFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Contact: { schemaName: 'Contact', logicalName: '_contact_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Feedback: { logicalName: 'feedback', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	Origin: { logicalName: 'origin' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PartitionId: { logicalName: 'partitionid' },
	PowerPagesSiteAIFeedbackId: { logicalName: 'powerpagessiteaifeedbackid' },
	PowerPagesSiteAIFeedbackName: { logicalName: 'powerpagessiteaifeedbackname' },
	Reason: { logicalName: 'reason' },
	Response: { logicalName: 'response' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	UserPrompt: { logicalName: 'userprompt' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebsiteDomain: { logicalName: 'websitedomain' },
	WebsiteId: { logicalName: 'websiteid' },
};

/**
 * PowerPagesSiteAIFeedback WebApi class for early-bound style coding
 * Usage: const powerPagesSiteAIFeedback = new PowerPagesSiteAIFeedbackApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PowerPagesSiteAIFeedbackApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPowerPagesSiteAIFeedbackApi>(entity, 'powerpagessiteaifeedback', 'powerpagessiteaifeedbacks', PowerPagesSiteAIFeedbackFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PowerPagesSiteAIFeedbackApi extends IPowerPagesSiteAIFeedbackApi { }
