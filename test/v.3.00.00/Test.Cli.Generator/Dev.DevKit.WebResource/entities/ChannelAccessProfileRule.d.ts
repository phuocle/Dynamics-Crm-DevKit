//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormChannelAccessProfileRule_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team that owns the channel access profile rule. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the channel access profile rule's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Type a short description for the channel access profile rule. */
			Description: DevKit.Controls.String;
			/** Type a descriptive name for the channel access profile rule. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ProfileRuleItems: DevKit.Controls.Grid;
		}
	}
	class FormChannelAccessProfileRule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ChannelAccessProfileRule_Information */
		Body: DevKit.FormChannelAccessProfileRule_Information.Body;
		/** The Header section of form ChannelAccessProfileRule_Information */
		Header: DevKit.FormChannelAccessProfileRule_Information.Header;
		/** The Process of form ChannelAccessProfileRule_Information */
		Process: DevKit.FormChannelAccessProfileRule_Information.Process;
		/** The Grid of form ChannelAccessProfileRule_Information */
		Grid: DevKit.FormChannelAccessProfileRule_Information.Grid;
		/** The SidePanes of form ChannelAccessProfileRule_Information */
		SidePanes: DevKit.SidePanes;
	}
	class ChannelAccessProfileRuleApi {
		/**
		* DynamicsCrm.DevKit ChannelAccessProfileRuleApi
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
		ChannelAccessProfileRuleId: string;
		/** Unique identifier of the Channel Access Profile Rule Item used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		readonly ChannelAccessProfileRuleIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ChannelAccessProfileRule.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Type a short description for the channel access profile rule. */
		Description: string;
		/** Exchange rate for the currency associated with the channel access profile rule with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: string;
		/** Is Managed */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a descriptive name for the channel access profile rule. */
		Name: string;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Shows whether the channel access profile rule is in a draft state or an active state. */
		StateCode: OptionSet.ChannelAccessProfileRule.StateCode;
		/** Select the channel access profile rule's status. */
		StatusCode: OptionSet.ChannelAccessProfileRule.StatusCode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the channel access profile rule with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		/** Shows the workflow for this rule. */
		WorkflowId: string;
	}
}
declare namespace OptionSet {
	namespace ChannelAccessProfileRule {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}