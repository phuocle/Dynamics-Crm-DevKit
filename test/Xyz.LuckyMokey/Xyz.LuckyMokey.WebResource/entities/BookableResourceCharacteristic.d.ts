//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormBookableResourceCharacteristic_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Choose the characteristic to associate with the resource. */
			Characteristic: DevKit.Form.Controls.ControlLookup;
			/** Type the name of the association between the resource and characteristic. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
			RatingValue: DevKit.Form.Controls.ControlLookup;
			/** Shows the resource associated with the characteristic. */
			Resource: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormBookableResourceCharacteristic_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form BookableResourceCharacteristic_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form BookableResourceCharacteristic_Information */
		Body: LuckyMokey.FormBookableResourceCharacteristic_Information.Body;
	}
	namespace FormBookableResourceCharacteristic_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the characteristic to associate with the resource. */
			Characteristic: DevKit.Form.Controls.ControlLookup;
			/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
			RatingValue: DevKit.Form.Controls.ControlLookup;
			/** Shows the resource associated with the characteristic. */
			Resource: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormBookableResourceCharacteristic_Quick_Create extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form BookableResourceCharacteristic_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form BookableResourceCharacteristic_Quick_Create */
		Body: LuckyMokey.FormBookableResourceCharacteristic_Quick_Create.Body;
	}
	namespace FormQuick_create_bookable_resource_form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the characteristic to associate with the resource. */
			Characteristic: DevKit.Form.Controls.ControlLookup;
			/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
			RatingValue: DevKit.Form.Controls.ControlLookup;
			/** Shows the resource associated with the characteristic. */
			Resource: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormQuick_create_bookable_resource_form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_create_bookable_resource_form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quick_create_bookable_resource_form */
		Body: LuckyMokey.FormQuick_create_bookable_resource_form.Body;
	}
	class BookableResourceCharacteristicApi {
		/**
		* DynamicsCrm.DevKit BookableResourceCharacteristicApi
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
		/** Unique identifier of the resource characteristic. */
		BookableResourceCharacteristicId: DevKit.WebApi.GuidValue;
		/** Choose the characteristic to associate with the resource. */
		Characteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Exchange rate for the currency associated with the bookableresourcecharacteristic with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_approvalstatus: DevKit.WebApi.OptionSetValue;
		msdyn_supportingrecord: DevKit.WebApi.LookupValue;
		/** Type the name of the association between the resource and characteristic. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
		RatingValue: DevKit.WebApi.LookupValue;
		/** Shows the resource associated with the characteristic. */
		Resource: DevKit.WebApi.LookupValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Status of the Bookable Resource Characteristic */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Bookable Resource Characteristic */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the BookableResourceCharacteristic with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace BookableResourceCharacteristic {
		enum msdyn_approvalstatus {
			/** 192350000 */
			Saved,
			/** 192350001 */
			Pending_Approval,
			/** 192350002 */
			Rejected,
			/** 192350003 */
			Approved,
			/** 192350004 */
			Recalled
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'JsForm':['Information','Quick Create','Quick create bookable resource form'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}