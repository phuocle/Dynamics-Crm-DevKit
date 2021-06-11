//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRatingModel_Information {
		interface tab__EB7E3846_44DC_4541_AB63_5C9FB594F107_Sections {
			_EB7E3846_44DC_4541_AB63_5C9FB594F107_SECTION_3: DevKit.Controls.Section;
			_FC24DD79_F2FF_4942_BB88_C5EF718132F1: DevKit.Controls.Section;
		}
		interface tab__EB7E3846_44DC_4541_AB63_5C9FB594F107 extends DevKit.Controls.ITab {
			Section: tab__EB7E3846_44DC_4541_AB63_5C9FB594F107_Sections;
		}
		interface Tabs {
			_EB7E3846_44DC_4541_AB63_5C9FB594F107: tab__EB7E3846_44DC_4541_AB63_5C9FB594F107;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the maximum rating value. */
			MaxRatingValue: DevKit.Controls.Integer;
			/** Enter the minimum rating value. */
			MinRatingValue: DevKit.Controls.Integer;
			/** Shows whether the entity can use the rating model. */
			msdyn_RatableEntity: DevKit.Controls.OptionSet;
			/** Type the name of the rating model. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navRatings: DevKit.Controls.NavigationItem
		}
		interface Grid {
			RatingValues: DevKit.Controls.Grid;
		}
	}
	class FormRatingModel_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form RatingModel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RatingModel_Information */
		Body: DevKit.FormRatingModel_Information.Body;
		/** The Navigation of form RatingModel_Information */
		Navigation: DevKit.FormRatingModel_Information.Navigation;
		/** The Grid of form RatingModel_Information */
		Grid: DevKit.FormRatingModel_Information.Grid;
	}
	namespace FormRatingModel_Omnichannel_Information {
		interface tab__EB7E3846_44DC_4541_AB63_5C9FB594F107_Sections {
			_EB7E3846_44DC_4541_AB63_5C9FB594F107_SECTION_3: DevKit.Controls.Section;
			_FC24DD79_F2FF_4942_BB88_C5EF718132F1: DevKit.Controls.Section;
		}
		interface tab__EB7E3846_44DC_4541_AB63_5C9FB594F107 extends DevKit.Controls.ITab {
			Section: tab__EB7E3846_44DC_4541_AB63_5C9FB594F107_Sections;
		}
		interface Tabs {
			_EB7E3846_44DC_4541_AB63_5C9FB594F107: tab__EB7E3846_44DC_4541_AB63_5C9FB594F107;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the maximum rating value. */
			MaxRatingValue: DevKit.Controls.Integer;
			/** Enter the minimum rating value. */
			MinRatingValue: DevKit.Controls.Integer;
			/** Type the name of the rating model. */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navRatings: DevKit.Controls.NavigationItem
		}
		interface Grid {
			RatingValues: DevKit.Controls.Grid;
		}
	}
	class FormRatingModel_Omnichannel_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form RatingModel_Omnichannel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RatingModel_Omnichannel_Information */
		Body: DevKit.FormRatingModel_Omnichannel_Information.Body;
		/** The Navigation of form RatingModel_Omnichannel_Information */
		Navigation: DevKit.FormRatingModel_Omnichannel_Information.Navigation;
		/** The Grid of form RatingModel_Omnichannel_Information */
		Grid: DevKit.FormRatingModel_Omnichannel_Information.Grid;
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
//{'JsForm':['Information','Omnichannel Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}