//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormChannelAccessProfileRuleItem_Information {
		interface tab_notes_Sections {
			/** Notes */
			notes: DevKit.Controls.Section;
		}
		interface tab_RuleCriteria_Sections {
			/** If Conditions */
			ConditionControl: DevKit.Controls.Section;
			/** Then Conditions */
			rule_then_conditions: DevKit.Controls.Section;
		}
		/** Notes */
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		/** Rule Criteria */
		interface tab_RuleCriteria extends DevKit.Controls.ITab {
			Section: tab_RuleCriteria_Sections;
		}
		interface Tabs {
			/** Notes */
			notes: tab_notes;
			/** Rule Criteria */
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
	}
	export class FormChannelAccessProfileRuleItem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form ChannelAccessProfileRuleItem_Information */
		Body: DevKit.FormChannelAccessProfileRuleItem_Information.Body;
	}
	export class ChannelAccessProfileRuleItemApi {
		/**
		* DynamicsCrm.DevKit ChannelAccessProfileRuleItemApi
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
		/** Choose the channel access profile that the item is assigned to. */
		AssociatedChannelAccessProfile: string | null;
		/** Shows the channel access profile rule associated with this channel access profile rule item. */
		ChannelAccessProfileRuleId: string | null;
		/** Unique identifier for entity instances */
		ChannelAccessProfileRuleItemId: string | null;
		/** Unique identifier of the channel access profile rule item. */
		readonly ChannelAccessProfileRuleItemIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ChannelAccessProfileRuleItem.ComponentState | null;
		/** Condition for Rule item */
		ConditionXml: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type additional information to describe the channel access profile rule item. */
		Description: string | null;
		/** Exchange rate for the currency associated with the channel access profile rule item with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Version in which the channel access profile rule item is introduced. */
		IntroducedVersion: string | null;
		/** Is Managed */
		readonly IsManaged: boolean | null;
		/** Shows who last updated the record */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a descriptive name for the channel access profile rule item. */
		Name: string | null;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Sequence number of the Channel access profile rule item */
		SequenceNumber: number | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Exchange rate for the currency associated with the channel access profile rule item with respect to the base currency. */
		TransactionCurrencyId: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Choose the channel access profile that the item is assigned to. */
			readonly AssociatedChannelAccessProfile: string;
			/** Shows the channel access profile rule associated with this channel access profile rule item. */
			readonly ChannelAccessProfileRuleId: string;
			/** Unique identifier for entity instances */
			readonly ChannelAccessProfileRuleItemId: string;
			/** Unique identifier of the channel access profile rule item. */
			readonly ChannelAccessProfileRuleItemIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Condition for Rule item */
			readonly ConditionXml: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the channel access profile rule item. */
			readonly Description: string;
			/** Exchange rate for the currency associated with the channel access profile rule item with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Version in which the channel access profile rule item is introduced. */
			readonly IntroducedVersion: string;
			/** Is Managed */
			readonly IsManaged: string;
			/** Shows who last updated the record */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a descriptive name for the channel access profile rule item. */
			readonly Name: string;
			/** Date and time when the record was created. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Sequence number of the Channel access profile rule item */
			readonly SequenceNumber: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Exchange rate for the currency associated with the channel access profile rule item with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ChannelAccessProfileRuleItem {
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