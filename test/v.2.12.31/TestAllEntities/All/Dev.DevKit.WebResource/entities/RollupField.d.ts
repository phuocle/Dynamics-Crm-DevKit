//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRollupField_Information {
		interface tab_general_Sections {
			_41A22D3A_56EC_4317_812A_AC5C92764CD5: DevKit.Controls.Section;
			_27578C24_6DCB_7649_BA95_913C229C39EB: DevKit.Controls.Section;
			_6AD1C698_2E2E_8A08_B43A_B66815B9EB06: DevKit.Controls.Section;
			_D65A4472_A959_3B9C_C416_D79C56E4A44B: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			dateattribute_UC: DevKit.Controls.ActionCards;
			entityfordateattribute_UC: DevKit.Controls.ActionCards;
			goalattribute_UC: DevKit.Controls.ActionCards;
			sourceattribute_UC: DevKit.Controls.ActionCards;
			/** Type the name of the record type (entity) that the data for the goal must roll up from. */
			SourceEntity: DevKit.Controls.String;
			sourceentity_UC: DevKit.Controls.ActionCards;
			sourcestate_UC: DevKit.Controls.ActionCards;
			sourcestatus_UC: DevKit.Controls.ActionCards;
		}
	}
	class FormRollupField_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form RollupField_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RollupField_Information */
		Body: DevKit.FormRollupField_Information.Body;
	}
	class RollupFieldApi {
		/**
		* DynamicsCrm.DevKit RollupFieldApi
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
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select a date field for the selected record type, such as Actual Closed Date for the Opportunity record type. A record participates in the goal rollup, if the selected date falls between the start date and the end date for the goal. */
		DateAttribute: DevKit.WebApi.StringValue;
		/** Select a rollup field where the metric rollup data will be displayed in the goal. The options are an integer or money, depending on the Metric Type you chose for the goal metric. */
		GoalAttribute: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Tells whether the state or status belongs to the parent entity. */
		IsStateParentEntityAttribute: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the goal metric associated with the rollup field. */
		MetricId: DevKit.WebApi.LookupValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Choose the ID of the organization that the record is associated with. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the rollup field. */
		RollupFieldId: DevKit.WebApi.GuidValue;
		/** Type the name of the field that the data for the goal rolls up from. */
		SourceAttribute: DevKit.WebApi.StringValue;
		/** Select the state of the records you want to use as the source of the rollup data for the metric. */
		SourceState: DevKit.WebApi.IntegerValue;
		/** Select the status of the records you want to use as the source of the rollup data for the metric. */
		SourceStatus: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the rollup field. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RollupField {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}