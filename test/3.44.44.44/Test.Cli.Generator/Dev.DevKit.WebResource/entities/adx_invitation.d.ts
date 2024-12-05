//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormInformation_Enhanced {
		interface Header extends DevKit.Controls.IHeader {
			/** Select the invitation's status. */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_invitation_advanced_tab_Sections {
			_62B474B9_CC48_4B2F_8FD8_B190D697DCE8: DevKit.Controls.Section;
		}
		interface tab_invitation_general_tab_Sections {
			_26C36B89_7F53_4CED_9D97_934A779815E6: DevKit.Controls.Section;
			_656F2307_E1F2_4515_AEB4_4F9AF287D4A4_SECTION_5: DevKit.Controls.Section;
			invitee_section: DevKit.Controls.Section;
			invitees_section: DevKit.Controls.Section;
			redemption_section: DevKit.Controls.Section;
			redemptions_section: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
		}
		interface tab_invitation_advanced_tab extends DevKit.Controls.ITab {
			Section: tab_invitation_advanced_tab_Sections;
		}
		interface tab_invitation_general_tab extends DevKit.Controls.ITab {
			Section: tab_invitation_general_tab_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			invitation_advanced_tab: tab_invitation_advanced_tab;
			invitation_general_tab: tab_invitation_general_tab;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** An account record to assign the redeemed contact to. */
			adx_assignToAccount: DevKit.Controls.Lookup;
			/** The date the invitation is no longer valid for redemption. */
			adx_expiryDate: DevKit.Controls.Date;
			/** Shows the user who is redeeming the invitation. */
			adx_invitationCode: DevKit.Controls.String;
			/** The contact to send an invitation to. */
			adx_inviteContact: DevKit.Controls.Lookup;
			/** The contact that invited. */
			adx_invitercontact: DevKit.Controls.Lookup;
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
			adx_invitation_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			adx_invitation_adx_portalcomments: DevKit.Controls.NavigationItem,
			adx_invitation_Appointments: DevKit.Controls.NavigationItem,
			adx_invitation_BulkOperations: DevKit.Controls.NavigationItem,
			adx_invitation_CampaignActivities: DevKit.Controls.NavigationItem,
			adx_invitation_CampaignResponses: DevKit.Controls.NavigationItem,
			adx_invitation_Emails: DevKit.Controls.NavigationItem,
			adx_invitation_IncidentResolutions: DevKit.Controls.NavigationItem,
			adx_invitation_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			adx_invitation_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			adx_invitation_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			adx_invitation_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			adx_invitation_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			adx_invitation_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			adx_invitation_msfp_alerts: DevKit.Controls.NavigationItem,
			adx_invitation_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			adx_invitation_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			adx_invitation_OpportunityCloses: DevKit.Controls.NavigationItem,
			adx_invitation_OrderCloses: DevKit.Controls.NavigationItem,
			adx_invitation_PhoneCalls: DevKit.Controls.NavigationItem,
			adx_invitation_QuoteCloses: DevKit.Controls.NavigationItem,
			adx_invitation_ServiceAppointments: DevKit.Controls.NavigationItem,
			adx_invitation_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			InviteContacts: DevKit.Controls.Grid;
			PowerPageComponent_AssignToWebRoles: DevKit.Controls.Grid;
			RedeemedContacts: DevKit.Controls.Grid;
		}
	}
	class FormInformation_Enhanced extends DevKit.IForm {
		/**
		* Information (Enhanced) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Information_Enhanced */
		Body: DevKit.FormInformation_Enhanced.Body;
		/** The Header section of form Information_Enhanced */
		Header: DevKit.FormInformation_Enhanced.Header;
		/** The Navigation of form Information_Enhanced */
		Navigation: DevKit.FormInformation_Enhanced.Navigation;
		/** The Grid of form Information_Enhanced */
		Grid: DevKit.FormInformation_Enhanced.Grid;
		/** The SidePanes of form Information_Enhanced */
		SidePanes: DevKit.SidePanes;
	}
	class adx_invitationApi {
		/**
		* DynamicsCrm.DevKit adx_invitationApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** An account record to assign the redeemed contact to. */
		adx_assignToAccount: string;
		/** The date the invitation is no longer valid for redemption. */
		adx_expiryDate_UtcDateOnly: Date;
		/** Shows the user who is redeeming the invitation. */
		adx_invitationCode: string;
		/** Shows the entity instance. */
		adx_invitationId: string;
		/** The contact to send an invitation to. */
		adx_inviteContact: string;
		/** The contact that invited. */
		adx_invitercontact: string;
		adx_maximumRedemptions: number;
		/** Type the name of the custom entity. */
		adx_name: string;
		/** The contact associated with the redemption of this invitation. */
		adx_redeemedContact: string;
		/** The current number of times this invitation has been redeemed. */
		adx_redemptions: number;
		/** A workflow to execute on the redeeming contact. */
		adx_redemptionWorkflow: string;
		/** The type of invitation. */
		adx_type: OptionSet.adx_invitation.adx_type;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		mspp_websiteid: string;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Shows the business unit that owns the record. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Invitation */
		statecode: OptionSet.adx_invitation.statecode;
		/** Select the invitation's status. */
		statuscode: OptionSet.adx_invitation.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** 756150001 */
			Group,
			/** 756150000 */
			Single
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 2 */
			Inactive,
			/** 1 */
			New,
			/** 756150001 */
			Redeemed,
			/** 756150000 */
			Sent
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}