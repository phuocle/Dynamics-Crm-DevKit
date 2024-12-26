//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		/** Account Name */
		msdyn_accountname: string;
		/** Address City */
		msdyn_addresscity: string;
		/** AddressLine1 */
		msdyn_addressline1: string;
		/** AddressLine2 */
		msdyn_addressline2: string;
		/** Address Postal Code */
		msdyn_addresspostalcode: string;
		/** Company Name */
		msdyn_companyname: string;
		/** Date and time when the record was created. */
		msdyn_createdon_UtcDateAndTime: Date;
		/** Description */
		msdyn_description: string;
		/** Email */
		msdyn_email: string;
		/** first name */
		msdyn_firstname: string;
		/** Full Name */
		msdyn_fullname: string;
		/** Job Title */
		msdyn_jobtitle: string;
		/** Last Name */
		msdyn_lastname: string;
		/** Mobile Phone */
		msdyn_mobilephone: string;
		/** Preferred Contact Method Code */
		msdyn_preferredcontactmethodcode: string;
		/** Unique identifier for entity instances */
		msdyn_suggestedcontactId: string;
		/** Telephone */
		msdyn_telephone: string;
		readonly FormattedValue: {
			/** Account Name */
			readonly msdyn_accountidname: string;
			/** Account Name */
			readonly msdyn_accountname: string;
			/** Address City */
			readonly msdyn_addresscity: string;
			/** AddressLine1 */
			readonly msdyn_addressline1: string;
			/** AddressLine2 */
			readonly msdyn_addressline2: string;
			/** Address Postal Code */
			readonly msdyn_addresspostalcode: string;
			/** Company Name */
			readonly msdyn_companyname: string;
			/** Date and time when the record was created. */
			readonly msdyn_createdon_UtcDateAndTime: string;
			/** Description */
			readonly msdyn_description: string;
			/** Email */
			readonly msdyn_email: string;
			/** first name */
			readonly msdyn_firstname: string;
			/** Full Name */
			readonly msdyn_fullname: string;
			/** Job Title */
			readonly msdyn_jobtitle: string;
			/** Last Name */
			readonly msdyn_lastname: string;
			/** Mobile Phone */
			readonly msdyn_mobilephone: string;
			/** Preferred Contact Method Code */
			readonly msdyn_preferredcontactmethodcode: string;
			/** Unique identifier for entity instances */
			readonly msdyn_suggestedcontactId: string;
			/** Telephone */
			readonly msdyn_telephone: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}