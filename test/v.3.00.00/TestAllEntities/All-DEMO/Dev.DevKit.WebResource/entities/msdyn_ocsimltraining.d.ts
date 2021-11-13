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
	class msdyn_ocsimltrainingApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocsimltrainingApi
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
		/** For internal use only. */
		ComponentIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Details of error */
		msdyn_errordetails: DevKit.WebApi.StringValue;
		/** Model training status */
		msdyn_mltrainingstatus: DevKit.WebApi.OptionSetValue;
		/** The name of the model training detail. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for model training detail */
		msdyn_ocsimltrainingId: DevKit.WebApi.GuidValue;
		/** Skill finder model */
		msdyn_ocskillidentmlmodelid: DevKit.WebApi.LookupValue;
		/** Reference to AI builder published configuration */
		msdyn_publishaiconfiguration: DevKit.WebApi.LookupValue;
		/** Model published date */
		msdyn_publishedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Reference to AI builder training configuration */
		msdyn_trainaiconfiguration: DevKit.WebApi.LookupValue;
		/** Model training start date */
		msdyn_trainedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Total number of training records processed */
		msdyn_trainingdatacount: DevKit.WebApi.IntegerValue;
		/** Unique name for the entity. */
		msdyn_UniqueName: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
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
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the ocsimltraining */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the ocsimltraining */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':['Model training details main form'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}