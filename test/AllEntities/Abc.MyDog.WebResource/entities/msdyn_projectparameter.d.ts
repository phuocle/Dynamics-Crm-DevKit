//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_projectparameter_Information {
		interface tab__4C87DA2D_AA4A_4EAE_972E_EAC9DBC05C4F_Sections {
			_2495CB91_9D0E_4216_806C_D7287B3B2D42: DevKit.Controls.Section;
			_4C87DA2D_AA4A_4EAE_972E_EAC9DBC05C4F_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_PriceListTab_Sections {
			PriceListSection: DevKit.Controls.Section;
		}
		interface tab_AmountBasedPricingDimensionTab_Sections {
			AmountBasedPricingDimensionSection: DevKit.Controls.Section;
		}
		interface tab_MarkupBasedPricingDimensionTab_Sections {
			MarkupBasedPricingDimensionSection: DevKit.Controls.Section;
		}
		interface tab__4C87DA2D_AA4A_4EAE_972E_EAC9DBC05C4F extends DevKit.Controls.ITab {
			Section: tab__4C87DA2D_AA4A_4EAE_972E_EAC9DBC05C4F_Sections;
		}
		interface tab_PriceListTab extends DevKit.Controls.ITab {
			Section: tab_PriceListTab_Sections;
		}
		interface tab_AmountBasedPricingDimensionTab extends DevKit.Controls.ITab {
			Section: tab_AmountBasedPricingDimensionTab_Sections;
		}
		interface tab_MarkupBasedPricingDimensionTab extends DevKit.Controls.ITab {
			Section: tab_MarkupBasedPricingDimensionTab_Sections;
		}
		interface Tabs {
			_4C87DA2D_AA4A_4EAE_972E_EAC9DBC05C4F: tab__4C87DA2D_AA4A_4EAE_972E_EAC9DBC05C4F;
			PriceListTab: tab_PriceListTab;
			AmountBasedPricingDimensionTab: tab_AmountBasedPricingDimensionTab;
			MarkupBasedPricingDimensionTab: tab_MarkupBasedPricingDimensionTab;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Select the default organizational unit that will be used for new resources. */
			msdyn_defaultorganizationalunit: DevKit.Controls.Lookup;
			/** Select the default work template for new projects. */
			msdyn_defaultWorkTemplate: DevKit.Controls.Lookup;
			/** Type the name of the project parameters. */
			msdyn_description: DevKit.Controls.String;
			/** Select the default frequency for generating invoices. */
			msdyn_invoicefrequency: DevKit.Controls.Lookup;
			/** Enabling this will make cost price list selection on projects agnostic of contracting unit currency and cost price lists will allow price setup in multiple currencies */
			msdyn_pricelistdefaultingiscurrencyagnostic: DevKit.Controls.Boolean;
			/** Shows the default role to be used when a project manager is added to the project team. */
			msdyn_projectmanagerrole: DevKit.Controls.Lookup;
			/** Select the default method for allocating resources to projects. */
			msdyn_resourceallocationmode: DevKit.Controls.OptionSet;
			/** Shows the default role to be used when a team member is added to the project team. */
			msdyn_teammemberrole: DevKit.Controls.Lookup;
		}
		interface Grid {
			PriceListGrid: DevKit.Controls.Grid;
			AmountBasedPricingDimensionGrid: DevKit.Controls.Grid;
			MarkupBasedPricingDimensionGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_projectparameter_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projectparameter_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_projectparameter_Information */
		Body: MyDog.Formmsdyn_projectparameter_Information.Body;
		/** The Grid of form msdyn_projectparameter_Information */
		Grid: MyDog.Formmsdyn_projectparameter_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_projectparameter {
		enum msdyn_resourceallocationmode {
			/** 1 */
			Centralized,
			/** 2 */
			Hybrid
		}
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}