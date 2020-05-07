//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_taxcode_Information {
		interface tab_f1tab_taxinfo_Sections {
		}
		interface tab_taxcodedetailstab_Sections {
			taxcodedetailssection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_taxinfo extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_taxinfo_Sections;
		}
		interface tab_taxcodedetailstab extends DevKit.Form.Controls.IControlTab {
			Section: tab_taxcodedetailstab_Sections;
		}
		interface Tabs {
			f1tab_taxinfo: tab_f1tab_taxinfo;
			taxcodedetailstab: tab_taxcodedetailstab;
		}
		interface Body {
			Tab: Tabs;
			taxcodedetailsgrid: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** If set as a Tax Group the tax rate will be the total of all the Tax Code details combined */
			msdyn_ActasTaxGroup: DevKit.Form.Controls.ControlBoolean;
			/** Select whether this tax code applies to service agreements. */
			msdyn_AgreementTaxable: DevKit.Form.Controls.ControlBoolean;
			/** Type the sales tax code name. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Select whether this tax code applies to products. */
			msdyn_ProductsTaxable: DevKit.Form.Controls.ControlBoolean;
			/** Select whether this tax code applies to services. */
			msdyn_ServicesTaxable: DevKit.Form.Controls.ControlBoolean;
			/** Enter the rate of this sales tax code. */
			msdyn_TaxRate: DevKit.Form.Controls.ControlDouble;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Tax Code */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_account_SalesTaxCode: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_msdyn_workorder_TaxCode: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_msdyn_rma_TaxCode: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_msdyn_rtv_TaxCode: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_taxcode_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_taxcode_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_taxcode_Information */
		Body: LuckyMokey.Formmsdyn_taxcode_Information.Body;
		/** The Footer section of form msdyn_taxcode_Information */
		Footer: LuckyMokey.Formmsdyn_taxcode_Information.Footer;
		/** The Navigation of form msdyn_taxcode_Information */
		Navigation: LuckyMokey.Formmsdyn_taxcode_Information.Navigation;
	}
	class msdyn_taxcodeApi {
		/**
		* DynamicsCrm.DevKit msdyn_taxcodeApi
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
		/** If set as a Tax Group the tax rate will be the total of all the Tax Code details combined */
		msdyn_ActasTaxGroup: DevKit.WebApi.BooleanValue;
		/** Select whether this tax code applies to service agreements. */
		msdyn_AgreementTaxable: DevKit.WebApi.BooleanValue;
		/** Type the sales tax code name. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Select whether this tax code applies to products. */
		msdyn_ProductsTaxable: DevKit.WebApi.BooleanValue;
		/** Select whether this tax code applies to services. */
		msdyn_ServicesTaxable: DevKit.WebApi.BooleanValue;
		/** Shows the entity instances. */
		msdyn_taxcodeId: DevKit.WebApi.GuidValue;
		/** Enter the rate of this sales tax code. */
		msdyn_TaxRate: DevKit.WebApi.DoubleValue;
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
		/** Status of the Tax Code */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Tax Code */
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
	namespace msdyn_taxcode {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}