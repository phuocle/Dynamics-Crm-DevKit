﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUoM_Information {
		interface tab_general_Sections {
			unit_of_measure_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the base or primary unit on which the unit is based. */
			BaseUoM: DevKit.Controls.Lookup;
			/** Type a descriptive title or name for the unit of measure. */
			Name: DevKit.Controls.String;
			/** Unit quantity for the product. */
			Quantity: DevKit.Controls.Decimal;
			/** Choose the ID of the unit group that the unit is associated with. */
			UoMScheduleId: DevKit.Controls.Lookup;
		}
	}
	class FormUoM_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form UoM_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UoM_Information */
		Body: DevKit.FormUoM_Information.Body;
	}
	namespace FormUnit_of_Measure_Quick_Create {
		interface tab_general_Sections {
			unit_of_measure_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the base or primary unit on which the unit is based. */
			BaseUoM: DevKit.Controls.Lookup;
			/** Type a descriptive title or name for the unit of measure. */
			Name: DevKit.Controls.String;
			/** Unit quantity for the product. */
			Quantity: DevKit.Controls.Decimal;
			/** Choose the ID of the unit group that the unit is associated with. */
			UoMScheduleId: DevKit.Controls.Lookup;
		}
	}
	class FormUnit_of_Measure_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Unit_of_Measure_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Unit_of_Measure_Quick_Create */
		Body: DevKit.FormUnit_of_Measure_Quick_Create.Body;
	}
	class UoMApi {
		/**
		* DynamicsCrm.DevKit UoMApi
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
		/** Choose the base or primary unit on which the unit is based. */
		BaseUoM: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the unit. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who created the record. */
		CreatedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the unit was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the uom. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Tells whether the unit is the base unit for the associated unit group. */
		IsScheduleBaseUoM: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the unit. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who modified the record. */
		ModifiedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the unit was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the uom. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive title or name for the unit of measure. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the unit of measure. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unit quantity for the product. */
		Quantity: DevKit.WebApi.DecimalValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the unit. */
		UoMId: DevKit.WebApi.GuidValue;
		/** Choose the ID of the unit group that the unit is associated with. */
		UoMScheduleId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace UoM {
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
//{'JsForm':['Information','Quick Create'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}