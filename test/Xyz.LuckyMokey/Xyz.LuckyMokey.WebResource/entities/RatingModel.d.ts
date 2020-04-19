//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRatingModel_Information {
		interface tab__EB7E3846_44DC_4541_AB63_5C9FB594F107_Sections {
			_FC24DD79_F2FF_4942_BB88_C5EF718132F1: DevKit.Form.Controls.ControlSection;
			_EB7E3846_44DC_4541_AB63_5C9FB594F107_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab__EB7E3846_44DC_4541_AB63_5C9FB594F107 extends DevKit.Form.Controls.IControlTab {
			Section: tab__EB7E3846_44DC_4541_AB63_5C9FB594F107_Sections;
		}
		interface Tabs {
			_EB7E3846_44DC_4541_AB63_5C9FB594F107: tab__EB7E3846_44DC_4541_AB63_5C9FB594F107;
		}
		interface Body {
			Tab: Tabs;
			RatingValues: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Enter the maximum rating value. */
			MaxRatingValue: DevKit.Form.Controls.ControlInteger;
			/** Enter the minimum rating value. */
			MinRatingValue: DevKit.Form.Controls.ControlInteger;
			/** Shows whether the entity can use the rating model. */
			msdyn_RatableEntity: DevKit.Form.Controls.ControlOptionSet;
			/** Type the name of the rating model. */
			Name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navRatings: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormRatingModel_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form RatingModel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form RatingModel_Information */
		Body: LuckyMokey.FormRatingModel_Information.Body;
		/** The Navigation of form RatingModel_Information */
		Navigation: LuckyMokey.FormRatingModel_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace RatingModel {
		enum msdyn_RatableEntity {
			/** 192350000 */
			None,
			/** 192350001 */
			Skill
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