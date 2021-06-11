//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_incidenttypeproduct_Information {
		interface Tabs {
		}
		interface Body {
			/** Enter the description of the product as presented to the customer. The value defaults to the description defined on the product. */
			msdyn_Description: DevKit.Controls.String;
			/** The Incident related to this product */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** Enter any internal notes you want to track on this product. */
			msdyn_InternalDescription: DevKit.Controls.String;
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Product/Service associated with Incident Type Product. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Shows the actual quantity of the product. */
			msdyn_Quantity: DevKit.Controls.Double;
			/** The unit that determines the pricing and final quantity for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Incident Type Product */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_incidenttypeproduct_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_incidenttypeproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_incidenttypeproduct_Information */
		Body: DevKit.Formmsdyn_incidenttypeproduct_Information.Body;
		/** The Footer section of form msdyn_incidenttypeproduct_Information */
		Footer: DevKit.Formmsdyn_incidenttypeproduct_Information.Footer;
		/** The Navigation of form msdyn_incidenttypeproduct_Information */
		Navigation: DevKit.Formmsdyn_incidenttypeproduct_Information.Navigation;
	}
	namespace FormIncident_Type_Product_Quick_Create {
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
			/** Enter the description of the product as presented to the customer. The value defaults to the description defined on the product. */
			msdyn_Description: DevKit.Controls.String;
			/** The Incident related to this product */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** Enter any internal notes you want to track on this product. */
			msdyn_InternalDescription: DevKit.Controls.String;
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Product/Service associated with Incident Type Product. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Shows the actual quantity of the product. */
			msdyn_Quantity: DevKit.Controls.Double;
			/** The unit that determines the pricing and final quantity for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormIncident_Type_Product_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Incident_Type_Product_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Incident_Type_Product_Quick_Create */
		Body: DevKit.FormIncident_Type_Product_Quick_Create.Body;
	}
	class msdyn_incidenttypeproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_incidenttypeproductApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Incident type suggestion result applied to this incident type product. */
		msdyn_AppliedSuggestionResult: DevKit.WebApi.LookupValue;
		/** Enter the description of the product as presented to the customer. The value defaults to the description defined on the product. */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** The Incident related to this product */
		msdyn_IncidentType: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_incidenttypeproductId: DevKit.WebApi.GuidValue;
		/** Enter any internal notes you want to track on this product. */
		msdyn_InternalDescription: DevKit.WebApi.StringValue;
		msdyn_LineOrder: DevKit.WebApi.IntegerValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for Product/Service associated with Incident Type Product. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Shows the actual quantity of the product. */
		msdyn_Quantity: DevKit.WebApi.DoubleValue;
		/** The unit that determines the pricing and final quantity for this product */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Shows the date and time that the record was migrated. */
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
		/** Status of the Incident Type Product */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Incident Type Product */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_incidenttypeproduct {
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