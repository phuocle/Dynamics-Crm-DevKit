//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class aaduserApi {
		/**
		* DynamicsCrm.DevKit aaduserApi
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
		/** Unique identifier of an aad user. */
		aaduserId: string;
		/** Indicates if the Account of an AAD User is enabled. */
		AccountEnabled: boolean;
		/** Business phone number for the user */
		BusinessPhones: string;
		/** City. */
		City: string;
		/** Company Name. */
		CompanyName: string;
		/** Date and time when the AAD user was created. */
		readonly CreatedDateTime_UtcDateAndTime: Date;
		/** The name displayed in the address book for the user. */
		DisplayName: string;
		/** The given name (first name) of the user. */
		GivenName: string;
		/** A unique identifer for AAD User */
		id1: string;
		/** ImAddresses for the user */
		ImAddresses: string;
		/** The user's job title. */
		JobTitle: string;
		/** The SMTP address for the user. */
		Mail: string;
		/** The primary cellular telephone number for the user. */
		MobilePhone: string;
		/** The office location in the user's place of business. */
		OfficeLocation: string;
		/** Postal Code. */
		PostalCode: string;
		/** The preferred language for the user. Should follow ISO 639-1 Code; for example 'en-US'. */
		PreferredLanguage: string;
		/** Street Address. */
		StreetAddress: string;
		/** The user's surname (family name or last name). */
		surname: string;
		/** The user principal name (UPN) of the user. */
		UserPrincipalName: string;
		/** User Type. */
		UserType: string;
	}
}
declare namespace OptionSet {
	namespace aaduser {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}