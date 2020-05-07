//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormEquipment_Information {
		interface tab_general_Sections {
			section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_workhours_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_workhours extends DevKit.Form.Controls.IControlTab {
			Section: tab_workhours_Sections;
		}
		interface Tabs {
			general: tab_general;
			workhours: tab_workhours;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the business unit that the Equipment belongs to. */
			BusinessUnitId: DevKit.Form.Controls.ControlLookup;
			/** Fiscal calendar associated with the facility/equipment. */
			CalendarId: DevKit.Form.Controls.ControlLookup;
			/** Description of the facility/equipment. */
			Description: DevKit.Form.Controls.ControlString;
			/** Email address of person to contact about the use of the facility/equipment. */
			EMailAddress: DevKit.Form.Controls.ControlString;
			/** Unique identifier for OrganizationalUnit associated with Equipment */
			msdyn_OrganizationalUnitId: DevKit.Form.Controls.ControlLookup;
			/** Name of the facility/equipment. */
			Name: DevKit.Form.Controls.ControlString;
			/** Site where the facility/equipment is located. */
			SiteId: DevKit.Form.Controls.ControlLookup;
			/** Local time zone where the facility/equipment is located. */
			TimeZoneCode: DevKit.Form.Controls.ControlInteger;
		}
	}
	class FormEquipment_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Equipment_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Equipment_Information */
		Body: LuckyMokey.FormEquipment_Information.Body;
	}
	class EquipmentApi {
		/**
		* DynamicsCrm.DevKit EquipmentApi
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
		/** Shows the business unit that the Equipment belongs to. */
		BusinessUnitId: DevKit.WebApi.LookupValue;
		/** Fiscal calendar associated with the facility/equipment. */
		CalendarId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the facility/equipment entry. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the equipment. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the facility/equipment. */
		Description: DevKit.WebApi.StringValue;
		/** For internal use only. */
		DisplayInServiceViews: DevKit.WebApi.BooleanValue;
		/** Email address of person to contact about the use of the facility/equipment. */
		EMailAddress: DevKit.WebApi.StringValue;
		/** Unique identifier of the facility/equipment. */
		EquipmentId: DevKit.WebApi.GuidValue;
		/** Exchange rate for the currency associated with the equipment with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Whether the facility/equipment is disabled or operational. */
		IsDisabled: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who last modified the facility/equipment. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the equipment. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for OrganizationalUnit associated with Equipment */
		msdyn_OrganizationalUnitId: DevKit.WebApi.LookupValue;
		/** Name of the facility/equipment. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the parent business unit. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Site where the facility/equipment is located. */
		SiteId: DevKit.WebApi.LookupValue;
		/** Skills needed to operate the facility/equipment. */
		Skills: DevKit.WebApi.StringValue;
		/** Local time zone where the facility/equipment is located. */
		TimeZoneCode: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the equipment. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Equipment {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}