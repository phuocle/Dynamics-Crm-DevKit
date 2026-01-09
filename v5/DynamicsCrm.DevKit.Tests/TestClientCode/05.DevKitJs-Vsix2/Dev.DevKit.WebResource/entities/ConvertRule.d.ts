//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRecord_Creation_and_Update_Rule {
		interface tab_general_Sections {
			/** SPECIFY AUTORESPONSE SETTINGS */
			AutoResponseSettings: DevKit.Controls.Section;
			/** SPECIFY RECORD CREATION AND UPDATE DETAILS */
			CaseDetails: DevKit.Controls.Section;
			/** CHANNEL PROPERTIES */
			ChannelProperties: DevKit.Controls.Section;
			ConvertToCaseSettings: DevKit.Controls.Section;
			/** SPECIFY CONDITIONS FOR RECORD CREATION */
			EmailCaseConditions: DevKit.Controls.Section;
			/** SPECIFY CONDITIONS FOR RECORD CREATION */
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
		interface Grid {
			/** SPECIFY RECORD CREATION AND UPDATE DETAILS */
			ConvertRuleItemsGrid: DevKit.Controls.Grid;
		}
	}
	export class FormRecord_Creation_and_Update_Rule extends DevKit.IForm {
		/**
		* Record Creation and Update Rule [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Record_Creation_and_Update_Rule */
		Body: DevKit.FormRecord_Creation_and_Update_Rule.Body;
		/** The Grid of form Record_Creation_and_Update_Rule */
		Grid: DevKit.FormRecord_Creation_and_Update_Rule.Grid;
	}
	export class ConvertRuleApi {
		/**
		* DynamicsCrm.DevKit ConvertRuleApi
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
		/** Choose whether items from unknown senders should be converted to records. */
		AllowUnknownSender: boolean | null;
		/** channel property group associated with the convert rule. */
		ChannelPropertyGroupId: string | null;
		/** Choose whether cases should be created for customers with active entitlements. */
		CheckActiveEntitlement: boolean | null;
		/** Information whether record needs to be created for black listed social profiles. */
		CheckBlockedSocialProfile: boolean | null;
		/** Information whether record needs to be created for direct messages. */
		CheckDirectMessages: boolean | null;
		/** Choose whether an item related to a resolved case should be converted to a case. */
		CheckIfResolved: boolean | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ConvertRule.ComponentState | null;
		/** Unique identifier for entity instances */
		ConvertRuleId: string | null;
		/** For internal use only. */
		readonly ConvertRuleIdUnique: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type additional information to describe the rule for creating records automatically. */
		Description: string | null;
		/** Exchange rate for the currency associated with the queue with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** For internal use only. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a title or name of the queue for which the setting is defined. */
		Name: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Shows the business unit that the convert rule owner belongs to. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		OwningUser: string | null;
		/** Choose the queue that the rule is assigned to. */
		QueueId: string | null;
		/** Record Version */
		readonly RecordVersion: string | null;
		/** If you want to create a new case for an item associated with a resolved case, type how long a case must remain resolved before a new case is created for the associated item. */
		ResolvedSince: number | null;
		/** Choose the email template to use to create an automatic response to the customer. */
		ResponseTemplateId: string | null;
		/** Choose whether to send an automatic email response to the customer after a record is created. */
		SendAutomaticResponse: boolean | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Source of the record. */
		SourceTypeCode: OptionSet.ConvertRule.SourceTypeCode | null;
		/** Status of the Convert Rule */
		StateCode: OptionSet.ConvertRule.StateCode | null;
		/** Reason for the status of the Convert Rule */
		StatusCode: OptionSet.ConvertRule.StatusCode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Unique identifier of the currency associated with the queue. */
		TransactionCurrencyId: string | null;
		/** Version number of the convert rule. */
		readonly VersionNumber: number | null;
		/** Shows the workflow for this rule. */
		WorkflowId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum SourceChannelTypeCode {
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Email = 4202*/
			Email = 4202,
			/** Invite_Redemption = 10407*/
			Invite_Redemption = 10407,
			/** Phone_Call = 4210*/
			Phone_Call = 4210,
			/** Portal_Comment = 10408*/
			Portal_Comment = 10408,
			/** Social_Activity = 4216*/
			Social_Activity = 4216,
			/** Task = 4212*/
			Task = 4212,
			/** Teams_chat = 10253*/
			Teams_chat = 10253
		}
		enum SourceTypeCode {
			/** Email = 2*/
			Email = 2,
			/** Social_Monitoring = 1*/
			Social_Monitoring = 1
		}
		enum StateCode {
			/** Active = 1*/
			Active = 1,
			/** Draft = 0*/
			Draft = 0
		}
		enum StatusCode {
			/** Active = 2*/
			Active = 2,
			/** Draft = 1*/
			Draft = 1
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