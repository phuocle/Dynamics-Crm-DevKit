//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formadx_externalidentity_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for Contact associated with External Identity. */
			adx_contactid: DevKit.Controls.Lookup;
			/** Identity Provider */
			adx_identityprovidername: DevKit.Controls.String;
			/** Shows the name of the custom entity. */
			adx_username: DevKit.Controls.String;
		}
	}
	export class Formadx_externalidentity_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form adx_externalidentity_Information */
		Body: DevKit.Formadx_externalidentity_Information.Body;
	}
	export class adx_externalidentityApi {
		/**
		* DynamicsCrm.DevKit adx_externalidentityApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier for Contact associated with External Identity. */
		adx_contactid: string | null;
		/** Shows the entity instances. */
		adx_externalidentityId: string | null;
		adx_identityprovidername: string | null;
		/** Shows the name of the custom entity. */
		adx_username: string | null;
		/** Shows the user who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Shows the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Shows the organization. */
		readonly OrganizationId: string | null;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Shows whether the external identity is active or inactive. Inactive records are read-only and can't be edited unless they are reactivated. */
		statecode: OptionSet.adx_externalidentity.statecode | null;
		/** Select the external identity's status. */
		statuscode: OptionSet.adx_externalidentity.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier for Contact associated with External Identity. */
			readonly adx_contactid: string;
			/** Shows the entity instances. */
			readonly adx_externalidentityId: string;
			readonly adx_identityprovidername: string;
			/** Shows the name of the custom entity. */
			readonly adx_username: string;
			/** Shows the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the organization. */
			readonly OrganizationId: string;
			/** Shows the date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Shows whether the external identity is active or inactive. Inactive records are read-only and can't be edited unless they are reactivated. */
			readonly statecode: string;
			/** Select the external identity's status. */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace adx_externalidentity {
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}