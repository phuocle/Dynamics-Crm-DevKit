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
		* DynamicsCrm.DevKit form ChannelAccessProfile_Information Main Form
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier for entity instances */
		ChannelAccessProfileId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Channel Access Profile used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		ChannelAccessProfileIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select whether access to the email channel is allowed. */
		EmailAccess: DevKit.WebApi.BooleanValue;
		/** Exchange rate for the currency associated with the ChannelAccessProfile with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Select whether access to the Facebook channel is allowed. */
		FacebookAccess: DevKit.WebApi.BooleanValue;
		/** For internal use only */
		HavePrivilegesChanged: DevKit.WebApi.BooleanValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** For internal use only. */
		IsGuestProfile: DevKit.WebApi.BooleanValue;
		/** Is Managed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive name for the channel access profile. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Select whether access to the phone channel is allowed. */
		PhoneAccess: DevKit.WebApi.BooleanValue;
		/** Select whether access to rate a knowledge article is allowed. */
		RateKnowledgeArticles: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Shows whether the channel access profile is active or inactive. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the the channel access profiles status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Select whether access to submit feedback on knowledge articles is allowed. */
		SubmitFeedback: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the ChannelAccessProfile with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Select whether access to the Twitter channel is allowed. */
		TwitterAccess: DevKit.WebApi.BooleanValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Select whether access to view a knowledge article rating is allowed. */
		ViewArticleRating: DevKit.WebApi.BooleanValue;
		/** Select whether access to view knowledge articles is allowed. */
		ViewKnowledgeArticles: DevKit.WebApi.BooleanValue;
		/** Select whether access to the web channel is allowed. */
		WebAccess: DevKit.WebApi.BooleanValue;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}