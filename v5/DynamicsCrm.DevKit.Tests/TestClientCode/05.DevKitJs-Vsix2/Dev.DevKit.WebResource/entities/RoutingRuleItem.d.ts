//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRule_Item {
		interface tab_general_Sections {
			/** Rule Item Information */
			rule_item_information: DevKit.Controls.Section;
		}
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
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
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
			/** General */
			general: tab_general;
			/** Notes */
			notes: tab_notes;
			/** Rule Criteria */
			RuleCriteria: tab_RuleCriteria;
		}
		interface Body {
			Tab: Tabs;
			/** Show who is assigned on item. */
			AssignObjectId: DevKit.Controls.Lookup;
			/** Type additional information to describe the rule item. */
			Description: DevKit.Controls.String;
			/** Name of the Routing Rule Item. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the Queue that the item is assigned to. */
			RoutedQueueId: DevKit.Controls.Lookup;
		}
	}
	export class FormRule_Item extends DevKit.IForm {
		/**
		* Rule Item [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Rule_Item */
		Body: DevKit.FormRule_Item.Body;
	}
	export class RoutingRuleItemApi {
		/**
		* DynamicsCrm.DevKit RoutingRuleItemApi
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
		/** Shows the date and time when the item was last assigned to a user. */
		AssignObjectIdModifiedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.RoutingRuleItem.ComponentState | null;
		/** Condition for Rule item */
		ConditionXml: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type additional information to describe the rule item. */
		Description: string | null;
		/** Exchange rate for the currency associated with the routing rule item with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** For internal use only. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the Routing Rule Item. */
		Name: string | null;
		/** Unique identifier of the organization associated with the routing rule item. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Choose the Queue that the item is assigned to. */
		RoutedQueueId: string | null;
		/** Unique identifier for Routing Rule associated with Rule Item. */
		RoutingRuleId: string | null;
		/** Unique identifier for entity instances */
		RoutingRuleItemId: string | null;
		/** For internal use only. */
		readonly RoutingRuleItemIdUnique: string | null;
		/** Sequence number of the routing rule item */
		SequenceNumber: number | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Unique identifier of the currency associated with the Routing Rule. */
		TransactionCurrencyId: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the Routing Rule Item. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Shows the date and time when the item was last assigned to a user. */
			readonly AssignObjectIdModifiedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Condition for Rule item */
			readonly ConditionXml: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the rule item. */
			readonly Description: string;
			/** Exchange rate for the currency associated with the routing rule item with respect to the base currency. */
			readonly ExchangeRate: string;
			/** For internal use only. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the Routing Rule Item. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the routing rule item. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Choose the Queue that the item is assigned to. */
			readonly RoutedQueueId: string;
			/** Unique identifier for Routing Rule associated with Rule Item. */
			readonly RoutingRuleId: string;
			/** Unique identifier for entity instances */
			readonly RoutingRuleItemId: string;
			/** For internal use only. */
			readonly RoutingRuleItemIdUnique: string;
			/** Sequence number of the routing rule item */
			readonly SequenceNumber: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the Routing Rule. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the Routing Rule Item. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RoutingRuleItem {
		enum AssignObjectIdType {
		}
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