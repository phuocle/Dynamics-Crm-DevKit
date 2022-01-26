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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier for entity instances */
		appactionId: DevKit.WebApi.GuidValue;
		AppModuleId: DevKit.WebApi.LookupValue;
		ButtonAccessibilityText: DevKit.WebApi.StringValue;
		ButtonLabelText: DevKit.WebApi.StringValue;
		ButtonSequencePriority: DevKit.WebApi.DecimalValue;
		ButtonTooltipDescription: DevKit.WebApi.StringValue;
		ButtonTooltipTitle: DevKit.WebApi.StringValue;
		ClientType: DevKit.WebApi.MultiOptionSetValue;
		/** For internal use only. */
		ComponentIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		Context: DevKit.WebApi.OptionSetValue;
		ContextEntity: DevKit.WebApi.LookupValue;
		ContextValue: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		FontIcon: DevKit.WebApi.StringValue;
		Hidden: DevKit.WebApi.BooleanValue;
		IconWebResourceId: DevKit.WebApi.LookupValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		Location: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The name of the custom entity. */
		name: DevKit.WebApi.StringValue;
		OnClickEventFormulaComponentLibrary: DevKit.WebApi.StringValue;
		OnClickEventFormulaComponentLibraryId: DevKit.WebApi.LookupValue;
		OnClickEventFormulaComponentName: DevKit.WebApi.StringValue;
		OnClickEventFormulaFunctionName: DevKit.WebApi.StringValue;
		OnClickEventJavaScriptFunctionName: DevKit.WebApi.StringValue;
		OnClickEventJavaScriptParameters: DevKit.WebApi.StringValue;
		OnClickEventJavaScriptWebResourceId: DevKit.WebApi.LookupValue;
		OnClickEventType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the App Action */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the App Action */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		Type: DevKit.WebApi.OptionSetValue;
		UniqueName: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		VisibilityFormulaComponentLibrary: DevKit.WebApi.StringValue;
		VisibilityFormulaComponentLibraryId: DevKit.WebApi.LookupValue;
		VisibilityFormulaComponentName: DevKit.WebApi.StringValue;
		VisibilityFormulaFunctionName: DevKit.WebApi.StringValue;
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
			/** 2 */
			Split_Button,
			/** 0 */
			Standard_Button
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00'}