//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormInformation_Enhanced {
		interface Header extends DevKit.Controls.IHeader {
			/** Select the invitation's status. */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_invitation_advanced_tab_Sections {
			/** Advanced */
			_62B474B9_CC48_4B2F_8FD8_B190D697DCE8: DevKit.Controls.Section;
		}
		interface tab_invitation_general_tab_Sections {
			/** General */
			_26C36B89_7F53_4CED_9D97_934A779815E6: DevKit.Controls.Section;
			/** When Redeemed */
			_656F2307_E1F2_4515_AEB4_4F9AF287D4A4_SECTION_5: DevKit.Controls.Section;
			/** Invitee */
			invitee_section: DevKit.Controls.Section;
			/** Invitees */
			invitees_section: DevKit.Controls.Section;
			/** Redemption */
			redemption_section: DevKit.Controls.Section;
			/** Redemptions */
			redemptions_section: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
		}
		/** Advanced */
		interface tab_invitation_advanced_tab extends DevKit.Controls.ITab {
			Section: tab_invitation_advanced_tab_Sections;
		}
		/** General */
		interface tab_invitation_general_tab extends DevKit.Controls.ITab {
			Section: tab_invitation_general_tab_Sections;
		}
		/** Activities & Notes */
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			/** Advanced */
			invitation_advanced_tab: tab_invitation_advanced_tab;
			/** General */
			invitation_general_tab: tab_invitation_general_tab;
			/** Activities & Notes */
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** An account record to assign the redeemed contact to. */
			adx_assignToAccount: DevKit.Controls.Lookup;
			/** The date the invitation is no longer valid for redemption. */
			adx_expiryDate: DevKit.Controls.DateOnly;
			/** Shows the user who is redeeming the invitation. */
			adx_invitationCode: DevKit.Controls.String;
			/** The contact to send an invitation to. */
			adx_inviteContact: DevKit.Controls.Lookup;
			/** The contact that invited. */
			adx_invitercontact: DevKit.Controls.Lookup;
			/** Maximum Redemptions */
			adx_maximumRedemptions: DevKit.Controls.Integer;
			/** Type the name of the custom entity. */
			adx_name: DevKit.Controls.String;
			/** The contact associated with the redemption of this invitation. */
			adx_redeemedContact: DevKit.Controls.Lookup;
			/** The current number of times this invitation has been redeemed. */
			adx_redemptions: DevKit.Controls.Integer;
			/** A workflow to execute on the redeeming contact. */
			adx_redemptionWorkflow: DevKit.Controls.Lookup;
			/** The type of invitation. */
			adx_type: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			/** Invite Contacts */
			nav_adx_invitation_invitecontacts: DevKit.Controls.NavigationItem;
			/** Redeemed Contacts */
			nav_adx_invitation_redeemedcontacts: DevKit.Controls.NavigationItem;
			/** Connections */
			navConnections: DevKit.Controls.NavigationItem;
		}
		interface Grid {
			/** Invited Contacts */
			InviteContacts: DevKit.Controls.Grid;
			/** Assign To Web Roles */
			PowerPageComponent_AssignToWebRoles: DevKit.Controls.Grid;
			/** Redeemed Contacts */
			RedeemedContacts: DevKit.Controls.Grid;
		}
	}
	export class FormInformation_Enhanced extends DevKit.IForm {
		/**
		* Information (Enhanced) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Information_Enhanced */
		Body: DevKit.FormInformation_Enhanced.Body;
		/** The Header section of form Information_Enhanced */
		Header: DevKit.FormInformation_Enhanced.Header;
		/** The Navigation of form Information_Enhanced */
		Navigation: DevKit.FormInformation_Enhanced.Navigation;
		/** The Grid of form Information_Enhanced */
		Grid: DevKit.FormInformation_Enhanced.Grid;
	}
	export class adx_invitationApi {
		/**
		* DynamicsCrm.DevKit adx_invitationApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** An account record to assign the redeemed contact to. */
		adx_assignToAccount: string | null;
		/** The date the invitation is no longer valid for redemption. */
		adx_expiryDate_UtcDateOnly: Date | null;
		/** Shows the user who is redeeming the invitation. */
		adx_invitationCode: string | null;
		/** Shows the entity instance. */
		adx_invitationId: string | null;
		/** The contact to send an invitation to. */
		adx_inviteContact: string | null;
		/** The contact that invited. */
		adx_invitercontact: string | null;
		adx_maximumRedemptions: number | null;
		/** Type the name of the custom entity. */
		adx_name: string | null;
		/** The contact associated with the redemption of this invitation. */
		adx_redeemedContact: string | null;
		/** The current number of times this invitation has been redeemed. */
		adx_redemptions: number | null;
		/** A workflow to execute on the redeeming contact. */
		adx_redemptionWorkflow: string | null;
		/** The type of invitation. */
		adx_type: OptionSet.adx_invitation.adx_type | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		mspp_websiteid: string | null;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Shows the business unit that owns the record. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Status of the Invitation */
		statecode: OptionSet.adx_invitation.statecode | null;
		/** Select the invitation's status. */
		statuscode: OptionSet.adx_invitation.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** An account record to assign the redeemed contact to. */
			readonly adx_assignToAccount: string;
			/** The date the invitation is no longer valid for redemption. */
			readonly adx_expiryDate_UtcDateOnly: string;
			/** Shows the user who is redeeming the invitation. */
			readonly adx_invitationCode: string;
			/** Shows the entity instance. */
			readonly adx_invitationId: string;
			/** The contact to send an invitation to. */
			readonly adx_inviteContact: string;
			/** The contact that invited. */
			readonly adx_invitercontact: string;
			readonly adx_maximumRedemptions: string;
			/** Type the name of the custom entity. */
			readonly adx_name: string;
			/** The contact associated with the redemption of this invitation. */
			readonly adx_redeemedContact: string;
			/** The current number of times this invitation has been redeemed. */
			readonly adx_redemptions: string;
			/** A workflow to execute on the redeeming contact. */
			readonly adx_redemptionWorkflow: string;
			/** The type of invitation. */
			readonly adx_type: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			readonly mspp_websiteid: string;
			/** Shows the date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that owns the record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Invitation */
			readonly statecode: string;
			/** Select the invitation's status. */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace adx_invitation {
		enum adx_type {
			/** Group = 756150001*/
			Group = 756150001,
			/** Single = 756150000*/
			Single = 756150000
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Inactive = 2*/
			Inactive = 2,
			/** New = 1*/
			New = 1,
			/** Redeemed = 756150001*/
			Redeemed = 756150001,
			/** Sent = 756150000*/
			Sent = 756150000
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}