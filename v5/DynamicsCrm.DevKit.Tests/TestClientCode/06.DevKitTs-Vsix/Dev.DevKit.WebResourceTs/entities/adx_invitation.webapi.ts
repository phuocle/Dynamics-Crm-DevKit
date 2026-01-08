/**
 * adx_invitation.webapi.ts - adx_invitation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for adx_invitation
 * All fields return string representation of their values
 */
export interface Iadx_invitationFormattedValue {
	readonly adx_assignToAccount: string;
	readonly adx_expiryDate_UtcDateOnly: string;
	readonly adx_invitationCode: string;
	readonly adx_invitationId: string;
	readonly adx_inviteContact: string;
	readonly adx_invitercontact: string;
	readonly adx_maximumRedemptions: string;
	readonly adx_name: string;
	readonly adx_redeemedContact: string;
	readonly adx_redemptions: string;
	readonly adx_redemptionWorkflow: string;
	readonly adx_type: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly mspp_websiteid: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * adx_invitation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iadx_invitationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Iadx_invitationFormattedValue;
	/** An account record to assign the redeemed contact to. */
	adx_assignToAccount: DevKit.Guid | null;
	/** The date the invitation is no longer valid for redemption. */
	adx_expiryDate_UtcDateOnly: Date | null;
	/** Shows the user who is redeeming the invitation. */
	adx_invitationCode: string | null;
	/** Shows the entity instance. */
	adx_invitationId: DevKit.Guid | null;
	/** The contact to send an invitation to. */
	adx_inviteContact: DevKit.Guid | null;
	/** The contact that invited. */
	adx_invitercontact: DevKit.Guid | null;
	/** Maximum Redemptions */
	adx_maximumRedemptions: number | null;
	/** Type the name of the custom entity. */
	adx_name: string | null;
	/** The contact associated with the redemption of this invitation. */
	adx_redeemedContact: DevKit.Guid | null;
	/** The current number of times this invitation has been redeemed. */
	adx_redemptions: number | null;
	/** A workflow to execute on the redeeming contact. */
	adx_redemptionWorkflow: DevKit.Guid | null;
	/** The type of invitation. */
	adx_type: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Website */
	mspp_websiteid: DevKit.Guid | null;
	/** Shows the date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Shows the business unit that owns the record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Status of the Invitation */
	statecode: number | null;
	/** Select the invitation's status. */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Shows the time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const adx_invitationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	adx_assignToAccount: { schemaName: 'adx_assignToAccount', logicalName: '_adx_assigntoaccount_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	adx_expiryDate_UtcDateOnly: { logicalName: 'adx_expirydate', type: 'DateTime' },
	adx_invitationCode: { logicalName: 'adx_invitationcode' },
	adx_invitationId: { logicalName: 'adx_invitationid' },
	adx_inviteContact: { schemaName: 'adx_inviteContact', logicalName: '_adx_invitecontact_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	adx_invitercontact: { schemaName: 'adx_invitercontact', logicalName: '_adx_invitercontact_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	adx_maximumRedemptions: { logicalName: 'adx_maximumredemptions', type: 'Integer' },
	adx_name: { logicalName: 'adx_name' },
	adx_redeemedContact: { schemaName: 'adx_redeemedContact', logicalName: '_adx_redeemedcontact_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	adx_redemptions: { logicalName: 'adx_redemptions', type: 'Integer' },
	adx_redemptionWorkflow: { schemaName: 'adx_redemptionWorkflow', logicalName: '_adx_redemptionworkflow_value', entityCollectionName: 'workflows', entityLogicalName: 'workflow' },
	adx_type: { logicalName: 'adx_type', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'powerpagesites', entityLogicalName: 'powerpagesite' },
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
 * adx_invitation WebApi class for early-bound style coding
 * Usage: const adx_invitation = new adx_invitationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class adx_invitationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iadx_invitationApi>(entity, 'adx_invitation', 'adx_invitations', adx_invitationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface adx_invitationApi extends Iadx_invitationApi { }
