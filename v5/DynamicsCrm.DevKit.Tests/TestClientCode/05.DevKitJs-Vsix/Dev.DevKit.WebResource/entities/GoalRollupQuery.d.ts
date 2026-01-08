//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormGoalRollupQuery_Information {
		interface tab_rule_Sections {
			/** Query */
			criteria: DevKit.Controls.Section;
			/** You cannot customize the rollup query section. */
			Rule_Conditions: DevKit.Controls.Section;
			/** Section 1 */
			section_1: DevKit.Controls.Section;
		}
		/** General */
		interface tab_rule extends DevKit.Controls.ITab {
			Section: tab_rule_Sections;
		}
		interface Tabs {
			/** General */
			rule: tab_rule;
		}
		interface Body {
			Tab: Tabs;
			/** Type a descriptive name for the goal rollup query. */
			Name: DevKit.Controls.String;
			/** Type a descriptive name for the goal rollup query. */
			Name1: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			queryeditor_uc: DevKit.Controls.ActionCards;
			/** Enter the record type of the rollup query. */
			QueryEntityType: DevKit.Controls.String;
			queryentitytype_uc: DevKit.Controls.ActionCards;
			ruleconditioncontrol: DevKit.Controls.IFrame;
		}
	}
	export class FormGoalRollupQuery_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form GoalRollupQuery_Information */
		Body: DevKit.FormGoalRollupQuery_Information.Body;
	}
	export class GoalRollupQueryApi {
		/**
		* DynamicsCrm.DevKit GoalRollupQueryApi
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
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** String that specifies the condition criteria in FetchXML. */
		FetchXml: string | null;
		/** Unique identifier of the rollup query. */
		GoalRollupQueryId: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a descriptive name for the goal rollup query. */
		Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the record. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the record. */
		readonly OwningTeam: string | null;
		/** Shows whether the goal rollup query is active or inactive. */
		StateCode: OptionSet.GoalRollupQuery.StateCode | null;
		/** Select the goal rollup query's status. */
		StatusCode: OptionSet.GoalRollupQuery.StatusCode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the goal rollup query. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** String that specifies the condition criteria in FetchXML. */
			readonly FetchXml: string;
			/** Unique identifier of the rollup query. */
			readonly GoalRollupQueryId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a descriptive name for the goal rollup query. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the record. */
			readonly OwningTeam: string;
			/** Shows whether the goal rollup query is active or inactive. */
			readonly StateCode: string;
			/** Select the goal rollup query's status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the goal rollup query. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace GoalRollupQuery {
		enum QueryEntityType {
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Closed = 1*/
			Closed = 1,
			/** Open = 0*/
			Open = 0
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