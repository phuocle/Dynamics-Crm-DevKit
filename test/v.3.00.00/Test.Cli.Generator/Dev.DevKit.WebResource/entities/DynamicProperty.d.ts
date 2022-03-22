//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormProperty {
		interface tab_dynamic_property_properties_Sections {
			dynamic_property_properties_2: DevKit.Controls.Section;
			dynamic_property_properties_3: DevKit.Controls.Section;
			dynamic_property_properties_41: DevKit.Controls.Section;
		}
		interface tab_dynamic_property_summary_Sections {
			dynamic_property_properties_1: DevKit.Controls.Section;
			dynamic_property_properties_31: DevKit.Controls.Section;
		}
		interface tab_dynamic_property_properties extends DevKit.Controls.ITab {
			Section: tab_dynamic_property_properties_Sections;
		}
		interface tab_dynamic_property_summary extends DevKit.Controls.ITab {
			Section: tab_dynamic_property_summary_Sections;
		}
		interface Tabs {
			dynamic_property_properties: tab_dynamic_property_properties;
			dynamic_property_summary: tab_dynamic_property_summary;
		}
		interface Body {
			Tab: Tabs;
			/** Select the data type of the property. */
			DataType: DevKit.Controls.OptionSet;
			/** Shows the default value of the property for a decimal data type. */
			DefaultValueDecimal: DevKit.Controls.Decimal;
			/** Shows the default value of the property for a double data type. */
			DefaultValueDouble: DevKit.Controls.Double;
			/** Shows the default value of the property for a whole number data type. */
			DefaultValueInteger: DevKit.Controls.Integer;
			/** Shows the default value of the property. */
			DefaultValueOptionSet: DevKit.Controls.Lookup;
			/** Shows the default value of the property for a string data type. */
			DefaultValueString: DevKit.Controls.String;
			/** Type a description for the property. */
			Description: DevKit.Controls.String;
			/** Defines whether the attribute is hidden or shown. */
			IsHidden: DevKit.Controls.Boolean;
			/** Defines whether the attribute is read-only or if it can be edited. */
			IsReadOnly: DevKit.Controls.Boolean;
			/** Defines whether the attribute is mandatory. */
			IsRequired: DevKit.Controls.Boolean;
			/** Shows the maximum allowed length of the property for a string data type. */
			MaxLengthString: DevKit.Controls.Integer;
			/** Shows the maximum allowed value of the property for a decimal data type. */
			MaxValueDecimal: DevKit.Controls.Decimal;
			/** Shows the maximum allowed value of the property for a double data type. */
			MaxValueDouble: DevKit.Controls.Double;
			/** Shows the maximum allowed value of the property for a whole number data type. */
			MaxValueInteger: DevKit.Controls.Integer;
			/** Shows the minimum allowed value of the property for a decimal data type. */
			MinValueDecimal: DevKit.Controls.Decimal;
			/** Shows the minimum allowed value of the property for a double data type. */
			MinValueDouble: DevKit.Controls.Double;
			/** Shows the minimum allowed value of the property for a whole number data type. */
			MinValueInteger: DevKit.Controls.Integer;
			/** Type the name of the property. */
			Name: DevKit.Controls.String;
			/** Shows the allowed precision of the property for a whole number data type. */
			Precision: DevKit.Controls.Integer;
			/** Choose the product that the property is associated with. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			grid_DynamicPropertyOptionSetItem: DevKit.Controls.Grid;
		}
	}
	class FormProperty extends DevKit.IForm {
		/**
		* Property [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Property */
		Body: DevKit.FormProperty.Body;
		/** The Process of form Property */
		Process: DevKit.FormProperty.Process;
		/** The Grid of form Property */
		Grid: DevKit.FormProperty.Grid;
		/** The SidePanes of form Property */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormProperty_Quick_Create {
		interface tab_dynamic_property_summary_Sections {
			dynamic_property_properties_1: DevKit.Controls.Section;
		}
		interface tab_dynamic_property_summary extends DevKit.Controls.ITab {
			Section: tab_dynamic_property_summary_Sections;
		}
		interface Tabs {
			dynamic_property_summary: tab_dynamic_property_summary;
		}
		interface Body {
			Tab: Tabs;
			/** Select the data type of the property. */
			DataType: DevKit.Controls.OptionSet;
			/** Shows the default value of the property for a decimal data type. */
			DefaultValueDecimal: DevKit.Controls.Decimal;
			/** Shows the default value of the property for a double data type. */
			DefaultValueDouble: DevKit.Controls.Double;
			/** Shows the default value of the property for a whole number data type. */
			DefaultValueInteger: DevKit.Controls.Integer;
			/** Shows the default value of the property. */
			DefaultValueOptionSet: DevKit.Controls.Lookup;
			/** Shows the default value of the property for a string data type. */
			DefaultValueString: DevKit.Controls.String;
			/** Type a description for the property. */
			Description: DevKit.Controls.String;
			/** Defines whether the attribute is hidden or shown. */
			IsHidden: DevKit.Controls.Boolean;
			/** Defines whether the attribute is read-only or if it can be edited. */
			IsReadOnly: DevKit.Controls.Boolean;
			/** Defines whether the attribute is mandatory. */
			IsRequired: DevKit.Controls.Boolean;
			/** Shows the maximum allowed length of the property for a string data type. */
			MaxLengthString: DevKit.Controls.Integer;
			/** Shows the maximum allowed value of the property for a decimal data type. */
			MaxValueDecimal: DevKit.Controls.Decimal;
			/** Shows the maximum allowed value of the property for a double data type. */
			MaxValueDouble: DevKit.Controls.Double;
			/** Shows the maximum allowed value of the property for a whole number data type. */
			MaxValueInteger: DevKit.Controls.Integer;
			/** Shows the minimum allowed value of the property for a decimal data type. */
			MinValueDecimal: DevKit.Controls.Decimal;
			/** Shows the minimum allowed value of the property for a double data type. */
			MinValueDouble: DevKit.Controls.Double;
			/** Shows the minimum allowed value of the property for a whole number data type. */
			MinValueInteger: DevKit.Controls.Integer;
			/** Type the name of the property. */
			Name: DevKit.Controls.String;
			/** Shows the allowed precision of the property for a whole number data type. */
			Precision: DevKit.Controls.Integer;
			/** Choose the product that the property is associated with. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
	}
	class FormProperty_Quick_Create extends DevKit.IForm {
		/**
		* Property Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Property_Quick_Create */
		Body: DevKit.FormProperty_Quick_Create.Body;
	}
	class DynamicPropertyApi {
		/**
		* DynamicsCrm.DevKit DynamicPropertyApi
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
		/** Shows the property in the product family that this property is being inherited from. */
		BaseDynamicPropertyId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Select the data type of the property. */
		DataType: OptionSet.DynamicProperty.DataType;
		/** Default Value */
		DefaultAttributeValue: string;
		/** Shows the default value of the property for a decimal data type. */
		DefaultValueDecimal: number;
		/** Shows the default value of the property for a double data type. */
		DefaultValueDouble: number;
		/** Shows the default value of the property for a whole number data type. */
		DefaultValueInteger: number;
		/** Shows the default value of the property. */
		DefaultValueOptionSet: string;
		/** Shows the default value of the property for a string data type. */
		DefaultValueString: string;
		/** Type a description for the property. */
		Description: string;
		/** Internal Use Only */
		DMTImportState: number;
		/** Shows the unique identifier of the property. */
		DynamicPropertyId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Defines whether the attribute is hidden or shown. */
		IsHidden: boolean;
		/** Defines whether the attribute is read-only or if it can be edited. */
		IsReadOnly: boolean;
		/** Defines whether the attribute is mandatory. */
		IsRequired: boolean;
		/** Shows the maximum allowed length of the property for a string data type. */
		MaxLengthString: number;
		/** Shows the maximum allowed value of the property for a decimal data type. */
		MaxValueDecimal: number;
		/** Shows the maximum allowed value of the property for a double data type. */
		MaxValueDouble: number;
		/** Shows the maximum allowed value of the property for a whole number data type. */
		MaxValueInteger: number;
		/** Shows the minimum allowed value of the property for a decimal data type. */
		MinValueDecimal: number;
		/** Shows the minimum allowed value of the property for a double data type. */
		MinValueDouble: number;
		/** Shows the minimum allowed value of the property for a whole number data type. */
		MinValueInteger: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Type the name of the property. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Shows the related overwritten property. */
		OverwrittenDynamicPropertyId: string;
		/** Shows the allowed precision of the property for a whole number data type. */
		Precision: number;
		/** Choose the product that the property is associated with. */
		RegardingObjectId: string;
		/** Shows the root property that this property is derived from. */
		RootDynamicPropertyId: string;
		/** Shows the state of the property. */
		statecode: OptionSet.DynamicProperty.statecode;
		/** Shows whether the property is active or inactive. */
		statuscode: OptionSet.DynamicProperty.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace DynamicProperty {
		enum DataType {
			/** 1 */
			Decimal,
			/** 2 */
			Floating_Point_Number,
			/** 0 */
			Option_Set,
			/** 3 */
			Single_Line_Of_Text,
			/** 4 */
			Whole_Number
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Draft,
			/** 2 */
			Retired
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 0 */
			Draft,
			/** 2 */
			Retired
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