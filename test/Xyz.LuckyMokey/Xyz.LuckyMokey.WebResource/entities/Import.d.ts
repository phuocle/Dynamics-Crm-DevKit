//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormImport_Information {
		interface Tabs {
		}
		interface Body {
			/** Shows who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the import was initiated. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Shows the name of the import job, based on the import file and the entity being imported. */
			Name: DevKit.Form.Controls.ControlString;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Order in which the import was created. */
			Sequence: DevKit.Form.Controls.ControlInteger;
			/** Shows the reason code that explains the import job's status to identify the job's stage of the import processes, from transforming the data to completed. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormImport_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Import_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Import_Information */
		Body: LuckyMokey.FormImport_Information.Body;
	}
	class ImportApi {
		/**
		* DynamicsCrm.DevKit ImportApi
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
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the import was initiated. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the email address that the import completion notification must be sent to. */
		EMailAddress: DevKit.WebApi.StringValue;
		/** Unique identifier of the import job. */
		ImportId: DevKit.WebApi.GuidValue;
		/** Select whether to create or update records in Microsoft Dynamics 365 during the import job. */
		ModeCode: DevKit.WebApi.OptionSetValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the name of the import job, based on the import file and the entity being imported. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Business unit that owns the import job. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the import. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the import. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Select whether to send a notification email message to a selected user after the import is completed. */
		SendNotification: DevKit.WebApi.BooleanValue;
		/** Order in which the import was created. */
		Sequence: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the status of the import job. By default, import jobs are active and can't be deactivated. */
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows the reason code that explains the import job's status to identify the job's stage of the import processes, from transforming the data to completed. */
		StatusCode: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace Import {
		enum ModeCode {
			/** 0 */
			Create,
			/** 1 */
			Update
		}
		enum StateCode {
			/** 0 */
			Active
		}
		enum StatusCode {
			/** 0 */
			Submitted,
			/** 1 */
			Parsing,
			/** 2 */
			Transforming,
			/** 3 */
			Importing,
			/** 4 */
			Completed,
			/** 5 */
			Failed
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