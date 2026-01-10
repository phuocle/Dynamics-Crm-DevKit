//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRecord_Creation_and_Update_Rule_Item {
		interface tab_general_Sections {
			/** Case Properties */
			CaseProperties: DevKit.Controls.Section;
			/** Condition */
			ConditionControl: DevKit.Controls.Section;
			Name: DevKit.Controls.Section;
			/** Create record and set as the regarding of the source activity */
			primaryactionsection: DevKit.Controls.Section;
			/** Create record and set as the regarding of the source activity */
			RegardingSettingsection: DevKit.Controls.Section;
			/** SPECIFY OTHER ACTIONS */
			secondaryactionsection: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type a name or title of the rule item that is used for automatic record creation and update. */
			Name: DevKit.Controls.String;
		}
	}
	export class FormRecord_Creation_and_Update_Rule_Item extends DevKit.IForm {
		/**
		* Record Creation and Update Rule Item [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Record_Creation_and_Update_Rule_Item */
		Body: DevKit.FormRecord_Creation_and_Update_Rule_Item.Body;
	}
	export class ConvertRuleItemApi {
		/**
		* DynamicsCrm.DevKit ConvertRuleItemApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.ConvertRuleItem.ComponentState | null;
		/** Identifies the step of the associated workflow */
		ConditionId: string | null;
		/** Condition for convert rule item */
		ConditionXml: string | null;
		/** Unique identifier of the convert rule associated with the convert rule item. */
		ConvertRuleId: string | null;
		/** Unique identifier for entity instances */
		ConvertRuleItemId: string | null;
		/** For internal use only. */
		readonly ConvertRuleItemIdUnique: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type additional information to describe the rule item for automatic record creation. */
		Description: string | null;
		/** Exchange rate for the currency associated with the queue with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** For internal use only. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a name or title of the rule item that is used for automatic record creation and update. */
		Name: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Shows the business unit that the convert rule item owner belongs to. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the user who owns the Convert Rule Item. */
		readonly OwningUser: string | null;
		/** Set properties xml for convert rule item */
		PropertiesXml: string | null;
		/** Choose the queue that the rule is assigned to. */
		QueueId: string | null;
		/** Sequence number of the convert rule item */
		SequenceNumber: number | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		readonly TransactionCurrencyId: string | null;
		/** Version number of the Covert Rule Item. */
		readonly VersionNumber: number | null;
		/** Workflow associated with the Convert Rule Item. */
		WorkflowId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Identifies the step of the associated workflow */
			readonly ConditionId: string;
			/** Condition for convert rule item */
			readonly ConditionXml: string;
			/** Unique identifier of the convert rule associated with the convert rule item. */
			readonly ConvertRuleId: string;
			/** Unique identifier for entity instances */
			readonly ConvertRuleItemId: string;
			/** For internal use only. */
			readonly ConvertRuleItemIdUnique: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the rule item for automatic record creation. */
			readonly Description: string;
			/** Exchange rate for the currency associated with the queue with respect to the base currency. */
			readonly ExchangeRate: string;
			/** For internal use only. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a name or title of the rule item that is used for automatic record creation and update. */
			readonly Name: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that the convert rule item owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the Convert Rule Item. */
			readonly OwningUser: string;
			/** Set properties xml for convert rule item */
			readonly PropertiesXml: string;
			/** Choose the queue that the rule is assigned to. */
			readonly QueueId: string;
			/** Sequence number of the convert rule item */
			readonly SequenceNumber: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Version number of the Covert Rule Item. */
			readonly VersionNumber: string;
			/** Workflow associated with the Convert Rule Item. */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace ConvertRuleItem {
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