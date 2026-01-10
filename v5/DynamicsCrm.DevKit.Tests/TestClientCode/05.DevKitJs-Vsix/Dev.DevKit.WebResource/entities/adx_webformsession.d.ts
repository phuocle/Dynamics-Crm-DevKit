//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormInformation_Enhanced {
		interface Tabs {
		}
		interface Body {
			/** Anonymous Identification */
			adx_anonymousidentification: DevKit.Controls.String;
			/** Unique identifier for Contact associated with Multistep Form Session. */
			adx_contact: DevKit.Controls.Lookup;
			/** The index of the current step the user last visited. */
			adx_currentstepindex: DevKit.Controls.Integer;
			/** Type the name of the custom entity. */
			adx_name: DevKit.Controls.String;
			/** Primary Record Entity Primary Key Logical Name */
			adx_primaryrecordentitykeyname: DevKit.Controls.String;
			/** Primary Record Table name */
			adx_primaryrecordentitylogicalname: DevKit.Controls.String;
			/** Shows the ID of the primary record created by the multistep form.  Used to retrieve the appropriate session record. */
			adx_primaryrecordid: DevKit.Controls.String;
			/** History of steps in JSON */
			adx_stephistory: DevKit.Controls.String;
			/** Unique identifier for User associated with Multistep Form Session. */
			adx_systemuser: DevKit.Controls.Lookup;
			/** User Host Address */
			adx_userhostaddress: DevKit.Controls.String;
			/** User Identity Name */
			adx_useridentityname: DevKit.Controls.String;
			/** Unique identifier for Web Form associated with Web Form Session. */
			mspp_webformid: DevKit.Controls.Lookup;
			/** Unique identifier for entity instances */
			mspp_webformstepid: DevKit.Controls.Lookup;
		}
	}
	export class FormInformation_Enhanced extends DevKit.IForm {
		/**
		* Information (Enhanced) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Information_Enhanced */
		Body: DevKit.FormInformation_Enhanced.Body;
	}
	export class adx_webformsessionApi {
		/**
		* DynamicsCrm.DevKit adx_webformsessionApi
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
		adx_anonymousidentification: string | null;
		/** Unique identifier for Contact associated with Multistep Form Session. */
		adx_contact: string | null;
		/** The index of the current step the user last visited. */
		adx_currentstepindex: number | null;
		/** Type the name of the custom entity. */
		adx_name: string | null;
		adx_primaryrecordentitykeyname: string | null;
		adx_primaryrecordentitylogicalname: string | null;
		/** Shows the ID of the primary record created by the multistep form.  Used to retrieve the appropriate session record. */
		adx_primaryrecordid: string | null;
		/** History of steps in JSON */
		adx_stephistory: string | null;
		/** Unique identifier for User associated with Multistep Form Session. */
		adx_systemuser: string | null;
		adx_userhostaddress: string | null;
		adx_useridentityname: string | null;
		/** Unique identifier for entity instances */
		adx_webformsessionId: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in the solution options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was updated. The date and time are displayed in the time zone selected in the solution options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier for Web Form associated with Web Form Session. */
		mspp_webformid: string | null;
		/** Unique identifier for entity instances */
		mspp_webformstepid: string | null;
		/** Shows the organization. */
		readonly OrganizationId: string | null;
		/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in the solution options. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Shows the status of the multistep form session. */
		statecode: OptionSet.adx_webformsession.statecode | null;
		/** Select the Multistep Form Session's status.
 */
		statuscode: OptionSet.adx_webformsession.statuscode | null;
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
			readonly adx_anonymousidentification: string;
			/** Unique identifier for Contact associated with Multistep Form Session. */
			readonly adx_contact: string;
			/** The index of the current step the user last visited. */
			readonly adx_currentstepindex: string;
			/** Type the name of the custom entity. */
			readonly adx_name: string;
			readonly adx_primaryrecordentitykeyname: string;
			readonly adx_primaryrecordentitylogicalname: string;
			/** Shows the ID of the primary record created by the multistep form.  Used to retrieve the appropriate session record. */
			readonly adx_primaryrecordid: string;
			/** History of steps in JSON */
			readonly adx_stephistory: string;
			/** Unique identifier for User associated with Multistep Form Session. */
			readonly adx_systemuser: string;
			readonly adx_userhostaddress: string;
			readonly adx_useridentityname: string;
			/** Unique identifier for entity instances */
			readonly adx_webformsessionId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in the solution options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was updated. The date and time are displayed in the time zone selected in the solution options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for Web Form associated with Web Form Session. */
			readonly mspp_webformid: string;
			/** Unique identifier for entity instances */
			readonly mspp_webformstepid: string;
			/** Shows the organization. */
			readonly OrganizationId: string;
			/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in the solution options. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Shows the status of the multistep form session. */
			readonly statecode: string;
			/** Select the Multistep Form Session's status.
 */
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
	namespace adx_webformsession {
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