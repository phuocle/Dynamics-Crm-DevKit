//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class appactionApi {
		/**
		* DynamicsCrm.DevKit appactionApi
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
		appactionId: string;
		AppModuleId: string;
		ButtonAccessibilityText: string;
		ButtonLabelText: string;
		ButtonSequencePriority: number;
		ButtonTooltipDescription: string;
		ButtonTooltipTitle: string;
		ClientType: Array<OptionSet.appaction.ClientType>;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.appaction.ComponentState;
		Context: OptionSet.appaction.Context;
		ContextEntity: string;
		ContextValue: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		FontIcon: string;
		GroupTitle: string;
		Hidden: boolean;
		IconWebResourceId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		isGroupTitleHidden: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		Location: OptionSet.appaction.Location;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		OnClickEventFormulaComponentLibrary: string;
		OnClickEventFormulaComponentLibraryId: string;
		OnClickEventFormulaComponentName: string;
		OnClickEventFormulaFunctionName: string;
		OnClickEventJavaScriptFunctionName: string;
		OnClickEventJavaScriptParameters: string;
		OnClickEventJavaScriptWebResourceId: string;
		OnClickEventType: OptionSet.appaction.OnClickEventType;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Unique identifier for App Action associated with App Action. */
		ParentAppActionId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the App Action */
		statecode: OptionSet.appaction.statecode;
		/** Reason for the status of the App Action */
		statuscode: OptionSet.appaction.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		Type: OptionSet.appaction.Type;
		UniqueName: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		VisibilityFormulaComponentLibrary: string;
		VisibilityFormulaComponentLibraryId: string;
		VisibilityFormulaComponentName: string;
		VisibilityFormulaFunctionName: string;
		VisibilityType: OptionSet.appaction.VisibilityType;
		readonly FormattedValue: {
			/** Unique identifier for entity instances */
			readonly appactionId: string;
			readonly AppModuleId: string;
			readonly ButtonAccessibilityText: string;
			readonly ButtonLabelText: string;
			readonly ButtonSequencePriority: string;
			readonly ButtonTooltipDescription: string;
			readonly ButtonTooltipTitle: string;
			readonly ClientType: Array<string>;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			readonly Context: string;
			readonly ContextEntity: string;
			readonly ContextValue: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			readonly FontIcon: string;
			readonly GroupTitle: string;
			readonly Hidden: string;
			readonly IconWebResourceId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			readonly isGroupTitleHidden: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			readonly Location: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			readonly OnClickEventFormulaComponentLibrary: string;
			readonly OnClickEventFormulaComponentLibraryId: string;
			readonly OnClickEventFormulaComponentName: string;
			readonly OnClickEventFormulaFunctionName: string;
			readonly OnClickEventJavaScriptFunctionName: string;
			readonly OnClickEventJavaScriptParameters: string;
			readonly OnClickEventJavaScriptWebResourceId: string;
			readonly OnClickEventType: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Unique identifier for App Action associated with App Action. */
			readonly ParentAppActionId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the App Action */
			readonly statecode: string;
			/** Reason for the status of the App Action */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			readonly Type: string;
			readonly UniqueName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			readonly VisibilityFormulaComponentLibrary: string;
			readonly VisibilityFormulaComponentLibraryId: string;
			readonly VisibilityFormulaComponentName: string;
			readonly VisibilityFormulaFunctionName: string;
			readonly VisibilityType: string;
		}
	}
}
declare namespace OptionSet {
	namespace appaction {
		enum ClientType {
			/** 0 */
			Browser,
			/** 2 */
			Mail_App,
			/** 1 */
			Mobile
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
		enum Context {
			/** 0 */
			All,
			/** 1 */
			Entity
		}
		enum Location {
			/** 3 */
			Associated_Grid,
			/** 6 */
			Dashboard,
			/** 0 */
			Form,
			/** 5 */
			Global_Header,
			/** 1 */
			Main_Grid,
			/** 4 */
			Quick_Form,
			/** 2 */
			Sub_Grid
		}
		enum OnClickEventType {
			/** 1 */
			Formula,
			/** 2 */
			JavaScript,
			/** 0 */
			None
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum Type {
			/** 1 */
			Dropdown_Button,
			/** 3 */
			Group,
			/** 2 */
			Split_Button,
			/** 0 */
			Standard_Button
		}
		enum VisibilityType {
			/** 2 */
			Classic_Rules,
			/** 1 */
			Formula,
			/** 0 */
			None
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}