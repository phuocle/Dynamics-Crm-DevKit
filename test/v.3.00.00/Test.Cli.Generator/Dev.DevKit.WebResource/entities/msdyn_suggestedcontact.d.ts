//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_suggestedcontact_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_fullname: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_suggestedcontact_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_suggestedcontact_Information */
		Body: DevKit.Formmsdyn_suggestedcontact_Information.Body;
		/** The Process of form msdyn_suggestedcontact_Information */
		Process: DevKit.Formmsdyn_suggestedcontact_Information.Process;
		/** The SidePanes of form msdyn_suggestedcontact_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_suggestedcontact_Information2 {
		interface Tabs {
		}
		interface Body {
			msdyn_fullname: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_suggestedcontact_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_suggestedcontact_Information2 */
		Body: DevKit.Formmsdyn_suggestedcontact_Information2.Body;
		/** The Process of form msdyn_suggestedcontact_Information2 */
		Process: DevKit.Formmsdyn_suggestedcontact_Information2.Process;
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
		/** Account Name */
		msdyn_accountidname: string;
		msdyn_accountname: string;
		msdyn_addresscity: string;
		msdyn_addressline1: string;
		msdyn_addressline2: string;
		msdyn_addresspostalcode: string;
		msdyn_companyname: string;
		/** Date and time when the record was created. */
		msdyn_createdon_UtcDateAndTime: Date;
		msdyn_description: string;
		msdyn_email: string;
		/** first name */
		msdyn_firstname: string;
		msdyn_fullname: string;
		msdyn_jobtitle: string;
		msdyn_lastname: string;
		msdyn_mobilephone: string;
		msdyn_preferredcontactmethodcode: string;
		/** Unique identifier for entity instances */
		msdyn_suggestedcontactId: string;
		msdyn_telephone: string;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}