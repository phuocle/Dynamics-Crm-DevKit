//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormCustomerRelationship_Information {
		interface tab_general_Sections {
			information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select the primary account or contact involved in the customer relationship. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Type additional information about the primary party's role in the customer relationship, such as the length or quality of the relationship. */
			CustomerRoleDescription: DevKit.Form.Controls.ControlString;
			/** Choose the primary party's role or nature of the relationship the customer has with the second party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
			CustomerRoleId: DevKit.Form.Controls.ControlLookup;
			/** Select the secondary account or contact involved in the customer relationship. */
			PartnerId: DevKit.Form.Controls.ControlLookup;
			/** Type additional information about the secondary party's role in the customer relationship, such as the length or quality of the relationship. */
			PartnerRoleDescription: DevKit.Form.Controls.ControlString;
			/** Choose the secondary party's role or nature of the relationship the customer has with the primary party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
			PartnerRoleId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormCustomerRelationship_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form CustomerRelationship_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form CustomerRelationship_Information */
		Body: MyDog.FormCustomerRelationship_Information.Body;
	}
	class CustomerRelationshipApi {
		/**
		* DynamicsCrm.DevKit CustomerRelationshipApi
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
		/** Unique identifier of the converse relationship of the customer relationship. */
		ConverseRelationshipId: DevKit.WebApi.LookupValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the customer relationship was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the customer relationship. */
		CustomerRelationshipId: DevKit.WebApi.GuidValue;
		/** Type additional information about the primary party's role in the customer relationship, such as the length or quality of the relationship. */
		CustomerRoleDescription: DevKit.WebApi.StringValue;
		/** Choose the primary party's role or nature of the relationship the customer has with the second party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
		CustomerRoleId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the customer relationship. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the customer relationship. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the customer relationship. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		partnerid_account: DevKit.WebApi.LookupValue;
		partnerid_contact: DevKit.WebApi.LookupValue;
		/** Type additional information about the secondary party's role in the customer relationship, such as the length or quality of the relationship. */
		PartnerRoleDescription: DevKit.WebApi.StringValue;
		/** Choose the secondary party's role or nature of the relationship the customer has with the primary party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
		PartnerRoleId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		UniqueDscId: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace CustomerRelationship {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}