//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRecord_Creation_and_Update_Rule_UCI {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Reason for the status of the Convert Rule */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_ActivityMonitor_Sections {
			Activity_Monitor: DevKit.Controls.Section;
		}
		interface tab_Advanced_Sections {
			Advanced_empty_section: DevKit.Controls.Section;
			Advanced_Settings: DevKit.Controls.Section;
			Before_Evaluating_Conditions: DevKit.Controls.Section;
		}
		interface tab_Basic_Sections {
			Basic_empty_section: DevKit.Controls.Section;
			Conditions_To_Evaluate: DevKit.Controls.Section;
			Details: DevKit.Controls.Section;
			Frequently_Used_Configurations: DevKit.Controls.Section;
		}
		interface tab_tabUCMigrationDetail_Sections {
			Migration: DevKit.Controls.Section;
		}
		interface tab_ActivityMonitor extends DevKit.Controls.ITab {
			Section: tab_ActivityMonitor_Sections;
		}
		interface tab_Advanced extends DevKit.Controls.ITab {
			Section: tab_Advanced_Sections;
		}
		interface tab_Basic extends DevKit.Controls.ITab {
			Section: tab_Basic_Sections;
		}
		interface tab_tabUCMigrationDetail extends DevKit.Controls.ITab {
			Section: tab_tabUCMigrationDetail_Sections;
		}
		interface Tabs {
			ActivityMonitor: tab_ActivityMonitor;
			Advanced: tab_Advanced;
			Basic: tab_Basic;
			tabUCMigrationDetail: tab_tabUCMigrationDetail;
		}
		interface Body {
			Tab: Tabs;
			/** Choose whether items from unknown senders should be converted to records. */
			AllowUnknownSender: DevKit.Controls.Boolean;
			/** Choose whether cases should be created for customers with active entitlements. */
			CheckActiveEntitlement: DevKit.Controls.Boolean;
			/** Choose whether an item related to a resolved case should be converted to a case. */
			CheckIfResolved: DevKit.Controls.Boolean;
			/** Choose whether an ARC rule is modern or legacy. */
			ConvertRuleType: DevKit.Controls.Boolean;
			migrationtoggle: DevKit.Controls.ActionCards;
			msdyn_migrationstatus: DevKit.Controls.ActionCards;
			msdyn_migrationstatus_details: DevKit.Controls.ActionCards;
			/** Type a title or name of the queue for which the setting is defined. */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the queue that the rule is assigned to. */
			QueueId: DevKit.Controls.Lookup;
			/** If you want to create a new case for an item associated with a resolved case, type how long a case must remain resolved before a new case is created for the associated item. */
			ResolvedSince: DevKit.Controls.Integer;
			/** Choose the email template to use to create an automatic response to the customer. */
			ResponseTemplateId: DevKit.Controls.Lookup;
			/** Choose whether to send an automatic email response to the customer after a record is created. */
			SendAutomaticResponse: DevKit.Controls.Boolean;
			/** Choose whether an ARC rule should resolve email sender manually or automatically. */
			SenderResolutionOption: DevKit.Controls.OptionSet;
			sourcechanneltypecode: DevKit.Controls.ActionCards;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ActivityMonitorsGrid: DevKit.Controls.Grid;
			ConvertRuleItemsGrid: DevKit.Controls.Grid;
		}
	}
	class FormRecord_Creation_and_Update_Rule_UCI extends DevKit.IForm {
		/**
		* Record Creation and Update Rule - UCI [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Record_Creation_and_Update_Rule_UCI */
		Body: DevKit.FormRecord_Creation_and_Update_Rule_UCI.Body;
		/** The Header section of form Record_Creation_and_Update_Rule_UCI */
		Header: DevKit.FormRecord_Creation_and_Update_Rule_UCI.Header;
		/** The Process of form Record_Creation_and_Update_Rule_UCI */
		Process: DevKit.FormRecord_Creation_and_Update_Rule_UCI.Process;
		/** The Grid of form Record_Creation_and_Update_Rule_UCI */
		Grid: DevKit.FormRecord_Creation_and_Update_Rule_UCI.Grid;
		/** The SidePanes of form Record_Creation_and_Update_Rule_UCI */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormRecord_Creation_and_Update_Rule_Web_Client {
		interface tab_general_Sections {
			AutoResponseSettings: DevKit.Controls.Section;
			CaseDetails: DevKit.Controls.Section;
			ChannelProperties: DevKit.Controls.Section;
			ConvertToCaseSettings: DevKit.Controls.Section;
			EmailCaseConditions: DevKit.Controls.Section;
			SocialMonitoringCaseConditions: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Choose whether items from unknown senders should be converted to records. */
			AllowUnknownSender: DevKit.Controls.Boolean;
			/** channel property group associated with the convert rule. */
			ChannelPropertyGroupId: DevKit.Controls.Lookup;
			/** Choose whether cases should be created for customers with active entitlements. */
			CheckActiveEntitlement: DevKit.Controls.Boolean;
			/** Information whether record needs to be created for black listed social profiles. */
			CheckBlockedSocialProfile: DevKit.Controls.Boolean;
			/** Information whether record needs to be created for direct messages. */
			CheckDirectMessages: DevKit.Controls.Boolean;
			/** Choose whether an item related to a resolved case should be converted to a case. */
			CheckIfResolved: DevKit.Controls.Boolean;
			/** Type a title or name of the queue for which the setting is defined. */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the queue that the rule is assigned to. */
			QueueId: DevKit.Controls.Lookup;
			/** If you want to create a new case for an item associated with a resolved case, type how long a case must remain resolved before a new case is created for the associated item. */
			ResolvedSince: DevKit.Controls.Integer;
			/** Choose the email template to use to create an automatic response to the customer. */
			ResponseTemplateId: DevKit.Controls.Lookup;
			/** Choose whether to send an automatic email response to the customer after a record is created. */
			SendAutomaticResponse: DevKit.Controls.Boolean;
			/** Identifies the Dynamics 365 activity that's the source of the record. */
			SourceChannelTypeCode: DevKit.Controls.String;
			/** Source of the record. */
			SourceTypeCode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ConvertRuleItemsGrid: DevKit.Controls.Grid;
		}
	}
	class FormRecord_Creation_and_Update_Rule_Web_Client extends DevKit.IForm {
		/**
		* Record Creation and Update Rule - Web Client [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Record_Creation_and_Update_Rule_Web_Client */
		Body: DevKit.FormRecord_Creation_and_Update_Rule_Web_Client.Body;
		/** The Process of form Record_Creation_and_Update_Rule_Web_Client */
		Process: DevKit.FormRecord_Creation_and_Update_Rule_Web_Client.Process;
		/** The Grid of form Record_Creation_and_Update_Rule_Web_Client */
		Grid: DevKit.FormRecord_Creation_and_Update_Rule_Web_Client.Grid;
		/** The SidePanes of form Record_Creation_and_Update_Rule_Web_Client */
		SidePanes: DevKit.SidePanes;
	}
	class ConvertRuleApi {
		/**
		* DynamicsCrm.DevKit ConvertRuleApi
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
		/** Choose whether items from unknown senders should be converted to records. */
		AllowUnknownSender: boolean;
		/** channel property group associated with the convert rule. */
		ChannelPropertyGroupId: string;
		/** Choose whether cases should be created for customers with active entitlements. */
		CheckActiveEntitlement: boolean;
		/** Information whether record needs to be created for black listed social profiles. */
		CheckBlockedSocialProfile: boolean;
		/** Information whether record needs to be created for direct messages. */
		CheckDirectMessages: boolean;
		/** Choose whether an item related to a resolved case should be converted to a case. */
		CheckIfResolved: boolean;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ConvertRule.ComponentState;
		/** Unique identifier for entity instances */
		ConvertRuleId: string;
		/** For internal use only. */
		readonly ConvertRuleIdUnique: string;
		/** Choose whether an ARC rule is modern or legacy. */
		ConvertRuleType: boolean;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the rule for creating records automatically. */
		Description: string;
		/** Exchange rate for the currency associated with the queue with respect to the base currency. */
		readonly ExchangeRate: number;
		/** For internal use only. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a title or name of the queue for which the setting is defined. */
		Name: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Shows the business unit that the convert rule owner belongs to. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		OwningUser: string;
		/** Choose the queue that the rule is assigned to. */
		QueueId: string;
		/** Record Version */
		readonly RecordVersion: string;
		/** If you want to create a new case for an item associated with a resolved case, type how long a case must remain resolved before a new case is created for the associated item. */
		ResolvedSince: number;
		/** Choose the email template to use to create an automatic response to the customer. */
		ResponseTemplateId: string;
		/** Choose whether to send an automatic email response to the customer after a record is created. */
		SendAutomaticResponse: boolean;
		/** Choose whether an ARC rule should resolve email sender manually or automatically. */
		SenderResolutionOption: OptionSet.ConvertRule.SenderResolutionOption;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Source of the record. */
		SourceTypeCode: OptionSet.ConvertRule.SourceTypeCode;
		/** Status of the Convert Rule */
		StateCode: OptionSet.ConvertRule.StateCode;
		/** Reason for the status of the Convert Rule */
		StatusCode: OptionSet.ConvertRule.StatusCode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Unique identifier of the currency associated with the queue. */
		TransactionCurrencyId: string;
		/** Version number of the convert rule. */
		readonly VersionNumber: number;
		/** Shows the workflow for this rule. */
		WorkflowId: string;
		readonly FormattedValue: {
			/** Choose whether items from unknown senders should be converted to records. */
			readonly AllowUnknownSender: string;
			/** channel property group associated with the convert rule. */
			readonly ChannelPropertyGroupId: string;
			/** Choose whether cases should be created for customers with active entitlements. */
			readonly CheckActiveEntitlement: string;
			/** Information whether record needs to be created for black listed social profiles. */
			readonly CheckBlockedSocialProfile: string;
			/** Information whether record needs to be created for direct messages. */
			readonly CheckDirectMessages: string;
			/** Choose whether an item related to a resolved case should be converted to a case. */
			readonly CheckIfResolved: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier for entity instances */
			readonly ConvertRuleId: string;
			/** For internal use only. */
			readonly ConvertRuleIdUnique: string;
			/** Choose whether an ARC rule is modern or legacy. */
			readonly ConvertRuleType: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the rule for creating records automatically. */
			readonly Description: string;
			/** Exchange rate for the currency associated with the queue with respect to the base currency. */
			readonly ExchangeRate: string;
			/** For internal use only. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a title or name of the queue for which the setting is defined. */
			readonly Name: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that the convert rule owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Choose the queue that the rule is assigned to. */
			readonly QueueId: string;
			/** Record Version */
			readonly RecordVersion: string;
			/** If you want to create a new case for an item associated with a resolved case, type how long a case must remain resolved before a new case is created for the associated item. */
			readonly ResolvedSince: string;
			/** Choose the email template to use to create an automatic response to the customer. */
			readonly ResponseTemplateId: string;
			/** Choose whether to send an automatic email response to the customer after a record is created. */
			readonly SendAutomaticResponse: string;
			/** Choose whether an ARC rule should resolve email sender manually or automatically. */
			readonly SenderResolutionOption: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Source of the record. */
			readonly SourceTypeCode: string;
			/** Status of the Convert Rule */
			readonly StateCode: string;
			/** Reason for the status of the Convert Rule */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier of the currency associated with the queue. */
			readonly TransactionCurrencyId: string;
			/** Version number of the convert rule. */
			readonly VersionNumber: string;
			/** Shows the workflow for this rule. */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace ConvertRule {
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
		enum SenderResolutionOption {
			/** 0 */
			Creating_a_new_contact_automatically,
			/** 1 */
			Mapping_in_Power_Automate_manually
		}
		enum SourceChannelTypeCode {
			/** 10088 */
			Activity_record_for_the_Teams_chat,
			/** 4201 */
			Appointment,
			/** 10473 */
			Booking_Alert,
			/** 10743 */
			Conversation,
			/** 10330 */
			Customer_Voice_alert,
			/** 10340 */
			Customer_Voice_survey_invite,
			/** 10342 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 10857 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10489 */
			Project_Service_Approval,
			/** 4214 */
			Service_Activity,
			/** 10760 */
			Session,
			/** 4216 */
			Social_Activity,
			/** 4212 */
			Task
		}
		enum SourceTypeCode {
			/** 2 */
			Email,
			/** 1 */
			Social_Monitoring
		}
		enum StateCode {
			/** 1 */
			Active,
			/** 0 */
			Draft
		}
		enum StatusCode {
			/** 2 */
			Active,
			/** 1 */
			Draft
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