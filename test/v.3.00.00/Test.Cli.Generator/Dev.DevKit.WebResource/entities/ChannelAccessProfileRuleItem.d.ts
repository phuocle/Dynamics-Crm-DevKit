//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormChannelAccessProfileRuleItem_Information {
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_RuleCriteria_Sections {
			ConditionControl: DevKit.Controls.Section;
			rule_then_conditions: DevKit.Controls.Section;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface tab_RuleCriteria extends DevKit.Controls.ITab {
			Section: tab_RuleCriteria_Sections;
		}
		interface Tabs {
			notes: tab_notes;
			RuleCriteria: tab_RuleCriteria;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the channel access profile that the item is assigned to. */
			AssociatedChannelAccessProfile: DevKit.Controls.Lookup;
			/** Type additional information to describe the channel access profile rule item. */
			Description: DevKit.Controls.String;
			/** Type a descriptive name for the channel access profile rule item. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormChannelAccessProfileRuleItem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ChannelAccessProfileRuleItem_Information */
		Body: DevKit.FormChannelAccessProfileRuleItem_Information.Body;
		/** The Process of form ChannelAccessProfileRuleItem_Information */
		Process: DevKit.FormChannelAccessProfileRuleItem_Information.Process;
		/** The SidePanes of form ChannelAccessProfileRuleItem_Information */
		SidePanes: DevKit.SidePanes;
	}
	class ChannelAccessProfileRuleItemApi {
		/**
		* DynamicsCrm.DevKit ChannelAccessProfileRuleItemApi
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
		/** Choose the channel access profile that the item is assigned to. */
		AssociatedChannelAccessProfile: string;
		/** Shows the channel access profile rule associated with this channel access profile rule item. */
		ChannelAccessProfileRuleId: string;
		/** Unique identifier for entity instances */
		ChannelAccessProfileRuleItemId: string;
		/** Unique identifier of the channel access profile rule item. */
		readonly ChannelAccessProfileRuleItemIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ChannelAccessProfileRuleItem.ComponentState;
		/** Condition for Rule item */
		ConditionXml: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the channel access profile rule item. */
		Description: string;
		/** Exchange rate for the currency associated with the channel access profile rule item with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Version in which the channel access profile rule item is introduced. */
		IntroducedVersion: string;
		/** Is Managed */
		readonly IsManaged: boolean;
		/** Shows who last updated the record */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a descriptive name for the channel access profile rule item. */
		Name: string;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Sequence number of the Channel access profile rule item */
		SequenceNumber: number;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the channel access profile rule item with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace ChannelAccessProfileRuleItem {
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