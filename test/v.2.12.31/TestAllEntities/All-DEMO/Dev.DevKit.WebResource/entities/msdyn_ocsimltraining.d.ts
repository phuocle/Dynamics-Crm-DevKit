//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormModel_training_details_main_form {
		interface tab_general_tab_Sections {
		}
		interface tab_general_tab extends DevKit.Controls.ITab {
			Section: tab_general_tab_Sections;
		}
		interface Tabs {
			general_tab: tab_general_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Details of error */
			msdyn_errordetails: DevKit.Controls.String;
			/** Model training status */
			msdyn_mltrainingstatus: DevKit.Controls.OptionSet;
			/** The name of the model training detail. */
			msdyn_name: DevKit.Controls.String;
			/** Skill finder model */
			msdyn_ocskillidentmlmodelid: DevKit.Controls.Lookup;
			/** Model published date */
			msdyn_publishedon: DevKit.Controls.DateTime;
			/** Model training start date */
			msdyn_trainedon: DevKit.Controls.DateTime;
			/** Total number of training records processed */
			msdyn_trainingdatacount: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormModel_training_details_main_form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Model_training_details_main_form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Model_training_details_main_form */
		Body: DevKit.FormModel_training_details_main_form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocsimltraining {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_mltrainingstatus {
			/** 192350000 */
			Draft,
			/** 326340008 */
			Loading_Data,
			/** 326340003 */
			Publish_completed,
			/** 326340007 */
			Publish_config_created,
			/** 326340002 */
			Publish_failed,
			/** 326340000 */
			Publish_in_progress,
			/** 326340001 */
			Train_config_created,
			/** 326340006 */
			Training_completed,
			/** 326340004 */
			Training_failed,
			/** 326340005 */
			Training_in_progress
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
//{'JsForm':['Model training details main form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}