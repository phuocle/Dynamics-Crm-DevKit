//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormChannelAccessProfile_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Select the the channel access profiles status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_ChannelAccess_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_EntityPermissions_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_KnowledgeSettings_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
		}
		interface tab_Note_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_ChannelAccess extends DevKit.Controls.ITab {
			Section: tab_ChannelAccess_Sections;
		}
		interface tab_EntityPermissions extends DevKit.Controls.ITab {
			Section: tab_EntityPermissions_Sections;
		}
		interface tab_KnowledgeSettings extends DevKit.Controls.ITab {
			Section: tab_KnowledgeSettings_Sections;
		}
		interface tab_Note extends DevKit.Controls.ITab {
			Section: tab_Note_Sections;
		}
		interface Tabs {
			ChannelAccess: tab_ChannelAccess;
			EntityPermissions: tab_EntityPermissions;
			KnowledgeSettings: tab_KnowledgeSettings;
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormChannelAccessProfile_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ChannelAccessProfile_Information */
		Body: DevKit.FormChannelAccessProfile_Information.Body;
		/** The Header section of form ChannelAccessProfile_Information */
		Header: DevKit.FormChannelAccessProfile_Information.Header;
		/** The Process of form ChannelAccessProfile_Information */
		Process: DevKit.FormChannelAccessProfile_Information.Process;
		/** The SidePanes of form ChannelAccessProfile_Information */
		SidePanes: DevKit.SidePanes;
	}
	class ChannelAccessProfileApi {
		/**
		* DynamicsCrm.DevKit ChannelAccessProfileApi
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
		/** Unique identifier for entity instances */
		ChannelAccessProfileId: string;
		/** Unique identifier of the Channel Access Profile used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		readonly ChannelAccessProfileIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ChannelAccessProfile.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Select whether access to the email channel is allowed. */
		EmailAccess: boolean;
		/** Exchange rate for the currency associated with the ChannelAccessProfile with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Select whether access to the Facebook channel is allowed. */
		FacebookAccess: boolean;
		/** For internal use only */
		readonly HavePrivilegesChanged: boolean;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: string;
		/** For internal use only. */
		IsGuestProfile: boolean;
		/** Is Managed */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a descriptive name for the channel access profile. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Select whether access to the phone channel is allowed. */
		PhoneAccess: boolean;
		/** Select whether access to rate a knowledge article is allowed. */
		RateKnowledgeArticles: boolean;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Shows whether the channel access profile is active or inactive. */
		StateCode: OptionSet.ChannelAccessProfile.StateCode;
		/** Select the the channel access profiles status. */
		StatusCode: OptionSet.ChannelAccessProfile.StatusCode;
		/** Select whether access to submit feedback on knowledge articles is allowed. */
		SubmitFeedback: boolean;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the ChannelAccessProfile with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Select whether access to the Twitter channel is allowed. */
		TwitterAccess: boolean;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		/** Select whether access to view a knowledge article rating is allowed. */
		ViewArticleRating: boolean;
		/** Select whether access to view knowledge articles is allowed. */
		ViewKnowledgeArticles: boolean;
		/** Select whether access to the web channel is allowed. */
		WebAccess: boolean;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum OwnerIdType {
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}