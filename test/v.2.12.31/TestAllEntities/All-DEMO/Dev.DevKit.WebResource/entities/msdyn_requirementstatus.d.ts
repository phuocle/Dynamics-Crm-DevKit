﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_requirementstatus_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The status of a requirement. */
			msdyn_Status: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementActiveStatus: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCanceledStatus: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCompletedStatus: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_requirementstatus_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_requirementstatus_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_requirementstatus_Information */
		Body: DevKit.Formmsdyn_requirementstatus_Information.Body;
		/** The Navigation of form msdyn_requirementstatus_Information */
		Navigation: DevKit.Formmsdyn_requirementstatus_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_requirementstatus {
		enum msdyn_Status {
			/** 690970000 */
			Active,
			/** 690970002 */
			Canceled,
			/** 690970001 */
			Completed
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