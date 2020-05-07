//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormEntitlement {
		interface Header {
			/** Choose a contact or account for which this entitlement has been defined. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Enter the date when the entitlement ends. */
			EndDate: DevKit.Form.Controls.ControlDate;
			/** Type the total number of entitlement terms that are left. */
			RemainingTerms: DevKit.Form.Controls.ControlDecimal;
			/** For internal use only. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_general_Sections {
			information: DevKit.Form.Controls.ControlSection;
			notes: DevKit.Form.Controls.ControlSection;
			entitlementterms: DevKit.Form.Controls.ControlSection;
			fieldservice: DevKit.Form.Controls.ControlSection;
			entitlementterms_2: DevKit.Form.Controls.ControlSection;
			entitlementapplications: DevKit.Form.Controls.ControlSection;
			entitlementtermsInUCI: DevKit.Form.Controls.ControlSection;
			products: DevKit.Form.Controls.ControlSection;
			contacts: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			grid_EntitlementChannel: DevKit.Form.Controls.ControlGrid;
			grid_EntitlementApplications: DevKit.Form.Controls.ControlGrid;
			editableEntitlementChannelGridControl: DevKit.Form.Controls.ControlGrid;
			grid_EntitlementProducts: DevKit.Form.Controls.ControlGrid;
			grid_EntitlementContacts: DevKit.Form.Controls.ControlGrid;
			/** Select the type of entitlement terms. */
			AllocationTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose a contact or account for which this entitlement has been defined. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Select whether to decrease the remaining terms when the case is created or when it is resolved. */
			DecreaseRemainingOn: DevKit.Form.Controls.ControlOptionSet;
			/** Type additional information to describe the Entitlement */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the date when the entitlement ends. */
			EndDate: DevKit.Form.Controls.ControlDate;
			/** Entity type for which the entitlement applies */
			entitytype: DevKit.Form.Controls.ControlOptionSet;
			/** Shows whether this entitlement is the default one for the specified customer. */
			IsDefault: DevKit.Form.Controls.ControlBoolean;
			/** The work order entities to which the entitlement is applicable. */
			msdyn_AppliesTo: DevKit.Form.Controls.ControlOptionSet;
			/** The priority level when considering which eligible entitlement to apply, where the lower the number the higher the priority. */
			msdyn_EntitlementPrioritization: DevKit.Form.Controls.ControlInteger;
			/** The percent discount the entitlement applies to the work order. */
			msdyn_PercentDiscount: DevKit.Form.Controls.ControlDouble;
			/** The price list that the entitlement applies to the work order. */
			msdyn_PriceListToApply: DevKit.Form.Controls.ControlLookup;
			/** Type a meaningful name for the entitlement. */
			Name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Type the total number of entitlement terms that are left. */
			RemainingTerms: DevKit.Form.Controls.ControlDecimal;
			/** Tells whether case creation is restricted based on entitlement terms. */
			RestrictCaseCreation: DevKit.Form.Controls.ControlBoolean;
			/** Choose the service level agreement (SLA) associated with the entitlement. */
			SLAId: DevKit.Form.Controls.ControlLookup;
			/** Enter the date when the entitlement starts. */
			StartDate: DevKit.Form.Controls.ControlDate;
			/** Type the total number of entitlement terms. */
			TotalTerms: DevKit.Form.Controls.ControlDecimal;
		}
		interface Navigation {
			navCases: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormEntitlement extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Entitlement
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Entitlement */
		Body: LuckyMokey.FormEntitlement.Body;
		/** The Header section of form Entitlement */
		Header: LuckyMokey.FormEntitlement.Header;
		/** The Navigation of form Entitlement */
		Navigation: LuckyMokey.FormEntitlement.Navigation;
	}
	class EntitlementApi {
		/**
		* DynamicsCrm.DevKit EntitlementApi
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
		/** Unique identifier for Account associated with Entitlement. */
		AccountId: DevKit.WebApi.LookupValueReadonly;
		/** Select the type of entitlement terms. */
		AllocationTypeCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for Contact associated with Entitlement. */
		ContactId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the entitlement. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Select whether to decrease the remaining terms when the case is created or when it is resolved. */
		DecreaseRemainingOn: DevKit.WebApi.OptionSetValue;
		/** Type additional information to describe the Entitlement */
		Description: DevKit.WebApi.StringValue;
		/** The primary email address for the entity. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** Enter the date when the entitlement ends. */
		EndDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier for entity instances */
		EntitlementId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Entitlement Template associated with Entitlement. */
		EntitlementTemplateId: DevKit.WebApi.LookupValue;
		/** Entity type for which the entitlement applies */
		entitytype: DevKit.WebApi.OptionSetValue;
		/** Exchange rate for the currency associated with the contact with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows whether this entitlement is the default one for the specified customer. */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Select the access someone will have to the knowledge base on the portal. */
		KbAccessLevel: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The work order entities to which the entitlement is applicable. */
		msdyn_AppliesTo: DevKit.WebApi.OptionSetValue;
		/** The priority level when considering which eligible entitlement to apply, where the lower the number the higher the priority. */
		msdyn_EntitlementPrioritization: DevKit.WebApi.IntegerValue;
		/** The percent discount the entitlement applies to the work order. */
		msdyn_PercentDiscount: DevKit.WebApi.DoubleValue;
		/** The price list that the entitlement applies to the work order. */
		msdyn_PriceListToApply: DevKit.WebApi.LookupValue;
		/** Type a meaningful name for the entitlement. */
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
		/** Type the total number of entitlement terms that are left. */
		RemainingTerms: DevKit.WebApi.DecimalValue;
		/** Tells whether case creation is restricted based on entitlement terms. */
		RestrictCaseCreation: DevKit.WebApi.BooleanValue;
		/** Choose the service level agreement (SLA) associated with the entitlement. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Enter the date when the entitlement starts. */
		StartDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the reason code that explains the status of the entitlement. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type the total number of entitlement terms. */
		TotalTerms: DevKit.WebApi.DecimalValue;
		/** Unique identifier of the currency associated with the contact. */
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
	namespace Entitlement {
		enum AllocationTypeCode {
			/** 0 */
			Number_of_cases,
			/** 1 */
			Number_of_hours,
			/** 192350000 */
			Discount_and_Price_List
		}
		enum DecreaseRemainingOn {
			/** 0 */
			Case_Resolution,
			/** 1 */
			Case_Creation
		}
		enum entitytype {
			/** 192350000 */
			Work_Order,
			/** 0 */
			Case
		}
		enum KbAccessLevel {
			/** 0 */
			Standard,
			/** 1 */
			Premium,
			/** 2 */
			None
		}
		enum msdyn_AppliesTo {
			/** 690970000 */
			Work_Order_Products,
			/** 690970001 */
			Work_Order_Services,
			/** 690970002 */
			Both_Work_Order_Products_Services
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Active,
			/** 2 */
			Cancelled,
			/** 3 */
			Expired,
			/** 4 */
			Waiting
		}
		enum StatusCode {
			/** 0 */
			Draft,
			/** 1 */
			Active,
			/** 2 */
			Cancelled,
			/** 3 */
			Expired,
			/** 1200 */
			Waiting
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
//{'JsForm':['Entitlement'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}