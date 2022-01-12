//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_suggestedcontact_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_fullname: DevKit.Controls.String;
		}
	}
	class Formmsdyn_suggestedcontact_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_suggestedcontact_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_suggestedcontact_Information */
		Body: DevKit.Formmsdyn_suggestedcontact_Information.Body;
		/** The SidePanes of form msdyn_suggestedcontact_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_suggestedcontact_Information2 {
		interface Tabs {
		}
		interface Body {
			msdyn_fullname: DevKit.Controls.String;
		}
	}
	class Formmsdyn_suggestedcontact_Information2 extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_suggestedcontact_Information2 Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_suggestedcontact_Information2 */
		Body: DevKit.Formmsdyn_suggestedcontact_Information2.Body;
		/** The SidePanes of form msdyn_suggestedcontact_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_suggestedcontactApi {
		/**
		* DynamicsCrm.DevKit msdyn_suggestedcontactApi
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
		/** Account Name */
		msdyn_accountidname: DevKit.WebApi.StringValue;
		msdyn_accountname: DevKit.WebApi.StringValue;
		msdyn_addresscity: DevKit.WebApi.StringValue;
		msdyn_addressline1: DevKit.WebApi.StringValue;
		msdyn_addressline2: DevKit.WebApi.StringValue;
		msdyn_addresspostalcode: DevKit.WebApi.StringValue;
		msdyn_companyname: DevKit.WebApi.StringValue;
		/** Date and time when the record was created. */
		msdyn_createdon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_description: DevKit.WebApi.StringValue;
		msdyn_email: DevKit.WebApi.StringValue;
		/** first name */
		msdyn_firstname: DevKit.WebApi.StringValue;
		msdyn_fullname: DevKit.WebApi.StringValue;
		msdyn_jobtitle: DevKit.WebApi.StringValue;
		msdyn_lastname: DevKit.WebApi.StringValue;
		msdyn_mobilephone: DevKit.WebApi.StringValue;
		msdyn_preferredcontactmethodcode: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_suggestedcontactId: DevKit.WebApi.GuidValue;
		msdyn_telephone: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace msdyn_suggestedcontact {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}