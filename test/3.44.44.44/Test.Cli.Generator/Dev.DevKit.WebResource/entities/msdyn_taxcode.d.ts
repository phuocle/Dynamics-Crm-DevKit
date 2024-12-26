//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_taxcode_Information {
		interface tab_f1tab_taxinfo_Sections {
		}
		interface tab_taxcodedetailstab_Sections {
			taxcodedetailssection: DevKit.Controls.Section;
		}
		interface tab_f1tab_taxinfo extends DevKit.Controls.ITab {
			Section: tab_f1tab_taxinfo_Sections;
		}
		interface tab_taxcodedetailstab extends DevKit.Controls.ITab {
			Section: tab_taxcodedetailstab_Sections;
		}
		interface Tabs {
			f1tab_taxinfo: tab_f1tab_taxinfo;
			taxcodedetailstab: tab_taxcodedetailstab;
		}
		interface Body {
			Tab: Tabs;
			/** If set as a Tax Group the tax rate will be the total of all the Tax Code details combined */
			msdyn_ActasTaxGroup: DevKit.Controls.Boolean;
			/** Select whether this tax code applies to service agreements. */
			msdyn_AgreementTaxable: DevKit.Controls.Boolean;
			/** Type the sales tax code name. */
			msdyn_name: DevKit.Controls.String;
			/** Select whether this tax code applies to products. */
			msdyn_ProductsTaxable: DevKit.Controls.Boolean;
			/** Select whether this tax code applies to services. */
			msdyn_ServicesTaxable: DevKit.Controls.Boolean;
			/** Enter the rate of this sales tax code. */
			msdyn_TaxRate: DevKit.Controls.Double;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_taxcode_account_SalesTaxCode: DevKit.Controls.NavigationItem,
			msdyn_msdyn_taxcode_msdyn_actual_TaxCode: DevKit.Controls.NavigationItem,
			msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode: DevKit.Controls.NavigationItem,
			msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode: DevKit.Controls.NavigationItem,
			msdyn_msdyn_taxcode_msdyn_rma_TaxCode: DevKit.Controls.NavigationItem,
			msdyn_msdyn_taxcode_msdyn_rtv_TaxCode: DevKit.Controls.NavigationItem,
			msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode: DevKit.Controls.NavigationItem,
			msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode: DevKit.Controls.NavigationItem,
			msdyn_msdyn_taxcode_msdyn_workorder_TaxCode: DevKit.Controls.NavigationItem,
			msdyn_msdyn_taxcode_quotedetail_SalesTaxCode: DevKit.Controls.NavigationItem
		}
		interface Grid {
			taxcodedetailsgrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_taxcode_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_taxcode_Information */
		Body: DevKit.Formmsdyn_taxcode_Information.Body;
		/** The Navigation of form msdyn_taxcode_Information */
		Navigation: DevKit.Formmsdyn_taxcode_Information.Navigation;
		/** The Grid of form msdyn_taxcode_Information */
		Grid: DevKit.Formmsdyn_taxcode_Information.Grid;
		/** The SidePanes of form msdyn_taxcode_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTax_Code_Quick_Create_FS_5x5 {
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
			/** Select whether this tax code applies to service agreements. */
			msdyn_AgreementTaxable: DevKit.Controls.Boolean;
			/** Type the sales tax code name. */
			msdyn_name: DevKit.Controls.String;
			/** Select whether this tax code applies to products. */
			msdyn_ProductsTaxable: DevKit.Controls.Boolean;
			/** Select whether this tax code applies to services. */
			msdyn_ServicesTaxable: DevKit.Controls.Boolean;
			/** Enter the rate of this sales tax code. */
			msdyn_TaxRate: DevKit.Controls.Double;
		}
	}
	class FormTax_Code_Quick_Create_FS_5x5 extends DevKit.IForm {
		/**
		* Tax Code Quick Create FS 5x5 [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Tax_Code_Quick_Create_FS_5x5 */
		Body: DevKit.FormTax_Code_Quick_Create_FS_5x5.Body;
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** If set as a Tax Group the tax rate will be the total of all the Tax Code details combined */
		msdyn_ActasTaxGroup: boolean;
		/** Select whether this tax code applies to service agreements. */
		msdyn_AgreementTaxable: boolean;
		/** Type the sales tax code name. */
		msdyn_name: string;
		/** Select whether this tax code applies to products. */
		msdyn_ProductsTaxable: boolean;
		/** Select whether this tax code applies to services. */
		msdyn_ServicesTaxable: boolean;
		/** Shows the entity instances. */
		msdyn_taxcodeId: string;
		/** Enter the rate of this sales tax code. */
		msdyn_TaxRate: number;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Tax Code */
		statecode: OptionSet.msdyn_taxcode.statecode;
		/** Reason for the status of the Tax Code */
		statuscode: OptionSet.msdyn_taxcode.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** If set as a Tax Group the tax rate will be the total of all the Tax Code details combined */
			readonly msdyn_ActasTaxGroup: string;
			/** Select whether this tax code applies to service agreements. */
			readonly msdyn_AgreementTaxable: string;
			/** Type the sales tax code name. */
			readonly msdyn_name: string;
			/** Select whether this tax code applies to products. */
			readonly msdyn_ProductsTaxable: string;
			/** Select whether this tax code applies to services. */
			readonly msdyn_ServicesTaxable: string;
			/** Shows the entity instances. */
			readonly msdyn_taxcodeId: string;
			/** Enter the rate of this sales tax code. */
			readonly msdyn_TaxRate: string;
			/** Shows the date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Tax Code */
			readonly statecode: string;
			/** Reason for the status of the Tax Code */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}