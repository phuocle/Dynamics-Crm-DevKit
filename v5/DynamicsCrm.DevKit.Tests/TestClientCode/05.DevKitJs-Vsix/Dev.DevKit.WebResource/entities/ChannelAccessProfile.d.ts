//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormChannelAccessProfile_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Select the the channel access profiles status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_ChannelAccess_Sections {
			/** Section */
			tab_3_section_1: DevKit.Controls.Section;
			/** Section */
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_EntityPermissions_Sections {
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_KnowledgeSettings_Sections {
			/** Section */
			tab_4_section_1: DevKit.Controls.Section;
			/** Section */
			tab_4_section_2: DevKit.Controls.Section;
		}
		interface tab_Note_Sections {
			/** NOTES */
			notes: DevKit.Controls.Section;
		}
		/** Channel Access */
		interface tab_ChannelAccess extends DevKit.Controls.ITab {
			Section: tab_ChannelAccess_Sections;
		}
		/** Entity Permissions */
		interface tab_EntityPermissions extends DevKit.Controls.ITab {
			Section: tab_EntityPermissions_Sections;
		}
		/** Knowledge Settings */
		interface tab_KnowledgeSettings extends DevKit.Controls.ITab {
			Section: tab_KnowledgeSettings_Sections;
		}
		/** Notes */
		interface tab_Note extends DevKit.Controls.ITab {
			Section: tab_Note_Sections;
		}
		interface Tabs {
			/** Channel Access */
			ChannelAccess: tab_ChannelAccess;
			/** Entity Permissions */
			EntityPermissions: tab_EntityPermissions;
			/** Knowledge Settings */
			KnowledgeSettings: tab_KnowledgeSettings;
			/** Notes */
			Note: tab_Note;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether access to the email channel is allowed. */
			EmailAccess: DevKit.Controls.Boolean;
			/** Select whether access to the Facebook channel is allowed. */
			FacebookAccess: DevKit.Controls.Boolean;
			/** Type a descriptive name for the channel access profile. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select whether access to the phone channel is allowed. */
			PhoneAccess: DevKit.Controls.Boolean;
			/** Select whether access to rate a knowledge article is allowed. */
			RateKnowledgeArticles: DevKit.Controls.Boolean;
			Role_Control: DevKit.Controls.IFrame;
			/** Select whether access to submit feedback on knowledge articles is allowed. */
			SubmitFeedback: DevKit.Controls.Boolean;
			/** Select whether access to the Twitter channel is allowed. */
			TwitterAccess: DevKit.Controls.Boolean;
			/** Select whether access to view a knowledge article rating is allowed. */
			ViewArticleRating: DevKit.Controls.Boolean;
			/** Select whether access to view knowledge articles is allowed. */
			ViewKnowledgeArticles: DevKit.Controls.Boolean;
			/** Select whether access to the web channel is allowed. */
			WebAccess: DevKit.Controls.Boolean;
		}
	}
	export class FormChannelAccessProfile_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form ChannelAccessProfile_Information */
		Body: DevKit.FormChannelAccessProfile_Information.Body;
		/** The Header section of form ChannelAccessProfile_Information */
		Header: DevKit.FormChannelAccessProfile_Information.Header;
	}
	export class ChannelAccessProfileApi {
		/**
		* DynamicsCrm.DevKit ChannelAccessProfileApi
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
		/** Unique identifier for entity instances */
		ChannelAccessProfileId: string | null;
		/** Unique identifier of the Channel Access Profile used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		readonly ChannelAccessProfileIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ChannelAccessProfile.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Select whether access to the email channel is allowed. */
		EmailAccess: boolean | null;
		/** Exchange rate for the currency associated with the ChannelAccessProfile with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Select whether access to the Facebook channel is allowed. */
		FacebookAccess: boolean | null;
		/** For internal use only */
		readonly HavePrivilegesChanged: boolean | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: string | null;
		/** For internal use only. */
		IsGuestProfile: boolean | null;
		/** Is Managed */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a descriptive name for the channel access profile. */
		Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Select whether access to the phone channel is allowed. */
		PhoneAccess: boolean | null;
		/** Select whether access to rate a knowledge article is allowed. */
		RateKnowledgeArticles: boolean | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Shows whether the channel access profile is active or inactive. */
		StateCode: OptionSet.ChannelAccessProfile.StateCode | null;
		/** Select the the channel access profiles status. */
		StatusCode: OptionSet.ChannelAccessProfile.StatusCode | null;
		/** Select whether access to submit feedback on knowledge articles is allowed. */
		SubmitFeedback: boolean | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Exchange rate for the currency associated with the ChannelAccessProfile with respect to the base currency. */
		TransactionCurrencyId: string | null;
		/** Select whether access to the Twitter channel is allowed. */
		TwitterAccess: boolean | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		readonly VersionNumber: number | null;
		/** Select whether access to view a knowledge article rating is allowed. */
		ViewArticleRating: boolean | null;
		/** Select whether access to view knowledge articles is allowed. */
		ViewKnowledgeArticles: boolean | null;
		/** Select whether access to the web channel is allowed. */
		WebAccess: boolean | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier for entity instances */
			readonly ChannelAccessProfileId: string;
			/** Unique identifier of the Channel Access Profile used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
			readonly ChannelAccessProfileIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Select whether access to the email channel is allowed. */
			readonly EmailAccess: string;
			/** Exchange rate for the currency associated with the ChannelAccessProfile with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Select whether access to the Facebook channel is allowed. */
			readonly FacebookAccess: string;
			/** For internal use only */
			readonly HavePrivilegesChanged: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Version in which the similarity rule is introduced. */
			readonly IntroducedVersion: string;
			/** For internal use only. */
			readonly IsGuestProfile: string;
			/** Is Managed */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a descriptive name for the channel access profile. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Date and time when the record was created. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Select whether access to the phone channel is allowed. */
			readonly PhoneAccess: string;
			/** Select whether access to rate a knowledge article is allowed. */
			readonly RateKnowledgeArticles: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Shows whether the channel access profile is active or inactive. */
			readonly StateCode: string;
			/** Select the the channel access profiles status. */
			readonly StatusCode: string;
			/** Select whether access to submit feedback on knowledge articles is allowed. */
			readonly SubmitFeedback: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Exchange rate for the currency associated with the ChannelAccessProfile with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** Select whether access to the Twitter channel is allowed. */
			readonly TwitterAccess: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
			/** Select whether access to view a knowledge article rating is allowed. */
			readonly ViewArticleRating: string;
			/** Select whether access to view knowledge articles is allowed. */
			readonly ViewKnowledgeArticles: string;
			/** Select whether access to the web channel is allowed. */
			readonly WebAccess: string;
		}
	}
}
declare namespace OptionSet {
	namespace ChannelAccessProfile {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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