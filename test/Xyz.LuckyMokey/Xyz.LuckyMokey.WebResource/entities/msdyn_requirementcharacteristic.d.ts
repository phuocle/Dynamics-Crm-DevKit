//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_requirementcharacteristic_Information {
		interface tab_tab_3_Sections {
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Characteristic */
			msdyn_Characteristic: DevKit.Form.Controls.ControlLookup;
			/** Rating Value */
			msdyn_RatingValue: DevKit.Form.Controls.ControlLookup;
			/** Resource Requirement */
			msdyn_ResourceRequirement: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Requirement Characteristic. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Requirement Characteristic. */
			msdyn_WorkOrderIncident: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_requirementcharacteristic_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_requirementcharacteristic_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_requirementcharacteristic_Information */
		Body: LuckyMokey.Formmsdyn_requirementcharacteristic_Information.Body;
	}
	namespace Formmsdyn_requirementcharacteristic_Quick_Create_from_Requirement {
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
			/** Characteristic */
			msdyn_Characteristic: DevKit.Form.Controls.ControlLookup;
			/** Rating Value */
			msdyn_RatingValue: DevKit.Form.Controls.ControlLookup;
			/** Resource Requirement */
			msdyn_ResourceRequirement: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Requirement Characteristic. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Requirement Characteristic. */
			msdyn_WorkOrderIncident: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_requirementcharacteristic_Quick_Create_from_Requirement extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_requirementcharacteristic_Quick_Create_from_Requirement
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_requirementcharacteristic_Quick_Create_from_Requirement */
		Body: LuckyMokey.Formmsdyn_requirementcharacteristic_Quick_Create_from_Requirement.Body;
	}
	class msdyn_requirementcharacteristicApi {
		/**
		* DynamicsCrm.DevKit msdyn_requirementcharacteristicApi
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
		/** Characteristic */
		msdyn_Characteristic: DevKit.WebApi.LookupValue;
		/** The name of a custom entity */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Rating Value */
		msdyn_RatingValue: DevKit.WebApi.LookupValue;
		/** A unique identifier for an entity instance */
		msdyn_requirementcharacteristicId: DevKit.WebApi.GuidValue;
		/** Internal use. Tracks the related Requirement when it is equally or less restrictive than other Requirement Characteristics with the same Requirement/Characteristic combination. */
		msdyn_RequirementSystemUse: DevKit.WebApi.LookupValue;
		/** Resource Requirement */
		msdyn_ResourceRequirement: DevKit.WebApi.LookupValue;
		/** Unique identifier for Work Order associated with Requirement Characteristic. */
		msdyn_WorkOrder: DevKit.WebApi.LookupValue;
		/** Unique identifier for Work Order associated with Requirement Characteristic. */
		msdyn_WorkOrderIncident: DevKit.WebApi.LookupValue;
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
		/** Status of the Requirement Characteristic */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Requirement Characteristic */
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
	namespace msdyn_requirementcharacteristic {
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
//{'JsForm':['Information','Quick Create from Requirement'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}