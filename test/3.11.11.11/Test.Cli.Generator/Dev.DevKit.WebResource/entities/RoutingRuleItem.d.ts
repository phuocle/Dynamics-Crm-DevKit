//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRule_Item {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier for Routing Rule associated with Rule Item. */
			RoutingRuleId: DevKit.Controls.Lookup;
		}
		interface tab_General_Sections {
			ConditionControl: DevKit.Controls.Section;
			ConditionControl_uc: DevKit.Controls.Section;
			Rule_Item_Information: DevKit.Controls.Section;
			Then_Condition: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			General: tab_General;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			appConditionBuilder_uc: DevKit.Controls.ActionCards;
			/** Look for user/team records or create a new record. */
			AssignObjectId: DevKit.Controls.Lookup;
			/** Provide a description for the rule item. */
			Description: DevKit.Controls.String;
			/** Choose if you want to route the record to queue or user/team. */
			msdyn_routeto: DevKit.Controls.OptionSet;
			/** Provide a name for the rule item. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Look for a queue or create a new queue. */
			RoutedQueueId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormRule_Item extends DevKit.IForm {
		/**
		* Rule Item [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Rule_Item */
		Body: DevKit.FormRule_Item.Body;
		/** The Header section of form Rule_Item */
		Header: DevKit.FormRule_Item.Header;
		/** The Process of form Rule_Item */
		Process: DevKit.FormRule_Item.Process;
		/** The SidePanes of form Rule_Item */
		SidePanes: DevKit.SidePanes;
	}
	class RoutingRuleItemApi {
		/**
		* DynamicsCrm.DevKit RoutingRuleItemApi
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
		/** Look for user/team records or create a new record. */
		assignobjectid_systemuser: string;
		/** Look for user/team records or create a new record. */
		assignobjectid_team: string;
		/** Shows the date and time when the item was last assigned to a user. */
		AssignObjectIdModifiedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly ComponentState: OptionSet.RoutingRuleItem.ComponentState;
		/** Condition for Rule item */
		ConditionXml: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Provide a description for the rule item. */
		Description: string;
		/** Exchange rate for the currency associated with the routing rule item with respect to the base currency. */
		readonly ExchangeRate: number;
		/** For internal use only. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Choose if you want to route the record to queue or user/team. */
		msdyn_routeto: OptionSet.RoutingRuleItem.msdyn_routeto;
		/** Provide a name for the rule item. */
		Name: string;
		/** Unique identifier of the organization associated with the routing rule item. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Look for a queue or create a new queue. */
		RoutedQueueId: string;
		/** Unique identifier for Routing Rule associated with Rule Item. */
		RoutingRuleId: string;
		/** Unique identifier for entity instances */
		RoutingRuleItemId: string;
		/** For internal use only. */
		readonly RoutingRuleItemIdUnique: string;
		/** Sequence number of the routing rule item */
		SequenceNumber: number;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the Routing Rule. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the Routing Rule Item. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Look for user/team records or create a new record. */
			readonly assignobjectid_systemuser: string;
			/** Look for user/team records or create a new record. */
			readonly assignobjectid_team: string;
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
			/** Provide a description for the rule item. */
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
			/** Choose if you want to route the record to queue or user/team. */
			readonly msdyn_routeto: string;
			/** Provide a name for the rule item. */
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
			/** Look for a queue or create a new queue. */
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_routeto {
			/** 1 */
			Queue,
			/** 2 */
			UserTeam
		}
		enum OwnerIdType {
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