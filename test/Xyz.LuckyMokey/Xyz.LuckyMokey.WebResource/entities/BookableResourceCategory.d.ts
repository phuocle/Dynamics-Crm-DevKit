//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormBookableResourceCategory_Information {
		interface tab__35EF8C40_AFF6_447D_A927_D6E2F3D859BB_Sections {
			_43AB3D2C_EC2C_437E_A161_563C8AA60436: DevKit.Form.Controls.ControlSection;
			SkillsSection: DevKit.Form.Controls.ControlSection;
			_2E7FD731_54AD_4197_AB2C_5CDD58651954: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Resource_Category_Associations_Sections {
			Resource_Category_Associations_Section: DevKit.Form.Controls.ControlSection;
		}
		interface tab__35EF8C40_AFF6_447D_A927_D6E2F3D859BB extends DevKit.Form.Controls.IControlTab {
			Section: tab__35EF8C40_AFF6_447D_A927_D6E2F3D859BB_Sections;
		}
		interface tab_Resource_Category_Associations extends DevKit.Form.Controls.IControlTab {
			Section: tab_Resource_Category_Associations_Sections;
		}
		interface Tabs {
			_35EF8C40_AFF6_447D_A927_D6E2F3D859BB: tab__35EF8C40_AFF6_447D_A927_D6E2F3D859BB;
			Resource_Category_Associations: tab_Resource_Category_Associations;
		}
		interface Body {
			Tab: Tabs;
			RoleCompetencyRequirement: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			ResourceCategoryAssociations: DevKit.Form.Controls.ControlGrid;
			/** Type a detailed description of what the categorization is about. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select the billing type for this resource role. */
			msdyn_billingtype: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the target usage rate for this resource role. */
			msdyn_targetutilization: DevKit.Form.Controls.ControlInteger;
			/** Type the name of the resource category. */
			Name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navResourceCategories: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcecategory_msdyn_roleutilization_role: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookableresourcecategory_resourcerequirement: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormBookableResourceCategory_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form BookableResourceCategory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form BookableResourceCategory_Information */
		Body: LuckyMokey.FormBookableResourceCategory_Information.Body;
		/** The Navigation of form BookableResourceCategory_Information */
		Navigation: LuckyMokey.FormBookableResourceCategory_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace BookableResourceCategory {
		enum msdyn_billingtype {
			/** 192350000 */
			Non_Chargeable,
			/** 192350001 */
			Chargeable,
			/** 192350002 */
			Complimentary,
			/** 192350003 */
			Not_Available
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}