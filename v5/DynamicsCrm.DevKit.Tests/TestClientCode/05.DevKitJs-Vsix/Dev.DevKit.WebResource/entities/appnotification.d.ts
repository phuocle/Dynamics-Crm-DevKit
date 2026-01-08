//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formappnotification_Information {
		interface Tabs {
		}
		interface Body {
			/** Body of the notification */
			Body: DevKit.Controls.String;
			/** Custom data for the notification that can be used by the notification card */
			Data: DevKit.Controls.String;
			/** IconType */
			IconType: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Priority of the notification */
			Priority: DevKit.Controls.OptionSet;
			/** Title for the notification */
			Title: DevKit.Controls.String;
			/** Type of toast behavior for the notification */
			ToastType: DevKit.Controls.OptionSet;
			/** After the specified number of seconds the notification will be deleted */
			TTLInSeconds: DevKit.Controls.Integer;
		}
	}
	export class Formappnotification_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form appnotification_Information */
		Body: DevKit.Formappnotification_Information.Body;
	}
	export class appnotificationApi {
		/**
		* DynamicsCrm.DevKit appnotificationApi
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
		/** This field is not used */
		AppModuleId: string | null;
		/** Unique identifier for entity instances */
		appnotificationId: string | null;
		/** Body of the notification */
		Body: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Custom data for the notification that can be used by the notification card */
		Data: string | null;
		IconType: OptionSet.appnotification.IconType | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Partitioning will be based on owner and it is recommended to specify this field for all operations for performance reason */
		PartitionId: string | null;
		/** Priority of the notification */
		Priority: OptionSet.appnotification.Priority | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Title for the notification */
		Title: string | null;
		/** Type of toast behavior for the notification */
		ToastType: OptionSet.appnotification.ToastType | null;
		/** After the specified number of seconds the notification will be deleted */
		TTLInSeconds: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** This field is not used */
			readonly AppModuleId: string;
			/** Unique identifier for entity instances */
			readonly appnotificationId: string;
			/** Body of the notification */
			readonly Body: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Custom data for the notification that can be used by the notification card */
			readonly Data: string;
			readonly IconType: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Partitioning will be based on owner and it is recommended to specify this field for all operations for performance reason */
			readonly PartitionId: string;
			/** Priority of the notification */
			readonly Priority: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Title for the notification */
			readonly Title: string;
			/** Type of toast behavior for the notification */
			readonly ToastType: string;
			/** After the specified number of seconds the notification will be deleted */
			readonly TTLInSeconds: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace appnotification {
		enum IconType {
			/** Custom = 100000005*/
			Custom = 100000005,
			/** Failure = 100000002*/
			Failure = 100000002,
			/** Info = 100000000*/
			Info = 100000000,
			/** Mention = 100000004*/
			Mention = 100000004,
			/** Success = 100000001*/
			Success = 100000001,
			/** Warning = 100000003*/
			Warning = 100000003
		}
		enum Priority {
			/** High = 200000001*/
			High = 200000001,
			/** Normal = 200000000*/
			Normal = 200000000
		}
		enum ToastType {
			/** Hidden = 200000001*/
			Hidden = 200000001,
			/** Timed = 200000000*/
			Timed = 200000000
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