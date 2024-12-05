//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRecord_Creation_and_Update_Rule_Item {
		interface tab_general_Sections {
			CaseProperties: DevKit.Controls.Section;
			ConditionControl: DevKit.Controls.Section;
			Name: DevKit.Controls.Section;
			primaryactionsection: DevKit.Controls.Section;
			RegardingSettingsection: DevKit.Controls.Section;
			secondaryactionsection: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type a name or title of the rule item that is used for automatic record creation and update. */
			Name: DevKit.Controls.String;
		}
		interface Navigation {
			convertruleitem_activitymonitor: DevKit.Controls.NavigationItem,
			msdyn_migrationtracker_LegacyConvertRuleItem_convertruleitem: DevKit.Controls.NavigationItem,
			msdyn_migrationtracker_ModernConvertRuleItem_convertruleitem: DevKit.Controls.NavigationItem
		}
	}
	class FormRecord_Creation_and_Update_Rule_Item extends DevKit.IForm {
		/**
		* Record Creation and Update Rule Item [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Record_Creation_and_Update_Rule_Item */
		Body: DevKit.FormRecord_Creation_and_Update_Rule_Item.Body;
		/** The Navigation of form Record_Creation_and_Update_Rule_Item */
		Navigation: DevKit.FormRecord_Creation_and_Update_Rule_Item.Navigation;
		/** The SidePanes of form Record_Creation_and_Update_Rule_Item */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormRecord_Creation_and_Update_Rule_Item_UCI {
		interface tab_ConditionBuilder_Sections {
			Actions_To_Take: DevKit.Controls.Section;
			New_Condition: DevKit.Controls.Section;
		}
		interface tab_ConditionBuilder extends DevKit.Controls.ITab {
			Section: tab_ConditionBuilder_Sections;
		}
		interface Tabs {
			ConditionBuilder: tab_ConditionBuilder;
		}
		interface Body {
			Tab: Tabs;
			arc_condition_config_control: DevKit.Controls.ActionCards;
			arc_primary_create_control: DevKit.Controls.ActionCards;
			configure_child_flow: DevKit.Controls.ActionCards;
			/** Type a name or title of the rule item that is used for automatic record creation and update. */
			Name: DevKit.Controls.String;
			WebResource_Disclaimer: DevKit.Controls.WebResource;
		}
		interface Navigation {
			convertruleitem_activitymonitor: DevKit.Controls.NavigationItem,
			msdyn_migrationtracker_LegacyConvertRuleItem_convertruleitem: DevKit.Controls.NavigationItem,
			msdyn_migrationtracker_ModernConvertRuleItem_convertruleitem: DevKit.Controls.NavigationItem
		}
	}
	class FormRecord_Creation_and_Update_Rule_Item_UCI extends DevKit.IForm {
		/**
		* Record Creation and Update Rule Item - UCI [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Record_Creation_and_Update_Rule_Item_UCI */
		Body: DevKit.FormRecord_Creation_and_Update_Rule_Item_UCI.Body;
		/** The Navigation of form Record_Creation_and_Update_Rule_Item_UCI */
		Navigation: DevKit.FormRecord_Creation_and_Update_Rule_Item_UCI.Navigation;
		/** The SidePanes of form Record_Creation_and_Update_Rule_Item_UCI */
		SidePanes: DevKit.SidePanes;
	}
	class ConvertRuleItemApi {
		/**
		* DynamicsCrm.DevKit ConvertRuleItemApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.ConvertRuleItem.ComponentState;
		/** Identifies the step of the associated workflow */
		ConditionId: string;
		/** Condition for convert rule item */
		ConditionXml: string;
		/** Unique identifier of the convert rule associated with the convert rule item. */
		ConvertRuleId: string;
		/** Unique identifier for entity instances */
		ConvertRuleItemId: string;
		/** For internal use only. */
		readonly ConvertRuleItemIdUnique: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the rule item for automatic record creation. */
		Description: string;
		/** Exchange rate for the currency associated with the queue with respect to the base currency. */
		readonly ExchangeRate: number;
		/** For internal use only. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a name or title of the rule item that is used for automatic record creation and update. */
		Name: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Shows the business unit that the convert rule item owner belongs to. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the Convert Rule Item. */
		readonly OwningUser: string;
		/** Primary create entity for a rule item */
		PrimaryCreateEntityLogicalName: string;
		/** Set properties xml for convert rule item */
		PropertiesXml: string;
		/** Choose the queue that the rule is assigned to. */
		QueueId: string;
		/** Sequence number of the convert rule item */
		SequenceNumber: number;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		readonly TransactionCurrencyId: string;
		/** Version number of the Covert Rule Item. */
		readonly VersionNumber: number;
		/** Workflow associated with the Convert Rule Item. */
		WorkflowId: string;
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
			/** Primary create entity for a rule item */
			readonly PrimaryCreateEntityLogicalName: string;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}