//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_FunctionalLocation_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			AddressSection: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_AssetsAndLocationsTab_Sections {
			AssetsAndLocationsSection: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_AssetsAndLocationsTab extends DevKit.Controls.ITab {
			Section: tab_AssetsAndLocationsTab_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			AssetsAndLocationsTab: tab_AssetsAndLocationsTab;
		}
		interface Body {
			Tab: Tabs;
			msdyn_Address1: DevKit.Controls.String;
			/** Street 2 */
			msdyn_Address2: DevKit.Controls.String;
			/** Street 3 */
			msdyn_Address3: DevKit.Controls.String;
			/** Address Name */
			msdyn_AddressName: DevKit.Controls.String;
			/** City */
			msdyn_City: DevKit.Controls.String;
			/** Country/Region */
			msdyn_Country: DevKit.Controls.String;
			/** Latitude */
			msdyn_Latitude: DevKit.Controls.Double;
			/** Longitude */
			msdyn_Longitude: DevKit.Controls.Double;
			/** Required name field */
			msdyn_Name: DevKit.Controls.String;
			/** Required name field */
			msdyn_Name_1: DevKit.Controls.String;
			msdyn_ParentFunctionalLocation: DevKit.Controls.Lookup;
			/** Postal Code */
			msdyn_PostalCode: DevKit.Controls.String;
			/** State Or Province */
			msdyn_StateOrProvince: DevKit.Controls.String;
		}
	}
	class Formmsdyn_FunctionalLocation_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_FunctionalLocation_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_FunctionalLocation_Information */
		Body: MyDog.Formmsdyn_FunctionalLocation_Information.Body;
	}
	namespace FormFunctional_Location_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			msdyn_Address1: DevKit.Controls.String;
			/** Street 2 */
			msdyn_Address2: DevKit.Controls.String;
			/** City */
			msdyn_City: DevKit.Controls.String;
			/** Required name field */
			msdyn_Name: DevKit.Controls.String;
			msdyn_ParentFunctionalLocation: DevKit.Controls.Lookup;
			/** Postal Code */
			msdyn_PostalCode: DevKit.Controls.String;
			/** State Or Province */
			msdyn_StateOrProvince: DevKit.Controls.String;
		}
	}
	class FormFunctional_Location_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Functional_Location_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Functional_Location_Quick_Create */
		Body: MyDog.FormFunctional_Location_Quick_Create.Body;
	}
	class msdyn_FunctionalLocationApi {
		/**
		* DynamicsCrm.DevKit msdyn_FunctionalLocationApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_Address1: DevKit.WebApi.StringValue;
		/** Street 2 */
		msdyn_Address2: DevKit.WebApi.StringValue;
		/** Street 3 */
		msdyn_Address3: DevKit.WebApi.StringValue;
		/** Address Name */
		msdyn_AddressName: DevKit.WebApi.StringValue;
		/** City */
		msdyn_City: DevKit.WebApi.StringValue;
		/** Country/Region */
		msdyn_Country: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_FunctionalLocationId: DevKit.WebApi.GuidValue;
		/** Latitude */
		msdyn_Latitude: DevKit.WebApi.DoubleValue;
		/** Longitude */
		msdyn_Longitude: DevKit.WebApi.DoubleValue;
		/** Required name field */
		msdyn_Name: DevKit.WebApi.StringValue;
		msdyn_ParentFunctionalLocation: DevKit.WebApi.LookupValue;
		/** Postal Code */
		msdyn_PostalCode: DevKit.WebApi.StringValue;
		/** Relative order of functional location entity node in hierarchy control */
		msdyn_Sequence: DevKit.WebApi.IntegerValue;
		/** State Or Province */
		msdyn_StateOrProvince: DevKit.WebApi.StringValue;
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
		/** Status of the Functional Location */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Functional Location */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_FunctionalLocation {
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