//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRouting_Rule_Set {
		interface tab_General_Sections {
			Routing_Rule_Set_Information: DevKit.Controls.Section;
			Rule_Items: DevKit.Controls.Section;
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
			/** Provide a description about the objective of the routing rule. */
			Description: DevKit.Controls.String;
			/** Logical name of the entity (deprecated). */
			msdyn_entitylogicalname: DevKit.Controls.String;
			/** Provide a name for the routing rule. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** For internal use only. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			RuleItems: DevKit.Controls.Grid;
		}
	}
	class FormRouting_Rule_Set extends DevKit.IForm {
		/**
		* Routing Rule Set [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Routing_Rule_Set */
		Body: DevKit.FormRouting_Rule_Set.Body;
		/** The Process of form Routing_Rule_Set */
		Process: DevKit.FormRouting_Rule_Set.Process;
		/** The Grid of form Routing_Rule_Set */
		Grid: DevKit.FormRouting_Rule_Set.Grid;
		/** The SidePanes of form Routing_Rule_Set */
		SidePanes: DevKit.SidePanes;
	}
	class RoutingRuleApi {
		/**
		* DynamicsCrm.DevKit RoutingRuleApi
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
		readonly ComponentState: OptionSet.RoutingRule.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Provide a description about the objective of the routing rule. */
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
		/** Logical name of the entity (deprecated). */
		msdyn_entitylogicalname: string;
		/** Provide a name for the routing rule. */
		Name: string;
		/**  the organization associated with the Routing Rule  */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** For internal use only */
		OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		OwningUser: string;
		/** Unique identifier for entity instances */
		RoutingRuleId: string;
		/** For internal use only. */
		readonly RoutingRuleIdUnique: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Routing Rule */
		StateCode: OptionSet.RoutingRule.StateCode;
		/** Reason for the status of the Routing Rule */
		StatusCode: OptionSet.RoutingRule.StatusCode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the Routing Rule. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the Routing Rule. */
		readonly VersionNumber: number;
		/** Unique identifier for Workflow. */
		WorkflowId: string;
	}
}
declare namespace OptionSet {
	namespace RoutingRule {
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